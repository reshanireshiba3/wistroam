import React from 'react';
import './Card.css';




import { FaHeart, FaSignal, FaBolt, FaFolder, FaRocket, FaClock } from 'react-icons/fa';

const Cards = () => {
  const cardData = [
    {
      icon: <FaHeart />,
      title: 'Give customers what they are looking for.',
      desc: 'Let customers see real-time inventory and pricing. and allow them to manage their accounts, orders, and tracking all by themselves.',
    },
    {
      icon: <FaSignal />,
      title: 'Keep control of inventory',
      desc: 'Keep inventory levels accurate across all systems in real-time to prevent overselling and underselling and prevent customer disappointment.',
    },
    {
      icon: <FaBolt />,
      title: 'Ramp up sales and marketing',
      desc: 'Optimize your marketing campaigns and sales funnels by offering smart recommendations and upsells. And proactively meet customer needs.',
    },
    {
      icon: < FaFolder/>,
      title: 'Get access to real-time data.',
      desc: 'with all your data in a centalized hub, you can find what you need in seconds. Cutting down on unforced mistakes and customer service wait times.',
    },
    {
      icon: <FaRocket />,
      title: 'Speed up order fulfilment.',
      desc: 'Automate order fulfillment by expediting data from eCommerce to ERP, and Shipping, improved visibility now offers fewer shipping errors and reliable delivery times.',
    },
    {
      icon: <FaClock />,
      title: 'Update product info with ease.',
      desc: 'Help customers see up-to-date and enriched information by automating product related assets and pricing on your online storefront.',
    },
  ];

  return (
    <section id="features-section" className="cards-section">
      <h1>Create a connected B2B experience.<br /> For your employees & your customers</h1>

      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;