import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="conference-container">
          <h2 className="conference-type">
            Two Days National E-Conference on
          </h2>
          <h1 className="conference-title">
            Applications of Emerging Technologies in Science and Innovations
          </h1>
          <div className="conference-code">AETSI-2025</div>
        </div>

        <div className="organizer-container">
          <div className="organizer-info">
            <div className="info-item">
              <span className="label">Organised by</span>
              <span className="value">School of Engineering and Technology</span>
            </div>
            <div className="info-item">
              <span className="label">Sponsored by</span>
              <span className="value">RAFFLES UNIVERSITY, Neemrana</span>
            </div>
          </div>

          <div className="conference-meta">
            <div className="date-badge">
              <span className="date-label">Conference Dates</span>
              <span className="date-value">April 24-25, 2025</span>
            </div>
            <Link to="/register" className="register-button">
              Register Now
              <span className="button-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;