// sanity/schemas/gig.js
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Read More Link',
      type: 'url',
    }),
  ],
});
