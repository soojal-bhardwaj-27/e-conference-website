import React from 'react';
import './Schedule.css';
import speaker1 from '../assets/speaker1.jpg';
import speaker2 from '../assets/speaker2.jpg';
import speaker3 from '../assets/speaker3.jpg';
import speaker4 from '../assets/speaker4.jpg';

const Schedule = () => {
  return (
    <div className="schedule-page">
      <section className="speakers-section">
        <h1>SPEAKER GUIDELINES</h1>
        
        <div className="speakers-container">
          <div className="speakers-row">
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={speaker1} alt="Dr. Satinderbal Gupta" />
              </div>
              <h3>Dr. Satinderbal Gupta</h3>
              <p className="position">Professor, Dept. of Computer Science & Engineering</p>
              <p className="institution">Indira Gandhi University, Meerpur, Rewari, Haryana</p>
            </div>
          
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={speaker2} alt="Dr. Rakesh Kumar" />
              </div>
              <h3>Dr. Rakesh Kumar</h3>
              <p className="position">Professor, Dept. of Computer Science & Engineering</p>
              <p className="institution">Central University of Haryana, Pali, Haryana</p>
            </div>
          </div>
          
          <div className="speakers-row">
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={speaker3} alt="Dr. Savita Kumari Sheoran" />
              </div>
              <h3>Dr. Savita Kumari Sheoran</h3>
              <p className="position">Professor, Dept. of Computer Science & Engineering</p>
              <p className="institution">Indira Gandhi University, Rewari, Haryana</p>
            </div>
          
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={speaker4} alt="Dr. Raj Kumar Yadav" />
              </div>
              <h3>Dr. Raj Kumar Yadav</h3>
              <p className="position">Associate Professor, UIET</p>
              <p className="institution">Maharshi Dayanand University, Rohtak, Haryana</p>
            </div>
          </div>
        </div>

        <div className="important-dates">
          <h2>Important Dates</h2>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paper Abstract Submission</td>
                <td>MARCH 5, 2025</td>
              </tr>
              <tr>
                <td>Acceptance of Paper Abstract</td>
                <td>MARCH 8, 2025</td>
              </tr>
              <tr>
                <td>Full Length of Paper Submission</td>
                <td>March 7, 2025</td>
              </tr>
              <tr>
                <td>Camera Ready Paper</td>
                <td>March 11, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="conference-ideas">
          <h2>IDEA OF THE CONFERENCE</h2>
          <div className="ideas-grid">
            <div className="idea-card">Augmented & Virtual Reality</div>
            <div className="idea-card">Artificial Intelligence</div>
            <div className="idea-card">Cloud Technology</div>
            <div className="idea-card">Cyber Physical Systems & Cyber Security</div>
            <div className="idea-card">Engineering Education of the Future</div>
            <div className="idea-card">Industry 4.0</div>
            <div className="idea-card">Learning in Virtual Environments</div>
            <div className="idea-card">Smart Education</div>
            <div className="idea-card">Virtual & Remote Labs</div>
            <div className="idea-card">Green Automation 4.0</div>
          </div>
        </div>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <h3>Presentation Preparation</h3>
            <ul>
              <li>Prepare clear, visually appealing slides with large fonts and high-contrast colors</li>
              <li>Keep content concise and engaging, avoiding text-heavy slides</li>
              <li>Include practical examples and case studies</li>
              <li>Stay within 15-20 minute time limit</li>
            </ul>
          </div>

          <div className="guideline-card">
            <h3>Technical Setup</h3>
            <ul>
              <li>Use stable internet connection</li>
              <li>Test microphone, webcam and screen-sharing beforehand</li>
              <li>Ensure proper lighting and quiet environment</li>
              <li>Keep backup presentations in multiple formats</li>
            </ul>
          </div>

          <div className="guideline-card">
            <h3>Delivery & Engagement</h3>
            <ul>
              <li>Begin with an engaging introduction</li>
              <li>Maintain conversational and energetic tone</li>
              <li>Interact through Q&A sessions and polls</li>
              <li>Speak clearly at a moderate pace</li>
            </ul>
          </div>

          <div className="guideline-card">
            <h3>Virtual Etiquette & Post-Presentation</h3>
            <ul>
              <li>Join 10 minutes before scheduled time</li>
              <li>Mute when not speaking</li>
              <li>Be available for networking session</li>
              <li>Share presentation materials if permitted</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;