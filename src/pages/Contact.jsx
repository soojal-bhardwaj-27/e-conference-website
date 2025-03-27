import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-info">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <div className="address-block">
            <h2>Raffles University, Neemrana</h2>
            <p>Japanese Zone, NH-8, Neemrana</p>
            <p>Rajasthan 301020, India</p>
          </div>
          
          <div className="contact-block">
            <div className="contact-item">
              <h3>Phone</h3>
              <p>Phone: +91 9017764480 (Dr. Ajay Kumar)</p>
              <p>phone: +91 9560149127 (Dr. Jaspreet Hira)</p>
              <p className="timing">Monday to Saturday, 9AM to 5PM</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <a href="aetsi2025@rafflesuniversity.edu.in">info@rafflesuniversity.edu.in</a>
              <p className="subtitle">Email us your query</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.5168612805387!2d76.39076427529697!3d27.991416976733883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2e474b5760d%3A0x9e6c6c12651f6e89!2sRaffles%20University!5e0!3m2!1sen!2sin!4v1708351851811!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Raffles University Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;