import React from "react";
import Image from "next/image";

interface StudyShowcaseArtProps {
  slug: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
}

const STUDY_ART_MAP: Record<string, { src: string; alt: string }> = {
  "saint-jude-academy": {
    src: "/images/studio/w01-saint-jude.webp",
    alt: "Paper-cut architectural diorama of a sandstone preparatory academy gateway, yellow stairs, botanical laurel leaves, and an open viewbook connected by a rose pink ribbon",
  },
  "aether-health": {
    src: "/images/studio/w02-aether-health.webp",
    alt: "Serene layered garden green paper arches surrounding a warm cream alcove bathed in soft amber light, flanked by ceramic vessels and a flowing rose pink ribbon",
  },
  "vance-legal": {
    src: "/images/studio/w03-vance-legal.webp",
    alt: "Classical fluted cream limestone column fragment balanced beside bound linen volumes and a butter yellow bookmark ribbon linked by a continuous rose pink path",
  },
};

export default function StudyShowcaseArt({
  slug,
  className = "",
  priority = false,
  loading = "eager",
  sizes = "(max-width: 1024px) 100vw, 55vw",
}: StudyShowcaseArtProps) {
  const artwork = STUDY_ART_MAP[slug] || STUDY_ART_MAP["saint-jude-academy"];

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
