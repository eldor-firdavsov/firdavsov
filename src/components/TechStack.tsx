"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

const technologies = [
  { name: "Semi Vibe Coding", category: "AI & Dev" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "SQL", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "NestJS", category: "Backend" },
];

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section className="page-shell py-12 md:py-20">
      <motion.div
        className="overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#0a0a0a] px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-18 lg:px-16 text-white liquid-glass-dark shadow-2xl"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="mb-8 sm:mb-12 flex flex-wrap items-center gap-3 md:gap-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-semibold text-white tracking-wider uppercase">
            Stack
          </span>
          <h2 className="display text-[clamp(1.4rem,4vw,2.5rem)] font-bold uppercase tracking-tight text-white">
            Technologies & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t border-white/10 md:grid-cols-2">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-item group flex items-center justify-between border-b border-white/10 px-3 py-6 text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg md:px-5 md:py-8 cursor-pointer"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.06, 0.36),
                ease: EASE,
              }}
            >
              <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.5vw,1.8rem)] font-medium uppercase tracking-[-0.02em] group-hover:text-white text-white/80 transition-colors duration-200">
                {tech.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-white/40 group-hover:text-white/90 group-hover:bg-white/10 px-2.5 py-1 rounded-full transition-all duration-200">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
