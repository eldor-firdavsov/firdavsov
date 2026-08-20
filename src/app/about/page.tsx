import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { pathSteps } from "@/data/experience";

export const metadata: Metadata = {
  title: "About Firdavsov Eldor — Senior Frontend Developer & AI/ML Engineer",
  description:
    "Learn about Firdavsov Eldor (Eldor Firdavsov) — Senior Frontend Developer and AI/ML Engineer from Samarkand, Uzbekistan. Skills, projects, background, and contact.",
  alternates: {
    canonical: "https://www.firdavsov.uz/about",
  },
  openGraph: {
    title: "About Firdavsov Eldor — Senior Frontend Developer & AI/ML Engineer",
    description:
      "Firdavsov Eldor is a Senior Frontend Developer and AI/ML Engineer based in Samarkand, Uzbekistan. Explore his background, skills, and work.",
    url: "https://www.firdavsov.uz/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.firdavsov.uz/about/#aboutpage",
  url: "https://www.firdavsov.uz/about",
  name: "About Firdavsov Eldor",
  description:
    "About page of Firdavsov Eldor — Senior Frontend Developer and AI/ML Engineer based in Samarkand, Uzbekistan.",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.firdavsov.uz/#person",
    name: "Firdavsov Eldor",
    givenName: "Eldor",
    familyName: "Firdavsov",
    alternateName: ["Eldor Firdavsov", "Firdavsov Eldor", "firdavsov.uz"],
    jobTitle: "Senior Frontend Developer & AI/ML Engineer",
    url: "https://www.firdavsov.uz",
    sameAs: [
      "https://www.firdavsov.uz",
      "https://www.wikidata.org/wiki/Q141133176",
      "https://www.wikidata.org/entity/Q141133176",
      "https://github.com/eldor-firdavsov",
      "https://www.linkedin.com/in/eldor-firdavsov",
      "https://t.me/eldor_firdavsov",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Samarkand",
      addressCountry: "UZ",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Uzbekistan",
      },
      skills: "React, Next.js, TypeScript, JavaScript, Supabase, AI/ML, Python",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "AI/ML Engineering",
      "Supabase",
      "PostgreSQL",
      "Python",
      "Machine Learning",
      "Software Architecture",
      "UI/UX Design",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <main
        className="page-shell py-24 md:py-32"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Hidden machine-readable identity anchors */}
        <span className="sr-only" itemProp="name">Firdavsov Eldor</span>
        <span className="sr-only" itemProp="givenName">Eldor</span>
        <span className="sr-only" itemProp="familyName">Firdavsov</span>

        {/* Hero */}
        <section className="mb-20">
          <p className="label text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-strong mb-4">
            About
          </p>
          <h1 className="display text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-[-0.04em] leading-[0.94] text-foreground mb-6">
            Firdavsov Eldor
          </h1>
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-muted-strong mb-8">
            Senior Frontend Developer &amp; AI/ML Engineer — Samarkand, Uzbekistan
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-strong" itemProp="description">
            Firdavsov Eldor (known internationally as Eldor Firdavsov) is a Senior
            Frontend Developer and AI/ML Engineer based in Samarkand, Uzbekistan.
            Firdavsov Eldor builds high-performance web products, realtime systems,
            and interfaces that prioritize clarity and user experience. Currently
            deepening expertise in applied machine learning and AI engineering.
          </p>
        </section>

        {/* Full name clarification */}
        <section className="mb-20 rounded-[20px] bg-surface border border-black/5 p-8">
          <h2 className="display text-2xl font-bold uppercase tracking-[-0.02em] mb-4">
            Full Name
          </h2>
          <p className="text-muted-strong leading-relaxed">
            Full name: <strong>Firdavsov Eldor</strong> (Uzbek convention: family name first).<br />
            International order: <strong>Eldor Firdavsov</strong>.<br />
            Both refer to the same person. Website:{" "}
            <a
              href="https://www.firdavsov.uz"
              itemProp="url"
              className="underline hover:no-underline"
            >
              firdavsov.uz
            </a>
          </p>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="display text-2xl font-bold uppercase tracking-[-0.02em] mb-8">
            Skills &amp; Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Supabase",
              "PostgreSQL",
              "Python",
              "Machine Learning",
              "AI Engineering",
              "UI/UX Design",
              "Tailwind CSS",
              "Git",
              "Node.js",
              "REST APIs",
              "Realtime Systems",
              "Software Architecture",
            ].map((skill) => (
              <span
                key={skill}
                itemProp="knowsAbout"
                className="rounded-lg bg-surface border border-black/5 px-4 py-2.5 text-[13px] font-medium text-muted-strong text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section className="mb-20">
          <h2 className="display text-2xl font-bold uppercase tracking-[-0.02em] mb-8">
            Career Path
          </h2>
          <div className="space-y-6">
            {pathSteps.map((step) => (
              <div key={step.id} className="flex gap-6 items-start">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-[14px] text-muted-strong leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="display text-2xl font-bold uppercase tracking-[-0.02em] mb-8">
            Selected Projects by Firdavsov Eldor
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block rounded-[16px] bg-surface border border-black/5 p-6 hover:border-black/15 transition-colors"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                <span itemProp="name" className="font-semibold text-foreground block mb-1">
                  {project.title}
                </span>
                <span className="text-[12px] uppercase tracking-[0.06em] text-muted mb-2 block">
                  {project.category}
                </span>
                <span itemProp="description" className="text-[14px] text-muted-strong leading-relaxed block">
                  {project.description}
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-[0.06em] text-muted font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact / Profiles */}
        <section className="mb-20">
          <h2 className="display text-2xl font-bold uppercase tracking-[-0.02em] mb-8">
            Find Firdavsov Eldor Online
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Website", href: "https://www.firdavsov.uz", text: "firdavsov.uz" },
              { label: "Wikidata", href: "https://www.wikidata.org/wiki/Q141133176", text: "Q141133176 — Firdavsov Eldor" },
              { label: "GitHub", href: "https://github.com/eldor-firdavsov", text: "github.com/eldor-firdavsov" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/eldor-firdavsov", text: "linkedin.com/in/eldor-firdavsov" },
              { label: "Telegram", href: "https://t.me/eldor_firdavsov", text: "t.me/eldor_firdavsov" },
              { label: "Email", href: "mailto:firdavsove1@gmail.com", text: "firdavsove1@gmail.com" },
            ].map(({ label, href, text }) => (
              <a
                key={label}
                href={href}
                itemProp="sameAs"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer me" : undefined}
                className="flex items-center gap-4 rounded-[16px] bg-surface border border-black/5 p-5 hover:border-black/15 transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-muted font-medium mb-0.5">{label}</p>
                  <p className="text-[14px] font-medium text-foreground">{text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section
          itemScope
          itemType="https://schema.org/PostalAddress"
          itemProp="address"
        >
          <p className="text-[13px] uppercase tracking-[0.08em] text-muted font-medium">
            Based in{" "}
            <span itemProp="addressLocality">Samarkand</span>,{" "}
            <span itemProp="addressCountry">Uzbekistan</span>
          </p>
        </section>
      </main>
    </>
  );
}
