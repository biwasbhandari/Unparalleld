type CoverImage = {
  url: string;
};
type Image = {
  _key: string;
  url: string;
  _ref: string;
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
  specailMessage: string;
  size: string;
};
