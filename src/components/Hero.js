import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <svg className="hero-neurons" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <g className="neuron-links" strokeWidth="1.2">
          <line x1="120" y1="140" x2="300" y2="90" stroke="#2f6bed" />
          <line x1="300" y1="90" x2="430" y2="230" stroke="#7c3aed" />
          <line x1="120" y1="140" x2="220" y2="320" stroke="#10b981" />
          <line x1="430" y1="230" x2="220" y2="320" stroke="#2f6bed" />
          <line x1="980" y1="120" x2="1080" y2="280" stroke="#ec4899" />
          <line x1="980" y1="120" x2="840" y2="220" stroke="#7c3aed" />
          <line x1="840" y1="220" x2="1080" y2="280" stroke="#0ea5e9" />
          <line x1="700" y1="540" x2="900" y2="600" stroke="#10b981" />
          <line x1="700" y1="540" x2="560" y2="430" stroke="#2f6bed" />
          <line x1="900" y1="600" x2="1050" y2="500" stroke="#ec4899" />
          <line x1="260" y1="560" x2="430" y2="620" stroke="#0ea5e9" />
          <line x1="260" y1="560" x2="160" y2="430" stroke="#7c3aed" />
        </g>
        <g className="neuron-nodes">
          <circle cx="120" cy="140" r="7" fill="#2f6bed" style={{ '--d': '0s' }} />
          <circle cx="300" cy="90" r="5" fill="#7c3aed" style={{ '--d': '1.2s' }} />
          <circle cx="430" cy="230" r="6" fill="#0ea5e9" style={{ '--d': '0.6s' }} />
          <circle cx="220" cy="320" r="5" fill="#10b981" style={{ '--d': '1.8s' }} />
          <circle cx="980" cy="120" r="6" fill="#ec4899" style={{ '--d': '0.9s' }} />
          <circle cx="840" cy="220" r="5" fill="#7c3aed" style={{ '--d': '2.1s' }} />
          <circle cx="1080" cy="280" r="7" fill="#0ea5e9" style={{ '--d': '1.5s' }} />
          <circle cx="700" cy="540" r="6" fill="#2f6bed" style={{ '--d': '0.3s' }} />
          <circle cx="900" cy="600" r="5" fill="#10b981" style={{ '--d': '2.4s' }} />
          <circle cx="1050" cy="500" r="6" fill="#ec4899" style={{ '--d': '1s' }} />
          <circle cx="560" cy="430" r="5" fill="#0ea5e9" style={{ '--d': '1.7s' }} />
          <circle cx="260" cy="560" r="6" fill="#7c3aed" style={{ '--d': '0.5s' }} />
          <circle cx="430" cy="620" r="5" fill="#2f6bed" style={{ '--d': '2.2s' }} />
          <circle cx="160" cy="430" r="5" fill="#10b981" style={{ '--d': '1.4s' }} />
        </g>
      </svg>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            AI solutions for government and the public sector.
          </h1>
          <p className="hero-description">
            We help public institutions work smarter, automating reporting, turning data into insight, and building secure platforms people can trust.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="hero-btn">Get in touch</a>
            <Link to="/projects" className="hero-link">See our work ›</Link>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="hero-card-inner">
            <svg viewBox="0 0 360 360" className="hero-network" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4f8cff" />
                  <stop offset="100%" stopColor="#2f6bed" />
                </radialGradient>
              </defs>

              <g className="net-lines" stroke="#c5d2ea" strokeWidth="2">
                <line x1="180" y1="180" x2="180" y2="60" />
                <line x1="180" y1="180" x2="284" y2="120" />
                <line x1="180" y1="180" x2="284" y2="240" />
                <line x1="180" y1="180" x2="180" y2="300" />
                <line x1="180" y1="180" x2="76" y2="240" />
                <line x1="180" y1="180" x2="76" y2="120" />
              </g>

              <g className="net-nodes" fill="#0f1b33">
                <circle cx="180" cy="60" r="15" />
                <circle cx="284" cy="120" r="15" />
                <circle cx="284" cy="240" r="15" />
                <circle cx="180" cy="300" r="15" />
                <circle cx="76" cy="240" r="15" />
                <circle cx="76" cy="120" r="15" />
              </g>

              <circle className="net-core" cx="180" cy="180" r="30" fill="url(#coreGlow)" />
            </svg>

            <span className="hero-card-wordmark">Tech<span className="wordmark-accent">Aimz</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
