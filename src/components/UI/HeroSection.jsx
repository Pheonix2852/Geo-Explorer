import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Geo Explorer</h1>
          <p className="paragraph">
            Dive into an interactive journey across continents, countries, and
            cultures. With rich visuals, detailed maps, and insightful
            information, discover the wonders of our planet from the palm of
            your hand. Start your adventure today! 🌍✨
          </p>
          <button className="btn btn-inline btn-darken bg-white+box">
            Start Exploring <FaArrowRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="world" className="banner-image" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
