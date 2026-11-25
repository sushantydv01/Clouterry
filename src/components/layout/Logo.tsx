import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  withDescriptor?: boolean;
  theme?: "light" | "dark";
}

export default function Logo({
  className = "",
  variant = "full",
  withDescriptor = false,
  theme = "dark",
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none outline-none group ${className}`}
      aria-label="FIRM — Home"
    >
      {/* Distinctive architectural studio mark */}
      <div className="h-8 w-8 rounded-lg bg-[#FF90E8] flex items-center justify-center transition-transform duration-150 group-hover:scale-105 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4.5 w-4.5 text-black"
          aria-hidden="true"
        >
          {/* Refined architectural 'f' ligature with custom terminal node */}
          <path
            d="M7 20V11M7 11V6.5C7 4.567 8.567 3 10.5 3H15M5 9.5H13"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="3" r="1.25" fill="currentColor" />
        </svg>
      </div>

      {/* Clean geometric wordmark */}
      {variant !== "mark" && (
        <div className="flex items-center gap-2 text-left">
          <span
            className={`font-display text-xl sm:text-2xl font-bold tracking-tight lowercase leading-none transition-colors ${isDark ? "text-white" : "text-black"
              }`}
          >
            firm
          </span>
          {withDescriptor && (
            <span className="hidden sm:inline-block text-[11px] font-medium text-white/50 tracking-normal pl-1 border-l border-white/20">
              digital presence &amp; growth
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
