import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <p>
            Raffles University is committed to delivering excellence in education and research. With a state-of-the-art campus, world-class faculty, and a student-centric approach, we strive to create leaders of tomorrow. Explore our diverse academic programs and experience holistic development in an enriching environment.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: aetsi2025@rafflesuniversity.edu.in</p>
          <p>Phone: +91 9017764480 (Dr. Ajay Kumar)</p>
          <p>phone: +91 9560149127 (Dr. Jaspreet Hira)</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/RafflesUni/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="social-icon" />
            </a>
            <a href="https://x.com/rafflesuni" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/rafflesuniversity-neemrana/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/raffles_university/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="social-icon" />
            </a>
            <a href="https://www.youtube.com/c/rafflesuniversity" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Create by SOET</p>
        <p>&copy; 2024 E-Conference. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;