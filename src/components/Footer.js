import React from 'react';
import './Footer.css'; // Import the styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>My Portfolio</strong> by Cody Cooke. The source code is licensed under{' '}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              MIT
            </a>
            .
          </p>
          <div className="social-links">
            <a href="https://github.com/ErgonomicQ" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/cody-cooke-083a7b280/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;