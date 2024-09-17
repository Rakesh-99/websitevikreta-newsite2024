"use client";
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState, useEffect } from "react";
import styles from "../../styles/partials/_Blogs.module.scss";
import Link from "next/link";
import Image from "next/image";
import Isotope from "isotope-layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Heart from "../../assets/Heart";
import ReplyAll from "../../assets/ReplyAll";


// Images

const SearchResults = ({ newsPageData }: { newsPageData: any }) => {
  const isotope = useRef<Isotope | null>();
  const [filterKey, setFilterKey] = useState("*");
  const [isCategoryActive, setIsCategoryActive] = useState("*");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, []);

  useEffect(() => {
    if (isCategoryActive !== "*") {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      return () => isotope.current?.destroy();
    }
  }, [isCategoryActive]);

  useEffect(() => {
    if (isCategoryActive !== "*") {
      if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
      else isotope.current?.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, isCategoryActive]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
    setIsCategoryActive(key);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Updated filtering logic
  const filteredNews = newsPageData.news.filter((news: any) =>
    // Check if query matches either category title or news title
    news.categories.some(
      (category: any) => category.title.toLowerCase() === query.toLowerCase()
    ) ||
    news.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={`${styles.filter} `}>
      <div className={`${styles.container} container`}>
        {filteredNews.length > 0 ? (
          <>
            {/* Show filtered news */}
            <div className={`${styles.categoryWiseSliders}`}>
              {filteredNews.slice(0, 10).map((news: any, i: any) => {
                return (
                  <div className={`${styles.articleCard}`} key={i}>
                    {/* Image */}
                    <div className={styles.articleImage}>
                      <Link
                        href={`${
                          news.btnIsRedirect
                            ? news.url
                            : `news/${news.slug.current}`
                        }`}
                        target={`${news.btnIsRedirect ? "_blank" : ""}`}
                      >
                        {news.imageURL && (
                          <Image
                            src={news.imageURL}
                            alt={news.image.alt}
                            fill
                          />
                        )}
                        <label>Latest News</label>
                      </Link>
                    </div>

                    <div className={styles.content}>
                      <div className={styles.context}>
                        {/* Title */}
                        <h4
                          className={`${styles.articleTitle} heading heading-5`}
                          title={news.title}
                        >
                          {news.title}
                        </h4>

                        {/* Categories & Dates */}
                        <div className={`${styles.articleInfoData}`}>
                          <div className={`${styles.articleCategories}`}>
                            {news.categories.map(
                              (category: any, i: number) => (
                                <div key={i}>{category.title}</div>
                              )
                            )}
                          </div>

                          {/* Publish Date */}
                          <p className={styles.articleDate}>
                            {new Date(news.date).toLocaleDateString("en-US", {
                              timeZone: "UTC",
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </div>

                        {/* Description */}
                        <p className={`${styles.articleDescription} para`}>
                          {news.description}
                        </p>

                        {/* CTA */}
                        <Link
                          href={`/blog/${news.slug.current}`}
                          className="btn btn-secondary"
                          style={{ position: "relative", top: "20px" }}
                        >
                          <span>Read More</span>
                          <i className="bi bi-arrow-up-right-circle"></i>
                        </Link>
                      </div>
                      <div className={styles.icons}>
                        <div style={{ width: "18px", height: "18px" }}>
                          <ReplyAll />
                        </div>
                        <div style={{ width: "18px", height: "18px" }}>
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p>No news found for the query: {query}</p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;



