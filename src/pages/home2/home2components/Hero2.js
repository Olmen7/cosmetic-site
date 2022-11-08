import React from "react";
import { Link } from "react-router-dom";
import Text from "../../../components/TitleText";
import "./Hero2.css";

export const Hero2 = () => {
  return (
    <section className="hero2-container">
      <div className="hero2-img">
        <h1 className="hero2-title">
          <Text copy="Servin Brow Looks" />
        </h1>
        <div className="hero-cta-container">
          <h3 className="hero2-description">
            Paramount based eyebrow lamination and henna services (tweezers)
          </h3>
          <Link to="contact" className="hero-cta">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};
