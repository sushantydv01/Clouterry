"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkle, ShieldCheck, Heart, Lightning } from "@phosphor-icons/react";

export default function ArtHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics using Motion values (outside React render loop)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center py-4 select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative flex items-center justify-center"
      >
        {/* Subtle warm halo glow */}
        <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-red/10 blur-3xl" />

        {/* Outer decorative orbit ring */}
        <div className="pointer-events-none absolute h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full border border-dashed border-red/20 animate-[spin_60s_linear_infinite]" />

        {/* Central Authentic Planet Mark Art */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 flex h-[180px] w-[240px] sm:h-[220px] sm:w-[300px] items-center justify-center cursor-pointer"
        >
          <Image
            src="/clouterry-mark.png"
            alt="Clouterry authentic planetary mark"
            width={320}
            height={220}
            className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(196,30,58,0.18)]"
            priority
          />
        </motion.div>

        {/* Interactive Draggable Sticker 1: Top Left */}
        <motion.div
          drag
          dragConstraints={{ left: -40, right: 40, top: -30, bottom: 30 }}
          whileHover={{ scale: 1.1, rotate: -8 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-3 -left-4 sm:-top-5 sm:-left-12 z-20 cursor-grab active:cursor-grabbing rounded-full border border-ink/15 bg-white px-3.5 py-1.5 shadow-md backdrop-blur-md"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-tight text-ink">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red text-cream">
              <Lightning size={10} weight="fill" />
            </span>
            <span>NO COLD DMS</span>
          </div>
        </motion.div>

        {/* Interactive Draggable Sticker 2: Top Right */}
        <motion.div
          drag
          dragConstraints={{ left: -40, right: 40, top: -30, bottom: 30 }}
          whileHover={{ scale: 1.1, rotate: 6 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-4 -right-4 sm:-top-6 sm:-right-10 z-20 cursor-grab active:cursor-grabbing rounded-full bg-red px-3.5 py-1.5 text-cream shadow-md"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-tight">
            <Sparkle size={12} weight="fill" />
            <span>GEN-Z CURATION</span>
          </div>
        </motion.div>

        {/* Interactive Draggable Sticker 3: Bottom Left */}
        <motion.div
          drag
          dragConstraints={{ left: -40, right: 40, top: -30, bottom: 30 }}
          whileHover={{ scale: 1.1, rotate: -4 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -bottom-3 -left-6 sm:-bottom-4 sm:-left-10 z-20 cursor-grab active:cursor-grabbing rounded-full border border-ink/15 bg-cream-dim px-3.5 py-1.5 shadow-md"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-tight text-ink">
            <ShieldCheck size={13} weight="fill" className="text-red" />
            <span>100% AUTHENTIC</span>
          </div>
        </motion.div>

        {/* Interactive Draggable Sticker 4: Bottom Right */}
        <motion.div
          drag
          dragConstraints={{ left: -40, right: 40, top: -30, bottom: 30 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-8 z-20 cursor-grab active:cursor-grabbing rounded-full border border-ink/10 bg-white/90 px-3.5 py-1.5 shadow-md"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-tight text-ink">
            <Heart size={12} weight="fill" className="text-red" />
            <span>CREATIVE FREEDOM</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
