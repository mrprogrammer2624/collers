import { yellowShoes } from "@/assets/images";
import { COButton } from "@/components/COButton";
import { COContinaer } from "@/components/COContianer";
import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="mb-24 py-32">
      <COContinaer>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-32 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold">Collectible Sneakers</h1>
            <p>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex flex-wrap gap-7 items-center justify-start">
              <COButton>Sign up now</COButton>
              <a>Watch Demo</a>
            </div>
          </div>
          <div className="relative after:block after:absolute after:max-w-[36.7 rem] h-[42.3rem] after:w-full after:h-full after:max-h-[37.2rem] after:-z-1 after:top-3/6 after:rounded-[5rem] after:-translate-3/6 after:left-3/6 after:bg-amber-400 w-3/6 md:w-full mx-auto">
            <img
              src={yellowShoes}
              alt="yellowShoes"
              className="absolute w-full max-h-[38.8rem] h-full top-0 object-cover left-0 "
            />
          </div>
        </div>
      </COContinaer>
    </section>
  );
};
