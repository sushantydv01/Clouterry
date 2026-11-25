import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  badge,
  children,
  className = "",
  centered = false,
}: PageHeaderProps) {
  return (
    <div
      className={`pt-28 pb-12 sm:pt-36 sm:pb-16 max-w-4xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {/* Quiet, understated category indicator if needed */}
      {(eyebrow || badge) && (
        <div
          className={`flex items-center gap-2.5 mb-5 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          {badge && (
            <span className="text-xs font-semibold text-[#FF90E8]">
              {badge}
            </span>
          )}
          {badge && eyebrow && <span className="text-white/20">&bull;</span>}
          {eyebrow && (
            <span className="text-xs text-white/60 font-medium">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Main Gumroad-Style Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]">
        {title}
      </h1>

      {/* Narrative Thesis Subhead */}
      {description && (
        <p className="mt-6 text-base sm:text-xl text-white/70 leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}

      {/* Optional CTAs or meta elements */}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
