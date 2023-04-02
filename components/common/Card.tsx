import React from "react";
import Link from "next/link";
import Image from "next/image";
import orangeSunshine from "../../assets/images/orange-sunshine.jpg";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export const Card = ({ title, description, link }: CardProps) => (
  <Link href={link}>
    <div className="flex flex-row cursor-pointer">
      <div className="max-w-[500px]  max-h-[200px] pb-4 border-b-solid border-b-2 border-black">
        <p className="text-2xl font-bold mb-4 cursor-pointer">{title}</p>
        <p className="text-left desktop:text-xl font-normal leading-8">
          {description}
        </p>
      </div>
    </div>
  </Link>
);
