import clsx from "clsx";
import React from "react";

export const COContinaer = ({ className, children }) => {
  return (
    <div className={clsx(className, "max-w-[var(--contianer-width)] mx-auto px-6")}>
      {children}
    </div>
  );
};
