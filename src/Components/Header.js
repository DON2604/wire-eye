import React from "react";
import logoImage from "../Assets/eye.png";
import "../index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <Link className="navbar-brand" to="/">
        <img src={logoImage} alt="Logo" className="logo" />
        <span className="website-name">Wire Eye</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <b>Home</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Status" className="nav-link">
              <b>Status</b>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
