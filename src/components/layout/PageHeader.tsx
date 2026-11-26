import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  kicker?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Architectural PageHeader balancing expressive medium-weight Bricolage titles
 * with optional asymmetrical contextual specimens on the right.
 */
export default function PageHeader({
  title,
  description,
  kicker,
  aside,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`pt-28 pb-12 sm:pt-32 sm:pb-16 ${className}`}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className={`${aside ? "lg:col-span-7" : "lg:col-span-9"} space-y-5 text-left`}>
          {kicker && (
            <p className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#D5D2C7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ED83A8]" aria-hidden="true" />
              <span>{kicker}</span>
            </p>
          )}

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-medium tracking-[-0.03em] text-[#F8F6EF] leading-[1.04]">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-xl text-[#D5D2C7] leading-relaxed max-w-[60ch] font-sans font-normal">
              {description}
            </p>
          )}

          {children && <div className="pt-2">{children}</div>}
        </div>

        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </div>
  );
}
