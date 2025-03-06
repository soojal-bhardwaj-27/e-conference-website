import React from 'react';
import Header from '../components/Header';
import './Home.css';
import labImage from '../assets/eng.png';
import prizeImage from '../assets/law.png';
import auditoriumImage from '../assets/audi.png';
import chairpersonImage from '../assets/chairperson1.jpg';
import coChairpersonImage from '../assets/chairperson2.jpg';
import viceChairpersonImage from '../assets/chairperson3.jpg';
import wbLogo from '../assets/wb.png';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      <section className="partners-section">
        <h2 className="section-title">Our Partners & Publication Details</h2>
        <div className="publication-info">
          <h3>Publication Information</h3>
          <ul>
            <li><strong>Selection Process:</strong> All papers will undergo through peer review process.</li>
            <li><strong>Publication Options:</strong> Refereed/ISBN no. Book or Web of Science indexed journal.</li>
            <li><strong>Charges:</strong> No additional charges for book publication, concessional page charges for journal.</li>
            <li><strong>Submission:</strong> Submit papers through the registration link.</li>
          </ul>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={labImage} alt="Engineering Lab" />
            <h3>School of Engineering</h3>
            <p>State-of-the-art engineering labs and research facilities equipped with modern technology and tools.</p>
          </div>
          <div className="gallery-item">
            <img src={prizeImage} alt="Prize Distribution" />
            <h3>Prize Distribution</h3>
            <p>Recognition and awards ceremony for outstanding research papers and presentations.</p>
          </div>
          <div className="gallery-item">
            <img src={auditoriumImage} alt="Main Auditorium" />
            <h3>Main Auditorium</h3>
            <p>Spacious auditorium with advanced audio-visual systems for conferences and cultural events.</p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <h2 className="section-title">What Our Chairperson Says</h2>
        <p className="leadership-intro">Insights and vision from our esteemed leadership guiding AETSI-2025.</p>
        
        <div className="leadership-grid">
          <div className="leadership-card">
            <img src={chairpersonImage} alt="Late Shri Vinod Kumar Gomber" />
            <h3>Chairperson</h3>
            <p className="quote">"Be inspired, broaden your horizons, aim for excellence and achieve all your dreams."</p>
            <p className="name">Late Shri Vinod Kumar Gomber</p>
            <p className="position">Chairperson, RAFFLES UNIVERSITY</p>
          </div>

          <div className="leadership-card">
            <img src={coChairpersonImage} alt="Dr. Justice Meena V. Gomber" />
            <h3>Co-Chairperson</h3>
            <p className="quote">"We are dedicated to creating a platform where educators, researchers and industry experts can collaborate and share innovative ideas that will transform the educational landscape through emerging technologies."</p>
            <p className="name">Dr. Justice Meena V. Gomber</p>
            <p className="position">THE SPONSORING BODY, RAFFLES UNIVERSITY</p>
          </div>

          <div className="leadership-card">
            <img src={viceChairpersonImage} alt="Shri Vivek Gomber" />
            <h3>Vice-Chairperson</h3>
            <p className="quote">"Innovation in education is key to preparing our students for the challenges of tomorrow. Through technology and dedication, we can create impactful learning experiences."</p>
            <p className="name">Shri Vivek Gomber</p>
            <p className="position">CHAIRPERSON, RAFFLES UNIVERSITY</p>
          </div>
        </div>
      </section>

      <div className="wb-logo-container">
        <img src={wbLogo} alt="WB Logo" className="wb-logo" />
      </div>
    </div>
  );
};

export default Home;