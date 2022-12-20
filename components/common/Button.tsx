import React from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="w-40 font-bold border-2 border-black p-2 bg-white outline-none hover:border-cypherhaus hover:text-cypherhaus hover:scale-105"
    >
      {children}
    </button>
  );
};
