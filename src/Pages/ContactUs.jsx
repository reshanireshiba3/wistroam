import React, { useState } from "react";
import "../Components/Styles/Contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="info-card">
          <h3>📧 Email</h3>
          <p>info@yourcompany.com</p>
        </div>

        <div className="info-card">
          <h3>📱 Phone / WhatsApp</h3>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="form-card">
        <h2>Send Us a Message</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;