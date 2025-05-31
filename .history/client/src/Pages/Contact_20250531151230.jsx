import React, { useState } from "react";
import "../style/Contact.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

    return (
      <div>
        <Navbar />

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-form-wrapper">
              <h2>Contact Us</h2>
              <p>
                Have questions or want to get involved? Fill out the form below
                or use the contact info on the right.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <label>
                  Name<span className="required">*</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  Email<span className="required">*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                  />
                </label>

                <label>
                  Subject<span className="required">*</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                </label>

                <label>
                  Message<span className="required">*</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    rows="5"
                  />
                </label>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Our Contact Information</h3>
              <p>
                <strong>Address:</strong> 123 Jeevan Dhara Lane, Cityville,
                State, 12345
              </p>
              <p>
                <strong>Phone:</strong> +1 800 123 4567
              </p>
              <p>
                <strong>Email:</strong> support@jeevandhara.org
              </p>
              <p>
                <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
            </section>
            <Footer/>
      </div>
    );
}
