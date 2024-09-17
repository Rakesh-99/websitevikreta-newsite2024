import React from "react";

const sizes = {
  blog_para: "text-md font-normal not-italic",
  textxs: "text-xs font-normal not-italic",
  texts: "text-s font-normal not-italic",
  textmd: "text-md font-normal not-italic",
  textlg: "text-lg font-normal not-italic",
  textxl: "text-xl font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "div";
  return (
    <Component
      className={`textblogs text-white font-roboto ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
