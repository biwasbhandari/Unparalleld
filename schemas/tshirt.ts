import { defineField } from "sanity";

const tshirtSize = [
  { title: "S", value: "s" },
  { title: "M", value: "m" },
  { title: "L", value: "l" },
  { title: "XL", value: "xl" },
];
const tShirt = {
  name: "tShirt",
  title: "T-shirt",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 characters"),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 characters"),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "images",
      title: "Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(2).error("Minimum of 2 images required"),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
    defineField({
      name: "size",
      title: "Tshirt Size",
      type: "string",
      options: {
        list: tshirtSize,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "s",
    }),

    defineField({
      name: "specialMessage",
      title: "Special Message",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Thank you for purchasing the product",
    }),

    defineField({
      name: "isBooked",
      title: "Is Booked",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "review",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    }),
  ],
};

export default tShirt;
