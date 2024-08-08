// pages/blogs.js
"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchBlogs } from '../../sanity/lib/client';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link href={`/blogs/${blog.slug.current}`}>
              <a>
                {blog.mainImage && (
                  <img src={blog.mainImage.asset.url} alt={blog.mainImage.alt} />
                )}
                <h2>{blog.title}</h2>
                <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
