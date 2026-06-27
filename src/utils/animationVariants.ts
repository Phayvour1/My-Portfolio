import type { Variants } from "framer-motion";

const rm =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// ─── Spread-style (legacy, used in JourneySection / Contact) ─────────────────
export const fadeUp = {
  initial: { opacity: 0, y: rm ? 0 : 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

export const clipReveal = {
  initial: { clipPath: rm ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" },
  whileInView: { clipPath: "inset(0 0% 0 0)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
};

export const staggerContainer = (stagger = 0.1) => ({
  initial: {},
  whileInView: { transition: { staggerChildren: rm ? 0 : stagger } },
  viewport: { once: true, margin: "-80px" },
});

// ─── Variants-style (new components) ─────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: rm ? 0 : 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: rm ? 0 : 0.06,
      delayChildren: 0.05,
    },
  },
};

export const charRevealVariants: Variants = {
  hidden: { opacity: 0, y: rm ? 0 : 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: rm ? 1 : 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const clipWipeVariants: Variants = {
  hidden: { clipPath: rm ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: rm ? 0 : 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
