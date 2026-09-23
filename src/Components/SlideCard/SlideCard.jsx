import React, { useState, useEffect } from "react";
import "./SlideCard.css";

import flow from "../../assets/flow.jpeg";
import integ from "../../assets/integ.jpg";
import connect from "../../assets/connect.png";
import manag from "../../assets/manag.png";

const slides = [
  { title: "Workflow", image: flow },
  { title: "Integrations", image: integ },
  { title: "Connect Your Favorite Systems", image: connect },
  { title: "API Manager", image: manag },
];

const SlideCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="workflow-section" className="slide-wrapper">
      <div className="slide-content">
        <h1 className="main-title">Take a look how it works</h1>

        <h1 className="slide-heading">
          {slides[currentSlide].title}
        </h1>

        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
        />
      </div>
    </div>
  );
};

export default SlideCard;