import {blockContentType} from './schemaTypes/blockContentType'
import {categoryType} from './schemaTypes/categoryType'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import Testimonial from './schemas/testimonial'; 
import post from './schemas/blog'; 

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, Testimonial, post],
}
