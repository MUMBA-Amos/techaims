import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            AI Solutions for Government & the Public Sector
          </h1>
          <p className="hero-description">
            TechAimz builds intelligent systems that help public institutions work smarter, automating reports and grant management, turning data into clear dashboards, and deploying secure AI assistants for citizen and staff services. We've delivered research and analytics platforms for government and healthcare, and we bring that same focus to every project.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="hero-btn hero-btn-primary">View Our Work</Link>
            <a href="#contact" className="hero-btn hero-btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 360 360" className="hero-network" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4f8cff" />
                <stop offset="100%" stopColor="#2f6bed" />
              </radialGradient>
            </defs>

            {/* connecting lines from the core to each outer node */}
            <g className="net-lines" stroke="rgba(255,255,255,0.45)" strokeWidth="2">
              <line x1="180" y1="180" x2="180" y2="60" />
              <line x1="180" y1="180" x2="284" y2="120" />
              <line x1="180" y1="180" x2="284" y2="240" />
              <line x1="180" y1="180" x2="180" y2="300" />
              <line x1="180" y1="180" x2="76" y2="240" />
              <line x1="180" y1="180" x2="76" y2="120" />
            </g>

            {/* outer nodes */}
            <g className="net-nodes" fill="#ffffff">
              <circle cx="180" cy="60" r="16" />
              <circle cx="284" cy="120" r="16" />
              <circle cx="284" cy="240" r="16" />
              <circle cx="180" cy="300" r="16" />
              <circle cx="76" cy="240" r="16" />
              <circle cx="76" cy="120" r="16" />
            </g>

            {/* glowing core node */}
            <circle className="net-core" cx="180" cy="180" r="30" fill="url(#coreGlow)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
