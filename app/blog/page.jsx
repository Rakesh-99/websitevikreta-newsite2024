"use client"
import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../../sanity/lib/client'; // Ensure the correct path
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/image'; // Ensure the correct path

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blogs">
        {blogs.map(blog => (
          <div key={blog._id} className="blog">
            <Link href={`/blog/${blog.slug.current}`}>
              <div>
                <Image src={urlFor(blog.mainImage).url()} alt={blog.title} width={500} height={300} />
                <h2>{blog.title}</h2>
                <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                <p>{blog.categories.map(category => category.title).join(', ')}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
