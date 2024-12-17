"use client";

import { ReactNode } from "react";

interface ButtonProps {
  text: string; // Button text
  onClick?: () => void; // Click handler
  className?: string; // Additional Tailwind classes
  iconLeft?: ReactNode; // Optional left-side icon
  iconRight?: ReactNode; // Optional right-side icon
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md font-semibold focus:outline-none ${className}`}
    >
      {iconLeft && <span className="w-5 h-5">{iconLeft}</span>}
      <span>{text}</span>
      {iconRight && <span className="w-5 h-5">{iconRight}</span>}
    </button>
  );
};

export default Button;
