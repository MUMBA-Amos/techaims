import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src="/images/techaimz-logo.png" alt="TechAimz" className="brand-logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/partners" className="nav-link">Our Partners</Link>
          <Link to="/founder" className="nav-link">FOUNDER</Link>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;