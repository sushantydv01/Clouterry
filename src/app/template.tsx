"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 8, filter: "blur(4px)" }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="page-transition-wrapper flex flex-col flex-1 w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
