import React from "react";
import { COContinaer } from "../COContianer";
import { COButton } from "../COButton";

export const COHeader = () => {
  return (
    <header>
      <COContinaer className="grid grid-cols-2 py-12">
        <h2 className="text-rainmaker">Collers</h2>
        <div className="flex items-center justify-end gap-10">
          <ul className="flex items-center justify-center gap-10">
            <li>
              <a
                href="#"
                className="text-xl text-amber-900 hover:text-amber-800  font-medium transition-all duration-300 ease-in-out"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-amber-900 hover:text-amber-800  font-medium transition-all duration-300 ease-in-out"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-amber-900 hover:text-amber-800  font-medium transition-all duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-amber-900 hover:text-amber-800  font-medium transition-all duration-300 ease-in-out"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-amber-900 hover:text-amber-800  font-medium transition-all duration-300 ease-in-out"
              >
                Log In
              </a>
            </li>
          </ul>
          <COButton className>Sign up now</COButton>
        </div>
      </COContinaer>
    </header>
  );
};
