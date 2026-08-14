"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    let startTime: number | null = null;
    const duration = 1600; // 1.6 seconds smooth load duration

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(1, elapsed / duration);

      const p = Math.floor(rawProgress * 100);
      setProgress(p);

      if (rawProgress < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => {
          setComplete(true);
          document.body.style.overflow = "";
        }, 220);
      }
    };

    const animationFrame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040404] text-white select-none pointer-events-auto"
        >
          {/* Logo Emblem Container */}
          <div className="relative h-20 w-24 sm:h-24 sm:w-28">
            {/* Layer 1: Dim background outline logo (unfilled state) */}
            <div className="absolute inset-0 opacity-15">
              <Image
                src="/logo-icon.png"
                alt="ELDOR Emblem"
                fill
                priority
                unoptimized
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Layer 2: Solid white logo filled vertically with clipPath */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(${100 - progress}% 0px 0px 0px)`,
              }}
            >
              <Image
                src="/logo-icon.png"
                alt="ELDOR Emblem Filled"
                fill
                priority
                unoptimized
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Percentage Counter underneath logo */}
          <div className="mt-6 flex flex-col items-center gap-1">
            <span className="font-[family-name:var(--font-funnel)] text-base sm:text-lg font-semibold tracking-wider text-white">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
