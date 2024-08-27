"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  frameParentIvert,
  frameAnimationIvert,
  pageAnimation,
  smoothFade,
} from "../../utility/animation";
import Image from "next/image";
import { getClientPageData } from "../../sanity/sanity-utils";
import client_img from "../../assets/client_img.png";

const Clients = () => {
  const [clientData, setClientData] = useState(null);
  const filters = [
    "Web Design",
    "Web Development",
    "MVPs",
    "Mobile Apps",
    "E-commerce",
    "UI/UX & Prototyping",
    "Web Apps",
  ];

  const [activeBtn, setActiveBtn] = useState(filters[0]);

  const filterItem = (selectedCategory) => {
    // if (selectedCategory === filters[0]) {
    //    setItems(workData);
    // } else {
    //    const updatedItems = workData.filter((workDataCard) => {
    //       return workDataCard.category.includes(selectedCategory);
    //    });
    //    setItems(updatedItems);
    // }
    setActiveBtn(selectedCategory);
  };

  useEffect(() => {
    async function fetchClientData() {
      const data = await getClientPageData();
      setClientData(data);
    }
    fetchClientData();
    window.scrollTo(0, 0);
    document.title = "Clients";
  }, []);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={frameParentIvert}>
        <motion.div
          className="animation-frame one"
          variants={frameAnimationIvert}
        ></motion.div>
        <motion.div
          className="animation-frame two"
          variants={frameAnimationIvert}
        ></motion.div>
        <motion.div
          className="animation-frame three"
          variants={frameAnimationIvert}
        ></motion.div>
      </motion.div>

      <motion.section className="contact-us" variants={smoothFade}>
        <div className="container">
          <div className="client-main">
            <div className="client-hero">
              <div className="client-heading">
                <h1>Website</h1>
                <span>Vikreta</span>
              </div>
              <p className="sub">Building Remarkable Webstories Together</p>
              <div className="client-line"></div>

              {/* Clients Section */}
              <div className="clients">
                <h1>Clients</h1>
                <div className="rectangle"></div>
                <div className="img">
                  {clientData.map((client) => (
                    <div className="img-rect" key={client._id}>
                      <Image
                        src={client.logoURL}
                        alt={client.logoAlt || "Client Logo"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="views">
                <div className="heading">
                  <h1>Views</h1>
                </div>
                <div className="rectangle"></div>
                <div className="client-testimonials">
                  {clientData.map((client) =>
                    client.testimonials.map((testimonial, index) => (
                      <div className="testimonial" key={index}>
                        <Image
                          src={client_img}
                          alt="Client Image"
                          height={283}
                        />
                        <p className="date">{testimonial.date}</p>
                        <p className="date">{testimonial.testimonial}</p>
                        <p className="author">{testimonial.author}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Services Section */}
              <div className="client-services">
                <div className="client-heading">
                  <h1>Website</h1>
                  <span>Vikreta</span>
                </div>
                <div className="client-line"></div>
                <h1 className="service-heading">Services we provide</h1>
                {/* <div className="services">
                  <div className="single-service">
                    <p className="name">Web Design</p>
                  </div>
                  <div className="single-service">
                    <p className="name">Web Development</p>
                  </div>
                  <div className="single-service">
                    <p className="name">MVPs</p>
                  </div>
                  <div className="single-service">
                    <p className="name">Mobile Apps</p>
                  </div>
                  <div className="single-service">
                    <p className="name">E-commerce</p>
                  </div>
                  <div className="single-service">
                    <p className="name">UI/UX & Prototyping</p>
                  </div>
                  <div className="single-service">
                    <p className="name">Web Apps</p>
                  </div>
                </div> */}
                <div className="filter-container">
                  {filters.map((filter, index) => (
                    <button
                      key={index}
                      className={activeBtn === filter ? "active-button" : ""}
                      onClick={() => filterItem(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Clients;
