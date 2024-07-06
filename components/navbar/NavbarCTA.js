"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavbarCTA = () => {
  const [isNavbarCTAVisible, setIsNavbarCTAVisible] = useState(true);

  const handleClose = () => {
    setIsNavbarCTAVisible(false);
    localStorage.setItem('navbarCTAClosed', 'true');
  };

  useEffect(() => {
    const isClosed = localStorage.getItem('navbarCTAClosed');
    if (isClosed === 'true') {
      setIsNavbarCTAVisible(false);
    }
  }, []);

  return (
    <div className={`navbar-cta ${isNavbarCTAVisible ? 'show' : 'hide'}`}>
      <div className="container">
        <div className="text">
          Just a friendly reminder. Your brand will die without a good website. ☠️
        </div>
        <Link href="/contactus" passHref legacyBehavior>
          <a className="link" onClick={handleClose}>
            <span className="link-text">Help us fix</span>
            <span className="link-icon">
              <i className="bi bi-check-circle-fill"></i>
            </span>
          </a>
        </Link>
        <div className="close" onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarCTA;
