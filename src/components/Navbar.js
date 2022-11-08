import React from "react";
import { Link } from "react-router-dom";
import "./component.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <Link to="/">
          <img
            className="nav-logo"
            src={require("../assets/browlogo.png")}
            alt="home-flower-icon"
          ></img>
        </Link>
        <Link to="/contact" className="nav-contact">
          Contact
        </Link>
      </nav>
    </>
  );
};
