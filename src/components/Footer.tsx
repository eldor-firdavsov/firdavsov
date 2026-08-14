import Image from "next/image";
import { site, socials } from "@/data/socials";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-6 bg-black text-white">
      <div className="page-shell py-12 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="relative h-12 sm:h-14 md:h-16 w-56 sm:w-64 md:w-72 shrink-0">
            <Image
              src="/logo-full.png"
              alt="ELDOR"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="object-contain object-left invert contrast-200"
            />
          </div>
          <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-white/80 md:text-sm font-medium">
            {site.tagline}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="text-[12px] text-white/45">
            © {YEAR} {site.firstName} {site.lastName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-[12px] uppercase tracking-[0.08em] text-white/75 hover:text-white"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {s.label === "Email"
                    ? site.email.toUpperCase()
                    : s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
