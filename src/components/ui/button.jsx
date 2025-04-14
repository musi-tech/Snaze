import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    white: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
