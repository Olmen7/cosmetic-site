import React from "react";
import { Link } from "react-router-dom";
import "./ServicesPT2.css";

export const ServicesPT2 = () => {
  return (
    <>
      <section className="servicespt2-container">
        <div className="service-img">
          <h3 className="service-pt2-title">Eyebrow Laminating</h3>
          <span>
            <Link to="/contact" className="cta">
              Book Now
            </Link>
          </span>
        </div>
        <div className="service-img">
          <h3 className="service-pt2-title">Eyebrow Threading</h3>
          <span>
            <Link to="/contact" className="cta">
              Book Now
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};
