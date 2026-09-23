import React from "react";
import "./SlideImage.css";

import product from "../../assets/product.jpeg";
import call from "../../assets/call.jpeg";
import work from "../../assets/work.png";

const slideData = [
  {
    title: "Why Wistroam?",
    subtitle: "It's Surprisingly Simple",
    desc1:
      "Connect your systems in a few clicks with our out-of-the-box pipelines. Or let our team customize integrations for any system that has an API.",
    desc2:
      "Easily manage exceptions, make changes, and view detailed analytics and forecasts.",
    image: product,
  },
  {
    title: "Surprisingly Powerful",
    desc1:
      "Set it, test it, and forget it. Wistroam runs reliably in the background with no maintenance required.",
    desc2:
      "Automated bi-directional data transfers work in real-time or at scheduled intervals. There is no limit to the amount of data you can sync.",
    image: call,
  },
  {
    title: "No Learning Curve for Non-Programmers",
    desc1:
      "You don't need to be a technical expert to use Wistroam. The dashboard is simple, intuitive, and easy to navigate.",
    desc2:
      "Reporting is clear and useful. If an error occurs, such as a failed sync, you'll receive a real-time email notification so you can respond quickly.",
    image: work,
  },
];

const SlideImage = () => {
  return (
    <div id="integration-section">
      {slideData.map((item, index) => (
        <div key={index} className="slide-section">
          <h1 className="main-title">{item.title}</h1>

          {item.subtitle && (
            <h2 className="sub-title">{item.subtitle}</h2>
          )}

          <p className="description1">{item.desc1}</p>
          <p className="description2">{item.desc2}</p>

          <div className="slide-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideImage;