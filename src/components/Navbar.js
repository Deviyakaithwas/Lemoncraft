import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="section1" smooth={true} duration={500}>
        Section 1
      </Link>
      <Link to="section2" smooth={true} duration={500}>
        Section 2
      </Link>
    </nav>
  );
}

export default Navbar;
