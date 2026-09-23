import React, { useState, useEffect } from 'react';
import './Company.css';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img10 from '../../assets/img10.jpeg';

const Company = () => {
  const companyImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 2) % companyImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [companyImages.length]);

  return (
    <section id="company-section" className="company">
      <h1>Built for fast-growing,mid-market distributors</h1>
      <p> To keep up with their unique business, customization, and scalability preferences.</p>

      <div className="company-slider">
        <img
          src={companyImages[currentIndex]}
          alt="Company Logo 1"
          className="company-logo"
        />

        <img
          src={companyImages[(currentIndex + 1) % companyImages.length]}
          alt="Company Logo 2"
          className="company-logo"
        />
      </div>
       

      {/* Horizontal line */}
      <hr className="company-line" />
      


    </section>
  );
};

export default Company;