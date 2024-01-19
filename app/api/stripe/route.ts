import Stripe from "stripe";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getTshirt } from "@/lib/apis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

type RequestData = {
  checkinDate: string;
  checkoutDate: string;
  male: number;
  female: number;

  tShirtSlug: string;
};

export async function POST(req: Request, res: Response) {
  const { checkinDate, male, checkoutDate, female, tShirtSlug }: RequestData =
    await req.json();

  if (!checkinDate || !checkoutDate || !male || !tShirtSlug) {
    return new NextResponse("Please all fields are required", { status: 400 });
  }

  const origin = req.headers.get("origin");

  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication required", { status: 400 });
  }

  const userId = session.user.id;
  const formattedCheckoutDate = checkoutDate.split("T")[0];
  const formattedCheckinDate = checkinDate.split("T")[0];

  try {
    const tshirt = await getTshirt(tShirtSlug);
    const discountPrice = tshirt.price - (tshirt.price / 100) * tshirt.discount;
    const totalPrice = discountPrice * (male + female);

    const stripeSession = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: tshirt.name,
              images: tshirt.images.map((image) => image.url),
            },
            unit_amount: parseInt((totalPrice * 100).toString()),
          },
        },
      ],

      payment_method_types: ["card"],
      success_url: `${origin}/users/${userId}`,
      metadata: {
        male,
        checkinDate: formattedCheckinDate,
        checkoutDate: formattedCheckoutDate,
        female,
        tShirt: tshirt._id,
        user: userId,
        discount: tshirt.discount,
        totalPrice,
      },
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: "Payment session created",
    });
  } catch (error: any) {
    console.log("Payment falied", error);
    return new NextResponse(error, { status: 500 });
  }
}
