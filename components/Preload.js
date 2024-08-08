import LogoIcon from "../assets/LogoIcon.jsx";
import React from 'react';
import Image from "next/image.js";


const Preload = () => {
  return (
    <div className="preload">
      <div className="spinner"> <Image src={LogoIcon}
        alt="no img"
      />
      </div>
      
    </div>
  );
}

export default Preload;
