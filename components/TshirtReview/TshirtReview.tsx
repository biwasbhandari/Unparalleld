import axios from "axios";
import { FC } from "react";
import useSWR from "swr";

import { Review } from "@/models/review";
import Rating from "../Rating/Rating";

const TshirtReview: FC<{ tshirtId: string }> = ({ tshirtId }) => {
  const fetchTshirtReviews = async () => {
    const { data } = await axios.get<Review[]>(
      `/api/tshirt-reviews/${tshirtId}`
    );
    return data;
  };

  const {
    data: tshirtReviews,
    error,
    isLoading,
  } = useSWR("/api/tshirt-reviews", fetchTshirtReviews);

  if (error) throw new Error("Cannot fetch data");
  if (typeof tshirtReviews === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  console.log(tshirtReviews);

  return (
    <>
      {tshirtReviews &&
        tshirtReviews.map((review) => (
          <div
            className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
            key={review._id}
          >
            <div className="font-semibold mb-2 flex">
              <p>{review.user.name}</p>
              <div className="ml-4 flex items-center text-tertiary-light text-lg">
                <Rating rating={review.userRating} />
              </div>
            </div>

            <p>{review.text}</p>
          </div>
        ))}
    </>
  );
};

export default TshirtReview;
