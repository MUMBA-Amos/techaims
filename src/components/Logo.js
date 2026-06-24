import React from 'react';
import './Logo.css';

/**
 * TechAimz logo lockup: a hub-and-spoke network mark + wordmark.
 * The wordmark is live HTML text so it always renders in the loaded
 * Inter font and stays crisp at any size.
 *
 * Props:
 *  - markOnly: render just the network mark, no wordmark
 *  - className: extra classes for the wrapper
 */
const Logo = ({ markOnly = false, className = '' }) => (
  <span className={`ta-logo ${className}`.trim()}>
    <svg
      className="ta-logo-mark"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="TechAimz"
    >
      <defs>
        <radialGradient id="taCoreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4f8cff" />
          <stop offset="100%" stopColor="#2f6bed" />
        </radialGradient>
      </defs>
      <g stroke="#2f6bed" strokeWidth="1.6" opacity="0.55">
        <line x1="24" y1="24" x2="24" y2="8" />
        <line x1="24" y1="24" x2="37.86" y2="16" />
        <line x1="24" y1="24" x2="37.86" y2="32" />
        <line x1="24" y1="24" x2="24" y2="40" />
        <line x1="24" y1="24" x2="10.14" y2="32" />
        <line x1="24" y1="24" x2="10.14" y2="16" />
      </g>
      <g fill="#2f6bed">
        <circle cx="24" cy="8" r="2.4" />
        <circle cx="37.86" cy="16" r="2.4" />
        <circle cx="37.86" cy="32" r="2.4" />
        <circle cx="24" cy="40" r="2.4" />
        <circle cx="10.14" cy="32" r="2.4" />
        <circle cx="10.14" cy="16" r="2.4" />
      </g>
      <circle cx="24" cy="24" r="4.5" fill="url(#taCoreGrad)" />
    </svg>

    {!markOnly && (
      <span className="ta-logo-text">
        Tech<span className="ta-logo-accent">Aimz</span>
      </span>
    )}
  </span>
);

export default Logo;
