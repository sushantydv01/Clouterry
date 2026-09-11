"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs with gentle physical weight
  const springConfigInner = { damping: 45, stiffness: 700, mass: 0.1 };
  const springConfigRing = { damping: 30, stiffness: 280, mass: 0.35 };

  const cursorX = useSpring(mouseX, springConfigInner);
  const cursorY = useSpring(mouseY, springConfigInner);

  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  useEffect(() => {
    // Only enable on desktop pointer devices, respect reduced motion
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer, [data-cursor-hover]");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Outer Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.45 : 1,
          opacity: isVisible ? (isHovered ? 0.85 : 0.4) : 0,
          borderColor: isHovered ? "rgba(240, 192, 80, 0.6)" : "rgba(246, 241, 230, 0.35)",
          backgroundColor: isHovered ? "rgba(240, 192, 80, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-7 w-7 rounded-full border border-cream/40"
      />

      {/* Tiny Core Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="h-1.5 w-1.5 rounded-full bg-yellow"
      />
    </div>
  );
}
