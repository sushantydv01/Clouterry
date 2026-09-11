/**
 * Clouterry Centralized Motion System
 * 
 * Philosophy:
 * - 70–80% of UI simply exists; 20–30% has deliberate, subtle motion.
 * - Restrained travel (10–20px max).
 * - Fast initial response with gentle deceleration.
 * - Always GPU-composited (transform, opacity).
 */

export const motionEase = [0.16, 1, 0.3, 1] as const;
export const motionEaseSmooth = [0.22, 1, 0.36, 1] as const;
export const motionEaseTactile = [0.25, 1, 0.5, 1] as const;

/** Standard scroll viewport trigger settings: triggers at ~18% viewport entry, plays strictly once */
export const viewportOnce = {
  once: true,
  amount: 0.18,
} as const;

/** Fast, natural load sequence for the hero section (completed in < 600ms total) */
export const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: motionEase,
    },
  },
};

/** Headline reveal: subtle upward settling */
export const headlineReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: motionEase,
    },
  },
};

/** Standard scroll entrance: 16px travel, unhurried ease */
export const scrollReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: motionEase,
    },
  },
};

/** Stagger container for sequential lists / cards */
export const staggerGroup = (stagger = 0.08, delay = 0.02) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: motionEase,
    },
  },
};

/** Modal dialog entrance & exit: physical settling */
export const dialogMotion = {
  hidden: { opacity: 0, scale: 0.97, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: motionEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 4,
    transition: {
      duration: 0.18,
      ease: motionEase,
    },
  },
};

/** Accordion / Collapsible height expansion */
export const accordionMotion = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: motionEase },
      opacity: { duration: 0.25, delay: 0.05, ease: motionEase },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.24, ease: motionEase },
      opacity: { duration: 0.15, ease: motionEase },
    },
  },
};
