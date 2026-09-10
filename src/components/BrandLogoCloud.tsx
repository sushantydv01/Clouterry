"use client";

const BRANDS = [
  { name: "GLOSSIER", category: "Beauty & Skincare" },
  { name: "NOTION", category: "Productivity & Tech" },
  { name: "OATLY", category: "Food & Culture" },
  { name: "GYMSHARK", category: "Fitness & Movement" },
  { name: "RHODE", category: "Skincare" },
  { name: "SALOMON", category: "Outdoors & Movement" },
  { name: "FIGMA", category: "Design Tools" },
  { name: "LIQUID DEATH", category: "Beverage & Culture" },
  { name: "ARC'TERYX", category: "Apparel & Active" },
  { name: "SPOTIFY", category: "Audio & Lifestyle" },
];

export default function BrandLogoCloud() {
  return (
    <div className="relative w-full overflow-hidden py-3 select-none">
      {/* Subtle edge fades with dark space void */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-void via-void/80 to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-void via-void/80 to-transparent" />

      {/* Infinite track */}
      <div className="flex w-max animate-marquee items-center gap-10">
        {[...BRANDS, ...BRANDS].map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex items-baseline gap-2.5 transition-colors"
          >
            <span className="font-display text-xs font-black tracking-widest text-star-white/70 hover:text-star-white">
              {brand.name}
            </span>
            <span className="text-[11px] font-mono text-silver/40">
              ({brand.category})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
