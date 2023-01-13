import React from "react";
import { Hero2 } from "../home2/home2components/Hero2";
import { Info } from "./homeComponents/Info";
import { Reviews } from "./homeComponents/Reviews";
import { Services } from "./homeComponents/Services";
import { ServicesPT2 } from "./homeComponents/ServicesPT2";
import { Socials } from "./homeComponents/Socials";

export const Home = () => {
  return (
    <div className="entire-homepage">
      <Hero2 />
      <div className="m-spacer"></div>
      <Services />
      <div className="l-spacer"></div>
      <ServicesPT2 />
      <div className="m-spacer"></div>
      <Reviews />
      <div className="m-spacer"></div>
      <Info />
      <div className="m-spacer"></div>
      <Socials />
    </div>
  );
};
