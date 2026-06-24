import React, { useEffect, useState } from 'react';

/**
 * Fades its children in from opacity 0 -> 1 after `delay` ms,
 * over `duration` ms. Used by the VEX hero for the subheading,
 * buttons, and side tag.
 */
const FadeIn = ({ delay = 0, duration = 1000, className = '', style = {}, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
