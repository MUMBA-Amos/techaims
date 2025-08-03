import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>
        
        <div className="services-grid">
          <div className="service-item">
            <h3 className="service-title">ARTIFICIAL INTELLIGENCE SOLUTIONS</h3>
            <p className="service-description">
              At TechAims, we design AI solutions that do more than just automate — they think, learn, and evolve with your business. Whether you're looking for intelligent chatbots, predictive analytics, custom machine learning models, or workflow automation, our AI tools are built to deliver real results. We simplify complex processes and help you make faster, smarter decisions through tailored, data-driven solutions.
            </p>
          </div>
          
          <div className="service-item">
            <h3 className="service-title">WEB DEVELOPMENT SERVICES</h3>
            <p className="service-description">
              Your website is more than a digital business card — it's your first impression and your hardest-working employee. At TechAims, we craft sleek, responsive, and high-performance websites and web applications that engage users and drive conversions. From clean front-end designs to robust backend systems, we build scalable platforms tailored to your goals, optimized for both speed and visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;