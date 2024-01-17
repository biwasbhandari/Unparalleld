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

export const getTshirtsQuery = groq`*[_type == 'tShirt']{
    _id,
    description,
    discount,
    images,
    name,
    price,
    slug,
    coverImage,
    size,
    isBooked,
    isFeatured,
}`;

export const getTshirt = groq`*[_type == "tShirt" && slug.current == $slug][0]{
    _id,
    name,
    coverImage,
    description,
    discount,
    images,
    isBooked,
    isFeatured,
    size,
    price,
    slug,
    specialMessage,
}`;
