import React from "react";
import { Link } from "react-router-dom";
import "./component.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <Link to="/">
          <div className="nav-logo"></div>
        </Link>
        <Link to="/contact" className="nav-contact">
          Contact
        </Link>
      </nav>
    </>
  );
};
