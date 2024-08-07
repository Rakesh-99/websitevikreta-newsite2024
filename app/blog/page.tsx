import React from "react";
import { Metadata } from "next";
import NewsPage from "../../components/news/BlogsPage";

export const metadata: Metadata = {
   title: " Blogs | Website Vikreta",
   description:
      "Website Vikreta.",
};

const page = () => {
   return <NewsPage />;
};

export default page;
