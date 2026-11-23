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
      className={`rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs overflow-hidden ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
        {/* Window Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E56B6F] opacity-75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F4A261] opacity-75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2A9D8F] opacity-75" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1 text-[11px] font-mono text-[var(--text-muted)] max-w-xs sm:max-w-md w-full justify-center">
          <Lock size={10} className="text-[var(--positive)] shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-8 hidden sm:block" />
      </div>

      {/* Browser Viewport Content */}
      <div className="relative w-full overflow-hidden bg-[var(--bg-page)]">
        {children}
      </div>
    </div>
  );
}
