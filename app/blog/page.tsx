"use client";
import React from "react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { frameParentIvert, frameAnimationIvert, pageAnimation, smoothFade } from "../../utility/animation";
import dynamic from "next/dynamic";

const BlogsPage = dynamic(() => import("../../components/Blogs/BlogsPage"), {
   ssr: false,
});

const Page = () => {
   return (
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
         <motion.div variants={frameParentIvert}>
            <motion.div className="animation-frame one" variants={frameAnimationIvert}></motion.div>
            <motion.div className="animation-frame two" variants={frameAnimationIvert}></motion.div>
            <motion.div className="animation-frame three" variants={frameAnimationIvert}></motion.div>
         </motion.div> 
         <motion.section  variants={smoothFade}>

         <BlogsPage />
         </motion.section>
      </motion.div>
   );
};

export default Page;
