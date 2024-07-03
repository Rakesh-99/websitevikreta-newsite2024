
"use client";
import Link from "next/link";
//import { useNavigation } from 'next/navigation'; // Use next/navigation instead of next/router
import NavbarCTA from "./NavbarCTA";
import LogoIcon from "../../assets/LogoIcon.jsx";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";


const Nav = () => {
   //const navigation = useNavigation(); // Use useNavigation hook

   const unCheck = () => {
      document.querySelectorAll("#navToggle")[0].checked = false;
   };

   const scrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   };

   const handleHomeClick = () => {
      // if (navigation.pathname === "/") {
      //   scrollUp();
      // }
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
                     <li className="nav-item" onClick={unCheck}><Link href="/#aboutus">About Us</Link></li>
                     <li className="nav-item" onClick={unCheck}><Link href="/#services">Our Services</Link></li>
                     <li className="nav-item" onClick={unCheck}><Link href="/detailedwork">Our Work</Link></li>
                     <li className="nav-item" onClick={unCheck}><Link href="/contactus">Contact Us</Link></li>
                  </ul>
                  <ul className="social-icons">
                     <li className="social"><Link href="https://www.instagram.com/websitevikreta/" target="_BLANK" rel="noreferrer"><i className="bi bi-instagram"></i></Link></li>
                     <li className="social"><Link href="https://www.linkedin.com/company/websitevikreta/" target="_BLANK" rel="noreferrer"><i className="bi bi-linkedin"></i></Link></li>
                  </ul>
               </div>
            </div>
         </nav>
         <NavbarCTA />
      </header>
   );
};

export default Nav;
