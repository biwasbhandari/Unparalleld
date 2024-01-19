import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth";
import {
  // checkReviewExists,
  // createReview,
  getUserData,
  // updateReview,
} from "@/lib/apis";

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Authentication Required", { status: 500 });
  }

  const userId = session.user.id;

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error) {
    return new NextResponse("Unable to fetch", { status: 400 });
  }
}

// export async function POST(req: Request, res: Response) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return new NextResponse("Authentication Required", { status: 500 });
//   }

//   const { tshirtId, reviewText, ratingValue } = await req.json();

//   if (!tshirtId || !reviewText || !ratingValue) {
//     return new NextResponse("All fields are required", { status: 400 });
//   }

//   const userId = session.user.id;

//   try {
//     const alreadyExists = await checkReviewExists(userId, tshirtId);

//     let data;

//     if (alreadyExists) {
//       data = await updateReview({
//         reviewId: alreadyExists._id,
//         reviewText,
//         userRating: ratingValue,
//       });
//     } else {
//       data = await createReview({
//         tShirtId: tshirtId,
//         reviewText,
//         userId,
//         userRating: ratingValue,
//       });
//     }

//     return NextResponse.json(data, { status: 200, statusText: "Successful" });
//   } catch (error: any) {
//     console.log("Error Updating", error);
//     return new NextResponse("Unable to create review", { status: 400 });
//   }
// }
