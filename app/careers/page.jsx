// /app/contactus/page.jsx
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
import career_hero from "../../assets/career_hero.png";
import doc_img from "../../assets/doc_img.png";
import { getCareerPageData } from "../../sanity/sanity-utils";
import { useRouter } from "next/navigation";

const Careers = () => {
   const [careers, setCareers] = useState([]);
   const router = useRouter();

   useEffect(() => {
      async function fetchCareers() {
         const data = await getCareerPageData();
         console.log(data);
         setCareers(data);
      }
      fetchCareers();
      window.scrollTo(0, 0);
      document.title = "Careers";
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
               <div className="career-main">
                  <div className="career-hero">
                     <div className="titles">
                        <div className="heading">
                           <h1>Building Remarkable Webstories together</h1>
                        </div>
                        <p className="sub-heading">
                           Lorem ipsum dolor sit amet consectetur. Eget quis ultrices
                           pharetra lacus in. Vitae nunc amet nisi
                        </p>
                        <button className="normal-btn primary">
                           <p className="btn-txt">All Openings</p>
                        </button>
                        <div className="career-filters">
                           <div className="single-btn">
                              <p className="btn-txt1">View All</p>
                           </div>
                           <div className="single-btn">
                              <p className="btn-txt1">Creative</p>
                           </div>
                           <div className="single-btn">
                              <p className="btn-txt1">Technology</p>
                           </div>
                           <div className="single-btn">
                              <p className="btn-txt1">Marketing</p>
                           </div>
                        </div>
                     </div>
                     <div className="hero-img">
                        <Image
                           src={career_hero}
                           alt="career-hero-img"
                           width={613}
                           height={407}
                        />
                     </div>
                  </div>
                  <div className="careers">
                     {careers.map((career) => (
                        <div className="single-career" key={career._id}>
                           <div className="career-img">
                              <Image
                                 src={career.imageURL}
                                 alt={career.title}
                                 width={344}
                                 height={215}
                              />
                           </div>
                           <div className="career-desc-main">
                              <div className="career-desc">
                                 <p className="main-heading">{career.title}</p>
                                 <p className="sub-heading">Open For Application</p>
                                 <p className="para">{career.description}</p>
                                 <p className="para">
                                    {career.jobType} | {career.title} | {career.location}
                                 </p>
                              </div>
                              <div className="btn">
                                 <button
                                    className="normal-btn primary"
                                    onClick={() =>
                                       router.push(`/careers/${career.slug.current}`)
                                    }
                                 >
                                    {console.log(career.slug.current)}
                                    <p className="btn-txt">Apply</p>
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="career-banner">
                     <div className="img">
                        <Image
                           src={doc_img}
                           alt="document_image"
                           width={95}
                           height={110}
                        />
                     </div>
                     <p className="banner-heading">
                        DON&apos;T HESITATE TO CONTACT US.
                     </p>
                     <div className="para">
                        <p>
                           If you&apos;re looking for a creative and innovative
                           environment to work in, then Website Vikreta could be the
                           place for you.
                        </p>
                     </div>

                     {/* <p className="para"></p> */}
                  </div>
               </div>
            </div>
         </motion.section>
      </motion.div>
   );
};

export default Careers;
