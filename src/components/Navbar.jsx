import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import rafflesLogo from '../assets/logo.png';

const Navbar = () => {
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
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About University</Link>
          <Link to="/call-for-papers" className="nav-link">Call for Papers</Link>
          <Link to="/schedule" className="nav-link">Schedule</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/register" className="nav-link register-btn">Register</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;