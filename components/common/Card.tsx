import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export const Card = ({ title, description, link }: CardProps) => (
  <Link href={link}>
    <div className="flex flex-row cursor-pointer">
      <div className="flex justify-center items-center shrink-0 p-4 h-40 w-[180px] h-[180px] max-w-[280px] bg-lsd cursor-pointer z-10">
        {/* <Image src={logo} alt="Test" /> */}
      </div>
      <div className="w-[400px]  p-4 border-solid border border-black">
        <p className="text-2xl font-bold mb-4 cursor-pointer">{title}</p>
        <p className="text-left text-xl font-normal leading-8">{description}</p>
      </div>
    </div>
  </Link>
);
