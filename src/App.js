import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUniversity from './pages/AboutUniversity';
import CallForPapers from './pages/CallForPapers';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUniversity />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/schedule" element={<Schedule />} />
          // Make sure the path is "/register"
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;