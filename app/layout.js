"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import '../styles/main.scss';
import { metadata } from "./metadata";
import Link from "next/link";


import Nav from "../components/navbar/Nav";
import Footer from "../components/footer";
import DotRing from '../components/cursor/DotRing';

import { navbarScroll } from '../utility/navbarScroll';
import { navbarCTAScroll } from '../utility/navbarCTAScroll';
import { GoogleAnalytics } from '@next/third-parties/google'; // Import Google Analytics

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
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <GoogleAnalytics id="G-QN768NT1EF" /> 
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <DotRing />
        <Footer />

      </body>
    </html>
  );
}
