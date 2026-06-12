import React from 'react';
import './WhatWeDo.css';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const capabilities = [
  {
    title: 'AI & Automation',
    description: 'Intelligent assistants, document and report automation, and LLM-powered workflows that cut manual effort.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="14" width="20" height="20" rx="5" stroke="#2f6bed" strokeWidth="3" />
        <circle cx="24" cy="24" r="4" fill="#2f6bed" />
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l5 5M37 37l-5-5M37 11l-5 5M11 37l5-5" stroke="#2f6bed" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Data Dashboards',
    description: 'Real-time analytics and clear, decision-ready dashboards that turn raw data into insight.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 40h36" stroke="#2f6bed" strokeWidth="3" strokeLinecap="round" />
        <rect x="10" y="24" width="6" height="12" rx="2" fill="#2f6bed" />
        <rect x="21" y="16" width="6" height="20" rx="2" fill="#2f6bed" />
        <rect x="32" y="8" width="6" height="28" rx="2" fill="#2f6bed" />
      </svg>
    ),
  },
  {
    title: 'Web Platforms',
    description: 'Secure, scalable web applications and management systems built for performance and reliability.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="9" width="36" height="30" rx="4" stroke="#2f6bed" strokeWidth="3" />
        <path d="M6 17h36" stroke="#2f6bed" strokeWidth="3" />
        <circle cx="11" cy="13" r="1.6" fill="#2f6bed" />
        <circle cx="16" cy="13" r="1.6" fill="#2f6bed" />
        <path d="M16 27l-4 4 4 4M32 27l4 4-4 4M27 25l-6 12" stroke="#2f6bed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerised, auto-scaling infrastructure on AWS and Kubernetes with automated CI/CD pipelines.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 34a8 8 0 0 1-.8-15.96A11 11 0 0 1 35 20a7 7 0 0 1-1 14H15z" stroke="#2f6bed" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 22v10M24 22l-4 4M24 22l4 4" stroke="#2f6bed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps, built with React Native and shipped to the App Store and Google Play.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="5" width="18" height="38" rx="4" stroke="#2f6bed" strokeWidth="3" />
        <path d="M21 9h6" stroke="#2f6bed" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="37" r="1.8" fill="#2f6bed" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="wwd-container">
        <h2 className="wwd-title">What We Do</h2>
        <p className="wwd-subtitle">
          End-to-end AI and software capabilities, delivered with a focus on the public sector.
        </p>
        <div className="wwd-grid">
          {capabilities.map((cap, index) => (
            <ScrollAnimatedSection
              key={cap.title}
              animation="tumble"
              delay={index * 0.12}
              className="wwd-animation-wrapper"
            >
              <div className="wwd-card">
                <div className="wwd-icon">{cap.icon}</div>
                <h3 className="wwd-card-title">{cap.title}</h3>
                <p className="wwd-card-desc">{cap.description}</p>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
