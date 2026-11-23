import React from "react";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "white" | "dark" | "pink" | "green" | "yellow" | "page" | "surface" | "subtle";
  padding?: "tight" | "normal" | "spacious";
  ariaLabel?: string;
}

export default function Section({
  children,
  id,
  className = "",
  background = "cream",
  padding = "normal",
  ariaLabel,
}: SectionProps) {
  const bgClasses: Record<string, string> = {
    cream: "bg-[#F8F6EF] text-[#171717]",
    page: "bg-[#F8F6EF] text-[#171717]",
    subtle: "bg-[#F2EFE6] text-[#171717]",
    white: "bg-white text-[#171717]",
    surface: "bg-white text-[#171717]",
    dark: "bg-[#171717] text-[#F8F6EF]",
    pink: "bg-[#ED83A8] text-[#171717]",
    green: "bg-[#A6D8A1] text-[#171717]",
    yellow: "bg-[#F4CF55] text-[#171717]",
  };

  const padClasses = {
    tight: "py-12 sm:py-16",
    normal: "py-20 sm:py-24",
    spacious: "py-24 sm:py-32",
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full border-t border-[#171717] ${bgClasses[background] || bgClasses.cream} ${padClasses[padding]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
