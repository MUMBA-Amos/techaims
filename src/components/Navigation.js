import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Prevent background scrolling while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="nav-brand" onClick={close}>
            <img src="/images/techaimz-logo.png" alt="TechAimz" className="brand-logo" />
          </Link>

          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop inline links */}
          <div className="nav-links">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/partners" className="nav-link">Our Partners</Link>
            <Link to="/founder" className="nav-link">FOUNDER</Link>
            <Link to="/projects" className="nav-link">PROJECTS</Link>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in drawer (kept outside the frosted nav so it can be
          positioned relative to the viewport, not the navbar box) */}
      <div
        className={`nav-backdrop ${open ? 'open' : ''}`}
        onClick={close}
        aria-hidden="true"
      ></div>

      <aside className={`nav-drawer ${open ? 'open' : ''}`}>
        <button className="drawer-close" aria-label="Close menu" onClick={close}>
          &times;
        </button>
        <nav className="drawer-links">
          <Link to="/" className="drawer-link" onClick={close}>HOME</Link>
          <Link to="/partners" className="drawer-link" onClick={close}>Our Partners</Link>
          <Link to="/founder" className="drawer-link" onClick={close}>FOUNDER</Link>
          <Link to="/projects" className="drawer-link" onClick={close}>PROJECTS</Link>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
