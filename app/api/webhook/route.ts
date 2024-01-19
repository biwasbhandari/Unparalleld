import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createOrdering, updateTShirt } from "@/lib/apis";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  // load our event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;
      const {
        metadata: {
          // @ts-ignore
          male,
          // @ts-ignore
          checkinDate,
          // @ts-ignore
          checkoutDate,
          // @ts-ignore
          female,
          // @ts-ignore
          tShirt,
          // @ts-ignore
          numberOfItems,
          // @ts-ignore
          user,
          // @ts-ignore
          discount,
          // @ts-ignore
          totalPrice,
        },
      } = session;
      console.log("SESSION", session);

      await createOrdering({
        male: Number(male),
        checkinDate,
        checkoutDate,
        female: Number(female),
        tShirt,
        numberOfItems: Number(numberOfItems),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      //   Update Tshirt
      await updateTShirt(tShirt);

      return NextResponse.json("Order successful", {
        status: 200,
        statusText: "Order Successful",
      });

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json("Event Received", {
    status: 200,
    statusText: "Event Received",
  });
}
