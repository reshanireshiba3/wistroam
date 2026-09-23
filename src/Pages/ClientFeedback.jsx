import React from "react";
import "../Components/Styles/ClientFeedback.css";

const ClientFeedback = () => {
  return (
    <div className="feedback-page">
      <h1>Client Feedback</h1>

      <div className="feedback-card">
        <p>
          "The team delivered our project on time and exceeded our expectations.
          Their professionalism and technical expertise were outstanding."
        </p>
      </div>

      <div className="feedback-card">
        <p>
          "Excellent communication, high-quality development, and reliable
          support throughout the project."
        </p>
      </div>

      <div className="feedback-card">
        <p>
          "We highly recommend their services for web development, mobile apps,
          and business automation solutions."
        </p>
      </div>
    </div>
  );
};

export default ClientFeedback;