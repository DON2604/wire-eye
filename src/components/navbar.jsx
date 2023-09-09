import React from 'react';
import '../App.css';

const TechyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-code"></i> Wire-Eye
      </div>
      <ul className="nav-links">
        <li><i className="fas fa-laptop-code"></i> Home</li>
        <li><i className="fas fa-microchip"></i> Status</li>
        <li><i className="fas fa-code"></i> Problem</li>
        <li><i className="fas fa-microchip"></i> About</li>
      </ul>
    </nav>
  );
};

export default TechyNavbar;
