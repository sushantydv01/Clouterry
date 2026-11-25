"use client";

import React from "react";
import { MARQUEE_ROW_1, MARQUEE_ROW_2, MARQUEE_ROW_3 } from "@/lib/threadTheme";
import { DoodleHandStar, DoodleHandSparkle, DoodleBadgeStamp } from "@/components/illustrations/ThreadDoodles";

interface PillProps {
  label: string;
  color: string;
  category: string;
  variant?: "dark" | "tinted" | "white" | "yellow" | "pink";
}

function MarqueePill({ label, color, category, variant = "dark" }: PillProps) {
  const variantStyles = {
    dark: "bg-[#18181B] text-white border-white/10 hover:border-white/25",
    tinted: "bg-[#222228] text-white border-white/15 hover:border-white/30",
    white: "bg-[#FFFFFF] text-[#121214] border-black/10 hover:border-black/25 shadow-sm",
    yellow: "bg-[#FFC700] text-[#121214] border-black/15 font-semibold shadow-sm",
    pink: "bg-[#FF90E8] text-[#121214] border-black/15 font-semibold shadow-sm",
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all cursor-default shrink-0 shadow-sm ${variantStyles[variant]}`}
    >
      <div
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs sm:text-sm whitespace-nowrap">
        {label}
      </span>
      <span
        className={`text-[10px] font-mono uppercase tracking-wider ${
          variant === "white" || variant === "yellow" || variant === "pink"
            ? "text-black/60"
            : "text-white/40"
        }`}
      >
        {category}
      </span>
    </div>
  );
}

export default function CapabilityMarquee() {
  return (
    <div className="w-full space-y-10 py-16 overflow-hidden bg-[#0A0A0B] border-t border-b border-white/10">
      {/* Centered Heading */}
      <div className="max-w-3xl mx-auto text-center px-4 space-y-3">
        <DoodleBadgeStamp text="UNLIMITED RIGOR" color="#FFC700" />
        <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Five capabilities. Infinite breadth.
        </h3>
        <p className="text-base sm:text-lg text-white/65 max-w-xl mx-auto">
          Everything your organization needs to build, launch, and compound digital authority under one senior standard.
        </p>
      </div>

      {/* Marquee Row 1 - Scroll Left */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-left flex items-center gap-4">
          {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => (
            <React.Fragment key={`r1-${idx}`}>
              <MarqueePill
                label={item.label}
                color={item.color}
                category={item.category}
                variant={idx % 4 === 1 ? "yellow" : idx % 4 === 3 ? "tinted" : "dark"}
              />
              {idx % 5 === 0 && (
                <div className="shrink-0 px-1">
                  <DoodleHandStar color="#FFC700" size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Scroll Right */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-right flex items-center gap-4">
          {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => (
            <React.Fragment key={`r2-${idx}`}>
              <MarqueePill
                label={item.label}
                color={item.color}
                category={item.category}
                variant={idx % 4 === 2 ? "pink" : idx % 4 === 0 ? "white" : "dark"}
              />
              {idx % 4 === 0 && (
                <div className="shrink-0 px-1">
                  <DoodleHandSparkle color="#FF90E8" size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Marquee Row 3 - Scroll Left */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-left flex items-center gap-4">
          {[...MARQUEE_ROW_3, ...MARQUEE_ROW_3, ...MARQUEE_ROW_3].map((item, idx) => (
            <React.Fragment key={`r3-${idx}`}>
              <MarqueePill
                label={item.label}
                color={item.color}
                category={item.category}
                variant={idx % 3 === 1 ? "tinted" : "dark"}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
