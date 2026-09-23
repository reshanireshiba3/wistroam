import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="footer-contact">
          <h3 className="footer-title">
            Contact
          </h3>

          <p>
            <a href="mailto:info@yourcompany.com">
              info@yourcompany.com
            </a>
          </p>

          <p>
            <a href="mailto:support@yourcompany.com">
              support@yourcompany.com
            </a>
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-title">
            Resources
          </h3>

          <p><Link to="/about-us">About Us</Link></p>
          <p><Link to="/contact-us">Contact Us</Link></p>
          <p><Link to="/website-development">Website Development</Link></p>
          <p><Link to="/ecommerce-websites">Ecommerce Websites</Link></p>
          <p><Link to="/mobile-app-development">Mobile App Development</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;