import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollButton() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button onClick={scrollToTop} className="scroll-button">
      Scroll to Top
    </button>
  );
}

export default ScrollButton;
