import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import testimonialData from "../json/testimonialData";
import Quote from "../assets/Quote.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
   const customeSlider = React.createRef();
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
               slidesToScroll: 1
            }
         },
      ]
   };

   // grabbing testimonials from json
   const testimonials = testimonialData();

   // functions
   const gotoNext = () => {
      customeSlider.current.slickNext()
   }

   const gotoPrev = () => {
      customeSlider.current.slickPrev()
   }

   return (
      <section className="testimonials">
         <div className="container">
            <div className="heading">
               <h2>What Our Clients Think About Us</h2>
               <div className="line"></div>
            </div>

            <div className="testimonial-slider-wrapper">
               {/* prev button */}
               <button className="prev slider-btn" id="test-prev" onClick={gotoPrev}>
                  <i className="bi bi-chevron-left"></i>
               </button>

               {/* slider */}
               <Slider {...settings} className="testimonial-slider" ref={customeSlider}>
                  {testimonials.map((test) =>
                     <div className="card" key={test.id}>
                        <Quote alt="quote svg" className="quote" />
                        <p className="review">{test.review}</p>
                        <div className="group">
                           <div className="user">
                              {test.image &&
                                 <Image src={test.image} alt={test.userName} />
                              }
                              <div className="text">
                                 <p className="name">{test.userName}</p>
                                 <p className="des">{test.userDes}</p>
                              </div>
                           </div>
                           <div className="ratings">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                           </div>
                        </div>
                     </div>
                  )}
               </Slider>

               {/* next button */}
               <button className="next slider-btn" id="test-next" onClick={gotoNext}>
                  <i className="bi bi-chevron-right"></i>
               </button>
            </div>
         </div>
      </section>
   )
}

export default TestimonialSection;
