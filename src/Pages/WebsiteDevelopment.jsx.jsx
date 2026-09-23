import React from "react";
import "../Components/Styles/Services.css";


function WebsiteDevelopment() {
  return (
    <div className="website-development">
      <section className="hero">
        <h1>Website Development</h1>
        <p>
          We create modern, responsive, and high-performance websites that help
          businesses grow online and reach more customers.
        </p>
      </section>

      <section className="about">
        <h2>What is Website Development?</h2>
        <p>
          Website development is the process of designing, building, testing,
          and maintaining websites. It combines frontend and backend
          technologies to create user-friendly and scalable digital solutions.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-card">
          <h3>Custom Website Development</h3>
          <p>
            Tailor-made websites designed according to your business needs and
            objectives.
          </p>
        </div>

        <div className="service-card">
          <h3>Responsive Web Design</h3>
          <p>
            Websites optimized for desktops, tablets, and mobile devices.
          </p>
        </div>

        <div className="service-card">
          <h3>E-Commerce Development</h3>
          <p>
            Secure online stores with payment gateways, product management, and
            order tracking.
          </p>
        </div>

        <div className="service-card">
          <h3>CMS Development</h3>
          <p>
            Easy-to-manage websites that allow content updates without coding.
          </p>
        </div>

        <div className="service-card">
          <h3>Website Maintenance</h3>
          <p>
            Ongoing support, security updates, performance monitoring, and bug
            fixes.
          </p>
        </div>
      </section>

      <section className="process">
        <h2>Our Development Process</h2>
        <ol>
          <li>Requirement Analysis</li>
          <li>Planning & Strategy</li>
          <li>UI/UX Design</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Testing & Quality Assurance</li>
          <li>Deployment</li>
          <li>Maintenance & Support</li>
        </ol>
      </section>

      <section className="technologies">
        <h2>Technologies We Use</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </section>

      <section className="benefits">
        <h2>Benefits of Professional Website Development</h2>
        <ul>
          <li>Strong Online Presence</li>
          <li>Improved User Experience</li>
          <li>Mobile-Friendly Design</li>
          <li>Better Search Engine Visibility</li>
          <li>Increased Customer Engagement</li>
          <li>Higher Conversion Rates</li>
          <li>Enhanced Security</li>
          <li>Scalable Business Growth</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Ready to Build Your Website?</h2>
        <p>
          Transform your ideas into a powerful digital experience with our
          modern website development solutions.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default WebsiteDevelopment;