import type { Metadata } from "next";
import Link from "next/link";
import { experiments } from "@/data/experiments";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Lab — Eldor Firdavsov",
  description: "Experiments in ML, vision, and interface.",
};

export default function LabPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        <section className="page-shell flex min-h-[55vh] flex-col items-center justify-center pt-28 pb-16 text-center">
          <h1 className="display max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase tracking-[-0.04em] text-white">
            Welcome to the Lab
          </h1>
          <p className="mt-5 text-[13px] uppercase tracking-[0.12em] text-white/50">
            Somewhere between structure and instinct.
          </p>
        </section>

        <section className="page-shell pb-24">
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
            {experiments.map((item, index) => (
              <article
                key={item.id}
                className="mb-3 break-inside-avoid border border-white/10 bg-white/[0.03] p-5"
                style={{
                  minHeight: index % 3 === 0 ? 220 : index % 2 === 0 ? 180 : 160,
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">
                  {item.tag}
                </p>
                <h2 className="display mt-6 text-2xl text-white md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {item.blurb}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/#work" className="pill !bg-white !text-black">
              Back to work →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
