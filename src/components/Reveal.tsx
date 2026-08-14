"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Opacity-only — use when children have their own motion. */
  fade?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
  fade = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: fade ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...VIEWPORT, once, margin: "-6% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type MaskedTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function MaskedText({
  children,
  className,
  delay = 0,
  as: Tag = "h2",
}: MaskedTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      <span className="line-mask">
        <motion.span
          className="block will-change-transform"
          initial={{ y: "105%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay, ease: EASE }}
        >
          {children}
        </motion.span>
      </span>
    </Tag>
  );
}
