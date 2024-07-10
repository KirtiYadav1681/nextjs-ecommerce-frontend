import { mongooseConnect } from "@/lib/mongoose";
const stripe = require("stripe")(process.env.STRIPE_SK);
import { buffer } from "micro";
import { Order } from "@/models/Order";

const endpointSecret = "secret";

export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers["stripe-signature"];

  let event = new Event();
  try {
    event = stripe.wehbooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  // Handle event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status == "paid";
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, { paid: true });
      }
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).send("ok");
}

export const config = { api: { bodyParser: false } };
