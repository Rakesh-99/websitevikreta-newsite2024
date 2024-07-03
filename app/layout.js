"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import  '../styles/main.scss';
import { metadata } from "./metadata";


import Nav from "../components/navbar/Nav";

import Footer from "../components/footer";
import DotRing from '../components/cursor/DotRing';

import { navbarScroll } from '../utility/navbarScroll';
import { navbarCTAScroll } from '../utility/navbarCTAScroll';
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  useEffect(() => {
    navbarScroll();
    navbarCTAScroll();

    return () => {
      window.removeEventListener("scroll", navbarScroll);
      window.removeEventListener("scroll", navbarCTAScroll);
    };
  }, []);
  return (
    <html lang="en">
      <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}

        <DotRing />
        <Footer/>
      </body>
    </html>
  );
}
