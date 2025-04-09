import { COHeader, COFooter, COLink } from "@/components/";
import React from "react";
import { Hero } from "./Section/Hero";
import { Testimonial } from "./Section/Testimonial";

export const Landing = () => {
  return (
    <>
      <COHeader />
      <main>
        <Hero />
        <Testimonial />
      </main>
      <COFooter />
    </>
  );
};
