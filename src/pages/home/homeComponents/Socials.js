import React from "react";
import "./Socials.css";

export const Socials = () => {
  return (
    <>
      <div className="socials-container">
        <h3 className="socials-title">Follow me on Instagram</h3>
        <a
          href="https://www.instagram.com/servinbrowlooks"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="instagram-logo"
            src={require("../../../assets/instagramLogoPic.png")}
            alt="Instagram"
          />
        </a>
      </div>
    </>
  );
};
