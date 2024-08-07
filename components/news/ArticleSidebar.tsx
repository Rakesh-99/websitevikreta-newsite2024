// Styles
import styles from "@/styles/pages/News.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Sanity
import {urlFor}  from "../../sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

// Images

const ArticleSidebar = ({ latestNewsData }: { latestNewsData: any }) => {
   return (
      <aside className={styles.articleAside}>
         {/* Recent Posts */}
         <div className={`${styles.articleAsideCard} mt-12 lg:mt-0`}>
            <h3 className="heading heading-5">Recent Posts</h3>

            <ul className={styles.relatedList}>
               {latestNewsData &&
                  latestNewsData.map((news: any) => (
                     <>
                        <li>
                           {/* Image */}
                           {news.imageURL && (
                              <Image
                                 src={news.imageURL}
                                 alt={news.image.alt}
                                 width={1200}
                                 height={720}
                              />
                           )}
                           {/* Content */}
                           <div>
                              <Link href={news.slug.current}>
                                 <h5 className={styles.relatedListHeading}>
                                    {news.title}
                                 </h5>
                              </Link>
                              <p></p>
                           </div>
                        </li>
                        <li className={styles.separator}></li>
                     </>
                  ))}
            </ul>
         </div>
      </aside>
   );
};

export default ArticleSidebar;
