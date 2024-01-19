import { CreateReviewDto, Review } from "./../models/review";
import axios from "axios";

import { CreateOrdering, Tshirt } from "@/models/tshirt";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
import { Ordering } from "@/models/ordering";
import { UpdateReviewDto } from "@/models/review";

export async function getFeaturedTshirt() {
  const result = await sanityClient.fetch<Tshirt>(
    queries.getFeaturedTshirtQuery,
    {},
    { cache: "no-cache" }
  );

  return result;
}

export async function getTshirts() {
  const result = await sanityClient.fetch<Tshirt[]>(
    queries.getTshirtsQuery,
    {},
    { cache: "no-cache" }
  );
  return result;
}

export async function getTshirt(slug: string) {
  const result = await sanityClient.fetch<Tshirt>(
    queries.getTshirt,
    { slug },
    { cache: "no-cache" }
  );

  return result;
}

export const createOrdering = async ({
  male,
  checkinDate,
  checkoutDate,
  female,
  discount,
  tShirt,

  totalPrice,
  user,
}: CreateOrdering) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "ordering",
          user: { _type: "reference", _ref: user },
          tShirt: { _type: "reference", _ref: tShirt },
          checkinDate,
          checkoutDate,
          male,
          female,
          totalPrice,
          discount,
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export const updateTShirt = async (tShirtId: string) => {
  const mutation = {
    mutations: [
      {
        patch: {
          id: tShirtId,
          set: {
            isBooked: true,
          },
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );
  return data;
};

export async function getUserOrderings(userId: string) {
  const result = await sanityClient.fetch<Ordering[]>(
    queries.getUserOrderingsQuery,
    {
      userId,
    },
    { cache: "no-cache" }
  );

  return result;
}

export async function getUserData(userId: string) {
  const result = await sanityClient.fetch(
    queries.getUserDataQuery,
    { userId },
    { cache: "no-cache" }
  );

  return result;
}

export async function checkReviewExists(
  userId: string,
  tShirtId: string
): Promise<null | { _id: string }> {
  const query = `*[_type == 'review' && user._ref == $userId && tShirt._ref == $tShirtId][0] {
    _id
  }`;

  const params = {
    userId,
    tShirtId,
  };

  const result = await sanityClient.fetch(query, params);

  return result ? result : null;
}

export const updateReview = async ({
  reviewId,
  reviewText,
  userRating,
}: UpdateReviewDto) => {
  const mutation = {
    mutations: [
      {
        patch: {
          id: reviewId,
          set: {
            text: reviewText,
            userRating,
          },
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export const createReview = async ({
  tShirtId,
  reviewText,
  userId,
  userRating,
}: CreateReviewDto) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "review",
          user: {
            _type: "reference",
            _ref: userId,
          },
          hotelRoom: {
            _type: "reference",
            _ref: tShirtId,
          },
          userRating,
          text: reviewText,
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export async function getTshirtReviews(tshirtId: string) {
  const result = await sanityClient.fetch<Review[]>(
    queries.getTshirtReviewsQuery,
    {
      tshirtId,
    },
    { cache: "no-cache" }
  );

  return result;
}
