import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function fetchTestimonials() {
  const query = '*[_type == "testimonial"]';
  const testimonials = await client.fetch(query);
  return testimonials;
}

export async function fetchBlogs() { // changed from fetchPosts to fetchBlogs
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    "authorName": author->name,
    categories[]->{title}
  }`;
  const blogs = await client.fetch(query);
  return blogs;
}
