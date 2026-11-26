import React from "react";
import Image from "next/image";

interface MonographCoverArtProps {
  slug: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
}

const MONOGRAPH_ART_MAP: Record<string, { src: string; alt: string }> = {
  "digital-presence-architectural-problem": {
    src: "/images/studio/e01-fragmentation.webp",
    alt: "Three stepped architectural paper pavilions in warm cream, garden green, and butter yellow unified across drafting gridlines by one rose pink ribbon",
  },
  "architecture-of-a-modern-school-website": {
    src: "/images/studio/e02-school-architecture.webp",
    alt: "Dual-courtyard paper architectural plan separating an admissions portal arch from organized community schedule tiles bridged by a rose pink arch",
  },
  "website-performance-business-requirement": {
    src: "/images/studio/e03-performance.webp",
    alt: "Layered aerodynamic paper planes balanced around a golden core sphere and linked end-to-end by one taut rose pink line",
  },
  "brand-identity-beyond-the-logo": {
    src: "/images/studio/e04-brand-identity.webp",
    alt: "Fanned tactile color boards in cream, garden green, and butter yellow beside a sculpted paper ink nib and square threaded by a rose pink ribbon",
  },
  "sustainable-digital-presence-professional-firms": {
    src: "/images/studio/e05-professional-firms.webp",
    alt: "Classical warm cream stone plinth supporting bound green and cream monograph volumes secured with a rose pink binding ribbon",
  },
  "digital-stewardship-after-launch": {
    src: "/images/studio/e06-stewardship.webp",
    alt: "Concentric protective olive, garden green, and warm cream paper rings sheltering an illuminated golden lantern core traced by a pink ribbon",
  },
};

export default function MonographCoverArt({
  slug,
  className = "",
  priority = false,
  loading = "eager",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: MonographCoverArtProps) {
  const artwork =
    MONOGRAPH_ART_MAP[slug] || MONOGRAPH_ART_MAP["digital-presence-architectural-problem"];

  return (
    <Image
      src={artwork.src}
      alt={artwork.alt}
      fill
      priority={priority}
      loading={priority ? undefined : loading}
      sizes={sizes}
      className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] ${className}`}
    />
  );
}
