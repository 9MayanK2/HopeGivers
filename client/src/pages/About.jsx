import React from "react";
import "../style/About.css";
import Navbar from "../components/navbar/Navbar";

import missionImg from "../assets/mission.png";
import serviceImg from "../assets/service.png";
import communityImg from "../assets/community.png";
import Footer from "../components/navbar/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="about-us-container">
        <h1>About HopeGivers</h1>
        <p className="intro">
          HopeGivers is a life-saving blood donation platform that connects
          donors directly with recipients. We are driven by compassion,
          community, and the belief that giving blood is giving hope.
        </p>

        <div className="section">
          <div className="section-text">
            <h2>Our Vision</h2>
            <p>
              We envision a world where every individual in need of blood finds
              a donor instantly. With HopeGivers, we’re bridging the gap between
              urgent need and generous hearts.
            </p>
          </div>
          <img src={missionImg} alt="Our Vision" className="section-image" />
        </div>

        <div className="section reverse">
          <img src={serviceImg} alt="Our Services" className="section-image" />
          <div className="section-text">
            <h2>Our Services</h2>
            <ul>
              <li>
                <strong>Donor-Recipient Matching:</strong> Smart algorithms
                match people in real-time.
              </li>
              <li>
                <strong>Urgent Notifications:</strong> Get notified when lives
                need saving near you.
              </li>
              <li>
                <strong>Verified Accounts:</strong> Build trust through a secure
                community.
              </li>
              <li>
                <strong>Track Records:</strong> Maintain donation and request
                history.
              </li>
              <li>
                <strong>Support & Guidance:</strong> Access educational tools
                and community help.
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-text">
            <h2>Why Choose HopeGivers?</h2>
            <p>
              We are more than just an app—we are a mission. HopeGivers is built
              on the idea that even one drop of blood can be the difference
              between life and loss. Join us in making every drop count.
            </p>
          </div>
          <img src={communityImg} alt="HopeGivers Community" className="section-image" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
