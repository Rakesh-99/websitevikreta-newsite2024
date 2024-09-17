import React from "react";
import Page from "./index.jsx";
import { getBlogData } from "../../../sanity/sanity-utils";

export const metadata = {
  title: "Why Robots Can't Click 'I'm Not a Robot' - Blog Post",
  description:
    "Discover the technology behind 'I'm Not a Robot' checkboxes and CAPTCHAs. Understand the challenges robots face with our in-depth analysis on web security.",
};

export default async function ShraddhablogpostredesignedPage({ params }) {
  const data = await getBlogData(params.slug);

  return(
    
  <Page data={data} />);
}
