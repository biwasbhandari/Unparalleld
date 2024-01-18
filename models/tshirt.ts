type CoverImage = {
  url: string;
};
export type Image = {
  _key: string;
  url: string;
};
type Slug = {
  _type: string;
  current: string;
};
export type Tshirt = {
  _id: string;
  coverImage: CoverImage;
  description: string;
  discount: number;
  images: Image[];
  isBooked: boolean;
  isFeatured: boolean;
  name: string;
  price: number;
  slug: Slug;
  specailNote: string;
  size: string;
};

export type CreateOrdering = {
  user: string;
  tShirt: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfItems: number;
  male: number;
  female: number;
  totalPrice: number;
  discount: number;
};
