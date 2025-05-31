import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apis from '../../utils/apis';
import './navbar.css'; // Your styling file
import logoImage from '../../assets/HomeImage1.png'; // Adjust path if needed

const api = apis();

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/login');
      return;
    }

    fetch(api.getHomeData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data.status && data.name) {
        setUserName(data.name);
      } else {
        console.log('Token invalid or user not found, redirecting...');
        navigate('/login');
      }
    })
    .catch(err => {
      console.log('API error:', err.message);
      navigate('/login');
    });
}, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        <span>HopeGivers</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/feedback/form">Feedback</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
      <div
        className="profile"
        onClick={() => setShowDropdown((prev) => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <div className="avatar">{userName ? userName.charAt(0).toUpperCase() : '?'}</div>
        {showDropdown && (
          <div className="dropdown">
            <div onClick={() => navigate('/dashboard')}>Dashboard</div>
            <div onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
