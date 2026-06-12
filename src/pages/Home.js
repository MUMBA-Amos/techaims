import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import About from '../components/About';
import Services from '../components/Services';
import WhatWeDo from '../components/WhatWeDo';
import ContactForm from '../components/ContactForm';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollAnimatedSection animation="rise" delay={0.1}>
        <WhatWeDo />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="rise" delay={0.2}>
        <About />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="slide-left" delay={0.1}>
        <Services />
      </ScrollAnimatedSection>
      <div id="contact">
        <ScrollAnimatedSection animation="rise" delay={0.1}>
          <Contact />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="rise" delay={0.3}>
          <ContactForm />
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default Home;
