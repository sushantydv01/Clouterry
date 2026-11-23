import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function Logo({
  className = "",
  variant = "full",
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Flat, geometric cohort symbol: two intersecting apertures representing creators converging */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="14"
          r="8"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeOpacity="0.9"
        />
        <circle
          cx="17"
          cy="14"
          r="8"
          stroke="var(--text-primary)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <circle
          cx="14"
          cy="14"
          r="2.5"
          fill="var(--accent)"
        />
      </svg>

      {/* Wordmark */}
      {variant !== "mark" && (
        <span
          className="font-body text-base font-medium tracking-tight text-[var(--text-primary)]"
          style={{ letterSpacing: "-0.015em" }}
        >
          clouterry
        </span>
      )}
    </div>
  );
}
