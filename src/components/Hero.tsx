"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/data/socials";
import { EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section className="page-shell flex min-h-[90vh] flex-col justify-center pb-16 pt-24 md:pt-32 md:pb-20 lg:min-h-screen lg:pt-36 lg:pb-24">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Text & Info */}
        <div className="flex flex-col lg:col-span-6 xl:col-span-6">
          <motion.p
            className="label text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase text-muted-strong"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {site.firstName.toUpperCase()} — {site.role.toUpperCase()}
          </motion.p>

          <motion.h1
            className="display mt-4 sm:mt-6 text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase tracking-[-0.04em] leading-[0.94] text-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            ELDOR<br />FIRDAVSOV
          </motion.h1>

          <motion.p
            className="mt-2.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-muted-strong"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            Frontend Developer & AI/ML Engineer
          </motion.p>

          <motion.p
            className="mt-6 sm:mt-8 max-w-lg text-[14px] leading-relaxed text-muted-strong sm:text-[15px] md:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            I build products people actually use — realtime systems, teaching
            tools, and interfaces that don't make you think twice. Currently
            moving from frontend engineering into applied machine learning.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-[11px] sm:text-[12px] uppercase tracking-[0.1em] text-muted font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            <span>Samarkand, Uzbekistan</span>
            <span>Frontend → AI/ML</span>
          </motion.div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <motion.div
          className="relative lg:col-span-6 xl:col-span-6"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] liquid-glass-border aspect-[4/4.5] sm:aspect-[4/4.5] lg:aspect-[4/5] max-h-[480px] sm:max-h-[580px] lg:max-h-[640px] w-full">
            <Image
              src="/hero-v3.jpg"
              alt="Eldor Firdavsov"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
