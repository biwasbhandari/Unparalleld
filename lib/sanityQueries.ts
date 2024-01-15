import { groq } from "next-sanity";
export const getFeaturedTshirtQuery = groq`*[_type == "tShirt" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage
}`;
