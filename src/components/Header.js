import React from 'react';
import Navigation from './Navigation'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left-content">
          <img src="/path/to/your/banner-image.jpg" alt="Banner" className="banner-image" />
          <h1 className="title">Your Name</h1>
        </div>
        <div className="right-content">
          <Navigation /> 
        </div>
      </div>
    </header>
  );
};

export default Header;