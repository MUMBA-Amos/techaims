import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>
        
        <div className="services-grid">
          <div className="service-item">
            <h3 className="service-title">AI & INTELLIGENT AUTOMATION</h3>
            <p className="service-description">
              We design AI systems that do more than automate; they understand, analyse, and act. From intelligent assistants for citizen and staff services to automated report and document generation, predictive analytics, and decision-ready dashboards, our solutions cut manual effort and help public institutions make faster, better-informed decisions through secure, data-driven tools.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">WEB & MOBILE PLATFORMS</h3>
            <p className="service-description">
              We build secure, high-performance web and mobile applications, from grant and research management systems to cross-platform apps published on the App Store and Google Play. With clean front-end design and robust backend systems, we deliver scalable platforms that serve citizens, staff, and stakeholders reliably and accessibly.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">CLOUD & DEVOPS</h3>
            <p className="service-description">
              We deploy and maintain the secure, scalable infrastructure that keeps critical systems running. Using containerised, auto-scaling architecture on AWS and Kubernetes with automated CI/CD pipelines, we ensure high availability, smooth updates, and dependable performance, so your services stay online and your data stays protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;