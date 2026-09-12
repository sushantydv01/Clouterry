/**
 * Clouterry Centralized Motion System
 *
 * Philosophy (Emil Kowalski / DESIGN_BRIEF):
 * - Motion is a budget, not a theme. Most of the UI simply exists.
 * - The one orchestrated moment is the hero on-load sequence; nothing fires on scroll.
 * - Interaction motion is reserved for real user actions.
 * - Always GPU-composited (transform, opacity), short, and reduced-motion aware
 *   (see <MotionConfig reducedMotion="user"> in SmoothScroll and the CSS block in globals.css).
 */

export const motionEase = [0.16, 1, 0.3, 1] as const;

/** The one orchestrated on-load sequence. Kept short so it never delays interaction. */
export const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: motionEase,
    },
  },
};

/** Hero headline only: a touch more travel + a soft blur-in for a heavier settle. */
export const heroHeadline = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: motionEase,
    },
  },
};

/** Modal dialog entrance & exit: a small physical settling tied to opening the dialog. */
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

/** Accordion / collapsible height expansion, driven by a user toggle. */
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
