import React from 'react';
import { Link } from 'react-router-dom';
import './Partners.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import partners from '../data/partners';

const Partners = () => {
  return (
    <div className="partners-page">
      <section className="partners-hero">
        <h1 className="partners-title">Our Partners</h1>
        <p className="partners-subtitle">
          The organizations we've partnered with to build and deliver real results.
        </p>
      </section>

      <div className="partners-container">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <ScrollAnimatedSection
              key={partner.name}
              animation="rise"
              delay={index * 0.1}
            >
              <div className="partner-card">
                <div className="partner-avatar">{partner.initials}</div>
                <div className="partner-body">
                  <div className="partner-head">
                    <h3 className="partner-name">{partner.name}</h3>
                    <span className="partner-tag">{partner.relationship}</span>
                  </div>
                  {partner.sector && <p className="partner-sector">{partner.sector}</p>}
                  <p className="partner-desc">{partner.description}</p>
                  {partner.link && (
                    <Link to={partner.link} className="partner-link">
                      {partner.linkLabel || 'Learn more'} →
                    </Link>
                  )}
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        <section className="partners-cta">
          <h2>Interested in partnering with us?</h2>
          <p>We work closely with a select number of organizations to deliver intelligent software that makes a difference.</p>
          <a className="partners-btn" href="mailto:contact@techaimz.com">Get In Touch</a>
        </section>
      </div>
    </div>
  );
};

export default Partners;
