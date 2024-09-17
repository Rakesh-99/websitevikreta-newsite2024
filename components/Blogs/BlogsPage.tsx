import React from "react";

import BlogsHero from "./BlogsHero";
import WhyToReadBlogs from "./WhyToReadBlogs"

// import Sanity
import { getBlogPageData } from "../../sanity/sanity-utils";
import FooterForm from "./FooterForm";

export default async function BlogsPage() {
   const blogPageData = await getBlogPageData();
   return (
      <>
         <BlogsHero newsPageData={blogPageData} />
         <WhyToReadBlogs />
         <FooterForm/>
         
      </>
   );
}
