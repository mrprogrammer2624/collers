import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

export const COLink = ({ children, className }) => {
  return <Link className={clsx(className, " text-amber-900 hover:text-amber-700")}>{children}</Link>;
};
