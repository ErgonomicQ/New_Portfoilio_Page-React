
import React from 'react';
import profileImage from '../assets/itme.jpg'; // Adjust the path based on your project structure
import './ProfilePic.css';
import '../styles/CustomStyle.css'


const ProfilePicture = () => {
    const imageStyles = {
        width: '500px', // Adjust the width as needed
        height: '500px', // Adjust the height as needed
        borderRadius: '50%', // To make the image circular
    }

    return <img src={profileImage} alt="Your Name" style={imageStyles} />;
};

export default ProfilePicture;
