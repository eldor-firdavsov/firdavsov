"use client";

import { motion, useReducedMotion } from "motion/react";
import { pathSteps, collaborations } from "@/data/experience";
import { MaskedText } from "@/components/Reveal";
import { EASE, VIEWPORT } from "@/lib/motion";

export function Journey() {
  const reduce = useReducedMotion();

  return (
    <section id="journey" className="page-shell py-16 md:py-24">
      <div className="mb-10 flex items-center gap-4 md:mb-14">
        <span className="soft-pill">The Path</span>
        <MaskedText
          as="h2"
          className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase"
        >
          Learning, building, teaching, shipping.
        </MaskedText>
      </div>

      <ol className="border-t border-border">
        {pathSteps.map((step, i) => (
          <motion.li
            key={step.id}
            className="group grid grid-cols-1 gap-2 border-b border-border py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3), ease: EASE }}
          >
            <span className="label md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)] uppercase tracking-[-0.02em] md:col-span-4">
              {step.title}
            </h3>
            <p className="max-w-md text-[14px] leading-relaxed text-muted-strong md:col-span-7">
              {step.body}
            </p>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3 md:mt-14"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {collaborations.map((c) => (
          <div key={c.label} className="flex flex-col gap-0.5">
            <span className="text-[13px] font-medium uppercase tracking-[0.02em] text-foreground">
              {c.label}
            </span>
            <span className="text-[12px] text-muted-strong">{c.detail}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
