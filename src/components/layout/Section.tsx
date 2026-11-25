import React from "react";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?:
    | "black"
    | "dark"
    | "page"
    | "charcoal"
    | "charcoal-subtle"
    | "surface"
    | "subtle"
    | "warm-paper"
    | "paper"
    | "butter-yellow"
    | "yellow"
    | "vibrant-pink"
    | "pink"
    | "fresh-green"
    | "green"
    | "cream"
    | "white";
  padding?: "tight" | "normal" | "spacious" | "none";
  ariaLabel?: string;
  containerSize?: "default" | "narrow" | "wide";
  withBorder?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  background = "black",
  padding = "normal",
  ariaLabel,
  containerSize = "default",
  withBorder = true,
}: SectionProps) {
  const bgClasses: Record<string, string> = {
    black: "bg-[#000000] text-white",
    dark: "bg-[#0A0A0B] text-white",
    page: "bg-[#000000] text-white",
    charcoal: "bg-[#18181B] text-white",
    "charcoal-subtle": "bg-[#141416] text-white",
    surface: "bg-[#18181B] text-white",
    subtle: "bg-[#141416] text-white",
    "warm-paper": "bg-[#F8F6F0] text-[#121214] selection:bg-[#FFC700] selection:text-black",
    paper: "bg-[#F8F6F0] text-[#121214] selection:bg-[#FFC700] selection:text-black",
    cream: "bg-[#F8F6F0] text-[#121214]",
    white: "bg-[#FFFFFF] text-[#121214]",
    "butter-yellow": "bg-[#FFC700] text-[#000000] selection:bg-black selection:text-[#FFC700]",
    yellow: "bg-[#FFC700] text-[#000000] selection:bg-black selection:text-[#FFC700]",
    "vibrant-pink": "bg-[#FF90E8] text-[#000000] selection:bg-black selection:text-[#FF90E8]",
    pink: "bg-[#FF90E8] text-[#000000] selection:bg-black selection:text-[#FF90E8]",
    "fresh-green": "bg-[#10B981] text-[#000000]",
    green: "bg-[#10B981] text-[#000000]",
  };

  const padClasses = {
    none: "py-0",
    tight: "py-12 sm:py-16",
    normal: "py-20 sm:py-28",
    spacious: "py-28 sm:py-36",
  };

  const borderClass = withBorder
    ? background === "warm-paper" || background === "paper" || background === "butter-yellow" || background === "vibrant-pink" || background === "white"
      ? "border-t border-black/10"
      : "border-t border-white/10"
    : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full ${borderClass} ${bgClasses[background] || bgClasses.black} ${padClasses[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
