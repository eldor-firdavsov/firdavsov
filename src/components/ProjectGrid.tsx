import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  return (
    <section id="work" className="page-shell space-y-5 pb-10 md:space-y-6 md:pb-14">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
