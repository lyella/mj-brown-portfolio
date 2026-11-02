"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds — use to stagger items in a grid. */
  delay?: number;
};

/**
 * Scroll-reveal wrapper: fades and slides content in when it
 * enters the viewport (once, for a calm editorial feel).
 * Respects the user's reduced-motion preference automatically
 * via framer-motion's useReducedMotion handling in MotionConfig.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
