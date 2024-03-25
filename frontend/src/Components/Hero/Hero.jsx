import React from "react";
import image_hero from "../../Assets/image_hero.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className="hero-text">
          New
          <br />
          collections
          <br />
          for everyone
          <br />
        </p>
      </div>
      <div className="hero-right">
        <img src={image_hero} alt="" />
      </div>
    </div>
  );
};
