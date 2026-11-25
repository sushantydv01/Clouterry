import React from "react";
import Image from "next/image";

export type StickerName =
  | "s09-01-sparkle"
  | "s09-02-flower"
  | "s09-03-shooting-star"
  | "s09-04-squiggly-arrow"
  | "s09-05-eye"
  | "s09-06-loop-ribbon"
  | "s09-07-sun"
  | "s09-08-green-wedge"
  | "s09-09-paper-plane"
  | "s09-10-heart"
  | "s09-11-asterisk"
  | "s09-12-check-box"
  | "s09-13-spiral"
  | "s09-14-cursor"
  | "s09-15-yellow-oval"
  | "s09-16-green-zigzag"
  | "s09-17-lightbulb"
  | "s09-18-pink-burst"
  | "s09-19-yellow-burst"
  | "s09-20-charcoal-wave"
  | "s09-21-cloud";

interface StickerMarkProps {
  name: StickerName;
  size?: number;
  className?: string;
}

/** Decorative extracted mark from the approved S09 studio sticker sheet. */
export default function StickerMark({
  name,
  size = 28,
  className = "",
}: StickerMarkProps) {
  return (
    <Image
      src={`/images/stickers/${name}.webp`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="eager"
      className={`inline-block shrink-0 object-contain select-none pointer-events-none ${className}`}
    />
  );
}
