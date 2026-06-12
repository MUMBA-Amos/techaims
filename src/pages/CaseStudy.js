import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CaseStudy.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import caseStudies from '../data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="case-page">
        <section className="case-hero">
          <h1 className="case-title">Case study not found</h1>
          <p className="case-subtitle">The case study you’re looking for doesn’t exist.</p>
          <div className="case-meta">
            <Link className="case-meta-chip" to="/projects">Back to Projects</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="case-page">
      <section className="case-hero">
        <p className="case-eyebrow">Case Study</p>
        <h1 className="case-title">{study.title}</h1>
        <p className="case-subtitle">{study.subtitle}</p>
        <div className="case-meta">
          {study.meta.map((item) => (
            <span key={item} className="case-meta-chip">{item}</span>
          ))}
        </div>
      </section>

      <div className="case-container">
        <ScrollAnimatedSection animation="rise" delay={0.1}>
          <section className="case-block">
            <h2 className="case-h2">Overview</h2>
            <p>{study.overview}</p>
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="rise" delay={0.15}>
          <section className="case-block">
            <h2 className="case-h2">The Challenge</h2>
            <p>{study.challenge}</p>
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="rise" delay={0.2}>
          <section className="case-block">
            <h2 className="case-h2">The Solution</h2>
            <p>{study.solutionIntro}</p>
            <ul className="case-list">
              {study.solutionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="rise" delay={0.2}>
          <section className="case-results">
            <h2 className="case-h2">The Results</h2>
            <div className="results-grid">
              {study.results.map((result) => (
                <div className="result-stat" key={result.label}>
                  <span className="result-num">{result.num}</span>
                  <span className="result-label">{result.label}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="rise" delay={0.2}>
          <section className="case-block">
            <h2 className="case-h2">Technology</h2>
            <div className="case-tags">
              {study.technologies.map((tech) => (
                <span key={tech} className="case-tag">{tech}</span>
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="rise" delay={0.2}>
          <section className="case-relevance">
            <h2 className="case-h2">Why this matters for the public sector</h2>
            <p>{study.relevance}</p>
          </section>
        </ScrollAnimatedSection>

        <section className="case-cta">
          <h2>Have a similar challenge?</h2>
          <p>Let's talk about how AI and automation can save your team time.</p>
          <div className="case-cta-actions">
            <a className="case-btn case-btn-primary" href="mailto:TechAimz@gmail.com">Get In Touch</a>
            <Link className="case-btn case-btn-secondary" to="/projects">Back to Projects</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
