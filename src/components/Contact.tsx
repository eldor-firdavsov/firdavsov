"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site, socials } from "@/data/socials";
import { EASE, VIEWPORT } from "@/lib/motion";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    if (!email.includes("@") || message.trim().length < 4) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="page-shell py-12 md:py-16">
      <motion.div
        className="mb-10 max-w-md"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-sm">
          ↗
        </span>
        <p className="text-[15px] leading-relaxed text-muted-strong md:text-base">
          {site.closing}
        </p>
      </motion.div>

      <div className="grid gap-8 sm:gap-10 rounded-[24px] sm:rounded-panel bg-surface p-5 sm:p-8 md:grid-cols-12 md:gap-8 md:p-10 border border-black/5 shadow-sm">
        <div className="md:col-span-5">
          <h2 className="display text-[clamp(1.75rem,3.5vw,2.5rem)] uppercase">
            Let&apos;s build something.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-[13px] uppercase tracking-[0.06em] text-muted-strong hover:text-foreground"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-5 md:col-span-7" onSubmit={onSubmit} noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="company">Project / company</label>
            <input id="company" name="company" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={3} required />
          </div>
          <button
            type="submit"
            className="pill font-semibold"
            disabled={status === "sending"}
            style={{ color: "#ffffff", backgroundColor: "#040404" }}
          >
            <span style={{ color: "#ffffff" }}>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Received."
                  : "Contact"}
            </span>{" "}
            <span aria-hidden style={{ color: "#ffffff" }}>→</span>
          </button>
          {status === "error" && (
            <p className="text-sm text-muted-strong">Add a valid email and message.</p>
          )}
        </form>
      </div>
    </section>
  );
}
