import React from "react";
import "./style/Home.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import bloodDonationImg from "./assets/blood-donation.png";
import { FaSearch, FaPhoneAlt, FaRegListAlt } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import HowItWorkImg from "./assets/HowItWork.png";
import featureImage from "./assets/Features.png";
import { Link } from "react-router-dom";
import ChatBot from "./components/bot/ChatBot";



const bloodData = [
  { type: "A+", bags: 0 },
  { type: "A-", bags: 10 },
  { type: "O+", bags: 30 },
  { type: "O-", bags: 50 },
  { type: "AB+", bags: 80 },
  { type: "AB-", bags: 100 },
];

const BloodDrop = ({ type, bags }) => {
  const fillPercentage = Math.min(bags, 100); // cap at 100 for visual
  return (
    <div className="blood-type">
      <div className="blood-drop">
        <div
          className="blood-fill"
          style={{ height: `${fillPercentage}%` }}
        ></div>
      </div>
      <div className="blood-label">{type}</div>
      <div className="blood-bags">{bags} Bags Available</div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* ---------------------Blood Donation Content----------------------*/}.
      <section className="blood-donation">
        <div className="blood-content">
          <h1>Blood Donation</h1>
          <p>
            A blood donation occurs when a person voluntarily has blood drawn
            and used for transfusions and/or made into biopharmaceutical
            medications by a process called fractionation (separation of whole
            blood components). Donation may be of whole blood, or of specific
            components directly (apheresis). Blood banks often participate in
            the collection process as well as the procedures that follow it.
          </p>
          <Link to="/donor/register">
            {" "}
            <button className="know-more-btn">Register Now</button>
          </Link>
        </div>

        <div className="blood-image">
          <img src={bloodDonationImg} alt="Blood donation illustration" />
          <div className="search-bar">
            <input type="text" placeholder="Search for cities and drives" />
            <Link to="/contactus">
              <button>
                <FaSearch />
              </button>
            </Link>
          </div>
        </div>

        <Link to="/contactus">
          <div className="floating-call-btn">
            <FaPhoneAlt />
          </div>
        </Link>
      </section>
      {/* ---------------------Donate and find Blood----------------------*/}
      <div className="container">
        <h1 className="title">Real-Time Blood Availability</h1>
        <p className="subtitle">
          Check The Latest Blood Supply Levels And Find The Nearest Donation
          Center.
        </p>
        <div className="blood-list">
          {bloodData.map((b) => (
            <BloodDrop key={b.type} type={b.type} bags={b.bags} />
          ))}
        </div>
        <div className="buttons">
          <button className="donate">Donate Blood →</button>
          <button className="request">Request Blood →</button>
        </div>
      </div>
      {/* ---------------------join cause----------------------*/}
      <section className="join-cause">
        <h2 className="join-title">Join the Cause</h2>
        <p className="join-subtitle">
          Join our cause and help us save more lives. Everyone should have the
          right to get a blood transfusion.
        </p>

        <div className="join-grid">
          <div className="join-card">
            <h3>Find Donors in your Area</h3>
            <p>
              Get connected in a matter of minutes at zero cost. Our App ships
              with a smart system that finds the closest blood donors. Our
              automated blood donation system works efficiently whenever someone
              needs a blood transfusion.
            </p>
          </div>

          <div className="join-card">
            <h3>Answer to Emergencies</h3>
            <p>
              As soon as a new blood request is raised, it is routed among our
              local volunteer blood donors. We know time matters! So we keep you
              updated with real-time notifications sent directly to you via SMS
              or the mobile app.
            </p>
          </div>

          <div className="join-card">
            <h3>Made for Everyone</h3>
            <p>
              All you need to do is send a text message to 8655, “blood need
              (blood-group) in (your-city)” in any language you want. Our system
              is smart enough to understand anything you write and helps you
              find a donor within minutes if not seconds.
            </p>
          </div>
        </div>
      </section>
      {/* ---------------------How it work----------------------*/}
      <section className="how-it-works">
        <h2 className="how-title">How it Works</h2>
        <p className="how-subtitle">
          Our App is made to be as simple as possible. Download it for Free at
          the relevant app store.
        </p>
        <div className="how-content">
          <div className="how-images">
            <img src={HowItWorkImg} alt="App Screen 1" />
          </div>
          <div className="how-text">
            <p>
              All you need to do is send a text message to 8655, "blood need
              (blood-group) in (your-city)", in any language you want.
            </p>
            <ul className="how-list">
              <li>
                <FiCheckCircle color="red" /> Register
              </li>
              <li>
                <FiCheckCircle color="red" /> Fill your Profile
              </li>
              <li>
                <FiCheckCircle color="red" /> Find Blood
              </li>
              <li>
                <FiCheckCircle color="red" /> View pending Requests
              </li>
              <li>
                <FiCheckCircle color="red" /> Make blood Requests
              </li>
              <li>
                <FiCheckCircle color="red" /> Share and HopeGivests
              </li>
            </ul>
            <button className="read-more-btn">Read more</button>
          </div>
        </div>
      </section>
      {/* ---------------------Features----------------------*/}
      <section className="features-section">
        <div className="features-content">
          <h2 className="features-title">Our Features</h2>
          <p className="features-subtitle">
            Discover the core functionalities that make our Blood Management
            System effective and efficient.
          </p>

          <div className="feature-card blue">
            <div className="icon">
              <FaRegListAlt />
            </div>
            <div>
              <h3>Donor-Recipient Matching</h3>
              <p>
                Smart algorithms match donors with recipients based on blood
                type, location, and urgency.
              </p>
            </div>
          </div>

          <div className="feature-card green">
            <div className="icon">
              <FaRegListAlt />
            </div>
            <div>
              <h3>Urgent Notifications</h3>
              <p>
                Real-time alerts for critical cases to ensure rapid donor
                response and availability.
              </p>
            </div>
          </div>

          <div className="feature-card orange">
            <div className="icon">
              <FaRegListAlt />
            </div>
            <div>
              <h3>Track Records</h3>
              <p>
                Keep a transparent record of donations and transfusions for
                medical and legal purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}