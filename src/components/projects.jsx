import { projects as fallbackProjects } from "@/lib/data";
import { getGithubProjects } from "@/lib/github";
import { ProjectCarousel } from "./project-carousel";
import { Section } from "./section";

export async function Projects() {
  const projects = await getGithubProjects(fallbackProjects);
  const serializableProjects = projects.map((project) => ({
    ...project,
    tech: project.tech.map((technology) =>
      typeof technology === "string" ? technology : technology.name,
    ),
  }));

  return (
    <Section id="projects">
      <h2 className="mb-12 text-left text-3xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
        Featured Projects
      </h2>
      <ProjectCarousel projects={serializableProjects} />
    </Section>
  );
}
