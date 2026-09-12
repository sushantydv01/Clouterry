"use client";

import { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animId: number;
    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        lerp: 0.1, // Smooth, natural deceleration without fighting Mac trackpad
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        infinite: false,
        syncTouch: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          animId = requestAnimationFrame(raf);
        }
      }

      animId = requestAnimationFrame(raf);

      // Handle resize events cleanly
      const handleResize = () => {
        lenis?.resize();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (animId) cancelAnimationFrame(animId);
        if (lenis) {
          lenis.destroy();
          lenisRef.current = null;
        }
      };
    } catch (err) {
      console.warn("Lenis initialization skipped:", err);
    }
  }, []);

  // reducedMotion="user" makes every framer-motion animation honor the OS
  // "reduce" setting. Without this, JS-driven transforms bypass the CSS
  // reduced-motion block in globals.css entirely.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

