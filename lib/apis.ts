import { Tshirt } from "@/models/tshirt";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
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
    {
      slug,
    },
    { cache: "no-cache" }
  );
  return result;
}
