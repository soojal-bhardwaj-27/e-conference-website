import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import rafflesLogo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a 
          href="https://rafflesuniversity.edu.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="navbar-logo"
        >
          <img src={rafflesLogo} alt="Raffles University" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>About University</Link>
          <Link to="/call-for-papers" className="nav-link" onClick={toggleMenu}>Call for Papers</Link>
          <Link to="/schedule" className="nav-link" onClick={toggleMenu}>Schedule</Link>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          <Link to="/register" className="nav-link register-btn" onClick={toggleMenu}>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;