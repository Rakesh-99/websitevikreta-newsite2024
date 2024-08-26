"use client";
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import Link from "next/link";
import NavbarCTA from "./NavbarCTA";
import LogoIcon from "../../assets/LogoIcon.jsx";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Nav = () => {
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const unCheck = () => {
      document.querySelectorAll("#navToggle")[0].checked = false;
   };

   const scrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   };

   const handleHomeClick = () => {
      unCheck();
      scrollUp();
   };

   const toggleDropdown = () => {
      setDropdownVisible(prev => !prev);
   };

   const handleLinkClick = () => {
      setDropdownVisible(false); // Hide the dropdown when a link is clicked
      unCheck();
   };

   return (
      <header>
         <nav className="navbar">
            <div className="container">
               <input type="checkbox" id="navToggle" />
               <div className="top-nav-wrapper">
                  <Link href="/">
                     <div className="logo" onClick={scrollUp}>
                        <LogoIcon /> <h1><span>Website</span>Vikreta</h1>
                     </div>
                  </Link>
               </div>
               <label className="toggle-btn" htmlFor="navToggle">
                  <div className="line one"></div>
                  <div className="line two"></div>
               </label>
               <div className="wrapper">
                  <ul className="nav-list">
                     <li className="nav-item" onClick={handleHomeClick}><Link href="/">Home</Link></li>
                     <li className="nav-item">
                        <ScrollLink
                           to="aboutus"
                           smooth={true}
                           duration={500}
                           offset={-70} // Adjust based on your navbar height
                           onClick={unCheck}
                        >
                           About Us
                        </ScrollLink>
                     </li>
                     <li className="nav-item">
                        <ScrollLink
                           to="services"
                           smooth={true}
                           duration={500}
                           offset={-70} // Adjust based on your navbar height
                           onClick={unCheck}
                        >
                           Our Services
                        </ScrollLink>
                     </li>
                     <li className="nav-item">
                        <Link href="/" onClick={toggleDropdown}>
                           <div className={`navDropdown ${dropdownVisible ? 'show' : ''}`}>
                              <input
                                 type="checkbox"
                                 className="navDropdownCheckbox"
                                 id="dropdownCheckbox"
                              />
                              <label htmlFor="dropdownCheckbox" className="navDropdownLabel">
                                 <span> Calculator </span>
                                 <i className="bi bi-chevron-down"></i>
                              </label>
                              <div className="navDropdownMenu">
                                 <ul>
                                    <li>
                                       <Link href="/website-cost-calculator" onClick={handleLinkClick}>
                                          Website Cost Calculator
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </Link>
                     </li>
                     <li className="nav-item"><Link href="/work">Our Work</Link></li>
                     <li className="nav-item"><Link href="/contactus">Contact Us</Link></li>
                     {/* <li className="nav-item"><Link href="/blog">Blogs</Link></li> */}
                  </ul>
                  <ul className="social-icons">
                     <li className="social"><Link href="https://www.instagram.com/websitevikreta/" target="_BLANK" rel="noreferrer"><i className="bi bi-instagram"></i></Link></li>
                     <li className="social"><Link href="https://www.linkedin.com/company/websitevikreta/" target="_BLANK" rel="noreferrer"><i className="bi bi-linkedin"></i></Link></li>
                     <li className="social"><Link href="https://www.upwork.com/agencies/websitevikreta/" target="_BLANK" rel="nonreferrer"><svg fill="#EEE" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                        </svg></Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <NavbarCTA />
      </header>
   );
};

export default Nav;
