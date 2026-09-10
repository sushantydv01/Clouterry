"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useMotionValue } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g., "5.2%", "64+", "14 Days", "1.8M", "3.8x"
  className?: string;
  duration?: number;
}

function parseValue(value: string): { num: number; prefix: string; suffix: string; decimals: number } {
  const match = value.match(/^([^0-9]*?)([\d.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value, decimals: 0 };

  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";
  const num = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return { num, prefix, suffix, decimals };
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { num, prefix, suffix, decimals } = parseValue(value);
  const [reducedMotion, setReducedMotion] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 30,
    duration: duration * 1000,
  });

  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, motionValue, num]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {reducedMotion ? value : displayValue}
    </motion.span>
  );
}
