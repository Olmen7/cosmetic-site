import React from "react";
import { Reviews } from "../home/homeComponents/Reviews";
import { Services } from "../home/homeComponents/Services";
import { ServicesPT2 } from "../home/homeComponents/ServicesPT2";
import { Hero2 } from "./home2components/Hero2";

export const Home2 = () => {
  return (
    <>
      <Hero2 />
      <Services />
      <ServicesPT2 />
      <Reviews />
    </>
  );
};
