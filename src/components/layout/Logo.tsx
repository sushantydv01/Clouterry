import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
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
      className={`inline-flex items-center gap-3 select-none group shrink-0 ${className}`}
      aria-label="FIRM Home"
    >
      {/* Bespoke Midnight Atelier Architectural Portal & Thread Seal */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-[1.04]"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="10"
          fill={isDark ? "#1D1D20" : "#171717"}
          stroke={isDark ? "#F8F6EF" : "#171717"}
          strokeOpacity={isDark ? "0.2" : "1"}
          strokeWidth="1.25"
        />
        {/* Architectural Arch & Stem forming the F geometry */}
        <path
          d="M11 26V15.5C11 11.91 13.91 9 17.5 9H24.5"
          stroke="#F8F6EF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Crossbar woven in Rose Pink */}
        <path
          d="M11 17.5H20.5"
          stroke="#ED83A8"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Keystone & Foundation nodes */}
        <circle cx="24.5" cy="9" r="2.2" fill="#F4CF55" />
        <circle cx="23.5" cy="25.5" r="2.2" fill="#A6D8A1" />
      </svg>

      {variant !== "mark" && (
        <div className="flex items-center gap-3.5 text-left">
          <span
            className={`font-display text-[22px] sm:text-2xl font-bold tracking-[-0.04em] lowercase leading-none transition-colors ${
              isDark ? "text-[#F8F6EF]" : "text-[#171717]"
            }`}
          >
            firm
          </span>
          {withDescriptor && (
            <span
              className={`hidden xl:inline-flex items-center gap-2 text-xs font-sans tracking-normal pl-3.5 border-l ${
                isDark
                  ? "text-[#ACA89E] border-[#F8F6EF]/18"
                  : "text-[#3F3D38] border-[#171717]/20"
              }`}
            >
              Digital Presence Studio
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
