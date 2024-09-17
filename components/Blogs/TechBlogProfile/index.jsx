import { Heading } from "../Heading";
import React from "react";
import Image from "next/image";

export default function TechBlogProfile({
  userImage = "img_rectangle_22210.png",
  blogTitle = "Tech Blogs",
  ...props
}) {
  return (
    <div {...props} className={`tech-blog-profile ${props.className}`}>
      <Image
        src={userImage}
        width={364}
        height={176}
        alt="Blog Image"
        className="tech-blog-image"
      />
      <Heading as="h4" className="tech-blog-heading">
        {blogTitle}
      </Heading>
    </div>
  );
}
