import React from 'react';
import bannerImage  from '../assets/banner.png'
import './BannerStyle.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left-content">
          <img src={bannerImage} alt="Banner" className="banner-image" />
          <h1 className="title">
            Cody Cooke
          </h1>
        </div>
        <div className="right-content">
           
        </div>
      </div>
    </header>
  );
};

export default Header;