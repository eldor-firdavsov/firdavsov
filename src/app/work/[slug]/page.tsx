import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { SuiteTriptych } from "@/components/SuiteTriptych";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Eldor Firdavsov`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const isSuite = project.slug === "classroom-suite";

  return (
    <>
      <Navigation />
      <main className="pt-[100px]">
        <article className="page-shell pb-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 md:items-start">
            <div>
              <p className="label">
                {project.number}/{String(projects.length).padStart(2, "0")}
              </p>
              <h1 className="display mt-4 text-[clamp(2.5rem,7vw,4.5rem)] font-medium uppercase">
                {project.title}
              </h1>
              <p className="mt-2 text-[13px] text-muted-strong">{project.category}</p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-strong">
                {project.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 text-[13px]">
                <div>
                  <dt className="text-muted">Stack</dt>
                  <dd className="mt-1 text-foreground">
                    {project.technologies.slice(0, 3).join(", ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Type</dt>
                  <dd className="mt-1 text-foreground">{project.category.split(" / ")[0]}</dd>
                </div>
                {project.github && (
                  <div className="col-span-2">
                    <dt className="text-muted">Repository</dt>
                    <dd className="mt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        GitHub ↗
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="rounded-media relative aspect-[4/5] overflow-hidden bg-surface md:aspect-[5/6]">
              {isSuite ? (
                <SuiteTriptych />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
            {project.problem && (
              <section>
                <h2 className="label mb-3 uppercase tracking-[0.08em]">Problem</h2>
                <p className="text-[15px] leading-relaxed text-muted-strong">
                  {project.problem}
                </p>
              </section>
            )}
            {project.approach && (
              <section>
                <h2 className="label mb-3 uppercase tracking-[0.08em]">Approach</h2>
                <p className="text-[15px] leading-relaxed text-muted-strong">
                  {project.approach}
                </p>
              </section>
            )}
            {project.result && (
              <section>
                <h2 className="label mb-3 uppercase tracking-[0.08em]">Result</h2>
                <p className="text-[15px] leading-relaxed text-muted-strong">
                  {project.result}
                </p>
              </section>
            )}
          </div>

          {project.decisions && (
            <section className="mt-12 border-t border-border pt-10">
              <h2 className="label mb-5 uppercase tracking-[0.08em]">Details</h2>
              <ul className="space-y-3">
                {project.decisions.map((d) => (
                  <li key={d} className="border-b border-border pb-3 text-[15px]">
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {next && (
            <div className="mt-14">
              <Link
                href={`/work/${next.slug}`}
                className="flex items-center justify-between rounded-full border border-border px-5 py-4 transition-colors hover:bg-surface"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm">
                  ←
                </span>
                <span className="text-[13px] font-medium uppercase tracking-[0.08em]">
                  Next project
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm">
                  →
                </span>
              </Link>
              <p className="mt-3 text-center display text-2xl uppercase">
                {next.title}
              </p>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
