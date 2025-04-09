import clsx from "clsx";
import React from "react";

export const COButton = ({
  children,
  className,
  id,
  name,
  handelChange,
  type,
  varient = "primary",
  size = "sm",
  icon,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        className,
        "outline-none cursor-pointer",
        icon &&
          "rounded-full border-2 max-w-[4.8rem] w-full max-h-[4.8rem] h-full flex items-center justify-center",
        {
          ["font-medium leading-normal text-2xl"]: size === "sm",
          ["font-bold leading-4 text-3xl"]: size === "xl",
          ["font-normal  leading-normal text-xl"]: size === "m",
          ["text-amber-900 border border-amber-900 border-solid h-[4.8rem] rounded-2xl px-5 hover:bg-amber-900 hover:text-white hover:border-transparent transition-all duration-300 ease-in-out active:bg-amber-800 active:border-transparent"]:
            varient === "primary",
          // [""]: varient === "default",
          // [""]: varient === "Link",
        }
      )}
      id={id}
      name={name}
      type={type}
      size={size}
      varient={varient}
      onChange={handelChange}
      {...rest}
    >
      {children}
    </button>
  );
};
