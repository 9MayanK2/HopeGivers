import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",import React from "react";
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
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/feedback/submit", form);
      toast.success(res.data.message);
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <section className="contact-section">
        <h2 className="contact-heading">We Value Your Feedback</h2>
        <p className="contact-intro">
          Let us know your thoughts about our blood donation platform. Your input helps us grow!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" className="form-input" value={form.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" rows="4" className="form-textarea" value={form.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="contact-button">Submit Feedback</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Feedback;
