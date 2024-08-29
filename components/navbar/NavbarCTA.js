"use client";

import Link from 'next/link'; 
import { useState, useEffect } from 'react';

const NavbarCTA = () => {
  const [isNavbarCTAVisible, setIsNavbarCTAVisible] = useState(false); // Initially hidden
  const [hasClosed, setHasClosed] = useState(false); // Tracks if user has closed the CTA

  useEffect(() => {
    const handleScroll = () => {
      if (!hasClosed && window.scrollY > 600) { 
        setIsNavbarCTAVisible(true);
      } else {
        setIsNavbarCTAVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the handler once in case the user is already scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasClosed]);

  const handleClose = () => {
    setIsNavbarCTAVisible(false);
    setHasClosed(true);
  };

  return (
    <div className={`navbar-cta ${isNavbarCTAVisible ? 'show' : 'hide'}`}>
      <div className="container">
        <div className="text">
          Just a friendly reminder. Your brand will die without a good website. ☠️
        </div>
        <Link href="/contactus" passHref className="link" onClick={handleClose}>
            <span className="link-text">Help us fix</span>
            <span className="link-icon">
              <i className="bi bi-check-circle-fill"></i>
            </span>
        </Link>
        <div className="close" onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </div> 
      </div>
    </div>
  );
};

export default NavbarCTA;
