"use client";
import React, { useState, useEffect,useRef } from "react";
import parse from 'html-react-parser';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { pageAnimation, frameParentVert, frameAnimationVert, smoothFade } from "../../../utility/animation";
import { workData } from "../../../json/ourWorkData";
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Detailedwork = ({ params }) => {
  const myWork = workData.find(work => work.url.includes(params.slug));
  const customSlider = useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const gotoNext = () => {
    customSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customSlider.current.slickPrev();
  };
  
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div initial="hidden" animate="show" variants={frameParentVert}>
        <motion.div className="animation-frame two" variants={frameAnimationVert}></motion.div>
        <motion.div className="animation-frame three" variants={frameAnimationVert}></motion.div>
      </motion.div>

      <motion.div className="detailed-work">
        <motion.div className="container" variants={smoothFade}>
          <div className="row">
            <Link href="/work" className="close mobile"><i className="bi bi-x-lg"></i></Link>
            <div className="details">

              <div className="titles">
                <div className="image">
                  <Image
                    src={myWork.logo}
                    alt={myWork.title}
                    width={200} // Adjust width and height as per your design
                    height={200}
                  />
                </div>
                <div className="pretext">
                  <h2 className="project-heading">{myWork.title}</h2>
                  <ul className="niche">
                    {myWork.niche.map((x, index) => (
                      <li key={index}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="slider-wrapper">
                <button className="prev slider-btn" onClick={gotoPrev}><i className="bi bi-chevron-left"></i></button>
                <Slider {...settings} className="work-slider" ref={customSlider}>
                {myWork.gallery.map((img, index) => (
                  <div className="card" key={index}>
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    layout="responsive" // Or use layout="fill" if you want the image to fill its container
                    width={500} // Adjust these values based on your design
                    height={250}
                  />
                  </div>
                  ))}
                </Slider>
                <button className="next slider-btn" onClick={gotoNext}><i className="bi bi-chevron-right"></i></button>
              </div>

              <div className="button-group">
                {myWork.links.map((link, index) => (
                  <a key={index} href={link.value} target="_blank" className="awesome-link" rel="noreferrer">Visit {link.key}</a>
                ))}
              </div>

              <div className="description">
                {parse(myWork.description)}
              </div>
            </div>
            <div className="review">
              <Link href="/work" className="close"><i className="bi bi-x-lg"></i></Link>
              <div className="title">
                <h2>Client Review</h2>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <p className="text">
                {myWork.clientReview}
              </p>
              <div className="client">
                <h4>{myWork.clientName}</h4>
                <p>- {myWork.designation}</p>
              </div>
              <div className="button-group">
                <Link href="/contact" className="normal-btn primary">Book a Call</Link>
                <Link href="/contact" className="normal-btn secondary">Get a Free Quote</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Detailedwork;
