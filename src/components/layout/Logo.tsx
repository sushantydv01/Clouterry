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
  theme = "light",
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#ED83A8] rounded-none group ${className}`}
      aria-label="FIRM — Home"
    >
      {/* FIRM Keystone Symbol — Pop Garden Rose Pink Fill with Midnight Black Border */}
      <div className="h-10 w-10 shrink-0 border border-[#171717] bg-[#ED83A8] flex items-center justify-center transition-transform duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[3px_3px_0_0_#171717]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#171717]"
          aria-hidden="true"
        >
          {/* Architectural structural F letterform */}
          <path
            d="M5 4H19V8H9V11H17V15H9V20H5V4Z"
            fill="#171717"
          />
        </svg>
      </div>

      {/* Wordmark and optional descriptor */}
      {variant !== "mark" && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display text-2xl font-bold tracking-[0.16em] uppercase leading-none transition-colors ${
                isDark ? "text-[#F8F6EF]" : "text-[#171717]"
              }`}
            >
              FIRM
            </span>
            <span className="h-2 w-2 rounded-none bg-[#F4CF55] border border-[#171717] inline-block shadow-[1px_1px_0_0_#171717]" />
          </div>
          {withDescriptor && (
            <span
              className={`font-mono text-[9px] uppercase tracking-wider font-semibold mt-1 ${
                isDark ? "text-[#A6D8A1]" : "text-[#6E6A63]"
              }`}
            >
              Digital Presence &amp; Growth
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
