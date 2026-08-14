"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const tickingRef = useRef(false);
  const [progress, setProgress] = useState(0);

  const measure = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrolled = -rect.top;
    const scrollableDistance = sectionHeight - viewportHeight;
    // Guard against divide-by-zero on very short viewports/sections.
    const p =
      scrollableDistance <= 0
        ? 0
        : Math.max(0, Math.min(1, scrolled / scrollableDistance));
    setProgress(p);
  }, []);

  // rAF-throttled scroll handler — avoids a state update on every scroll event.
  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      measure();
      tickingRef.current = false;
    });
  }, [measure]);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll, measure]);

  const total = projects.length;

  // Determine active project based on progress — drives the a11y live region below.
  const activeIndex = Math.min(Math.floor(progress * total), total - 1);
  const activeProject = projects[activeIndex];

  // Calculate image column translation
  const imageTranslateY = -(progress * (total - 1) * 100) / total;

  return (
    <>
      {/* Mobile Selected Work List (< md) */}
      <section id="work" className="page-shell py-12 md:hidden">
        <div className="mb-8 flex items-center justify-between">
          <span className="soft-pill">Selected Work</span>
          <span className="text-[12px] font-semibold text-muted-strong uppercase tracking-wider">
            {projects.length} Projects
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col gap-5 rounded-[24px] liquid-glass-border p-5"
            >
              <Link
                href={`/work/${project.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-white"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </Link>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#666666]">
                  {project.number} — {project.category}
                </span>
                <h3 className="display mt-1 text-2xl font-bold uppercase tracking-tight text-foreground">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#333333]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all shadow-md shrink-0"
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-4 py-2 text-[13px] font-semibold transition-all shadow-sm shrink-0"
                      style={{ color: "#040404", backgroundColor: "#ffffff" }}
                    >
                      <span style={{ color: "#040404" }}>GitHub</span>
                      <span aria-hidden style={{ color: "#040404" }}>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Desktop Sticky Selected Work View (>= md) */}
      <section
        ref={sectionRef}
        className="hidden md:block"
        style={{
          position: "relative",
          height: `${(total + 1) * 100}vh`,
        }}
      >
        {/* Announces the active project to screen readers as the scroll-driven view changes. */}
        <span className="sr-only" role="status" aria-live="polite">
          {activeProject ? `Viewing project: ${activeProject.title}` : ""}
        </span>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div className="page-shell w-full">
            <div
              className="liquid-glass-border"
              style={{
                borderRadius: "32px",
                background: "var(--surface)",
                height: "85vh",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {/* Left side: project details & links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 clamp(32px, 4vw, 64px)",
                  position: "relative",
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="soft-pill">Selected Work</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
                    <span className="text-[12px] font-bold tracking-widest text-[#555555] uppercase">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div style={{ position: "relative", height: "clamp(340px, 45vh, 420px)" }}>
                  <AnimatePresence mode="wait">
                    {activeProject && (
                      <motion.div
                        key={activeProject.slug}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{
                          initial: { opacity: 0 },
                          animate: { opacity: 1, transition: { staggerChildren: 0.04 } },
                          exit: { opacity: 0, transition: { duration: 0.15 } },
                        }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <motion.span
                          variants={{
                            initial: { opacity: 0, y: 8, filter: "blur(4px)" },
                            animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.25 } },
                            exit: { opacity: 0, y: -6, filter: "blur(4px)", transition: { duration: 0.15 } },
                          }}
                          className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#666666]"
                        >
                          {activeProject.number} — {activeProject.category}
                        </motion.span>
                        <motion.h3
                          variants={{
                            initial: { opacity: 0, y: 12, filter: "blur(6px)" },
                            animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.3 } },
                            exit: { opacity: 0, y: -8, filter: "blur(6px)", transition: { duration: 0.15 } },
                          }}
                          className="display mt-1.5"
                          style={{
                            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.02,
                          }}
                        >
                          <Link href={`/work/${activeProject.slug}`} className="focus-ring hover:opacity-80 transition-opacity">
                            {activeProject.title}
                          </Link>
                        </motion.h3>
                        <motion.p
                          variants={{
                            initial: { opacity: 0, y: 8, filter: "blur(4px)" },
                            animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.25 } },
                            exit: { opacity: 0, y: -6, filter: "blur(4px)", transition: { duration: 0.15 } },
                          }}
                          className="mt-3 max-w-md text-[14px] leading-[1.5] text-[#333333] font-normal"
                        >
                          {activeProject.description}
                        </motion.p>

                        <motion.div
                          variants={{
                            initial: { opacity: 0, y: 8 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                            exit: { opacity: 0, y: -4, transition: { duration: 0.15 } },
                          }}
                          className="mt-5 flex flex-wrap items-center gap-3.5"
                        >
                          <Link
                            href={`/work/${activeProject.slug}`}
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all hover:bg-[#222222] shadow-md shrink-0"
                            style={{ color: "#ffffff", backgroundColor: "#040404" }}
                          >
                            <span style={{ color: "#ffffff" }}>View Details</span>
                            <span aria-hidden style={{ color: "#ffffff" }} className="text-[14px]">→</span>
                          </Link>

                          {activeProject.github && (
                            <a
                              href={activeProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-4.5 py-2 text-[13px] font-semibold transition-all hover:bg-black/5 shadow-sm shrink-0"
                              style={{ color: "#040404", backgroundColor: "#ffffff" }}
                            >
                              <span style={{ color: "#040404" }}>GitHub</span>
                              <span aria-hidden style={{ color: "#040404" }} className="text-[14px]">↗</span>
                            </a>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right side: scrolling images */}
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    height: `${total * 100}%`,
                    transform: `translateY(${imageTranslateY}%)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  {projects.map((project, i) => (
                    <Link
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      className="focus-ring"
                      style={{
                        position: "relative",
                        display: "block",
                        height: `${100 / total}%`,
                        padding: "16px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                          sizes="50vw"
                          priority={i === 0}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
