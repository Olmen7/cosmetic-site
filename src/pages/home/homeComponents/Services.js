import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <section className="service-section">
        <div className="service-card">
          <h2 className="service-title">Eyebrow Lamination</h2>
          <p className="service-info">
            Eyebrow lamination is a service that provides more full brows. It is
            an alternative to microblading. It is less invasive and does not
            hurt or cause discomfort.
          </p>
        </div>
        <div className="service-card">
          <h2 className="service-title">Henna(tweezer only)</h2>
          <p className="service-info">
            Henna is the process of dying your skin to make your brows look more
            full and thicker. There are different color tints that work best for
            your eyebrows and skin.
          </p>
        </div>
      </section>
    </>
  );
};
