"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from 'next/script'; // Import Script for Google Analytics
import "./globals.css";
import '../styles/main.scss';
import { metadata } from "./metadata";

import Nav from "../components/navbar/Nav";
import Footer from "../components/footer";
import DotRing from '../components/cursor/DotRing';
import GoTop from '../components/GoTop';

import { navbarScroll } from '../utility/navbarScroll';
import { navbarCTAScroll } from '../utility/navbarCTAScroll';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    navbarScroll();
    navbarCTAScroll();

    return () => {
      window.removeEventListener("scroll", navbarScroll);
      window.removeEventListener("scroll", navbarCTAScroll);
    };
  }, []);

  const isStudio = pathname.startsWith('/studio');

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

        {/* Google Analytics Script */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-QN768NT1EF`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QN768NT1EF', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* HubSpot Script */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/46829457.js"></script>

      </head>
      <body className={inter.className}>    
        {!isStudio && <Nav />}
        {children}
        <DotRing />
        {!isStudio && <Footer />}
        <GoTop />
      </body>
    </html>
  );
}
