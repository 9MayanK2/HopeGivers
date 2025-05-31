import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./style/Home.css"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

export default function BloodDonationUI() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <Navbar />
      {/* Hero */}
      <header className="hero">
        <h2>Give the Gift of Life</h2>
        <p>
          Your blood donation can save lives. Join our community of donors
          today.
        </p>
        <button className="primary-btn" onClick={() => navigate("/registration/receiver")}>Become a Donor</button>
      </header>

      {/* Info Cards */}
      <section className="cards">
        <div className="card">
          <h3>Why Donate?</h3>
          <p>
            Every 2 seconds, someone needs blood. Your donation makes a real
            difference.
          </p>
        </div>
        <div className="card">
          <h3>Who Can Donate?</h3>
          <p>
            Most healthy individuals aged 18-65 can donate. Learn more about
            eligibility.
          </p>
        </div>
        <div className="card">
          <h3>How It Works</h3>
          <p>
            Simple, safe, and quick. The donation process takes about 30
            minutes.
          </p>
        </div>
      </section>

      {/* Join the Cause */}
      <section className="join-cause">
        <h2>Join the Cause</h2>
        <div className="join-cards">
          <div className="join-card">
            <h3>Find Donors in Your Area</h3>
            <p>
              Connect with local donors quickly and easily through our real-time
              matching system.
            </p>
          </div>
          <div className="join-card">
            <h3>Answer in Emergencies</h3>
            <p>
              Respond promptly to emergency requests and be a lifesaver when it
              matters most.
            </p>
          </div>
          <div className="join-card">
            <h3>Made for Everyone</h3>
            <p>
              Whether you're a first-time donor or a regular hero, our platform
              is built to support you.
            </p>
          </div>
          <div className="join-card">
            <h3>You're Someone's Hero</h3>
            <p>
              Each drop you give brings hope to someone in need. Be the hero in
              someone’s story.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Ready to Save Lives?</h3>
        <button className="primary-btn" onClick={() => navigate("/donor/register")}>Register Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HopeGivers. All rights reserved.</p>
      </footer>
      
    </div>
  );
}