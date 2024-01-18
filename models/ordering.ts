export type Ordering = {
  _id: string;
  tShirt: {
    _id: string;
    name: string;
    slug: { current: string };
    price: number;
  };
  checkinDate: string;
  checkoutDate: string;
  numberOfItems: number;
  male: number;
  female: number;
  totalPrice: number;
  discount: number;
};
