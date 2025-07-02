import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>Coherence Quest</Link>
      
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      
      <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/hackathons" className="nav-link" onClick={closeMenu}>Hackathons</Link></li>
        <li><Link to="/courses" className="nav-link" onClick={closeMenu}>Courses</Link></li>
        <li><Link to="/opportunities" className="nav-link" onClick={closeMenu}>Opportunities</Link></li>
        <li><Link to="/contact" className="nav-btn" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;