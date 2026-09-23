import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  { number: '01', title: 'Web development', text: 'Purposeful websites and digital experiences built around your audience.', path: '/website-development' },
  { number: '02', title: 'Ecommerce', text: 'Online stores that make it easier for people to discover and buy from you.', path: '/ecommerce-websites' },
  { number: '03', title: 'Business systems', text: 'Web apps, APIs, and automation that help your team do better work.', path: '/web-applications' },
];

const Home = () => {
  return (
    <div id="home-section" className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-copy">
          <p className="home-kicker">Wistroam / Digital solutions</p>
          <h1 id="home-title">Technology with a human point of view.</h1>
          <p className="home-lead">We help businesses turn ideas into useful websites, applications, and digital systems that are clear, reliable, and ready to grow.</p>
          <div className="home-actions">
            <Link className="home-button" to="/contact-us">Start a project <span aria-hidden="true">↗</span></Link>
            <a className="home-text-link" href="#services-section">See what we do <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="home-visual" aria-hidden="true">
          <div className="visual-sun" />
          <div className="visual-grid" />
          <div className="visual-label">Ideas<br /><strong>in motion</strong></div>
        </div>
      </section>

      <div className="home-stats" aria-label="Wistroam capabilities">
        <span><strong>Strategy</strong> with substance</span>
        <span><strong>Design</strong> with direction</span>
        <span><strong>Technology</strong> that works</span>
      </div>

      <section className="home-services" id="services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="home-kicker">What we can build together</p>
          <h2 id="services-title">A practical partner for your next chapter.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <Link className="service-item" to={service.path} key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-closing">
        <p className="home-kicker">Have a good problem?</p>
        <h2>Let&apos;s make something useful.</h2>
        <Link className="home-button" to="/contact-us">Talk to Wistroam <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
};

export default Home;