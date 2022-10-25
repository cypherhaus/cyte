import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => (
  <div>
    <div className="mr-6 p-4 h-40 w-72 rounded bg-green/70 cursor-pointer hover:bg-green/100">
      <p className="text-center text-2xl mb-2">{title}</p>
      <p className="text-left text-sm">{description}</p>
    </div>
  </div>
);
