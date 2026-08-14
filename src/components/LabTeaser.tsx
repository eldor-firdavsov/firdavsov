"use client";

import { motion, useReducedMotion } from "motion/react";
import { experiments } from "@/data/experiments";
import { EASE, VIEWPORT } from "@/lib/motion";

export function LabTeaser() {
  const reduce = useReducedMotion();

  return (
    <section id="lab" className="page-shell py-12 md:py-20">
      <motion.div
        className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#0a0a0a] px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-18 lg:px-16 text-white liquid-glass-dark shadow-2xl"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-semibold text-white tracking-wider uppercase">
            The Lab
          </span>
          <h2 className="display mt-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase tracking-[-0.03em] text-white leading-[1.05]">
            Creative Playground & Experiments
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70 md:text-base max-w-xl">
            Welcome to the creative lab — ML sketches, vision experiments, three.js orbits, and unfinished ideas. No constraints. Just instinct.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-white/10">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="group flex flex-col justify-between rounded-2xl bg-white/[0.04] p-6 border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3), ease: EASE }}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 group-hover:text-white/80 transition-colors">
                    {exp.tag}
                  </span>
                  <span className="text-[14px] text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1 duration-200">
                    ↗
                  </span>
                </div>
                <h3 className="display mt-4 text-xl font-bold uppercase tracking-tight text-white group-hover:text-white">
                  {exp.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                  {exp.blurb}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-[11px] font-semibold text-white/40 group-hover:text-white uppercase tracking-wider">
                <span>Explore Experiment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
