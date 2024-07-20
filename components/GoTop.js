"use client";

import React, { useEffect } from "react";

export default function GoTop() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollFunction = () => {
      const button = document.getElementById("gototopbtn");
      if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
        button.style.animation = "fadeInUp 1s ease backwards";
      } else {
        setTimeout(() => {
          button.style.display = "none";
        }, 500);
        button.style.animation = "fadeInDown 2s ease backwards";
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div>
      <button
        id="gototopbtn"
        onClick={scrollUp}
        className="gototop"
        style={{ display: "none" }} // Initially hidden
      >
        <i className="bi bi-chevron-bar-up"></i>
      </button>
    </div>
  );
}
