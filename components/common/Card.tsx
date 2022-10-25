import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export const Card = ({ title, description, link }: CardProps) => (
  <div
    onClick={() => window.open(link)}
    className="mr-10 shrink-0 p-4 h-40 w-[280px] max-w-[280px] rounded bg-green/70 cursor-pointer z-10 hover:bg-green/100"
  >
    <p className="text-center text-2xl mb-4 font-medium">{title}</p>
    <p className="text-left text-sm font-normal">{description}</p>
  </div>
);
