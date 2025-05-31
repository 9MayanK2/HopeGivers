import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
import "../style/Feedback.css";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apis().donorRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
       oast.success(`Thank you ${formData.name} for your feedback!`);
        setTimeout(() => {
          // For example, redirect or clear form here
          navigate('/home');
        }, 3000);
      } else {
        toast.error(result.message || 'There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error('There was an error submitting the form.');
    }
  };

  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <div className="contact-left">
          <h2>We Value Your Feedback</h2>
          <p>
            Let us know your thoughts about our blood donation platform. Your input helps us grow!
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
              <input type="email" name="email" placeholder="you@example.com" required onChange={handleChange} />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="full-width"
              required
              onChange={handleChange}
            />

            <textarea
              className="full-width"
              rows="5"
              name="message"
              placeholder="Share your feedback with us..."
              required
              onChange={handleChange}
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
