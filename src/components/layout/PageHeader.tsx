import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  badge,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-14 sm:pt-40 sm:pb-20 max-w-5xl text-left ${className}`}>
      {/* Pop Garden Eyebrow & Badge Tags */}
      {(eyebrow || badge) && (
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {badge && (
            <span className="inline-flex items-center border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
              {badge}
            </span>
          )}
          {eyebrow && (
            <span className="inline-flex items-center border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#171717] shadow-[2px_2px_0_0_#171717]">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Main Confident Space Grotesk Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] leading-[1.02]">
        {title}
      </h1>

      {/* Narrative Thesis Subhead */}
      {description && (
        <p className="mt-6 text-lg sm:text-xl text-[#3A3835] leading-relaxed max-w-3xl font-sans">
          {description}
        </p>
      )}

      {/* Optional CTAs or meta elements */}
      {children && <div className="mt-9">{children}</div>}
    </div>
  );
}
