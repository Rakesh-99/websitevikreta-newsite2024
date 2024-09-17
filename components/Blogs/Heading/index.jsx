import React from "react";

const sizes = {
  blog_heading2: "blog-heading2",
  blog_heading_3: "blog-heading-3",
  headingmd: "heading-md",
  headingxl: "heading-xl",
  heading3xl: "heading-3xl",
  heading5xl: "heading-5xl",
};

const Heading = ({
  children,
  className = "",
  size = "headingxl",
  as: Component = "h4", // Default to 'h2' if no 'as' prop is provided
  ...restProps
}) => {
  return (
    <Component
      className={`headingn ${sizes[size]} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
