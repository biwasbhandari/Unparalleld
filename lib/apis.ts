import { Tshirt } from "@/app/models/tshirt";
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
