import React from 'react';
import './CallForPapers.css';
import abstractTemplate from '../assets/Abstract-Format.docx';

function CallForPapers() {
    return (
        <div className="call-papers-page">
            <section className="submission-guidelines">
                <h1>PAPER SUBMISSION GUIDELINES</h1>
                <div className="template-download">
                    <h3>Sample Abstract Format:</h3>
                    <a href={abstractTemplate} download className="download-btn">
                        Download Paper Template
                    </a>
                </div>

                <div className="guidelines-grid">
                    <div className="guidelines-section">
                        <h2>Paper Submission Requirements</h2>
                        <ul>
                            <li>Paper Length: Maximum 8 pages with A4 size sheets</li>
                            <li>Font: Times New Roman</li>
                            <li>Margins: Left - 1.5 inch; Right, Top & Bottom - 1.0 inch</li>
                            <li>Abstract: 11 point italic, single line spacing (after title)</li>
                            <li>Keywords: Maximum 6 keywords</li>
                            <li>Main Text: 12 point normal justified</li>
                            <li>Paragraph Heading: 12 point bold sentence case, 1.5 line spacing</li>
                            <li>Author Requirements: At least one author must register and present the paper</li>
                            <li>Maximum Authors: 4 authors per paper</li>
                            <li>Corresponding Author: Email must be provided</li>
                        </ul>
                    </div>

                    <div className="guidelines-section">
                        <h2>Conference Theme</h2>
                        <p>NECETTE-2025 focuses on the intersection of e-commerce and emerging technologies in education. The conference aims to explore how digital commerce solutions and cutting-edge technologies are transforming the educational landscape.</p>
                        <h3>Key areas include:</h3>
                        <ul>
                            <li>Online learning platforms and e-conference integration</li>
                            <li>Educational technology trends and innovations</li>
                            <li>Digital transformation in academic institutions</li>
                            <li>Future of technology-enabled education</li>
                        </ul>
                    </div>

                    <div className="guidelines-section">
                        <h2>Objectives of the Conference</h2>
                        <ul>
                            <li>Knowledge Sharing: Platform for researchers, academicians, and industry experts</li>
                            <li>Networking Opportunities: Facilitate collaboration</li>
                            <li>Technological Advancements: Explore recent trends</li>
                            <li>Skill Enhancement: Engage through discussions and workshops</li>
                            <li>Encouraging Research: Promote research activities</li>
                            <li>Global Participation: Enable broader accessibility</li>
                            <li>Industry-Academia Collaboration: Bridge the gap</li>
                        </ul>
                    </div>

                    <div className="guidelines-section">
                        <h2>IDEA OF THE CONFERENCE</h2>
                        <ul>
                            <li>Augmented & Virtual Reality</li>
                            <li>Artificial Intelligence</li>
                            <li>Cloud Technology</li>
                            <li>Cyber Physical Systems & Cyber Security</li>
                            <li>Engineering Education of the Future</li>
                            <li>Industry 4.0</li>
                            <li>Learning in Virtual Environments</li>
                            <li>Smart Education</li>
                            <li>Virtual & Remote Labs</li>
                            <li>Green Automation 4.0</li>
                        </ul>
                    </div>

                    <div className="guidelines-section">
                        <h2>About Raffles University, Neemrana</h2>
                        <ul>
                            <li>Academic Excellence: Ranked among top institutions</li>
                            <li>Global Recognition: Partnerships across 50+ countries</li>
                            <li>Innovation Hub: State-of-the-art research centers</li>
                            <li>Industry Connect: 90% placement rate</li>
                            <li>Diverse Community: Students from 75+ countries</li>
                            <li>Research Impact: 500+ annual publications</li>
                            <li>Student Success: Comprehensive support systems</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CallForPapers;