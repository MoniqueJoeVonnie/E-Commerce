import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import { useCart } from "../context/CartContext";

import "../styles/Checkout.css";
import "../styles/CheckoutReview.css";

function CheckoutReview() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [isRedirecting, setIsRedirecting] =
    useState(false);

  let shippingAddress = {};
  let savedPayment = {};

  try {
    shippingAddress = JSON.parse(
      localStorage.getItem(
        "heyJacksonShipping"
      ) || "{}"
    );
  } catch (error) {
    console.error(
      "Unable to load shipping information:",
      error
    );
  }

  try {
    savedPayment = JSON.parse(
      localStorage.getItem(
        "heyJacksonPayment"
      ) || "{}"
    );
  } catch (error) {
    console.error(
      "Unable to load payment information:",
      error
    );
  }

  function getNumericPrice(value) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : 0;
    }

    const parsedPrice = Number(
      String(value ?? 0)
        .replace("$", "")
        .replace(",", "")
    );

    return Number.isFinite(parsedPrice)
      ? parsedPrice
      : 0;
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(getNumericPrice(value));
  }

  const subtotal = cartItems.reduce(
    (totalAmount, item) => {
      const price = getNumericPrice(
        item.price
      );

      const quantity =
        Number(item.quantity) || 1;

      return (
        totalAmount + price * quantity
      );
    },
    0
  );

  const shipping =
    subtotal >= 50 || subtotal === 0
      ? 0
      : 6.99;

  const estimatedTax = subtotal * 0.06;

  const estimatedTotal =
    subtotal + shipping + estimatedTax;

  const paymentMethod = {
    cardType:
      savedPayment.cardType ||
      savedPayment.type ||
      "Credit or Debit Card",

    lastFour:
      savedPayment.lastFour ||
      savedPayment.cardNumber
        ?.replace(/\D/g, "")
        .slice(-4) ||
      "",
  };

  const fullName = [
    shippingAddress.firstName,
    shippingAddress.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  const cityStateZip = [
    shippingAddress.city,
    [
      shippingAddress.state,
      shippingAddress.zipCode ||
        shippingAddress.zip,
    ]
      .filter(Boolean)
      .join(" "),
  ]
    .filter(Boolean)
    .join(", ");

  async function handlePlaceOrder() {
    if (isRedirecting) {
      return;
    }

    if (
      !Array.isArray(cartItems) ||
      cartItems.length === 0
    ) {
      window.alert(
        "Your cart is empty. Please add an item before checking out."
      );

      navigate("/products");
      return;
    }

    setIsRedirecting(true);

    try {
      const response = await fetch(
        "/api/create-checkout-session",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            items: cartItems.map(
              (item) => ({
                id:
                  item.productId ||
                  item.id,

                name:
                  item.name ||
                  "Hey Jackson! Fashion Item",

                price: getNumericPrice(
                  item.price
                ),

                quantity:
                  Number(item.quantity) ||
                  1,

                color:
                  item.color ||
                  item.selectedColor ||
                  "",

                size:
                  item.size ||
                  item.selectedSize ||
                  "",

                image:
                  item.selectedImage ||
                  item.image ||
                  item.productImage ||
                  "",
              })
            ),

            shippingAddress: {
              firstName:
                shippingAddress.firstName ||
                "",

              lastName:
                shippingAddress.lastName ||
                "",

              email:
                shippingAddress.email ||
                "",

              phone:
                shippingAddress.phone ||
                "",

              address:
                shippingAddress.address ||
                shippingAddress.address1 ||
                "",

              address2:
                shippingAddress.apartment ||
                shippingAddress.address2 ||
                "",

              city:
                shippingAddress.city ||
                "",

              state:
                shippingAddress.state ||
                "",

              zipCode:
                shippingAddress.zipCode ||
                shippingAddress.zip ||
                "",
            },
          }),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The Stripe server returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to start Stripe Checkout."
        );
      }

      if (
        !data.url ||
        typeof data.url !== "string"
      ) {
        throw new Error(
          "Stripe did not return a Checkout URL."
        );
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error(
        "Unable to open Stripe Checkout:",
        error
      );

      window.alert(
        error instanceof Error
          ? error.message
          : "Secure checkout could not be opened. Please try again."
      );

      setIsRedirecting(false);
    }
  }

  return (
    <div className="checkout-layout">
      <CheckoutHeader />

      <main className="checkout-main">
        <button
          type="button"
          className="return-link"
          onClick={() =>
            navigate("/checkout/payment")
          }
        >
          ← Return to Payment
        </button>

        <div className="checkout-progress">
          <div className="progress-step completed">
            <div className="progress-circle">
              ✓
            </div>

            <div className="progress-label">
              <span>Shipping</span>
              <small>
                Delivery information
              </small>
            </div>
          </div>

          <div className="progress-line completed" />

          <div className="progress-step completed">
            <div className="progress-circle">
              ✓
            </div>

            <div className="progress-label">
              <span>Payment</span>
              <small>Payment details</small>
            </div>
          </div>

          <div className="progress-line completed" />

          <div className="progress-step active">
            <div className="progress-circle">
              3
            </div>

            <div className="progress-label">
              <span>Review</span>
              <small>
                Confirm your order
              </small>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <section className="checkout-card">
            <div className="review-header">
              <span>STEP 3 OF 3</span>

              <h1>Review Your Order</h1>

              <p>
                Please review your
                information before continuing
                to secure payment.
              </p>
            </div>

            <section className="review-section">
              <div className="review-section-header">
                <h2>
                  Shipping Information
                </h2>

                <button
                  type="button"
                  className="review-edit-button"
                  onClick={() =>
                    navigate("/checkout")
                  }
                >
                  Edit
                </button>
              </div>

              <div className="review-information">
                {fullName && (
                  <p>
                    <strong>{fullName}</strong>
                  </p>
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

                {shippingAddress.apartment && (
                  <p>
                    {
                      shippingAddress.apartment
                    }
                  </p>
                )}

                {shippingAddress.address2 && (
                  <p>
                    {shippingAddress.address2}
                  </p>
                )}

                {cityStateZip && (
                  <p>{cityStateZip}</p>
                )}

                {shippingAddress.email && (
                  <p>
                    {shippingAddress.email}
                  </p>
                )}

                {shippingAddress.phone && (
                  <p>
                    {shippingAddress.phone}
                  </p>
                )}
              </div>
            </section>

            <section className="review-section">
              <div className="review-section-header">
                <h2>
                  Payment Information
                </h2>

                <button
                  type="button"
                  className="review-edit-button"
                  onClick={() =>
                    navigate(
                      "/checkout/payment"
                    )
                  }
                >
                  Edit
                </button>
              </div>

              <div className="review-information">
                <p>
                  <strong>
                    {paymentMethod.cardType}
                  </strong>
                </p>

                {paymentMethod.lastFour && (
                  <p>
                    Card ending in{" "}
                    {
                      paymentMethod.lastFour
                    }
                  </p>
                )}

                <p>
                  Your final payment details
                  will be entered securely on
                  Stripe Checkout.
                </p>
              </div>
            </section>

            <section className="review-section">
              <div className="review-section-header">
                <h2>Items Ordered</h2>

                <button
                  type="button"
                  className="review-edit-button"
                  onClick={() =>
                    navigate("/cart")
                  }
                >
                  Edit Cart
                </button>
              </div>

              <div className="review-products">
                {cartItems.map(
                  (item, index) => {
                    const itemImage =
                      item.selectedImage ||
                      item.image ||
                      item.productImage ||
                      "";

                    const itemColor =
                      item.color ||
                      item.selectedColor ||
                      "";

                    const itemSize =
                      item.size ||
                      item.selectedSize ||
                      "";

                    const quantity =
                      Number(
                        item.quantity
                      ) || 1;

                    const itemTotal =
                      getNumericPrice(
                        item.price
                      ) * quantity;

                    return (
                      <article
                        className="review-product-card"
                        key={`${item.id}-${itemColor}-${itemSize}-${index}`}
                      >
                        {itemImage && (
                          <img
                            src={itemImage}
                            alt={
                              item.name ||
                              "Product"
                            }
                            className="review-product-image"
                          />
                        )}

                        <div className="review-product-details">
                          <h3>
                            {item.name}
                          </h3>

                          {itemColor && (
                            <p>
                              <strong>
                                Color:
                              </strong>{" "}
                              {itemColor}
                            </p>
                          )}

                          {itemSize && (
                            <p>
                              <strong>
                                Size:
                              </strong>{" "}
                              {itemSize}
                            </p>
                          )}

                          <p>
                            <strong>
                              Quantity:
                            </strong>{" "}
                            {quantity}
                          </p>
                        </div>

                        <strong className="review-product-price">
                          {formatCurrency(
                            itemTotal
                          )}
                        </strong>
                      </article>
                    );
                  }
                )}
              </div>
            </section>

            <div className="review-confirmation-note">
              <strong>
                Please review your
                information.
              </strong>

              <p>
                Clicking Place Order will
                send you to Stripe’s secure
                payment page. Your cart will
                not be cleared until payment
                is successfully confirmed.
              </p>
            </div>

            <div className="review-actions">
              <button
                type="button"
                className="review-back-button"
                onClick={() =>
                  navigate(
                    "/checkout/payment"
                  )
                }
                disabled={isRedirecting}
              >
                Back to Payment
              </button>

              <button
                type="button"
                className="place-order-button"
                onClick={handlePlaceOrder}
                disabled={
                  isRedirecting ||
                  cartItems.length === 0
                }
              >
                {isRedirecting
                  ? "Opening Secure Checkout..."
                  : "Place Order →"}
              </button>
            </div>
          </section>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                {formatCurrency(subtotal)}
              </span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>
                {shipping === 0
                  ? "Free"
                  : formatCurrency(
                      shipping
                    )}
              </span>
            </div>

            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>
                {formatCurrency(
                  estimatedTax
                )}
              </span>
            </div>

            <div className="summary-row summary-total">
              <strong>
                Estimated Total
              </strong>

              <strong>
                {formatCurrency(
                  estimatedTotal
                )}
              </strong>
            </div>

            <p className="checkout-secure-note">
              Secure payment will be
              completed through Stripe.
            </p>
          </aside>
        </div>
      </main>

      <CheckoutFooter />
    </div>
  );
}

export default CheckoutReview;