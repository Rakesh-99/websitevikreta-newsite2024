"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import LogoIcon from '../assets/LogoIcon'; // Adjust the path as necessary

const Footer = () => {
  return (
    <motion.footer layout>
      <section className="footer">
        <div className="container">
          <div className="left">
            <Link href="/" passHref
               className="logo">
                <LogoIcon />
                <h1><span>Website</span>Vikreta</h1>
              
            </Link>
            <p className="des">
              Website Vikreta is an answer to all your web development needs. We provide services to whoever needs, from small start-ups to large corporations. Our mission is to fulfill your needs and give you the best service.
            </p>
          </div>
          
          <div className="right">
            <div className="quickLinks">
              <span className="link">
                <i className="icon bi bi-chevron-right"></i>
                <Link href="/">Home</Link>
              </span>
              <span className="link">
                <i className="icon bi bi-chevron-right"></i>
                <Link href="#aboutUs">About Us</Link>
              </span>
              <span className="link">
                <i className="icon bi bi-chevron-right"></i>
                <Link href="#ourwork">Our Services</Link>
              </span>
              <span className="link">
                <i className="icon bi bi-chevron-right"></i>
                <Link href="/detailedwork">Our Work</Link>
              </span>
              <span className="link">
                <i className="icon bi bi-chevron-right"></i>
                <Link href="/contactus">Contact Us</Link>
              </span>
            </div>

            <div className="social-media">
              <Link href="https://www.instagram.com/websitevikreta/" target="_blank" rel="noreferrer">
                <i className="icon bi bi-instagram"></i>&nbsp; instagram
              </Link>
              <Link href="https://www.linkedin.com/company/websitevikreta/" target="_blank" rel="noreferrer">
                <i className="icon bi bi-linkedin"></i>&nbsp; linkedin
              </Link>
            </div>
            <div className="line"></div>
            <p className="copyright">
              © 2020-24 <span>Website</span>Vikreta.<br className="break" /> All rights reserved
            </p>
          </div>
        </div>
      </section>
    </motion.footer>
  );
};

export default Footer;
