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
    <div className={`pt-28 pb-12 sm:pt-36 sm:pb-16 max-w-4xl text-left ${className}`}>
      {/* Neo-Brutalist Eyebrow / Category Tag */}
      {(eyebrow || badge) && (
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {badge && (
            <span className="inline-flex items-center border border-black bg-[#FF90E8] px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              {badge}
            </span>
          )}
          {eyebrow && (
            <span className="inline-flex items-center border border-black bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_0_#000]">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Main Neo-Brutalist Headline */}
      <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl leading-[1.04]">
        {title}
      </h1>

      {/* Narrative Thesis Subhead */}
      {description && (
        <p className="mt-6 text-base sm:text-lg text-[#2D2A26] leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}

      {/* Optional CTAs or meta elements */}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
