// components/NavbarCTA.js
"use client";

import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import { useState } from 'react';

const NavbarCTA = () => {
  const [isNavbarCTAVisible, setIsNavbarCTAVisible] = useState(true);

  return (
    <div className={`navbar-cta ${isNavbarCTAVisible ? 'show' : 'hide'}`}>
      <div className="container">
        <div className="text">
          Just a friendly reminder. Your brand will die without a good website. ☠️
        </div>
        <Link href="/contact" passHref
           className="link" onClick={() => setIsNavbarCTAVisible(false)}>
            <span className="link-text">Help us fix</span>
            <span className="link-icon">
              <i className="bi bi-check-circle-fill"></i>
            </span>
          
        </Link>
        <div className="close" onClick={() => setIsNavbarCTAVisible(false)}>
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarCTA;
