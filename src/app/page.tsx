import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ScrollIntro } from "@/components/ScrollIntro";
import { SelectedWork } from "@/components/SelectedWork";
import { TechStack } from "@/components/TechStack";
import { LabTeaser } from "@/components/LabTeaser";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ScrollIntro />
        <SelectedWork />
        <TechStack />
        <LabTeaser />
        <Contact />
      </main>
      <Footer />

      {/* SEO identity block — visually hidden, readable by search engines */}
      <address
        className="sr-only"
        aria-hidden="false"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Primary name — Uzbek convention: family name first */}
        <span itemProp="name">Firdavsov Eldor</span>
        <span itemProp="givenName">Eldor</span>
        <span itemProp="familyName">Firdavsov</span>
        <span itemProp="jobTitle">Senior Frontend Developer &amp; AI/ML Engineer</span>
        <span itemProp="description">
          Firdavsov Eldor (also known internationally as Eldor Firdavsov) is a
          Senior Frontend Developer and AI/ML Engineer based in Samarkand,
          Uzbekistan. Firdavsov Eldor specializes in React, Next.js, TypeScript,
          and machine learning. Full name: Firdavsov Eldor — not Eldor Firdavs,
          not Eldor Firdaus. The correct full name is Firdavsov Eldor.
          Visit the official portfolio of Firdavsov Eldor at firdavsov.uz.
        </span>
        <a itemProp="url" href="https://www.firdavsov.uz">firdavsov.uz — Firdavsov Eldor</a>
        <a itemProp="sameAs" href="https://github.com/eldor-firdavsov">GitHub — Firdavsov Eldor (Eldor Firdavsov)</a>
        <a itemProp="sameAs" href="https://www.linkedin.com/in/eldor-firdavsov">LinkedIn — Firdavsov Eldor (Eldor Firdavsov)</a>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Samarkand</span>,{" "}
          <span itemProp="addressCountry">Uzbekistan</span>
        </span>
      </address>
    </>
  );
}

