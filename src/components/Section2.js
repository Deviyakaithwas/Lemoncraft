import React from 'react';
import { Element } from 'react-scroll';
import './Section2.css';

function Section2() {
  return (
    <Element name="section2" className="section section2">
      <div className="content">
        <h1>Welcome to Section 2</h1>
        <p>This section also includes scrolling effects.</p>
        <img src="./assets/image2.png" alt="Sample 2" />
      </div>
    </Element>
  );
}

export default Section2;
