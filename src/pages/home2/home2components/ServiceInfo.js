import React from "react";
import "./ServiceInfo.css";

export const ServiceInfo = () => {
  return (
    <>
      <section className="service-info-container">
        <div className="service-info-card info-card-img1">
          <h2 className="service-info-title">Eyebrow Lamination</h2>
          <p className="service-info-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            explicabo eligendi ab accusantium fuga dolorum praesentium repellat
            repellendus iure minima?
          </p>
        </div>
        <div className="service-info-card info-card-img2">
          <h2 className="service-info-title">Henna (tweezers only)</h2>
          <p className="service-info-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            nobis molestias tempora reprehenderit fuga debitis doloremque
            deserunt alias laudantium molestiae.
          </p>
        </div>
      </section>
    </>
  );
};
