import { COContinaer } from "@/components";
import React from "react";

export const Services = () => {
  return (
    <section>
      <COContinaer>
        <div>
          <div className="flex flex-wrap gap-12">
            <h2 className="font-extrabold">Services</h2>
            <p className="text-rainmaker">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-32">
            <div></div>
            <div></div>
          </div>
        </div>
      </COContinaer>
    </section>
  );
};
