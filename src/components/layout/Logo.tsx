import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  withDescriptor?: boolean;
}

export default function Logo({
  className = "",
  variant = "full",
  withDescriptor = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md ${className}`}
      aria-label="FIRM — Home"
    >
      {/* FIRM Architectural Keystone Symbol */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0 text-[var(--accent)]"
        aria-hidden="true"
      >
        {/* Outer drafting square */}
        <rect
          x="3"
          y="3"
          width="26"
          height="26"
          stroke="var(--text-primary)"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />
        {/* Architectural keystone / letter F structural geometry */}
        <path
          d="M10 9H22V13H14V17H20V21H14V23H10V9Z"
          fill="var(--accent)"
        />
        {/* Fine crosshair registration dot */}
        <circle cx="23" cy="23" r="1.5" fill="var(--text-primary)" fillOpacity="0.6" />
      </svg>

      {/* Wordmark and optional descriptor */}
      {variant !== "mark" && (
        <div className="flex flex-col">
          <span
            className="font-display text-lg font-medium tracking-[0.12em] uppercase text-[var(--text-primary)] leading-none"
          >
            F I R M
          </span>
          {withDescriptor && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)] mt-1">
              Digital Presence & Growth
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
