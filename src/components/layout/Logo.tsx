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
      className={`inline-flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-black rounded-none group ${className}`}
      aria-label="FIRM — Home"
    >
      {/* FIRM Keystone Symbol — Neo-Brutalist Black Outline with Candy Pink Fill */}
      <div className="h-8 w-8 shrink-0 border border-black bg-[#FF90E8] flex items-center justify-center transition-all duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[2px_2px_0_0_#000]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          {/* Architectural structural F letterform */}
          <path
            d="M5 4H19V8H9V11H17V15H9V20H5V4Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Wordmark and optional descriptor */}
      {variant !== "mark" && (
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-[0.14em] uppercase text-black leading-none">
            F I R M
          </span>
          {withDescriptor && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#605C56] font-semibold mt-1">
              Digital Presence &amp; Growth
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
