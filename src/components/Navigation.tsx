"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/data/socials";

import Image from "next/image";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4 transition-all duration-300 pointer-events-none">
      <div className="page-shell">
        <div
          className="pointer-events-auto flex items-center justify-between rounded-[20px] sm:rounded-[24px] px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300"
          style={{
            background: scrolled
              ? "rgba(244, 239, 230, 0.76)"
              : "rgba(244, 239, 230, 0.58)",
            backdropFilter: "blur(6px) saturate(140%)",
            WebkitBackdropFilter: "blur(6px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: scrolled
              ? "inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.04), 0 12px 32px -6px rgba(0, 0, 0, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03)"
              : "inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.90), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.03), 0 6px 20px -4px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Left: Brand Emblem + Text Logo + Nav Links */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-14">
            <Link href="/" aria-label="Eldor Portfolio Home" className="focus-ring flex items-center group">
              {/* Logo Emblem Icon */}
              <div className="relative h-[22px] w-[27px] sm:h-[25px] sm:w-[30px] shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="ELDOR Logo"
                  fill
                  priority
                  unoptimized
                  sizes="35px"
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-foreground/85 transition-colors duration-200 hover:text-foreground focus-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: High-Visibility Contact Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="focus-ring hidden items-center justify-center gap-2 rounded-full bg-[#040404] px-5 py-2 text-[14px] font-semibold !text-white transition-all duration-200 hover:bg-[#222222] shadow-md shrink-0 sm:inline-flex"
              style={{ color: "#ffffff", backgroundColor: "#040404" }}
            >
              <span style={{ color: "#ffffff" }}>Contact</span>
              <span aria-hidden style={{ color: "#ffffff" }} className="text-[15px]">→</span>
            </Link>
            <button
              type="button"
              className="focus-ring text-[14px] font-bold tracking-[0.02em] text-foreground md:hidden px-3.5 py-1.5 rounded-full border border-black/20 bg-white/90 shadow-sm"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay — Full 100% Solid White Background */}
      {open && (
        <div className="fixed inset-0 z-[100] h-screen w-screen flex flex-col justify-between bg-[#ffffff] px-6 pb-12 pt-8 md:hidden">
          {/* Header row inside fullscreen mobile menu */}
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <Link
              href="/"
              aria-label="Eldor Portfolio Home"
              onClick={() => setOpen(false)}
              className="relative h-11 w-14 shrink-0"
            >
              <Image
                src="/logo-icon.png"
                alt="ELDOR Logo"
                fill
                priority
                sizes="56px"
                className="object-contain object-left mix-blend-multiply"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-xl font-bold text-foreground hover:bg-black/10 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="display text-4xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-black/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-4 border-t border-black/10 pt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#040404] px-6 py-4 text-base font-semibold text-white shadow-md"
              style={{ color: "#ffffff", backgroundColor: "#040404" }}
              onClick={() => setOpen(false)}
            >
              <span style={{ color: "#ffffff" }}>Contact</span>
              <span aria-hidden style={{ color: "#ffffff" }}>→</span>
            </Link>
            <p className="text-[12px] uppercase tracking-wider text-muted-strong text-center font-medium">
              Eldor Firdavsov — Samarkand, Uzbekistan
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
