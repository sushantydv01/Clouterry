"use client";

import React from "react";
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/lib/threadTheme";
import StickerMark, { StickerName } from "@/components/illustrations/StickerMark";

const ROW1_STICKERS: StickerName[] = ["s09-01-sparkle", "s09-07-sun", "s09-09-paper-plane"];
const ROW2_STICKERS: StickerName[] = ["s09-03-shooting-star", "s09-13-spiral", "s09-02-flower"];

function MarqueePill({
  label,
  color,
  category,
}: {
  label: string;
  color: string;
  category: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1E1E20] border border-[#F8F6EF]/14 text-[#F8F6EF] shrink-0 cursor-default">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
        {label}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9C9990]">
        {category}
      </span>
    </div>
  );
}

/**
 * Compact 2-Track Capability Marquee (A03) using calibrated #1E1E20 pills and S09 marks.
 */
export default function CapabilityMarquee() {
  return (
    <div className="w-full space-y-8 py-14 sm:py-16 overflow-hidden bg-[#171717] border-t border-b border-[#F8F6EF]/10">
      <div className="max-w-3xl mx-auto text-center px-4 space-y-2.5">
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55] block">
          Studio Breadth
        </span>
        <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F8F6EF]">
          Disciplines calibrated for enduring organizations.
        </h3>
      </div>

      {/* Row 1 */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-left flex items-center gap-4">
          {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => (
            <React.Fragment key={`r1-${idx}`}>
              <MarqueePill label={item.label} color={item.color} category={item.category} />
              {idx % 2 === 1 && (
                <StickerMark
                  name={ROW1_STICKERS[(idx >> 1) % ROW1_STICKERS.length]}
                  size={24}
                  className="mx-1"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-right flex items-center gap-4">
          {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => (
            <React.Fragment key={`r2-${idx}`}>
              <MarqueePill label={item.label} color={item.color} category={item.category} />
              {idx % 2 === 0 && (
                <StickerMark
                  name={ROW2_STICKERS[(idx >> 1) % ROW2_STICKERS.length]}
                  size={24}
                  className="mx-1"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
