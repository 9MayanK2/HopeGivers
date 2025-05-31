import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apis from "../../utils/apis";
import "./navbar.css";
import logoImage from "../../assets/HomeImage1.png";

const api = apis();

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; // Do not redirect; just stay logged out

    fetch(api.getHomeData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer `${ token },`
      },
    })
      .then((res) => res.json())
  .then((data) => {
    if (data.status && data.name) {
      setUserName(data.name);
    } else {
      localStorage.removeItem("token");
    }
  })
  .catch(() => {
    localStorage.removeItem("token");
  });
  }, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  setUserName("");
  navigate("/login");
};

return (
  <nav className="navbar">
    <div className="logo">
      <img src={logoImage} alt="Logo" />
      <span>HopeGivers</span>
    </div>

    <ul className="nav-links">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/feedback/form">Feedback</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>

    <div className="right-controls">
      {userName ? (
        <div
          className="profile"
          onClick={() => setShowDropdown((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">
            {userName.charAt(0).toUpperCase()}
          </div>
          {showDropdown && (
            <div className="dropdown">
              <div onClick={() => navigate("/dashboard")}>Dashboard</div>
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      ) : (
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </div>
  </nav>
);
};

export default Navbar;