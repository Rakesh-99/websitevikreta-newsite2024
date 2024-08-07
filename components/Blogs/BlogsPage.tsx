import React, { useEffect, useState } from "react";
import BlogsHero from "./BlogsHero";

// Import Sanity
import { getBlogPageData } from "../../sanity/sanity-utils";

const BlogsPage = () => {
   const [blogPageData, setBlogPageData] = useState(null);

   useEffect(() => {
      // Ensure this code only runs on the client side
      const fetchData = async () => {
         const data = await getBlogPageData();
         setBlogPageData(data);
      };

      fetchData();
   }, []);

   if (!blogPageData) {
      return <div>Loading...</div>; // Or a proper loading indicator
   }

   return (
      <>
         <BlogsHero newsPageData={blogPageData} />
      </>
   );
};

export default BlogsPage;
