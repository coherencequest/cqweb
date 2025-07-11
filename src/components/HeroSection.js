import React from 'react';
import qcomp from './qcomp.jpeg';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToMission = () => {
    const missionSection = document.querySelector('.mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Creating opportunities for students worldwide.</h1>
        <p>Coherence Quest is an organization helping high school and college students to get opportunities to learn quantum computing.</p>
        <div className="hero-actions">
          <button className="donate-btn" onClick={scrollToMission}>Learn more</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={qcomp} alt="Quantum Processor" />
      </div>
    </section>
  );
};

export default HeroSection;