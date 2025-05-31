import React from "react";
import "../style/Feedback.css"; // Should match the CSS provided earlier
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";

const Feedback = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <div className="contact-left">
          <h2>We Value Your Feedback</h2>
          <p>
            Let us know your thoughts about our blood donation platform. Your
            input helps us grow!
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="you@example.com" required />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="full-width"
              required
            />

            <textarea
              className="full-width"
              rows="5"
              placeholder="Share your feedback with us..."
              required
            ></textarea>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Feedback;