import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  /** "red" for the mark on cream/light surfaces, "cream" for the mark on red surfaces. */
  tone?: "red" | "cream";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "full",
  tone = "red",
  size = "md",
}: LogoProps) {
  const onRed = tone === "cream";

  const markSrc = onRed ? "/clouterry-mark-white.png" : "/clouterry-mark.png";
  const wordmarkSrc = onRed ? "/clouterry-wordmark-white.png" : "/clouterry-wordmark.png";

  // Mark aspect ratio: 619 / 422 = ~1.467
  // Wordmark aspect ratio: 678 / 246 = ~2.756
  const markHeight = size === "sm" ? 26 : size === "lg" ? 44 : 32;
  const markWidth = Math.round(markHeight * 1.467);

  const wordmarkHeight = size === "sm" ? 20 : size === "lg" ? 34 : 24;
  const wordmarkWidth = Math.round(wordmarkHeight * 2.756);

  return (
    <div
      className={`inline-flex items-center gap-2 select-none ${className}`}
      aria-label="Clouterry logo"
    >
      <div
        style={{ height: `${markHeight}px`, width: `${markWidth}px` }}
        className="relative shrink-0"
      >
        <Image
          src={markSrc}
          alt="Clouterry emblem"
          fill
          sizes="(max-width: 768px) 50px, 80px"
          className="object-contain"
          priority
        />
      </div>

      {variant !== "mark" && (
        <div
          style={{ height: `${wordmarkHeight}px`, width: `${wordmarkWidth}px` }}
          className="relative shrink-0"
        >
          <Image
            src={wordmarkSrc}
            alt="Clouterry"
            fill
            sizes="(max-width: 768px) 80px, 120px"
            className="object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
}
