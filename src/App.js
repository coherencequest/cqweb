import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import HackathonPopup from './components/HackathonPopup';
import Hackathons from './pages/Hackathons';
import Courses from './pages/Courses';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <MissionSection />
            <HackathonPopup />
          </>
        } />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;