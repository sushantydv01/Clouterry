import React from "react";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "page" | "surface" | "subtle" | "pink" | "yellow" | "teal" | "dark";
  withRuledBaseline?: boolean;
  padding?: "tight" | "normal" | "spacious";
  ariaLabel?: string;
}

export default function Section({
  children,
  id,
  className = "",
  background = "page",
  padding = "normal",
  ariaLabel,
}: SectionProps) {
  const bgClasses = {
    page: "bg-[#F4F4F0]",
    surface: "bg-white",
    subtle: "bg-[#FAFAF7]",
    pink: "bg-[#FF90E8]",
    yellow: "bg-[#F1F333]",
    teal: "bg-[#55D6BE]",
    dark: "bg-black text-white",
  };

  const padClasses = {
    tight: "py-10 sm:py-14",
    normal: "py-16 sm:py-20",
    spacious: "py-20 sm:py-28",
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full border-t border-black ${bgClasses[background]} ${padClasses[padding]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
