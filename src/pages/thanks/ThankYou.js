import React from "react";
import "./ThankYou.css";
import { Link } from "react-router-dom";

export const ThankYou = () => {
  return (
    <>
      <div className="thank-you-container">
        <div className="redirect-container">
          <Link to="/" className="redirect">
            Go back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};
