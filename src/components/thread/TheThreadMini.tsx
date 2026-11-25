import React from "react";
import { CAPABILITY_NODES } from "@/lib/threadTheme";

interface TheThreadMiniProps {
  activeDivisions?: string[];
  activeNodeNum?: string;
  className?: string;
  showLabels?: boolean;
  size?: "sm" | "md";
}

export default function TheThreadMini({
  activeDivisions = [],
  activeNodeNum,
  className = "",
  showLabels = true,
  size = "md",
}: TheThreadMiniProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative flex items-center justify-between py-2">
        {/* Continuous Ink Thread line running through all 5 nodes */}
        <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-[2px] bg-white/20" />

        {CAPABILITY_NODES.map((node) => {
          const isActive =
            (activeNodeNum && activeNodeNum === node.num) ||
            activeDivisions.some(
              (d) =>
                d.toLowerCase().includes(node.shortName.toLowerCase()) ||
                d.toLowerCase().includes(node.name.toLowerCase())
            ) ||
            (!activeNodeNum && activeDivisions.length === 0);

          return (
            <div key={node.num} className="relative z-10 flex flex-col items-center group">
              {/* Outer circular badge */}
              <div
                className={`rounded-full flex items-center justify-center border transition-all ${
                  size === "sm" ? "w-4 h-4" : "w-6 h-6"
                } ${
                  isActive
                    ? "bg-[#18181B] border-white/80 shadow-md scale-110"
                    : "bg-[#101012] border-white/15 opacity-40 hover:opacity-80"
                }`}
              >
                <div
                  className={`rounded-full transition-transform ${
                    size === "sm" ? "w-2 h-2" : "w-3 h-3"
                  }`}
                  style={{ backgroundColor: node.color }}
                />
              </div>

              {showLabels && (
                <div className="mt-1.5 text-center">
                  <span
                    className={`text-[10px] font-medium block whitespace-nowrap transition-colors ${
                      isActive ? "text-white/90 font-semibold" : "text-white/40"
                    }`}
                  >
                    {node.shortName}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

