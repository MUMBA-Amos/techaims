import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-brand-text">Tech<span className="footer-brand-accent">Aimz</span></span>
              </div>
              <p className="footer-tagline">
                Building smarter businesses with AI & Web innovation.
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#ai-solutions">AI Solutions</a></li>
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#mobile-development">Mobile App Development</a></li>
              <li><a href="#cloud-devops">Cloud & DevOps</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <p>📞 +60176307134</p>
              <p>✉️ TechAimz@gmail.com</p>
              <p>🌐 www.techaimz.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 TechAimz. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;