// app/news/[slug]/page.jsx

import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from '../../../styles/partials/_blogstyle.scss';
import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const query = `*[_type == "news"]{ slug }`;
  const posts = await client.fetch(query);
  return posts.map(post => ({ slug: post.slug.current }));
}

async function getNewsData(slug) {
  const query = `*[_type == "news" && slug.current == $slug][0]{
    title,
    image{
      asset->{
        url
      },
      alt
    },
    content,
    categories[]->{
      name
    }
  }`;
  return await client.fetch(query, { slug });
}

export default async function NewsArticle({ params }) {
  const post = await getNewsData(params.slug);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '2rem auto',
      paddingTop: '70px', // Adjust based on navbar height
    }}>
      <div style={{
        width: '100%',
        marginBottom: '2rem',
      }}>
        <Image
          src={post.image?.asset?.url}
          alt={post.image?.alt || 'News image'}
          width={1200}
          height={400}
          layout="responsive"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        gap: '2rem',
      }}>
        <div style={{ flex: 3 }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '1rem 0',
          }}>{post.title}</h1>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}>
            {post.categories && post.categories.length > 0 && post.categories.map((category, index) => (
              <span key={index} style={{
                backgroundColor: '#f0f0f0', // Adjust as needed
                color: '#333', // Adjust as needed
                padding: '0.3rem 0.7rem',
                borderRadius: '5px',
                fontSize: '0.9rem',
              }}>
                {category.name}
              </span>
            ))}
          </div>
          <div style={{
            lineHeight: '1.6',
            fontSize: '1.1rem',
          }}>
            <PortableText value={post.content} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            marginBottom: '2rem',
          }}>
            <input style={{
              flex: 1,
              padding: '0.5rem',
              border: '1px solid #ccc', // Adjust as needed
              borderRadius: '5px 0 0 5px',
            }} />
            <button style={{
              padding: '0.5rem',
              border: '1px solid #ccc', // Adjust as needed
              borderLeft: 'none',
              backgroundColor: '#333', // Adjust as needed
              color: '#fff', // Adjust as needed
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
            }}>Search</button>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              color: '#333', // Adjust as needed
            }}>Categories</h3>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#0070f3', // Adjust as needed
              }}>Category Link</a>
            </div>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              color: '#333', // Adjust as needed
            }}>Popular Blogs</h3>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
              }}>
                <img src="#" alt="Blog image" style={{
                  width: '80px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }} />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                  }}>Blog Title</h4>
                  <a href="#" style={{
                    color: '#0070f3', // Adjust as needed
                    fontSize: '0.9rem',
                  }}>Read Article</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}