import React, { useEffect, useState } from 'react';
import './leaders.css';

import andy from '../../assets/andy.jpeg';
import danny from '../../assets/danny.jpeg';
import neves from '../../assets/neves.jpeg';
import rene from '../../assets/rene.jpeg';

const data = [
  { img: andy, name: "Andy Cipra", role: "CEO, Vitabox", text: "Wistroam helps us exchange data..." },
  { img: danny, name: "Danny", role: "Ops Head", text: "Improved workflow efficiency..." },
  { img: neves, name: "Neves", role: "IT Manager", text: "Reliable system and support..." },
  { img: rene, name: "Rene", role: "Director", text: "Easy integration system..." },
];

const Leaders = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // create 4-card window
  const getCards = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      cards.push(data[(index + i) % data.length]);
    }
    return cards;
  };

  return (
    <div id="testimonials-section" className="leaders">

      <h1>These operational leaders use Wistroam to automate their manual processes.</h1>
      <h2>Read more stories</h2>

      <div className="leaders-container">

        {getCards().map((item, i) => (
          <div className="leaders-card" key={i}>
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <span>{item.role}</span>
            <hr />
            <p>{item.text}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Leaders;