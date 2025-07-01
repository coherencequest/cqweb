import React, { useState, useEffect } from 'react';
import './HackathonPopup.css';
import cqhackPoster from './Poster - CQhack25.png';

const HackathonPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('hackathonPopupShown');
    
    if (!hasShownPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hackathonPopupShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    window.location.href = '/hackathons';
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={closePopup}>&times;</button>
        <div className="popup-header">
          <h2>🚀 CQhack25 is Coming!</h2>
          <p>Join the ultimate quantum computing hackathon for students</p>
        </div>
        <div className="popup-image">
          <img src={cqhackPoster} alt="CQhack25 Poster" />
        </div>
        <div className="popup-actions">
          <button className="popup-signup-btn" onClick={handleLearnMore}>
            Learn More
          </button>
          <button className="popup-later-btn" onClick={closePopup}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonPopup;