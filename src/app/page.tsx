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
    </>
  );
}
