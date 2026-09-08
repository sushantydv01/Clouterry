import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "compact";
  tone?: "cream" | "ink" | "red";
}

export default function Logo({
  className = "",
  variant = "full",
  tone = "ink",
}: LogoProps) {
  const markColor = tone === "cream" ? "#F5F1E6" : "#C41E3A";
  const ringColor = tone === "cream" ? "#EDE6D3" : "#C41E3A";
  const textColor = tone === "cream" ? "text-cream" : tone === "red" ? "text-red" : "text-ink";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 2D Planet Symbol */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 shrink-0 transition-transform duration-300 hover:rotate-12"
        aria-hidden="true"
      >
        {/* Planet sphere */}
        <circle cx="20" cy="20" r="11" fill={markColor} />
        {/* Diagonal slash bar cutting through */}
        <rect
          x="7"
          y="18.5"
          width="26"
          height="3"
          rx="1.5"
          transform="rotate(-22 20 20)"
          fill={tone === "cream" ? "#8B1428" : "#8B1428"}
          opacity="0.9"
        />
        {/* Orbital tilted ring */}
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="5.5"
          transform="rotate(24 20 20)"
          stroke={ringColor}
          strokeWidth="2.2"
        />
      </svg>

      {/* Wordmark */}
      {variant !== "mark" && (
        <span
          className={`font-display text-2xl font-bold tracking-tight lowercase ${textColor}`}
          style={{ letterSpacing: "-0.02em" }}
        >
          clouterry
        </span>
      )}
    </div>
  );
}
