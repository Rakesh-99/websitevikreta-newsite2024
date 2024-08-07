import { defineType, defineField } from 'sanity';

const blogCategories = defineType({
  name: 'blogCategories',
  title: 'Blog Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

export default blogCategories;
