// schemas/schema.js

<<<<<<< HEAD
import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType'; // If you're using categoryType
import { postType } from './schemaTypes/postType'; // If you're using postType
import { authorType } from './schemaTypes/authorType'; // If you're using authorType
import Testimonial from './schemas/testimonial'; 
import Blogs from './schemas/blogs-schema'; // Import the news schema
import blogCategories from './schemas/blogCategories'; // Import the blogCategories schema
=======
import { blockContentType } from "./schemaTypes/blockContentType";
import { categoryType } from "./schemaTypes/categoryType"; // If you're using categoryType
import { postType } from "./schemaTypes/postType"; // If you're using postType
import { authorType } from "./schemaTypes/authorType"; // If you're using authorType
import Testimonial from "./schemas/testimonial";
import news from "./schemas/news"; // Import the news schema
import blogCategories from "./schemas/blogCategories"; // Import the blogCategories schema
import client from "./schemas/clients/client-schema";
import careers from "./schemas/careers-schema";
>>>>>>> 56275c68ffd0d6ea85642bc83a3820fb1f9eea40

export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    Testimonial,
    Blogs,
    blogCategories,
    client,
    careers,
  ],
};
