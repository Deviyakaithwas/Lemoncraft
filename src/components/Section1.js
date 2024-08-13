import React from 'react';
import { Element } from 'react-scroll';
import './Section1.css';

function Section1() {
  return (
    <Element name="section1" className="section section1">
      <div className="content">
        <h1>Welcome to Section 1</h1>
        <p>This section demonstrates scrolling effects.</p>
        <img src="./assets/image1.png" alt="Sample 1" />
      </div>
    </Element>
  );
}

export default Section1;
