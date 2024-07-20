"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { pageAnimation, smoothFade, frameParentIvert, frameAnimationIvert } from "../../utility/animation";
import { workData } from "../../json/ourWorkData"; // Verify the path here
import Image from 'next/image';


const Work = () => {
   const filters = [
      'All Work',
      'Web Design',
      'Web Development',
      'MVPs',
      'Mobile Apps',
      'E-commerce',
      'UI/UX & Prototyping',
      'Web Apps',
   ];

   const [items, setItems] = useState(workData); // Verify that workData is correctly populated
   const [activeBtn, setActiveBtn] = useState(filters[0]);

   useEffect(() => {
      console.log("Work Data:", workData); // Check if workData is populated correctly
      window.scrollTo(0, 0);
      document.title = "Our Work";
   }, []);

   const filterItem = (selectedCategory) => {
      if (selectedCategory === filters[0]) {
         setItems(workData);
      } else {
         const updatedItems = workData.filter((workDataCard) => {
            return workDataCard.category.includes(selectedCategory);
         });
         setItems(updatedItems);
      }
      setActiveBtn(selectedCategory);
   };

   const gridItemVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
   };

   return (
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
         <motion.div variants={frameParentIvert}>
            <motion.div className="animation-frame one" variants={frameAnimationIvert}></motion.div>
            <motion.div className="animation-frame two" variants={frameAnimationIvert}></motion.div>
            <motion.div className="animation-frame three" variants={frameAnimationIvert}></motion.div>
         </motion.div>

         <motion.section className="our-work" variants={smoothFade}>
            <div className="container">
               <div className="heading">
                  <h2>Glimpse of Our Past Projects</h2>
                  <div className="line"></div>
               </div>

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

               <motion.div className="gallery-grid" key={activeBtn}>
                  {items.map((project) => (
                     <motion.div
                        key={project.id}
                        className="grid-item"
                        variants={gridItemVariants}
                        initial="hidden"
                        animate="show"
                     >
                        <Image src={project.thumbnail} alt={project.title} />
                        <div className="content">
                           <ul className="category">
                              {project.category.map((el, index) => (
                                 <li key={index}> {el} </li>
                              ))}
                           </ul>
                           <h3 className="project-heading">{project.title}</h3>
                           <p className="project-para">{project.shortDescription}</p>
                           <Link href={`${project.url}`}>
                                 <span className="normal-btn primary">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right"></i>
                                 </span>
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </motion.section>
      </motion.div>
   );
};

export default Work;