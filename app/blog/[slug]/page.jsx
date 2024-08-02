// app/blog/[slug]/page.jsx
import React from 'react';
import { fetchBlogs } from '../../../sanity/lib/client'; // Adjust path if necessary
import { urlFor } from '../../../sanity/lib/image'; // Adjust path if necessary
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map(blog => ({
    slug: blog.slug.current
  }));
}

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const blogs = await fetchBlogs();
  const blog = blogs.find(blog => blog.slug.current === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <Image
        src={urlFor(blog.mainImage).url()}
        alt={blog.title}
        width={800}
        height={500}
      />
      <div>
        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
        <span>{blog.categories.map(category => category.title).join(', ')}</span>
      </div>
      <PortableText value={blog.body} />
    </div>
  );
};

export default BlogPost;
