"use client";

import React from "react";

/**
 * FooterThreadSignature — A charming, bespoke hand-drawn brand signature.
 * Depicts "The Thread" looping into a decorative infinity knot with studio metadata.
 */

export default function FooterThreadSignature({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center gap-4 select-none ${className}`}>
      <svg
        width="64"
        height="36"
        viewBox="0 0 64 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Continuous Hand-Drawn Infinity Knot */}
        <path
          d="M 12 18 C 12 8, 24 8, 32 18 C 40 28, 52 28, 52 18 C 52 8, 40 8, 32 18 C 24 28, 12 28, 12 18 Z"
          stroke="#FFC700"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 12 18 C 12 8, 24 8, 32 18 C 40 28, 52 28, 52 18 C 52 8, 40 8, 32 18 C 24 28, 12 28, 12 18 Z"
          stroke="#121214"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Color Accent Nodes on the Loop */}
        <circle cx="12" cy="18" r="3" fill="#FF5C40" />
        <circle cx="32" cy="18" r="3" fill="#3875FF" />
        <circle cx="52" cy="18" r="3" fill="#10B981" />
      </svg>

      <div className="text-left font-mono text-xs">
        <span className="font-bold text-white block">One Studio. Five Disciplines.</span>
        <span className="text-white/40 text-[10px]">THE THREAD ARCHITECTURAL ENGINE</span>
      </div>
    </div>
  );
}
