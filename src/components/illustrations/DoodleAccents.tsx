import React from "react";

/**
 * Hand-drawn vector accents and "The Seam" signature motif for FIRM.
 * Organic outlines with stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
 * Uses Pop Garden palette fills where applicable.
 */

export function DoodleUnderline({ className = "text-[#ED83A8]", width = 240, height = 18 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 14C45 4 125 2 237 9"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 16C62 8 152 7 225 14"
        stroke="#171717"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className = "", direction = "down-right" }: { className?: string; direction?: "down-right" | "right" | "curve-left" }) {
  if (direction === "right") {
    return (
      <svg
        width="64"
        height="28"
        viewBox="0 0 64 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M3 14C20 12 40 15 58 13M58 13L46 5M58 13L47 23"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "curve-left") {
    return (
      <svg
        width="54"
        height="48"
        viewBox="0 0 54 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M48 6C32 4 12 14 10 38M10 38L4 26M10 38L22 34"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="58"
      height="48"
      viewBox="0 0 58 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6C18 10 36 20 48 38M48 38L34 38M48 38L46 24"
        stroke="#171717"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className = "text-[#F4CF55]", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2C16 10 22 16 30 16C22 16 16 22 16 30C16 22 10 16 2 16C10 16 16 10 16 2Z"
        fill="currentColor"
        stroke="#171717"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleStar({ className = "text-[#ED83A8]", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L14.8 8.2L21.5 8.9L16.4 13.5L17.9 20.1L12 16.7L6.1 20.1L7.6 13.5L2.5 8.9L9.2 8.2L12 2Z"
        fill="currentColor"
        stroke="#171717"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleStamp({ text = "ORIGINAL", color = "#A6D8A1", className = "" }: { text?: string; color?: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 border-2 border-[#171717] px-3 py-1 font-mono text-[11px] font-bold text-[#171717] uppercase tracking-wider shadow-[3px_3px_0_0_#171717] rotate-[-2deg] hover:rotate-0 transition-transform ${className}`}
      style={{ backgroundColor: color }}
    >
      <span className="h-2 w-2 rounded-full bg-[#171717]" />
      <span>{text}</span>
    </div>
  );
}

/**
 * Reusable tight inline highlight component that hugs words cleanly
 * without stretching, handling multiline wrapping properly with box-decoration-clone.
 */
export function InlineHighlight({
  children,
  color = "pink",
  className = "",
}: {
  children: React.ReactNode;
  color?: "pink" | "green" | "yellow";
  className?: string;
}) {
  const bgStyles = {
    pink: "bg-[#ED83A8] text-[#171717] border-b-2 border-[#171717]",
    green: "bg-[#A6D8A1] text-[#171717] border-b-2 border-[#171717]",
    yellow: "bg-[#F4CF55] text-[#171717] border-b-2 border-[#171717]",
  };

  return (
    <span
      className={`relative inline px-1.5 py-0.5 box-decoration-clone ${bgStyles[color]} ${className}`}
      style={{
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}

/**
 * "The Seam" — A signature recurring architectural motif representing the unified
 * connection between Brand, Web, Content, Growth, and Stewardship.
 */
export function TheSeamSpine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center my-6 ${className}`} aria-hidden="true">
      <svg width="100%" height="28" viewBox="0 0 800 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-4xl w-full">
        {/* Core Architectural Guideline */}
        <path d="M10 14 H790" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 14 H790" stroke="#A6D8A1" strokeWidth="1.5" strokeDasharray="8 6" strokeLinecap="round" />
        
        {/* 5 Interlocking Anchor Nodes */}
        <circle cx="80" cy="14" r="7" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
        <circle cx="240" cy="14" r="7" fill="#F4CF55" stroke="#171717" strokeWidth="2" />
        <circle cx="400" cy="14" r="8" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
        <circle cx="560" cy="14" r="7" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
        <circle cx="720" cy="14" r="7" fill="#F4CF55" stroke="#171717" strokeWidth="2" />
      </svg>
    </div>
  );
}
