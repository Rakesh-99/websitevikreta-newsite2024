import React from "react";

import BlogsHero from "./BlogsHero";

// import Sanity
import { getBlogPageData } from "../../sanity/sanity-utils";

export default async function BlogsPage() {
   const blogPageData = await getBlogPageData();
   return (
      <>
         <BlogsHero newsPageData={blogPageData} />
      </>
   );
}
