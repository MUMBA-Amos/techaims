import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <span className="footer-brand-text">Tech<span className="footer-brand-accent">Aimz</span></span>
            <p className="footer-tagline">
              AI solutions for government and the public sector.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link to="/founder">Founder</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/partners">Partners</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">What we do</h3>
            <ul className="footer-links">
              <li>AI &amp; Automation</li>
              <li>Web &amp; Mobile Platforms</li>
              <li>Cloud &amp; DevOps</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li><a href="mailto:contact@techaimz.com">contact@techaimz.com</a></li>
              <li><a href="tel:+60176307134">+60 17 630 7134</a></li>
              <li>www.techaimz.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {year} TechAimz. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
