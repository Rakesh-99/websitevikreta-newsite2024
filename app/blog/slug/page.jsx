// app/news/[slug]/page.jsx

import { client } from '../../lib/sanity'; // Adjust the path as needed
import { groq } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const query = `*[_type == "news"]{ slug }`;
  const posts = await client.fetch(query);
  return posts.map(post => ({ slug: post.slug.current }));
}

// Function to fetch data for the specific page
export async function fetchData(slug) {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    title,
    url,
    date,
    description,
    image {
      asset -> {
        url
      },
      alt
    },
    content,
    categories[]-> {
      title
    }
  }`;

  return await client.fetch(query, { slug });
}

const BlogPage = async ({ params }) => {
  const post = await fetchData(params.slug);

  if (!post) {
    return notFound(); // Handles 404 page
  }

  console.log(post); // Debugging to ensure data is fetched correctly

  return (
    <div style={{ maxWidth: '1200px', margin: '2rem auto', paddingTop: '70px' }}>
      {/* Main Image */}
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        {post.image?.asset?.url ? (
          <Image
            src={post.image.asset.url}
            alt={post.image.alt || 'Image'}
            layout="responsive"
            width={1200}
            height={300}
            style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>

      {/* Blog Title */}
      <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', fontWeight: 'bold' }}>
        {post.title}
      </h1>

      {/* Categories */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {post.categories && post.categories.length > 0 ? (
          post.categories.map((category, i) => (
            <span
              key={i}
              style={{ backgroundColor: 'black', color: 'yellow', padding: '0.3rem 0.7rem', borderRadius: '5px', fontSize: '0.9rem' }}
            >
              {category.title}
            </span>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>

      {/* Blog Content */}
      <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        {post.content && post.content.length > 0 ? (
          post.content.map((block, i) => (
            <p key={i}>{block.children[0].text}</p> // Adjust based on your block structure
          ))
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;