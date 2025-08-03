import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ScrollAnimatedSection.css';

const ScrollAnimatedSection = ({ 
  children, 
  animation = 'rise', 
  delay = 0, 
  duration = 0.6,
  className = ''
}) => {
  const [elementRef, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px');

  const animationStyle = {
    transitionDelay: `${delay}s`,
    transitionDuration: `${duration}s`,
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-animated ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;