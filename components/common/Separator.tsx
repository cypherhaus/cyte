import React from "react";

export const Separator = ({ text }: { text: string }) => (
  <div className="mt-10 mb-10 flex items-center">
    <p className="text-2xl">{text}</p>
    <div className="border flex-grow ml-2 border-[0.1px] border-white/20"></div>
  </div>
);
