import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="brand-icon">
            <span className="icon-text">T'Aimas</span>
          </div>
          <span className="brand-text">TechAims</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/founder" className="nav-link">FOUNDER</Link>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
          <Link to="/team" className="nav-link">TEAM</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;