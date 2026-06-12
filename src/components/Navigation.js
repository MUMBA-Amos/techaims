import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={close}>
          <img src="/images/techaimz-logo.png" alt="TechAimz" className="brand-logo" />
        </Link>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={close}>HOME</Link>
          <Link to="/partners" className="nav-link" onClick={close}>Our Partners</Link>
          <Link to="/founder" className="nav-link" onClick={close}>FOUNDER</Link>
          <Link to="/projects" className="nav-link" onClick={close}>PROJECTS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
