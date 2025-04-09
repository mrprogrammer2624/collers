import React from "react";

export const COTestimonialCard = ({
  name,
  avatar,
  company,
  companyLogo,
  position,
  description,
}) => {
  return (
    <div className="bg-white border border-bellflower-blue rounded-4xl p-[3.2rem] shadow-[0px_0px_6px_0px_#00000012,_0px_10px_15px_-3px_#0000001A] mb-7">
      <div className="flex items-center gap-3.5 mb-14">
        <span>{companyLogo}</span>
        <p className="capitalize font-bold align-middle text-rainmaker">
          {company}
        </p>
      </div>
      <h4>{description}</h4>
      <div className="flex mt-6 justify-start items-center">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-[6.4rem] h-[6.4rem] "
        />
        <div className="d-flex flex-col justify-center items-center ml-4">
          <p className="block text-black leading-relaxed">{name}</p>
          <h6 className="block text-rainmaker leading-normal">{position}</h6>
        </div>
      </div>
    </div>
  );
};
