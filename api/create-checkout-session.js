import Stripe from "stripe";

function getStripeClient() {
  const secretKey =
    process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is missing from the server environment."
    );
  }

  if (!secretKey.startsWith("sk_test_")) {
    throw new Error(
      "STRIPE_SECRET_KEY is not a Stripe test secret key."
    );
  }

  return new Stripe(secretKey);
}

function parsePrice(value) {
  const amount =
    typeof value === "number"
      ? value
      : Number(
          String(value ?? 0)
            .replace("$", "")
            .replace(",", "")
        );

  return Number.isFinite(amount)
    ? Math.round(amount * 100)
    : 0;
}
export default async function handler(
  request,
  response
) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const stripe = getStripeClient();

    const { items } = request.body ?? {};

    if (!Array.isArray(items) || items.length === 0) {
      return response.status(400).json({
        error: "Your cart is empty.",
      });
    }

    const lineItems = items.map((item) => {
      const unitAmount = parsePrice(item.price);

      if (unitAmount < 50) {
        throw new Error(
          `Invalid price for ${item.name || "item"}.`
        );
      }

      return {
        quantity: Math.max(
          1,
          Number(item.quantity) || 1
        ),

        price_data: {
          currency: "usd",

          unit_amount: unitAmount,

          product_data: {
            name:
              item.name ||
              "Hey Jackson! Fashion Item",

            ...(
              [item.color, item.size]
                .filter(Boolean)
                .join(" • ")
                ? {
                    description: [item.color, item.size]
                      .filter(Boolean)
                      .join(" • "),
                  }
                : {}
            ),
          },
        },
      };
    });

    const subtotalInCents = lineItems.reduce(
      (total, lineItem) => {
        return (
          total +
          lineItem.price_data.unit_amount *
            lineItem.quantity
        );
      },
      0
    );

    const shippingAmountInCents =
      subtotalInCents >= 5000 ? 0 : 699;

    const origin =
      request.headers.origin ||
      "http://localhost:5173";

    const session =
      await stripe.checkout.sessions.create({
        line_items: lineItems,
        automatic_tax: {
          enabled: true,
        },

        shipping_address_collection: {
          allowed_countries: ["US"],
        },

        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",

              fixed_amount: {
                amount: shippingAmountInCents,
                currency: "usd",
              },

              display_name:
                shippingAmountInCents === 0
                  ? "Free Standard Shipping"
                  : "Standard Shipping",

              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 5,
                },

                maximum: {
                  unit: "business_day",
                  value: 8,
                },
              },

              tax_behavior: "exclusive",

              tax_code: "txcd_92010001",
            },
          },
        ],

        mode: "payment",

        line_items: lineItems,

        success_url:
          `${origin}/checkout/confirmation/stripe?session_id={CHECKOUT_SESSION_ID}`,

        cancel_url:
          `${origin}/checkout/review?payment=cancelled`,

        billing_address_collection: "auto",

        allow_promotion_codes: true,

        metadata: {
          store: "Hey Jackson! Fashion",
        },
      });

    return response.status(200).json({
      url: session.url,
    });
  } catch (error) {
    console.error(
      "Stripe Checkout error:",
      error
    );

    return response.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Unable to create checkout session.",
    });
  }
}