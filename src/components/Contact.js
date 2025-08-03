import React from 'react';
import './Contact.css';

const Contact = () => {
  const handlePhoneClick = () => {
    window.open('tel:+60176307134');
  };

  const handleEmailClick = () => {
    window.open('mailto:TechAims@gmail.com');
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <div className="contact-item" onClick={handlePhoneClick} title="Click to call">
          <span className="contact-label">PHONE:</span>
          <span className="contact-value">+60176307134</span>
        </div>
        <div className="contact-item" onClick={handleEmailClick} title="Click to send email">
          <span className="contact-label">EMAIL:</span>
          <span className="contact-value">TechAims@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;