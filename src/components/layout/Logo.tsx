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
      aria-label="FIRM Home"
    >
      {/* Architectural Thread & Archway Monogram */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="8"
          stroke={isDark ? "#F8F6EF" : "#171717"}
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />
        <path
          d="M9 22V14C9 10.6863 11.6863 8 15 8H21"
          stroke={isDark ? "#F8F6EF" : "#171717"}
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          d="M9 15.5H17.5"
          stroke="#ED83A8"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <circle cx="22.5" cy="8" r="2.25" fill="#F4CF55" />
        <circle cx="21" cy="22" r="2.25" fill="#A6D8A1" />
      </svg>

      {variant !== "mark" && (
        <div className="flex items-center gap-2.5 text-left">
          <span
            className={`font-display text-xl sm:text-2xl font-bold tracking-tight lowercase leading-none transition-colors ${
              isDark ? "text-[#F8F6EF]" : "text-[#171717]"
            }`}
          >
            firm
          </span>
          {withDescriptor && (
            <span
              className={`hidden sm:inline-block text-[11px] font-medium tracking-normal pl-2.5 border-l ${
                isDark
                  ? "text-[#C4C1B8] border-[#F8F6EF]/20"
                  : "text-[#171717]/65 border-[#171717]/20"
              }`}
            >
              digital presence &amp; growth
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
