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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
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
