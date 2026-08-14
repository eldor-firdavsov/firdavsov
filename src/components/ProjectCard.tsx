"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { SuiteTriptych } from "@/components/SuiteTriptych";
import { EASE, VIEWPORT } from "@/lib/motion";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const isSuite = project.slug === "classroom-suite";
  const reverse = index % 2 === 1;

  return (
    <motion.article
      className="rounded-panel p-4 md:p-6 lg:p-7"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.15), ease: EASE }}
    >
      <div
        className={`grid items-stretch gap-5 md:grid-cols-2 md:gap-6 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col justify-between gap-8 py-2 md:py-4 md:pr-4">
          <div>
            <span className="soft-pill">Selected Work</span>
            <h3 className="display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-medium uppercase tracking-[-0.04em]">
              <Link href={`/work/${project.slug}`} className="focus-ring">
                {project.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted-strong">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-[13px] font-semibold transition-all hover:bg-[#222222] shadow-sm shrink-0"
              style={{ color: "#ffffff", backgroundColor: "#040404" }}
            >
              <span style={{ color: "#ffffff" }}>View Details</span>
              <span aria-hidden style={{ color: "#ffffff" }}>→</span>
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-black/20 px-3.5 py-1.5 text-[12px] font-semibold transition-all hover:bg-black/5 shadow-sm shrink-0"
                style={{ color: "#040404", backgroundColor: "#ffffff" }}
              >
                <span style={{ color: "#040404" }}>GitHub</span>
                <span aria-hidden style={{ color: "#040404" }}>↗</span>
              </a>
            )}
          </div>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="focus-ring block"
        >
          {isSuite ? (
            <div className="rounded-media overflow-hidden">
              <SuiteTriptych />
            </div>
          ) : (
            <div className="rounded-media relative aspect-[4/5] overflow-hidden bg-white md:aspect-[5/6]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={index === 0}
              />
            </div>
          )}
        </Link>
      </div>
    </motion.article>
  );
}
