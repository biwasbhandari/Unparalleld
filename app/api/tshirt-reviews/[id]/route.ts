import { getTshirtReviews } from "@/lib/apis";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const tshirtId = params.id;

  try {
    const tshirtReviews = await getTshirtReviews(tshirtId);

    return NextResponse.json(tshirtReviews, {
      status: 200,
      statusText: "Succesful",
    });
  } catch (error) {
    console.log("Getting Review Failed", error);
    return new NextResponse("Unable to fetch", { status: 400 });
  }
}
