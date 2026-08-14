"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { site } from "@/data/socials";

/**
 * Scroll-linked word reveal — each word's opacity is driven by scroll
 * progress through this section, not a single whileInView fade.
 * Batches reads via rAF so we never do more than one state update
 * per animation frame while scrolling.
 */
const INTRO_WORDS = site.intro.split(" ");

export function ScrollIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wordOpacities, setWordOpacities] = useState<number[]>(() =>
    INTRO_WORDS.map(() => 0.15)
  );
  const rafId = useRef<number | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const computeOpacities = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;
      const progress = Math.max(
        0,
        Math.min(1, scrolled / Math.max(1, scrollableDistance))
      );

      const next = INTRO_WORDS.map((_, i) => {
        const wordStart = 0.02 + (i / INTRO_WORDS.length) * 0.7;
        const wordEnd = wordStart + 0.05;
        if (progress <= wordStart) return 0.15;
        if (progress >= wordEnd) return 1;
        return 0.15 + (0.85 * (progress - wordStart)) / (wordEnd - wordStart);
      });

      setWordOpacities(next);
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        computeOpacities();
        rafId.current = null;
      });
    };

    computeOpacities();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [reduce]);

  if (reduce) {
    return (
      <section id="about" className="page-shell py-20 md:py-28">
        <p
          className="mx-auto max-w-[1100px] font-[family-name:var(--font-display)] text-[clamp(1.35rem,3vw,2.3rem)] font-medium uppercase leading-[1.4] tracking-[-0.02em] text-foreground"
        >
          {site.intro}
        </p>
      </section>
    );
  }

  return (
    <div ref={sectionRef} id="about" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="page-shell w-full">
          <p className="mx-auto max-w-[1100px] font-[family-name:var(--font-display)] text-[clamp(1.35rem,3vw,2.3rem)] font-medium uppercase leading-[1.4] tracking-[-0.02em]">
            {INTRO_WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="scroll-word"
                style={{ opacity: wordOpacities[i] ?? 0.15 }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
