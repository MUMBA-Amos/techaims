import React, { useEffect, useState } from 'react';

const CHAR_DELAY = 30; // ms between characters
const INITIAL_DELAY = 200; // ms before the whole animation starts
const DURATION = 500; // ms per character transition

/**
 * Splits text on "\n" into lines, then each line into words and characters.
 * Every character is an inline-block span that slides in from the left
 * (translateX(-18px) -> 0) and fades in, on a staggered delay.
 *
 * Words are wrapped in a nowrap inline-block so a word never breaks across
 * lines; wrapping happens only at the spaces between words.
 */
const AnimatedHeading = ({ text, className = '', style = {} }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), INITIAL_DELAY);
    return () => clearTimeout(t);
  }, []);

  const charStyle = (delay) => ({
    display: 'inline-block',
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0)' : 'translateX(-18px)',
    transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
    transitionDelay: `${delay}ms`,
  });

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        const words = line.split(' ');
        let charIndex = 0; // running index of chars within this line (incl. spaces)

        return (
          <span key={lineIndex} style={{ display: 'block' }}>
            {words.map((word, wordIndex) => {
              const wordChars = word.split('').map((char, i) => {
                const delay = lineIndex * lineLength * CHAR_DELAY + charIndex * CHAR_DELAY;
                charIndex += 1;
                return (
                  <span key={i} style={charStyle(delay)}>
                    {char}
                  </span>
                );
              });

              // Breakable space between words (skipped after the last word).
              const isLast = wordIndex === words.length - 1;
              const space = isLast ? null : <span key="sp"> </span>;
              if (!isLast) charIndex += 1; // account for the space in the stagger

              return (
                <React.Fragment key={wordIndex}>
                  <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {wordChars}
                  </span>
                  {space}
                </React.Fragment>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedHeading;
