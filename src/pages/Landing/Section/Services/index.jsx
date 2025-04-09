import { bibendumTellus } from "@/assets/images";
import { COButton, COContinaer } from "@/components";
import { serviceList } from "@/constants/data";
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
          <div className="grid grid-cols-[auto_1fr] gap-32 mt-32">
            <div>
              {serviceList?.map((content, index) => (
                <COButton key={index}>
                  {content.icon}
                  {content.name}
                </COButton>
              ))}
            </div>
            <div className="items-end justify-self-end">
              <div>
                <img
                  src={bibendumTellus}
                  alt="bibendumTellus"
                  className="opacity-100 object-cover"
                />
              </div>
              <div>
                <img
                  src={bibendumTellus}
                  alt="bibendumTellus"
                  className="opacity-0 object-cover"
                />
              </div>
              <div>
                <img
                  src={bibendumTellus}
                  alt="bibendumTellus"
                  className="opacity-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </COContinaer>
    </section>
  );
};
