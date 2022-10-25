import React from "react";

export const Separator = ({ text }: { text: string }) => (
  <div className="pl-10 mt-6 mb-6 flex items-center">
    <p className="text-medium">{text}</p>
    <div className="border flex-grow ml-2 border-[0.1px] border-white/20"></div>
  </div>
);
