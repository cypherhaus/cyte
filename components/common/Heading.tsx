import React from "react";

export const Heading = ({
  children,
  size,
}: {
  children: string;
  size?: string;
}) => {
  return (
    <h1
      className={`${
        size === "small"
          ? "text-base"
          : size === "large"
          ? "text-4xl"
          : "text-3xl"
      } mb-6`}
    >
      {children}
    </h1>
  );
};
