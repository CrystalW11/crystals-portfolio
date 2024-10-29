/** @format */

import React from "react";
import herobg from "../assets/herobg.png"


const HeroBackground = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <img
        src="/path/to/herobg.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroBackground;
