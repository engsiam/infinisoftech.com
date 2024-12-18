"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

// Define props for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; // Button text
  iconLeft?: ReactNode; // Optional left-side icon
  iconRight?: ReactNode; // Optional right-side icon
}

const Button = ({
  text,
  onClick,
  className = "",
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md font-semibold focus:outline-none ${className}`}
      {...rest}
    >
      {iconLeft && <span className="w-5 h-5">{iconLeft}</span>}
      <span>{text}</span>
      {iconRight && <span className="w-5 h-5">{iconRight}</span>}
    </button>
  );
};

export default Button;
