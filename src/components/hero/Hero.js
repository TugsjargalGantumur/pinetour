import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="hero-container">
      <div>
        <span id="hero-title">Khuvsgul Lake</span>
      </div>

      <div>
        <span id="hero-subtitle">Trip</span>
      </div>

      <div id="hero-image-container">
        <img src="hero-images/hushuu.png" alt="Nature" />
        <img src="hero-images/hiid.png" alt="Nature" />
        <img src="hero-images/gernuud.png" alt="Nature" />
        <img src="hero-images/mod.png" alt="Nature" />
      </div>
    </div>
  );
};
