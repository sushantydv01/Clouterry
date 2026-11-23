import React from "react";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "page" | "surface" | "subtle" | "raised";
  withRuledBaseline?: boolean;
  padding?: "tight" | "normal" | "spacious";
  ariaLabel?: string;
}

export default function Section({
  children,
  id,
  className = "",
  background = "page",
  withRuledBaseline = false,
  padding = "normal",
  ariaLabel,
}: SectionProps) {
  const bgClasses = {
    page: "bg-[var(--bg-page)]",
    surface: "bg-[var(--bg-surface)]",
    subtle: "bg-[var(--bg-subtle)]",
    raised: "bg-[var(--bg-raised)]",
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
      className={`relative w-full border-t border-[var(--border-hairline)] ${bgClasses[background]} ${padClasses[padding]} ${
        withRuledBaseline ? "ruled-baseline" : ""
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
