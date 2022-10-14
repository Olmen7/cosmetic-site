import React from "react";
import { Link } from "react-router-dom";
import "./component.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="nav-item"></Link>
      </nav>
    </>
  );
};
