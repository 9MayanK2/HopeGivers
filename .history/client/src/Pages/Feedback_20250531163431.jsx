import React from "react";
import "../style/Feedback.css"; // Reuse ContactUs.css styles or rename accordingly
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";

const Feedback = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <h2 className="contact-heading">We Value Your Feedback</h2>
        <p className="contact-intro">
          Let us know your thoughts about our blood donation platform. Your
          input helps us grow!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="form-input"
              placeholder="Feedback subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="form-textarea"
              placeholder="Share your feedback with us..."
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Submit Feedback
          </button>
        </form>
          </section>
          <Footer/>
    </div>
  );
};

export default Feedback;
