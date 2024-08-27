import { defineType, defineField } from "sanity";

export default defineType({
  name: "gig",
  title: "Gig",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
    }),
    // New fields for the page details
    defineField({
      name: "aboutThisGig",
      title: "About This Gig",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "fileFormat",
      title: "File Format",
      type: "string",
    }),
    defineField({
      name: "comparePackages",
      title: "Compare Packages",
      type: "object",
      fields: [
        defineField({
          name: "basic",
          title: "Basic Package",
          type: "object",
          fields: [
            { name: "price", title: "Price", type: "string" },
            {
              name: "about",
              title: "About",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "slowDeliveryTime",
              title: "Slow Delivery Time",
              type: "string",
            },
            {
              name: "fastDeliveryTime",
              title: "Fast Delivery Time",
              type: "string",
            },
            {
              name: "additionalCost",
              title: "Additional Cost for Faster Delivery",
              type: "string",
            },
          ],
        }),
        defineField({
          name: "standard",
          title: "Standard Package",
          type: "object",
          fields: [
            { name: "price", title: "Price", type: "string" },
            {
              name: "about",
              title: "About",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "slowDeliveryTime",
              title: "Slow Delivery Time",
              type: "string",
            },
            {
              name: "fastDeliveryTime",
              title: "Fast Delivery Time",
              type: "string",
            },
            {
              name: "additionalCost",
              title: "Additional Cost for Faster Delivery",
              type: "string",
            },
          ],
        }),
        defineField({
          name: "premium",
          title: "Premium Package",
          type: "object",
          fields: [
            { name: "price", title: "Price", type: "string" },
            {
              name: "about",
              title: "About",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "slowDeliveryTime",
              title: "Slow Delivery Time",
              type: "string",
            },
            {
              name: "fastDeliveryTime",
              title: "Fast Delivery Time",
              type: "string",
            },
            {
              name: "additionalCost",
              title: "Additional Cost for Faster Delivery",
              type: "string",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "reviews",
      title: "What People Say About This Gig",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
