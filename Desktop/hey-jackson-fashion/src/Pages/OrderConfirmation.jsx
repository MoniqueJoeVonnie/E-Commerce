import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import PageMeta from "../components/PageMeta";

import { useCart } from "../context/CartContext";

import "../styles/Checkout.css";
import "../styles/OrderConfirmation.css";

function OrderConfirmation() {
  const { orderId } = useParams();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { clearCart } = useCart();

  const [order, setOrder] = useState(null);

  const [orderNotFound, setOrderNotFound] =
    useState(false);

  const [verificationError, setVerificationError] =
    useState("");

  const stripeProcessingRef = useRef(false);

  const stripeSessionId =
    searchParams.get("session_id");

  /* =====================================
     LOAD OR CREATE THE COMPLETED ORDER
  ===================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    async function loadOrder() {
      /*
       * A successful Stripe payment returns to:
       *
       * /checkout/confirmation/stripe
       * ?session_id=cs_test_...
       */
      if (orderId === "stripe") {
        await processStripeOrder();
        return;
      }

      loadSavedOrder();
    }

    async function processStripeOrder() {
      if (stripeProcessingRef.current) {
        return;
      }

      stripeProcessingRef.current = true;

      if (!stripeSessionId) {
        setVerificationError(
          "The Stripe Checkout Session ID is missing."
        );

        return;
      }

      try {
        const savedOrders = readSavedOrders();

        /*
         * Prevent page refreshes from creating
         * duplicate orders from the same Stripe
         * Checkout Session.
         */
        const existingStripeOrder =
          savedOrders.find(
            (savedOrder) =>
              savedOrder.stripeSessionId ===
              stripeSessionId
          );

        if (existingStripeOrder) {
          setOrder(existingStripeOrder);
          setOrderNotFound(false);

          navigate(
            `/checkout/confirmation/${existingStripeOrder.id}`,
            {
              replace: true,
            }
          );

          return;
        }

        const response = await fetch(
          `/api/get-checkout-session?session_id=${encodeURIComponent(
            stripeSessionId
          )}`
        );

        const stripeSession =
          await response.json();

        if (!response.ok) {
          throw new Error(
            stripeSession.error ||
              "The Stripe payment could not be verified."
          );
        }

        if (
          stripeSession.paymentStatus !==
          "paid"
        ) {
          throw new Error(
            "Stripe has not marked this payment as paid."
          );
        }

        const savedCart = readStorageArray(
          "heyJacksonCart"
        );

        const shippingAddress =
          readStorageObject(
            "heyJacksonShipping"
          );

        const savedPayment =
          readStorageObject(
            "heyJacksonPayment"
          );

        const completedOrder =
          createStripeOrder({
            stripeSession,
            stripeSessionId,
            savedCart,
            shippingAddress,
            savedPayment,
          });

        saveCompletedOrder(
          completedOrder,
          savedOrders
        );

        /*
         * Clear the cart only after Stripe
         * confirms the payment was successful.
         */
        clearCart({
          showNotification: false,
        });

        setOrder(completedOrder);
        setOrderNotFound(false);

        navigate(
          `/checkout/confirmation/${completedOrder.id}`,
          {
            replace: true,
          }
        );
      } catch (error) {
        console.error(
          "Unable to complete Stripe order:",
          error
        );

        setVerificationError(
          error instanceof Error
            ? error.message
            : "The completed Stripe payment could not be verified."
        );
      }
    }

    function loadSavedOrder() {
      try {
        const savedOrders =
          readSavedOrders();

        const matchingOrder =
          savedOrders.find(
            (savedOrder) =>
              savedOrder.id === orderId
          );

        if (matchingOrder) {
          setOrder(matchingOrder);
          setOrderNotFound(false);
          return;
        }

        const latestOrder =
          readStorageValue(
            "heyJacksonLatestOrder",
            null
          );

        if (latestOrder?.id === orderId) {
          setOrder(latestOrder);
          setOrderNotFound(false);
          return;
        }

        setOrderNotFound(true);
      } catch (error) {
        console.error(
          "Unable to load order confirmation:",
          error
        );

        setOrderNotFound(true);
      }
    }

    loadOrder();
  }, [
    clearCart,
    navigate,
    orderId,
    stripeSessionId,
  ]);

  /* =====================================
     ORDER CONFETTI ANIMATION
  ===================================== */


  useEffect(() => {
    if (!order?.id) {
      return undefined;
    }

    const colors = [
      "#ff4fa3",
      "#5b2c6f",
      "#1ba8ad",
      "#ffd84d",
      "#ffffff",
    ];

    let confettiContainer = null;
    let startTimer = null;
    let cleanupTimer = null;

    startTimer = window.setTimeout(() => {
      confettiContainer =
        document.createElement("div");

      confettiContainer.className =
        "order-confetti-container";

      confettiContainer.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.appendChild(
        confettiContainer
      );

      for (
        let index = 0;
        index < 170;
        index += 1
      ) {
        const piece =
          document.createElement("span");

        const width =
          Math.floor(Math.random() * 8) + 7;

        const height =
          Math.floor(Math.random() * 7) + 5;

        const horizontalDrift =
          Math.floor(Math.random() * 240) -
          120;

        piece.style.left =
          `${Math.random() * 100}%`;

        piece.style.width = `${width}px`;
        piece.style.height = `${height}px`;

        piece.style.backgroundColor =
          colors[
            Math.floor(
              Math.random() * colors.length
            )
          ];

        piece.style.animationDuration =
          `${Math.random() * 2.3 + 2.8}s`;

        piece.style.animationDelay =
          `${Math.random() * 0.9}s`;

        piece.style.setProperty(
          "--confetti-drift",
          `${horizontalDrift}px`
        );

        piece.style.setProperty(
          "--confetti-rotation",
          `${Math.floor(
            Math.random() * 900 + 540
          )}deg`
        );

        if (index % 4 === 0) {
          piece.classList.add(
            "order-confetti-piece-circle"
          );
        }

        confettiContainer.appendChild(piece);
      }

      cleanupTimer = window.setTimeout(() => {
        confettiContainer?.remove();
        confettiContainer = null;
      }, 6500);
    }, 500);

    return () => {
      if (startTimer) {
        window.clearTimeout(startTimer);
      }

      if (cleanupTimer) {
        window.clearTimeout(cleanupTimer);
      }

      confettiContainer?.remove();
    };
  }, [order?.id]);

  /* =====================================
     ORDER HELPERS
  ===================================== */

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: (
        order?.currency || "usd"
      ).toUpperCase(),
    }).format(Number(amount) || 0);
  };

  const getItemPrice = (item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : Number(
            String(item.price || 0)
              .replace("$", "")
              .replace(",", "")
          );

    return (
      price *
      (Number(item.quantity) || 1)
    );
  };

  const getFullName = () => {
    const address =
      order?.shippingAddress || {};

    if (address.fullName) {
      return address.fullName;
    }

    return [
      address.firstName,
      address.lastName,
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getCityStateZip = () => {
    const address =
      order?.shippingAddress || {};

    return [
      address.city,
      [
        address.state,
        address.zipCode || address.zip,
      ]
        .filter(Boolean)
        .join(" "),
    ]
      .filter(Boolean)
      .join(", ");
  };

  /* =====================================
     PAYMENT VERIFICATION ERROR
  ===================================== */

  if (verificationError) {
    return (
      <div className="checkout-layout">
        <PageMeta
          title="Payment Verification Issue | Hey Jackson! Fashion"
          description="We were unable to verify the completed Stripe payment."
        />

        <CheckoutHeader />

        <main className="confirmation-page">
          <section className="confirmation-card confirmation-error">
            <h1>Payment Verification Issue</h1>

            <p>{verificationError}</p>

            <p>
              Your payment may still appear in
              Stripe. Please do not submit another
              payment until the transaction has
              been checked.
            </p>

            <div className="confirmation-actions">
              <Link
                to="/orders"
                className="confirmation-button secondary"
              >
                View Orders
              </Link>

              <Link
                to="/contact"
                className="confirmation-button primary"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </main>

        <CheckoutFooter />
      </div>
    );
  }

  /* =====================================
     ORDER NOT FOUND
  ===================================== */

  if (orderNotFound) {
    return (
      <div className="checkout-layout">
        <PageMeta
          title="Order Not Found | Hey Jackson! Fashion"
          description="The requested Hey Jackson! Fashion order confirmation could not be found."
        />

        <CheckoutHeader />

        <main className="confirmation-page">
          <section className="confirmation-card confirmation-error">
            <h1>Order Not Found</h1>

            <p>
              We could not locate this order
              confirmation.
            </p>

            <div className="confirmation-actions">
              <Link
                to="/orders"
                className="confirmation-button secondary"
              >
                View Orders
              </Link>

              <Link
                to="/products"
                className="confirmation-button primary"
              >
                Continue Shopping
              </Link>
            </div>
          </section>
        </main>

        <CheckoutFooter />
      </div>
    );
  }

  /* =====================================
     LOADING / VERIFYING STRIPE
  ===================================== */

  if (!order) {
    return (
      <div className="checkout-layout">
        <PageMeta
          title="Verifying Payment | Hey Jackson! Fashion"
          description="Your secure Stripe payment is being verified."
        />

        <CheckoutHeader />

        <main className="confirmation-page">
          <section className="confirmation-card confirmation-heading">
            <div className="confirmation-checkmark">
              <svg
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                />

                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14 27l8 8 16-18"
                />
              </svg>
            </div>

            <p className="confirmation-status">
              Payment Received
            </p>

            <h1>Finalizing Your Order</h1>

            <p className="confirmation-message">
              Your secure payment is being
              verified. Please do not close this
              page.
            </p>
          </section>
        </main>

        <CheckoutFooter />
      </div>
    );
  }

  const shippingAddress =
    order.shippingAddress || {};

  const paymentMethod =
    order.paymentMethod || {};

  /* =====================================
     ORDER CONFIRMATION PAGE
  ===================================== */

  return (
    <div className="checkout-layout">
      <PageMeta
        title={`Order Confirmed: ${
          order.orderNumber || order.id
        } | Hey Jackson! Fashion`}
        description="Your Hey Jackson! Fashion order has been confirmed."
      />

      <CheckoutHeader />

      <main className="confirmation-page">
        <div className="confirmation-progress">
          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Shipping</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Payment</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Review</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step active">
            <span>✓</span>
            <p>Confirmation</p>
          </div>
        </div>

        <section className="confirmation-card">
          <div className="confirmation-heading">
            <div className="confirmation-checkmark">
              <svg
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                />

                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14 27l8 8 16-18"
                />
              </svg>
            </div>

            <p className="confirmation-status">
              Payment Confirmed
            </p>

            <h1>Thank You for Your Order!</h1>

            <p className="confirmation-message">
              Your secure payment was completed
              successfully, and your order has
              been submitted.
            </p>
          </div>

          <section className="shipment-progress">
            <div className="shipment-progress-header">
              <span>Order Status</span>

              <strong>
                Preparing Your Order
              </strong>
            </div>

            <div className="shipment-timeline">
              <div className="shipment-step completed">
                <div className="shipment-dot">
                  ✓
                </div>

                <div>
                  <h3>Order Received</h3>

                  <p>
                    Your order was submitted
                    successfully.
                  </p>
                </div>
              </div>

              <div className="shipment-line completed" />

              <div className="shipment-step active">
                <div className="shipment-dot">
                  2
                </div>

                <div>
                  <h3>Preparing</h3>

                  <p>
                    Your items are being prepared
                    for shipment.
                  </p>
                </div>
              </div>

              <div className="shipment-line" />

              <div className="shipment-step">
                <div className="shipment-dot">
                  3
                </div>

                <div>
                  <h3>Shipped</h3>

                  <p>
                    Tracking information will
                    appear here.
                  </p>
                </div>
              </div>

              <div className="shipment-line" />

              <div className="shipment-step">
                <div className="shipment-dot">
                  4
                </div>

                <div>
                  <h3>Delivered</h3>

                  <p>
                    Estimated delivery:{" "}
                    {order.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="confirmation-overview">
            <article>
              <span>Order Number</span>

              <strong>
                {order.orderNumber || order.id}
              </strong>
            </article>

            <article>
              <span>Order Date</span>

              <strong>
                {order.formattedDate}

                {order.formattedTime
                  ? ` at ${order.formattedTime}`
                  : ""}
              </strong>
            </article>

            <article>
              <span>Estimated Delivery</span>

              <strong>
                {order.estimatedDelivery}
              </strong>
            </article>
          </div>

          <section className="confirmation-section">
            <h2>Items Ordered</h2>

            <div className="confirmation-items">
              {order.items?.map(
                (item, index) => {
                  const itemImage =
                    item.image ||
                    item.selectedImage ||
                    item.productImage ||
                    null;

                  return (
                    <article
                      className="confirmation-item"
                      key={`${item.id}-${index}`}
                    >
                      <div className="confirmation-item-image-wrapper">
                        {itemImage && (
                          <img
                            src={itemImage}
                            alt={item.name}
                            className="confirmation-item-image"
                            onError={(event) => {
                              event.currentTarget.style.display =
                                "none";

                              event.currentTarget
                                .nextElementSibling
                                ?.classList.remove(
                                  "hidden"
                                );
                            }}
                          />
                        )}

                        <div
                          className={`confirmation-image-placeholder ${
                            itemImage
                              ? "hidden"
                              : ""
                          }`}
                        >
                          Image unavailable
                        </div>
                      </div>

                      <div className="confirmation-item-info">
                        <h3>{item.name}</h3>

                        <p>
                          {[
                            item.color,
                            item.size,
                          ]
                            .filter(Boolean)
                            .join(" • ")}
                        </p>

                        <p>
                          Quantity:{" "}
                          {item.quantity || 1}
                        </p>
                      </div>

                      <strong className="confirmation-item-price">
                        {formatCurrency(
                          getItemPrice(item)
                        )}
                      </strong>
                    </article>
                  );
                }
              )}
            </div>
          </section>

          <div className="confirmation-details-grid">
            <section className="confirmation-detail">
              <h2>Shipping Address</h2>

              {getFullName() && (
                <p>{getFullName()}</p>
              )}

              {shippingAddress.address && (
                <p>
                  {shippingAddress.address}
                </p>
              )}

              {shippingAddress.address1 && (
                <p>
                  {shippingAddress.address1}
                </p>
              )}

              {shippingAddress.address2 && (
                <p>
                  {shippingAddress.address2}
                </p>
              )}

              {getCityStateZip() && (
                <p>{getCityStateZip()}</p>
              )}

              {shippingAddress.email && (
                <p>{shippingAddress.email}</p>
              )}

              {shippingAddress.phone && (
                <p>{shippingAddress.phone}</p>
              )}
            </section>

            <section className="confirmation-detail">
              <h2>Payment Method</h2>

              <p>
                {paymentMethod.cardType ||
                  "Stripe"}
              </p>

              {paymentMethod.lastFour && (
                <p>
                  Card ending in{" "}
                  {paymentMethod.lastFour}
                </p>
              )}
            </section>
          </div>

          <section className="confirmation-totals">
            <div>
              <span>Subtotal</span>

              <span>
                {formatCurrency(
                  order.subtotal
                )}
              </span>
            </div>

            <div>
              <span>Shipping</span>

              <span>
                {Number(order.shipping) === 0
                  ? "Free"
                  : formatCurrency(
                      order.shipping
                    )}
              </span>
            </div>

            <div>
              <span>Estimated Tax</span>

              <span>
                {formatCurrency(
                  order.tax ??
                    order.estimatedTax ??
                    0
                )}
              </span>
            </div>

            <div className="confirmation-total-row">
              <strong>Total</strong>

              <strong>
                {formatCurrency(order.total)}
              </strong>
            </div>
          </section>

          <p className="confirmation-email-note">
            A confirmation summary has been saved
            with your order history.
          </p>

          <div className="confirmation-actions">
            <button
              type="button"
              className="confirmation-button secondary"
              onClick={() => window.print()}
            >
              Print Receipt
            </button>

            <button
              type="button"
              className="confirmation-button secondary"
              onClick={() =>
                navigate("/orders")
              }
            >
              View Orders
            </button>

            <button
              type="button"
              className="confirmation-button primary"
              onClick={() =>
                navigate("/products")
              }
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </main>

      <CheckoutFooter />
    </div>
  );
}

/* =====================================
   STRIPE ORDER CREATION
===================================== */

function createStripeOrder({
  stripeSession,
  stripeSessionId,
  savedCart,
  shippingAddress,
  savedPayment,
}) {
  const today = new Date();

  const deliveryStart = new Date(today);
  deliveryStart.setDate(
    deliveryStart.getDate() + 5
  );

  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(
    deliveryEnd.getDate() + 8
  );

  const generatedOrderId =
    `HJF-${today
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

  const stripeItems =
    savedCart.length > 0
      ? savedCart.map((item) => ({
          ...item,
        }))
      : (stripeSession.items || []).map(
          (item, index) => {
            const quantity =
              Number(item.quantity) || 1;

            return {
              id:
                item.id ||
                `stripe-item-${index}`,

              name:
                item.name ||
                "Hey Jackson! Fashion Item",

              quantity,

              price:
                Number(
                  item.amountTotal || 0
                ) /
                100 /
                quantity,
            };
          }
        );

  const subtotal =
    Number(
      stripeSession.amountSubtotal || 0
    ) / 100;

  const shipping =
    Number(
      stripeSession.amountShipping || 0
    ) / 100;

  const tax =
    Number(
      stripeSession.amountTax || 0
    ) / 100;

  const total =
    Number(
      stripeSession.amountTotal || 0
    ) / 100;

  const stripeShippingAddress =
    stripeSession.shippingDetails
      ?.address || {};

  const resolvedShippingAddress = {
    ...shippingAddress,

    fullName:
      stripeSession.shippingDetails
        ?.name ||
      shippingAddress.fullName ||
      [
        shippingAddress.firstName,
        shippingAddress.lastName,
      ]
        .filter(Boolean)
        .join(" "),

    address:
      stripeShippingAddress.line1 ||
      shippingAddress.address ||
      shippingAddress.address1 ||
      "",

    address1:
      stripeShippingAddress.line1 ||
      shippingAddress.address1 ||
      shippingAddress.address ||
      "",

    address2:
      stripeShippingAddress.line2 ||
      shippingAddress.address2 ||
      shippingAddress.apartment ||
      "",

    city:
      stripeShippingAddress.city ||
      shippingAddress.city ||
      "",

    state:
      stripeShippingAddress.state ||
      shippingAddress.state ||
      "",

    zipCode:
      stripeShippingAddress.postalCode ||
      shippingAddress.zipCode ||
      shippingAddress.zip ||
      "",

    zip:
      stripeShippingAddress.postalCode ||
      shippingAddress.zip ||
      shippingAddress.zipCode ||
      "",

    email:
      shippingAddress.email ||
      stripeSession.customerEmail ||
      "",
  };

  return {
    id: generatedOrderId,
    orderNumber: generatedOrderId,

    stripeSessionId,

    stripePaymentIntent:
      stripeSession.paymentIntent || "",

    paymentProvider: "Stripe",

    paymentStatus:
      stripeSession.paymentStatus,

    submittedAt:
      today.toISOString(),

    formattedDate:
      today.toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      ),

    formattedTime:
      today.toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      ),

    estimatedDelivery:
      `${deliveryStart.toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
        }
      )} – ${deliveryEnd.toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
        }
      )}`,

    status: "Order Submitted",

    items: stripeItems,

    shippingAddress:
      resolvedShippingAddress,

    paymentMethod: {
      cardType:
        savedPayment.cardType ||
        "Stripe Checkout",

      lastFour:
        savedPayment.lastFour ||
        savedPayment.cardNumber
          ?.replace(/\D/g, "")
          .slice(-4) ||
        "",
    },

    subtotal,
    shipping,
    tax,
    total,

    currency:
      stripeSession.currency ||
      "usd",
  };
}

/* =====================================
   LOCAL STORAGE HELPERS
===================================== */

function readSavedOrders() {
  return readStorageArray(
    "heyJacksonOrders"
  );
}

function readStorageArray(key) {
  const value = readStorageValue(key, []);

  return Array.isArray(value)
    ? value
    : [];
}

function readStorageObject(key) {
  const value = readStorageValue(key, {});

  return value &&
    typeof value === "object" &&
    !Array.isArray(value)
    ? value
    : {};
}

function readStorageValue(
  key,
  fallbackValue
) {
  try {
    return JSON.parse(
      localStorage.getItem(key) ||
        JSON.stringify(fallbackValue)
    );
  } catch (error) {
    console.error(
      `Unable to read ${key}:`,
      error
    );

    return fallbackValue;
  }
}

function saveCompletedOrder(
  completedOrder,
  savedOrders
) {
  localStorage.setItem(
    "heyJacksonOrders",
    JSON.stringify([
      completedOrder,
      ...savedOrders,
    ])
  );

  localStorage.setItem(
    "heyJacksonLatestOrder",
    JSON.stringify(completedOrder)
  );
}

export default OrderConfirmation;