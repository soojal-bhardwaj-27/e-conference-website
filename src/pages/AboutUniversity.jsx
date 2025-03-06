import React from 'react';
import './AboutUniversity.css';
import vcImage from '../assets/vcsir.jpg';
import convenerImage from '../assets/deansir.jpg';

const AboutUniversity = () => {
  return (
    <div className="about-page">
      <section className="university-intro">
        <h1>About Raffles University</h1>
        <p>
          Raffles University, established under the Raffles University, Neemrana Act, 2011, is a premier institution of higher learning committed to excellence in education. Located in Neemrana, Rajasthan, the university offers diverse programs across multiple disciplines including Engineering, Management, Law, and more. With state-of-the-art infrastructure and experienced faculty, we strive to provide quality education that prepares students for global challenges.
        </p>
        <a 
          href="https://rafflesuniversity.edu.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="learn-more-btn"
        >
          Learn More
        </a>
      </section>

      <section className="messages-section">
        <div className="message-card">
          <h2>Message from the Vice Chancellor</h2>
          <div className="profile-content">
            <img src={vcImage} alt="Vice Chancellor" className="profile-image" />
            <div className="message-content">
              <p>
                As the Vice Chancellor of Raffles University, I am proud to welcome you to AETSI-2025. Our institution has always been at the forefront of technological innovation and academic excellence. This international conference represents our commitment to fostering research, innovation, and collaboration across borders. I believe that through such platforms, we can create meaningful dialogue and drive positive change in the field of engineering and technology. I extend my best wishes to all participants and look forward to the groundbreaking discussions and insights that will emerge from this conference.
              </p>
              <div className="profile-info">
                <h3>President, Prof. (Dr.) Rajender Sangwan, FNA, FNASc, FNAAS</h3>
                <p>Vice Chancellor</p>
                <p>Raffles University, Neemrana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="message-card">
          <h2>Message from the Convener</h2>
          <div className="profile-content">
            <img src={convenerImage} alt="Convener" className="profile-image" />
            <div className="message-content">
              <p>
                As the Professor of the School of Engineering and Technology and Convener of AETSI-2025, I am delighted to welcome you to this international conference. In today's rapidly evolving technological landscape, it is crucial that we create platforms for sharing cutting-edge research and innovations. AETSI-2025 aims to bring together researchers, academicians, and industry experts to exchange ideas and foster collaborations that will shape the future of technology. We look forward to your valuable contributions and participation in making this conference a great success.
              </p>
              <div className="profile-info">
                <h3>Dr. Jaspreet Hira</h3>
                <p>Convener, AETSI-2025</p>
                <p>Professor, School of Engineering and Technology</p>
                <p>Raffles University, Neemrana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUniversity;