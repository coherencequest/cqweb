import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Coherence Quest</div>
      <ul className="navbar-links">
        <li><Link to="/hackathons" className="nav-link">Hackathons</Link></li>
        <li><Link to="/courses" className="nav-link">Courses</Link></li>
        <li><Link to="/opportunities" className="nav-link">Opportunities</Link></li>
        <li><Link to="/contact" className="nav-btn">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 