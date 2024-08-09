"use client";
import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const BlogsPage = dynamic(() => import("../../components/Blogs/BlogsPage"), {
   ssr: false,
});


const Page = () => {
   return <BlogsPage />;
};

export default Page;
