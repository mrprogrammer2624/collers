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
    <div className="bg-white border border-bellflower-blue rounded-4xl p-[3.2rem] shadow-[0px_0px_6px_0px_#00000012,_0px_10px_15px_-3px_#0000001A]">
      {company}
      <img src={companyLogo} alt="companyLogo" />
      <p>{description}</p>
      <div className="flex">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-[6.4rem] h-[6.4rem] "
        />
        <div className="d-flex flex-col justify-center ml-4">
          <span className="block">{name}</span>
          <span className="block">{position}</span>
        </div>
      </div>
    </div>
  );
};
