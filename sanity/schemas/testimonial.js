// schemas/testimonial.js
export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'User Name',
        type: 'string',
      },
      {
        name: 'userDes',
        title: 'User Description',
        type: 'string',
      },
      {
        name: 'review',
        title: 'Review',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
    ],
  };
  