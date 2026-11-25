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
      className={`rounded-2xl border border-white/15 bg-[#141416] overflow-hidden shadow-2xl ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/10 bg-[#18181B]">
        {/* Subtle Window Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
        </div>

        {/* Clean Modern Address Bar */}
        <div className="flex items-center gap-2 rounded-full bg-[#101012] border border-white/10 px-4 py-1 text-xs text-white/60 flex-1 min-w-0 max-w-sm justify-center">
          <Lock size={12} className="text-white/40 shrink-0" />
          <span className="truncate font-sans font-medium">{url}</span>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-12 shrink-0 hidden xs:block" />
      </div>

      {/* Browser Viewport Content */}
      <div className="relative w-full overflow-hidden bg-[#101012]">
        {children}
      </div>
    </div>
  );
}
