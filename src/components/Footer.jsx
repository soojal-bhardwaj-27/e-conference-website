import React from 'react';
import './Footer.css';

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
          <p>Email: info@e-conference.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/RafflesUni/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/rafflesuni" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/company/rafflesuniversity-neemrana/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href ="https://www.instagram.com/raffles_university/?hl=en"target = "_blank" rel ="noopener noreferrer">INSTAGRAM</a>
            <a href ="https://www.youtube.com/c/rafflesuniversity"target = "_blank" rel ="noopener noreferrer">Youtube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with ❤️ by SOET</p>
        <p>&copy; 2024 E-Conference. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;