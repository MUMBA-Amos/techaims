import React from 'react';
import './Founder.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const expertise = [
  'Full-Stack Development',
  'React / Next.js',
  'Vue / Nuxt.js',
  'Node.js / FastAPI',
  'AI & LLM Integration',
  'OpenAI GPT-4',
  'Machine Learning',
  'AWS & Kubernetes',
  'Docker & Terraform',
  'CI/CD',
  'React Native / Expo',
  'Technology Strategy',
];

const certifications = [
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', year: '2025' },
  { title: 'Kubernetes: Deploy Microservices to AWS', issuer: 'Udemy', year: '2025' },
  { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', year: '2022' },
];

const Founder = () => {
  return (
    <div className="founder-page">
      <section className="founder-hero">
        <h1 className="founder-title">Our Founder</h1>
        <p className="founder-subtitle">Meet the visionary behind TechAimz</p>
      </section>

      <div className="founder-container">
        <ScrollAnimatedSection animation="rise" delay={0.1}>
          <div className="founder-card">
            <img
              src="/images/founder-photo.jpg"
              alt="Mumba Amos Ntambo"
              className="founder-photo"
            />
            <div className="founder-meta">
              <h2 className="founder-name">Mumba Amos Ntambo</h2>
              <p className="founder-role">Founder &amp; CEO</p>
              <p className="founder-tagline">Full-Stack Developer | AI &amp; Cloud Engineering</p>
              <div className="founder-facts">
                <span className="fact-chip">BSc Computer Science (AI), Swinburne</span>
                <span className="fact-chip">2 apps live on the App Store</span>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <div className="founder-grid">
          <div className="founder-main">
            <ScrollAnimatedSection animation="rise" delay={0.15}>
              <section className="founder-block">
                <h3 className="block-title">The Story</h3>
                <p>
                  Founded in 2023, TechAimz was born from a belief that government and public institutions deserve the same intelligent technology transforming the private sector. With a comprehensive education in Computer Science specializing in Artificial Intelligence from Swinburne University, our founder recognized that public agencies don't just need to adopt technology; they need to truly harness its power to deliver smarter, more efficient services.
                </p>
                <blockquote className="founder-quote">
                  Technology should work for you, not the other way around.
                </blockquote>
                <p>
                  This philosophy drives everything we do at TechAimz. Combining academic foundations with hands-on experience building research, analytics, and automation platforms, we believe AI can transform how public institutions operate and serve their communities, and we bring that same focus to forward-thinking businesses.
                </p>
              </section>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rise" delay={0.2}>
              <section className="founder-block">
                <h3 className="block-title">Our Vision</h3>
                <p>
                  To help governments and public institutions harness artificial intelligence as a strategic advantage, building smarter, more efficient, and more transparent services that work better for citizens, while bringing that same expertise to forward-thinking businesses.
                </p>
              </section>
            </ScrollAnimatedSection>
          </div>

          <aside className="founder-side">
            <ScrollAnimatedSection animation="slide-left" delay={0.15}>
              <section className="side-card">
                <h3 className="side-title">Education</h3>
                <div className="edu-item">
                  <h4>BSc Computer Science in Artificial Intelligence</h4>
                  <p className="edu-org">Swinburne University of Technology, Sarawak</p>
                  <p className="edu-period">2022 to 2025</p>
                </div>
                <div className="edu-item">
                  <h4>Diploma in Business Information Technology</h4>
                  <p className="edu-org">Asia Pacific University (APU), Kuala Lumpur</p>
                  <p className="edu-period">2019 to 2021</p>
                </div>
              </section>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slide-left" delay={0.2}>
              <section className="side-card">
                <h3 className="side-title">Expertise</h3>
                <div className="chip-row">
                  {expertise.map((skill) => (
                    <span className="skill-chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </section>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slide-left" delay={0.25}>
              <section className="side-card">
                <h3 className="side-title">Certifications</h3>
                <ul className="cert-list">
                  {certifications.map((cert) => (
                    <li className="cert-item" key={cert.title}>
                      <span className="cert-title">{cert.title}</span>
                      <span className="cert-meta">{cert.issuer}, {cert.year}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollAnimatedSection>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Founder;
