// schemas/schema.js

import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType'; // If you're using categoryType
import { postType } from './schemaTypes/postType'; // If you're using postType
import { authorType } from './schemaTypes/authorType'; // If you're using authorType
import Testimonial from './schemas/testimonial'; 
import Blogs from './schemas/blogs-schema'; // Import the news schema
import blogCategories from './schemas/blogCategories'; // Import the blogCategories schema

export const schema = {
  types: [
    blockContentType,
    categoryType, 
    postType, 
    authorType,
    Testimonial,
    Blogs,
    blogCategories,
  ],
};
