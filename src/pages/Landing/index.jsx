import { COHeader, COFooter, COLink } from "@/components/";
import React from "react";
import { Hero } from "./Section/Hero";
import { Testimonial } from "./Section/Testimonial";
import { Services } from "./Section/Services";

export const Landing = () => {
  return (
    <>
      <COHeader />
      <main>
        <Hero />
        <Testimonial />
        <Services />
      </main>
      <COFooter />
    </>
  );
};
