import React from "react";
import { Hero } from "./homeComponents/Hero";
import { Info } from "./homeComponents/Info";
import { Reviews } from "./homeComponents/Reviews";
import { Services } from "./homeComponents/Services";
import { ServicesPT2 } from "./homeComponents/ServicesPT2";

export const Home = () => {
  return (
    <div className="entire-homepage">
      <Hero />
      <div className="m-spacer"></div>
      <Services />
      <div className="l-spacer"></div>
      <ServicesPT2 />
      <div className="m-spacer"></div>
      <Reviews />
      <div className="m-spacer"></div>
      <Info />
    </div>
  );
};