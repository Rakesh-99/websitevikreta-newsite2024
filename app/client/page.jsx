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
import client_img from "../../assets/client_img.png";
import client_1 from "../../assets/client_1.jpg";
import { getClientPageData } from "../../sanity/sanity-utils";

const Clients = () => {
   const [clientData, setClientData] = useState(null);

   useEffect(() => {
      async function fetchClientData() {
         const data = await getClientPageData();
         setClientData(data);
      }
      fetchClientData();
      window.scrollTo(0, 0);
      document.title = "Clients";
   }, []);

   if (!clientData) {
      return <div>Loading...</div>;
   }

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
                     <div className="clients">
                        <h1>Clients</h1>
                        <div className="rectangle"></div>
                        <div className="img">
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                        </div>
                        <div className="img">
                           <div className="img-rect">
                              <Image
                                 src={client_1}
                                 alt="client-1"
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                           <div className="img-rect"></div>
                        </div>
                     </div>
                     <div className="views">
                        <div className="heading">
                           <h1>Views</h1>
                        </div>
                        <div className="rectangle"></div>
                        <div className="client-testimonials">
                           <div className="testimonial">
                              <Image src={client_img} alt="Error Image" height={283} />
                              <p className="date">21/03/2020</p>
                              <p className="date">
                                 Are you looking for consulting and web development to meet
                                 your needs.
                              </p>
                           </div>
                           <div className="testimonial">
                              <Image src={client_img} alt="Error Image" height={283} />
                              <p className="date">21/03/2020</p>
                              <p className="date">
                                 Are you looking for consulting and web development to meet
                                 your needs.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="client-services">
                        <div className="client-heading">
                           <h1>Website</h1>
                           <span>Vikreta</span>
                        </div>
                        <div className="client-line"></div>
                        <h1 className="service-heading">Services we provide</h1>
                        <div className="services">
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
