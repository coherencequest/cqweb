import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <h1 className="contact-title">Let's talk.</h1>
      <p className="contact-subtitle">Have any questions? Want to partner with us? Looking for volunteer/career oppertunities? Send us an email!</p>
      <a href="mailto:coherencequest@gmail.com" className="contact-email">
        coherencequest@gmail.com →
      </a>
    </div>
  </div>
);

export default Contact;