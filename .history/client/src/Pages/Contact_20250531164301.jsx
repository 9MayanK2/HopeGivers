// ContactSection.jsx
import React from "react";
import "../style/Contact.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <div className="contact-left">
          <h2>Need Help? Contact Us.</h2>
          <p>
            Our Team Is Here To Assist You With Blood Donation, Requests, And
            Any Inquiries.
          </p>
          <div className="contact-info">
            <p>📞 08099944333</p>
            <p>✉ bloocstuff@gmail.com</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="e.g. Lukmon Olabode Ilebiiy"
                required
              />
              <input
                type="email"
                placeholder="lukmonilebiyi@gmail.com"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject of mail"
              className="full-width"
            />
            <textarea
              placeholder="Tell us more about..."
              rows="5"
              className="full-width"
              required
            ></textarea>
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;