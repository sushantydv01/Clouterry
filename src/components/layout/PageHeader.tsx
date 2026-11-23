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
    <div className={`pt-28 pb-16 sm:pt-36 sm:pb-20 max-w-4xl ${className}`}>
      {/* Eyebrow / Category Tag */}
      {(eyebrow || badge) && (
        <div className="flex items-center gap-2 mb-4">
          {badge && (
            <span className="inline-flex items-center rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--accent)] font-medium">
              {badge}
            </span>
          )}
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Main Editorial Headline */}
      <h1 className="font-display text-4xl font-normal tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl leading-[1.08]">
        {title}
      </h1>

      {/* Narrative Thesis Subhead */}
      {description && (
        <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      {/* Optional CTAs or meta elements */}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
