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
      {(eyebrow || badge) && (
        <div
          className={`flex flex-wrap items-center gap-2.5 mb-5 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          {badge && (
            <span className="text-xs font-mono uppercase tracking-[0.14em] font-medium text-[#ED83A8]">
              {badge}
            </span>
          )}
          {badge && eyebrow && (
            <span className="h-1 w-1 rounded-full bg-[#F8F6EF]/35" aria-hidden="true" />
          )}
          {eyebrow && (
            <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#C4C1B8]">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F6EF] leading-[1.06]">
        {title}
      </h1>

      {description && (
        <p className="mt-6 text-base sm:text-xl text-[#C4C1B8] leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}

      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
