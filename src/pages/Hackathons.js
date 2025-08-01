import React, { useState, useEffect } from 'react';
import classiqLogo from '../components/classiq-logo.png';
import kinetikLogo from '../components/kinetiklogo.png';
import aopsLogo from '../components/AoPS_Main_Logo (1).png';
import sailyLogo from '../components/saily-logo-black (3).png';
import nordvpnLogo from '../components/NordVPN_Logo_RGB_Primary_Blue_Black (1).png';
import nordpassLogo from '../components/nordpass vertical (1).png';
import incogniLogo from '../components/Incogni_logo_black_better_quality.png';
import nordprotectLogo from '../components/NordProtect.png';
import cqhackPoster from '../components/Poster - CQhack25.png';
import './Hackathons.css';

const teal = '#14b8a6';

const PerkItem = ({ text, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          setHasAnimated(true);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay, hasAnimated]);

  return (
    <div ref={itemRef} className={`perk-item ${isVisible ? 'perk-visible' : ''}`}>
      <div className="perk-checkmark">✓</div>
      <span className="perk-text">{text}</span>
    </div>
  );
};

const Hackathons = () => (
  <div>
    <div className="hackathons-container">
      <div className="hackathons-content">
        <h1 className="hackathons-title">
          Presenting to you...<br/>CQhack25!
        </h1>
        <p className="hackathons-description">
          CQhack25, presented by Coherence Quest, is the inaugural online hackathon for high school and college students to collaborate, create, and present a project revolving around quantum computing. 
          This hackathon is open to all experience levels. Whether you have never heard about quantum computing or you are an expert, there is a place for you at CQhack25. 
          Sign up for early-bird registration today!
        </p>
        <button 
          className="hackathons-btn"
          onClick={() => window.open('https://forms.gle/k93mu4QERbacKsjm6', '_blank')}
        >
          Click here to register!
        </button>
      </div>
      <div className="hackathons-image-section">
        <img src={cqhackPoster} alt="CQhack25 Poster" className="hackathons-main-poster" />
      </div>
    </div>
    <div className="hackathons-sponsors">
      <h2 className="hackathons-sponsors-title">Sponsors</h2>
      <div className="hackathons-sponsors-container">
        <img src={classiqLogo} alt="CLASSIQ Logo" className="hackathons-sponsor-logo" />
        <img src={kinetikLogo} alt="Kinetik Logo" className="hackathons-sponsor-logo" />
        <img src={aopsLogo} alt="AoPS Logo" className="hackathons-sponsor-logo" />
        <img src={sailyLogo} alt="Saily Logo" className="hackathons-sponsor-logo" />
        <img src={nordvpnLogo} alt="NordVPN Logo" className="hackathons-sponsor-logo" />
        <img src={nordpassLogo} alt="NordPass Logo" className="hackathons-sponsor-logo" />
        <img src={incogniLogo} alt="Incogni Logo" className="hackathons-sponsor-logo" />
        <img src={nordprotectLogo} alt="NordProtect Logo" className="hackathons-sponsor-logo" />
      </div>
    </div>
    <div className="hackathons-perks">
      <h2 className="hackathons-perks-title">What will be at CQhack25</h2>
      <div className="hackathons-perks-list">
        <PerkItem text="Workshops and tutorials for all skill levels" delay={0} />
        <PerkItem text="Mentorship from quantum computing experts" delay={300} />
        <PerkItem text="Exciting prizes and recognition" delay={600} />
        <PerkItem text="Networking opportunities with peers" delay={900} />
        <PerkItem text="Access to quantum computing platforms" delay={1200} />
        <PerkItem text="Certificate of participation" delay={1500} />
      </div>
    </div>
  </div>
);

export default Hackathons;