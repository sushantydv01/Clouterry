import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "reading" | "narrow" | "default" | "wide" | "full";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    reading: "max-w-[78ch]",
    narrow: "max-w-4xl",
    default: "max-w-[1360px]",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <div
      className={`mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 w-full ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
