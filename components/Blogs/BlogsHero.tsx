"use client";
import Slider from "react-slick";
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
import steppng from "../../assets/Blogs/Mask group.png";
import Heart from "../../assets/Heart";
import ReplyAll from "../../assets/ReplyAll";
import { Input } from "../Blogs/Input/index";
import { SearchSVG } from "../Blogs/Input/close.jsx";



// Images

const NewsHero = ({ newsPageData }: { newsPageData: any }) => {
  const isotope = useRef<Isotope | null>();
  const [filterKey, setFilterKey] = useState("*");
  const [isCategoryActive, setIsCategoryActive] = useState("*");
  const [newLaunches, setnewLaunches] = useState([]);
  const customeSlider = useRef<Slider | null>(null);
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const handleSearch = () => {
    const searchQuery = searchBarValue.trim();
    if (searchQuery) {
      window.open(`/Search?query=${encodeURIComponent(searchQuery)}`, "_self");
    } else {
      window.open("/Search", "_self");
    }
  };

  useEffect(() => {
    if (isCategoryActive !== "*") {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      // cleanup
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



 const gotoNext = () => {
   customeSlider.current?.slickNext();
 };

 const gotoPrev = () => {
   customeSlider.current?.slickPrev();
 };

  return (
    <>
      <section className={`${styles.hero} `}>
        <div className={`${styles.container} container`}>
          {/* Heading */}
          <div className={`${styles.heroHeading} heading heading-1`}>
            From Zero to Hero
          </div>
          {/* Sub Heading */}
          <div className={`${styles.heroSubHeading}`}>
            {/* <PortableText value={heroData.heroSubHeading} /> */}
            Dive into the intricate world of website creation with our in-depth
            blog posts.
          </div>
          {isCategoryActive === "*" && (
            <>
              <div>
                {/* Top Card */}
                <div className={`${styles.allCategoryHero}`}>
                  {newsPageData.news &&
                    newsPageData.news.slice(0, 4).map((news: any, i: any) => {
                      let category = news.categories
                        .map((category: any, i: number) => category.categoryKey)
                        .toString()
                        .replace(",", " ");
                      return (
                        <>
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
                                    // height={1280}
                                    fill
                                  />
                                )}

                                <label
                                  style={{
                                    padding: "0.8rem",
                                    borderRadius: "4px",
                                    background: "rgba(250, 250, 250, 0.40)",
                                  }}
                                >
                                   
                                  <Link
                                    href={`/blog/${news.slug.current}`}
                                    className="btn btn-secondary"
                                  >
                                    {/* Link content here */}

                                    <span>Read More</span>
                                    <i className="bi bi-arrow-up-right-circle"></i>
                                  </Link>
                                </label>
                              </Link>
                            </div>
                            <div className={styles.content}>
                              {/* Title */}

                              <h4
                                className={`${styles.articleTitle} heading heading-5`}
                                title={news.title}
                              >
                                {news.title}
                              </h4>

                              {/* Categories & Dates */}
                              <div className={`${styles.articleInfoData}`}>
                                {/* <div
                                                      className={`${styles.articleCategories}`}
                                                   >
                                                      {news.categories.map(
                                                         (
                                                            category: any,
                                                            i: number
                                                         ) => (
                                                            <>
                                                               <div>
                                                                  {
                                                                     category.title
                                                                  }
                                                               </div>
                                                            </>
                                                         )
                                                      )}
                                                   </div> */}

                                {/* Publish Date */}
                                <p className={styles.articleDate}>
                                  {new Date(news.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      timeZone: "UTC",
                                      month: "long",
                                      day: "2-digit",
                                      year: "numeric",
                                    }
                                  )}
                                </p>
                              </div>

                              {/* Description */}
                              <p
                                className={`${styles.articleDescription} para`}
                              >
                                {news.description}
                              </p>

                              {/* CTA */}
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        {/* blog introduction section
      <div
        style={{
          height: "19rem",
          flexShrink: "0",
          borderRadius: "var(--Radius-10, 10px)",
          background: "rgba(27, 27, 27, 0.50)",
          
        }}
        className="flex justify-center self-stretch "
      >
        <div className="container-xs flex justify-center md:px-5 ">
          <div className="flex w-full justify-center rounded-[10px] bg-gray-900_7f px-14 py-[86px] md:p-5">
            <div className="mb-3 flex w-[92%] justify-center px-14 md:w-full md:px-5">
              <div className="flex w-full items-center md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-11 md:self-stretch">
                  <Heading
                    size="heading1xl"
                    as="h1"
                    className="capitalize leading-[49px] sm:text-[32px]"
                  >
                    Discover fresh perspectives <br /> with our Blog Content!
                  </Heading>
                  <Text
                    size="textlg"
                    as="p"
                    className="w-[66%] leading-[21px] md:w-full"
                  >
                    Stay ahead of the curve with our industry-leading blog
                    content and the latest trends on our always-updating blog.
                  </Text>
                </div>
                <Image
                  src={Slide1} // Using the imported Image component
                  width={30}
                  height={25}
                  alt="Feature Image"
                  className="relative ml-[-98px] h-[250px] w-[28%] object-contain md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <section className={`${styles.Blogcard} `}>
          <div className={`${styles.container}  container `}>
            <div className={`${styles.cardwrapper} cardwrapper`}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.leftsec}`}>
                  <h4 className={`${styles.heading}`}>
                    Discover fresh perspectives <br></br>
                    with our Blog Content!
                  </h4>
                  <p className={`${styles.para} `}>
                    {`Every application experience should be user-friendly, and when you're working with us, you don't have to worry about that. We provide:`}
                  </p>
                </div>
                <div className={`${styles.image} Image`}>
                  <Image 
                  src={steppng} 
                  alt="service image"

                  height={100}
                  width={500}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={`${styles.filter} `}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.heroSubHeading}`}>
            {/* <PortableText value={heroData.heroSubHeading} /> */}
            INSIGTHS
          </div>
          {/* Heading */}
          <div className={`${styles.heroHeading} heading heading-1`}>
            Read More Than 100+ Blogs 
          </div>
          {/* Sub Heading */}
          <div className={`${styles.heroSubHeading}`}>
            {/* <PortableText value={heroData.heroSubHeading} /> */}
            Dive into the intricate world of website creation with our in-depth
            blog posts.
          </div>
          <div className={`${styles.placeholder}`}>
                     <Input
                        size="xs"
                        shape="square"
                        name="Search Input"
                        placeholder={`Search Here`}
                        value={searchBarValue}
                        onChange={(e:any) => setSearchBarValue(e.target.value)}

                        suffix={
                          <div className="flex h-[18px] w-[18px] items-center justify-center">
                            {searchBarValue?.length > 0 ? (
              <SearchSVG
              onClick={handleSearch}
              height={16}
              width={18}
            />
                            ) : (
                              <SearchSVG
                                width={18}
                                height={16}
                                alt="Search"
                                className="my-0.5 h-[16px] w-[18px]"
                              />
                            )}
                          </div>
                        }
                        className="mr-4 gap-2.5 text-black-900 md:mr-0"
                      />
          </div>

          <ul className={`${styles.categoryFilter}`}>
            <li
              className={`${isCategoryActive == "*" ? styles.active : ""}`}
              onClick={handleFilterKeyChange("*")}
            >
              All Categories
            </li>
            {newsPageData.categories.map((category: any, i: number) => (
              <>
                {newsPageData.news.filter((article: any) =>
                  article.categories.some(
                    (cat: any) => cat.categoryKey === category.categoryKey
                  )
                ).length > 0 && (
                  <>
                    <li
                      className={`${
                        isCategoryActive == category.categoryKey
                          ? styles.active
                          : ""
                      }`}
                      onClick={handleFilterKeyChange(category.categoryKey)}
                    >
                      {category.title}
                    </li>
                  </>
                )}
              </>
            ))}
          </ul>
          {isCategoryActive === "*" && (
            <>
              <div>
                {/* Top Card */}
                <div className={`${styles.categoryWiseSliders}`}>
                  {newsPageData.news &&
                    newsPageData.news.slice(0, 4).map((news: any, i: any) => {
                      let category = news.categories
                        .map((category: any, i: number) => category.categoryKey)
                        .toString()
                        .replace(",", " ");
                      return (
                        <>
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
                                    // height={1280}
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
                                      <>
                                        <div>{category.title}</div>
                                      </>
                                    )
                                  )}
                                </div>

                                {/* Publish Date */}
                                <p className={styles.articleDate}>
                                  {new Date(news.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      timeZone: "UTC",
                                      month: "long",
                                      day: "2-digit",
                                      year: "numeric",
                                    }
                                  )}
                                </p>
                              </div>

                              {/* Description */}
                              <p
                                className={`${styles.articleDescription} para`}
                              >
                                {news.description}
                              </p>

                              {/* CTA */}
                              <Link
                                href={`/blog/${news.slug.current}`}
                                className="btn btn-secondary"
                                style={{position:"relative",top:"20px"}}
                              >
                                {/* Link content here */}

                                <span>Read More</span>
                                <i className="bi bi-arrow-up-right-circle"></i>
                              </Link>
                           </div>
                           <div className={styles.icons}>
                           <div style={{ width: '18px', height: '18px' }}>
                           <ReplyAll />
                           </div>
                           <div style={{ width: '18px', height: '18px' }}>

                           <Heart/>
                           </div>
                        </div>
                            </div>

                          </div>
                        </>
                      );
                    })}
                </div>

                {newsPageData.categories.map((category: any, i: number) => (
                  <>
                    {newsPageData.news.filter((article: any) =>
                      article.categories.some(
                        (cat: any) => cat.categoryKey === category.categoryKey
                      )
                    ).length > 0 && <></>}
                  </>
                ))}
              </div>
            </>
          )}

          {isCategoryActive !== "*" && (
            <>
              <div className={`${styles.articles} filter-container`}>
                {newsPageData.news &&
                  newsPageData.news.map((news: any, i: any) => {
                    let category = news.categories
                      .map((category: any, i: number) => category.categoryKey)
                      .toString()
                      .replace(",", " ");
                    return (
                      <>
                        <div
                          className={`
                                          filter-item 
                                          ${styles.articleCard}
                                          ${category}
                                          `}
                          key={i}
                        >
                        <div className={`${styles.categoryWiseSliders}`}>
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
                                    // height={1280}
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
                                      <>
                                        <div>{category.title}</div>
                                      </>
                                    )
                                  )}
                                </div>

                                {/* Publish Date */}
                                <p className={styles.articleDate}>
                                  {new Date(news.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      timeZone: "UTC",
                                      month: "long",
                                      day: "2-digit",
                                      year: "numeric",
                                    }
                                  )}
                                </p>
                              </div>

                              {/* Description */}
                              <p
                                className={`${styles.articleDescription} para`}
                              >
                                {news.description}
                              </p>

                              {/* CTA */}
                              <Link
                                href={`/blog/${news.slug.current}`}
                                className="btn btn-secondary"
                                style={{position:"relative",top:"20px"}}
                              >
                                {/* Link content here */}

                                <span>Read More</span>
                                <i className="bi bi-arrow-up-right-circle"></i>
                              </Link>
                           </div>
                           <div className={styles.icons}>
                           <div style={{ width: '18px', height: '18px' }}>
                           <ReplyAll />
                           </div>
                           <div style={{ width: '18px', height: '18px' }}>

                           <Heart/>
                           </div>
                        </div>
                            </div>

                          </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </>
          )}
        </div>

        {/* Categories */}
      </section>
      <section className="testimonials">
  <div className="container">
    <div className="heading">
      <h2>New Launches</h2>
      <div className="line"></div>
    </div>

    <div className="testimonial-slider-wrapper">
      {/* Check if newsPageData.news exists and contains at least one item with isNew == true */}
      {newsPageData.news && Array.isArray(newsPageData.news) && newsPageData.news.some((news: any) => news.isNew) && (
        <>
          {/* prev button */}
          <button className="prev slider-btn" id="test-prev" onClick={gotoPrev}>
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* slider */}
          <Slider {...settings} className="testimonial-slider" ref={customeSlider}>
            {newsPageData.news
              .filter((news: any) => news.isNew)
              .slice(0, 10)
              .map((news: any, i: number) => {
                const category = news.categories
                  .map((category: any) => category.categoryKey)
                  .join(" ");  // Join categories with a space
                return (
                  <div className="card" key={news._id}>
                    {news.imageURL && (
                      <Image
                        src={news.imageURL}
                        alt={news.image.alt}
                        width={100}
                        height={100}
                      />
                    )}
                    <div className="group">
                      <div className="user">
                        <div className="text">
                          <p className="name">{news.title}</p>
                          <p className="des" style={{ overflow: "hidden", height: "7rem" }}>
                            {news.description}
                          </p>
                          <Link
                            href={`/blog/${news.slug.current}`}
                            className="btn btn-secondary"
                            style={{ position: "relative", top: "20px" }}
                          >
                            <span>Read More</span>
                            <i className="bi bi-arrow-up-right-circle"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>

          {/* next button */}
          <button className="next slider-btn" id="test-next" onClick={gotoNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  </div>
</section>



    </>
         
  );
};
export default NewsHero;
