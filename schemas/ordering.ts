import { defineField } from "sanity";

const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tShirt",
      title: "TShirt",
      type: "reference",
      to: [{ type: "tShirt" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "numberOfPieces",
      title: "Number Of pieces",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
};

export default order;
