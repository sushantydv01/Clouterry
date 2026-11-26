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
  containerSize?: "reading" | "narrow" | "default" | "wide" | "full";
  withBorder?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  background = "charcoal",
  padding = "normal",
  ariaLabel,
  containerSize = "default",
  withBorder = true,
}: SectionProps) {
  const bgClasses: Record<string, string> = {
    black: "bg-[#171717] text-[#F8F6EF]",
    dark: "bg-[#171717] text-[#F8F6EF]",
    page: "bg-[#171717] text-[#F8F6EF]",
    charcoal: "bg-[#171717] text-[#F8F6EF]",
    "charcoal-subtle": "bg-[#121214] text-[#F8F6EF]",
    surface: "bg-[#1D1D20] text-[#F8F6EF]",
    subtle: "bg-[#1D1D20] text-[#F8F6EF]",
    "warm-paper": "bg-[#F8F6EF] text-[#171717] selection:bg-[#F4CF55] selection:text-[#171717]",
    paper: "bg-[#F8F6EF] text-[#171717] selection:bg-[#F4CF55] selection:text-[#171717]",
    cream: "bg-[#F8F6EF] text-[#171717] selection:bg-[#F4CF55] selection:text-[#171717]",
    white: "bg-[#FFFFFF] text-[#171717]",
    "butter-yellow": "bg-[#F4CF55] text-[#171717] selection:bg-[#171717] selection:text-[#F4CF55]",
    yellow: "bg-[#F4CF55] text-[#171717] selection:bg-[#171717] selection:text-[#F4CF55]",
    "vibrant-pink": "bg-[#ED83A8] text-[#171717]",
    pink: "bg-[#ED83A8] text-[#171717]",
    "fresh-green": "bg-[#A6D8A1] text-[#171717]",
    green: "bg-[#A6D8A1] text-[#171717]",
  };

  const padClasses = {
    none: "py-0",
    tight: "py-12 sm:py-16",
    normal: "py-16 sm:py-24",
    spacious: "py-20 sm:py-30",
  };

  const isLight =
    background === "warm-paper" ||
    background === "paper" ||
    background === "cream" ||
    background === "butter-yellow" ||
    background === "yellow" ||
    background === "vibrant-pink" ||
    background === "pink" ||
    background === "fresh-green" ||
    background === "green" ||
    background === "white";

  const borderClass = withBorder
    ? isLight
      ? "border-t border-[#171717]/12"
      : "border-t border-[#F8F6EF]/10"
    : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-surface={isLight ? "paper" : "dark"}
      className={`relative w-full ${borderClass} ${bgClasses[background] || bgClasses.charcoal} ${padClasses[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
