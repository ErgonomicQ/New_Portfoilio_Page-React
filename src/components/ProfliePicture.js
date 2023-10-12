// src/components/ProfilePicture.js
import React from 'react';
import profileImage from '../assets/itme.jpg'; // Adjust the path based on your project structure
import '../styles/CustomStyle.css'; // Import the CSS file for styling
import './ProfilePic.css';
const ProfilePicture = () => {
    return <img src={profileImage} alt="Your Name" className="profile-picture" />;
};

export default ProfilePicture;
