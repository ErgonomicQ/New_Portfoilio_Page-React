import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css' 

const Navigation = () => {
    return(
        <nav className="navbar" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <strong>Go To:</strong>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to = "/">
                        About Me
                    </Link>
                    <Link className="navbar-item" to="/portfolio">
                    Portfolio
                    </Link>
                    <Link className="navbar-item" to="/contact">
                    Contact
                    </Link>
                    <Link className="navbar-item" to="/resume">
                    Resume
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;