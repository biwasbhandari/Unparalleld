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
    coverImage,
    description,
    colour,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    size,
}`;

export const getTshirt = groq`*[_type == "tShirt" && slug.current == $slug][0]{
    _id,
    coverImage,
    description,
    colour,
    discount,
    images,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    specialNote,
    size,
}`;

export const getUserOrderingsQuery = groq`*[_type == 'ordering' && user._ref == $userId] {
    _id,
    tShirt -> {
        _id,
        name,
        slug,
        price
    },
    checkinDate,
    checkoutDate,
    numberOfItems,
    male,
    female,
    totalPrice,
    discount
}`;

export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
    _id,
    name,
    email,
    isAdmin,
    about,
    _createdAt,
    image,
}`;

export const getTshirtReviewsQuery = groq`*[_type == "review" && tShirt._ref == $tshirtId] {
    _createdAt,
    _id,
    text,
    user -> {
        name
    },
    userRating
}`;
