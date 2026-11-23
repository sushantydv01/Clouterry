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
      className={`border border-black bg-white shadow-[4px_4px_0_0_#000] overflow-hidden ${className}`}
    >
      {/* Browser Chrome Header with Solid Black Border */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-black bg-[#F4F4F0]">
        {/* Window Traffic Lights with Black Outlines */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#DC341E] border border-black" />
          <span className="h-3 w-3 rounded-full bg-[#F1F333] border border-black" />
          <span className="h-3 w-3 rounded-full bg-[#55D6BE] border border-black" />
        </div>

        {/* Address Bar with Solid Black Border */}
        <div className="flex items-center gap-2 border border-black bg-white px-3 py-1 text-[11px] font-mono text-black max-w-xs sm:max-w-md w-full justify-center shadow-[1px_1px_0_0_#000]">
          <Lock size={11} className="text-black shrink-0" />
          <span className="truncate font-semibold">{url}</span>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-8 hidden sm:block" />
      </div>

      {/* Browser Viewport Content */}
      <div className="relative w-full overflow-hidden bg-[#F4F4F0]">
        {children}
      </div>
    </div>
  );
}
