import React from 'react';
import './Founder.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Founder = () => {
  return (
    <div className="founder-page">
      <div className="founder-container">
        <section className="founder-hero">
          <h1 className="founder-title">Our Founder</h1>
          <p className="founder-subtitle">Meet the visionary behind TechAims</p>
        </section>
        
        <section className="founder-content">
          <ScrollAnimatedSection animation="rise" delay={0.2}>
            <div className="founder-profile">
              <div className="founder-image">
                <img 
                  src="/images/founder-photo.jpeg" 
                  alt="Mumba Amos Ntambo - Founder & CEO" 
                  className="founder-photo"
                />
              </div>
            
            <div className="founder-info">
              <h2 className="founder-name">Mumba Amos Ntambo</h2>
              <p className="founder-position">Founder & CEO</p>
              
              <div className="founder-education">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>Bachelor of Computer Science</h4>
                  <p className="education-details">Major in Artificial Intelligence</p>
                  <p className="education-institution">Swinburne University of Technology Sarawak Campus</p>
                  <p className="education-period">February 2022 - February 2025</p>
                </div>
              </div>
              
              <div className="founder-story">
                <h3>The Story</h3>
                <p>
                  Founded in 2023, TechAims was born from a passion for bridging the gap between cutting-edge technology and practical business solutions. With a comprehensive education in Computer Science specializing in Artificial Intelligence from Swinburne University, our founder recognized the need for businesses to not just adopt technology, but to truly harness its power for meaningful growth.
                </p>
                <p>
                  "Technology should work for you — not the other way around." This philosophy drives everything we do at TechAims. Combining academic excellence with practical experience, we believe that the right combination of AI solutions and web innovation can transform how businesses operate, compete, and thrive in the digital age.
                </p>
              </div>
              
              <div className="founder-vision">
                <h3>Our Vision</h3>
                <p>
                  To empower businesses of all sizes to leverage artificial intelligence and web technology as strategic advantages, creating smarter, more efficient, and more competitive organizations that are built for the future.
                </p>
              </div>
              
              <div className="founder-expertise">
                <h3>Expertise</h3>
                <ul>
                  <li>Artificial Intelligence & Machine Learning</li>
                  <li>Web Development & Digital Platforms</li>
                  <li>Business Process Automation</li>
                  <li>Technology Strategy & Consulting</li>
                  <li>Digital Transformation</li>
                </ul>
              </div>
            </div>
          </div>
          </ScrollAnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default Founder;