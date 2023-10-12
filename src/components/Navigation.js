import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CustomStyle.css'

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="navbar-end">
        <div className="navbar-item">
          <Link className="navbar-link" to="/">
            About Me
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="navbar-link" to="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="navbar-link" to="/resume">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
