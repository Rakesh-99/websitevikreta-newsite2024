"use client";

import Link from 'next/link'; 
import { useState, useEffect } from 'react';

const NavbarCTA = () => {
  const [isNavbarCTAVisible, setIsNavbarCTAVisible] = useState(true);

  useEffect(() => {
    const storedState = localStorage.getItem('navbarCTAVisible');
    if (storedState === 'false') {
      setIsNavbarCTAVisible(false);
    }
  }, []);

  const hideNavbarCTA = () => {
    setIsNavbarCTAVisible(false);
    localStorage.setItem('navbarCTAVisible', 'false');
  };

  return (
    <div className={`navbar-cta ${isNavbarCTAVisible ? 'show' : 'hide'}`}>
      <div className="container">
        <div className="text">
          Just a friendly reminder. Your brand will die without a good website. ☠️
        </div>
        <Link href="/contactus" passHref className="link" onClick={hideNavbarCTA}>
          <span className="link-text">Help us fix</span>
          <span className="link-icon">
            <i className="bi bi-check-circle-fill"></i>
          </span>
        </Link>
        <div className="close" onClick={hideNavbarCTA}>
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarCTA;
