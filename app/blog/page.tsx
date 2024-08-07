import React from "react";
import { Metadata } from "next";
import BlogsPage from "../../components/Blogs/BlogsPage";

export const metadata: Metadata = {
   title: " Blogs | Website Vikreta",
   description:
      "Website Vikreta.",
};

const page = () => {
   return <BlogsPage />;
};

export default page;
