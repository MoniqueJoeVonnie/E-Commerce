import Stripe from "stripe";

function getStripeClient() {
  const secretKey =
    process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is missing from the server environment."
    );
  }

  return new Stripe(secretKey);
}

export default async function handler(
  request,
  response
) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");

    return response.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const sessionId =
      request.query?.session_id;

    if (
      !sessionId ||
      typeof sessionId !== "string"
    ) {
      return response.status(400).json({
        error:
          "A Stripe Checkout Session ID is required.",
      });
    }

    const stripe = getStripeClient();

    const session =
      await stripe.checkout.sessions.retrieve(
        sessionId,
        {
          expand: [
            "line_items",
            "line_items.data.price.product",
          ],
        }
      );

    return response.status(200).json({
      id: session.id,
      status: session.status,
      paymentStatus:
        session.payment_status,
      customerEmail:
        session.customer_details?.email ||
        session.customer_email ||
        "",
      customerName:
        session.customer_details?.name ||
        "",
      amountSubtotal:
        session.amount_subtotal || 0,
      amountTotal:
        session.amount_total || 0,
        amountShipping:
          session.total_details?.amount_shipping ||
          session.shipping_cost?.amount_total ||
          0,

        amountTax:
          session.total_details?.amount_tax || 0,
      shippingDetails: {
        name:
          session.shipping_details?.name ||
          session.customer_details?.name ||
          "",

        address:
          session.shipping_details?.address
            ? {
                line1:
                  session.shipping_details.address
                    .line1 || "",

                line2:
                  session.shipping_details.address
                    .line2 || "",

                city:
                  session.shipping_details.address
                    .city || "",

                state:
                  session.shipping_details.address
                    .state || "",

                postalCode:
                  session.shipping_details.address
                    .postal_code || "",

                country:
                  session.shipping_details.address
                    .country || "",
              }
            : null,
      },    
      currency:
        session.currency || "usd",
      paymentIntent:
        typeof session.payment_intent ===
        "string"
          ? session.payment_intent
          : session.payment_intent?.id ||
            "",
      items:
        session.line_items?.data?.map(
          (lineItem) => ({
            id: lineItem.id,
            name:
              lineItem.description ||
              "Hey Jackson! Fashion Item",
            quantity:
              lineItem.quantity || 1,
            amountSubtotal:
              lineItem.amount_subtotal ||
              0,
            amountTotal:
              lineItem.amount_total || 0,
          })
        ) || [],
    });
  } catch (error) {
    console.error(
      "Unable to retrieve Stripe Checkout Session:",
      error
    );

    return response.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Unable to verify the Stripe payment.",
    });
  }
}