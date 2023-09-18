import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../Assets/eye.png';
import '../index.css'; 

function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-custom">
          <a className="navbar-brand" href="#">
              <img src={logoImage} alt="Logo" className="logo" />
              <span className="website-name">Website Name</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Status</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Problem</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default Header;