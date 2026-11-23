import React from "react";
import { Lock } from "lucide-react";

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export default function BrowserFrame({
  url = "firm.agency",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`border border-[#171717] bg-white shadow-[4px_4px_0_0_#171717] sm:shadow-[6px_6px_0_0_#171717] overflow-hidden ${className}`}
    >
      {/* Browser Chrome Header with Solid Midnight Black Border */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-[#171717] bg-[#F8F6EF]">
        {/* Pop Garden Window Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-[#ED83A8] border border-[#171717]" />
          <span className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-[#F4CF55] border border-[#171717]" />
          <span className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-[#A6D8A1] border border-[#171717]" />
        </div>

        {/* Address Bar with Solid Midnight Black Border */}
        <div className="flex items-center gap-1.5 sm:gap-2 border border-[#171717] bg-white px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs font-mono text-[#171717] flex-1 min-w-0 max-w-[200px] sm:max-w-md justify-center shadow-[1px_1px_0_0_#171717] sm:shadow-[2px_2px_0_0_#171717]">
          <Lock size={11} className="text-[#171717] shrink-0" />
          <span className="truncate font-semibold">{url}</span>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-5 sm:w-8 shrink-0 hidden xs:block" />
      </div>

      {/* Browser Viewport Content */}
      <div className="relative w-full overflow-hidden bg-[#F8F6EF]">
        {children}
      </div>
    </div>
  );
}
