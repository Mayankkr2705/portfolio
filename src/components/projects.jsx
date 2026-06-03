import { projects } from "@/lib/data";
import { Section } from "./section";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-12 text-left text-zinc-900 dark:text-white uppercase tracking-tight">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className={cn("w-full h-full flex items-center justify-center bg-gradient-to-br", project.accent)}>
                  <span className="text-4xl font-black tracking-tighter uppercase text-white opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
              )}
              {/* Overlay for subtle tint */}
              <div className="absolute inset-0 bg-black/[0.03] dark:bg-black/[0.1] pointer-events-none" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-950 dark:text-zinc-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-1.5"
                    title={t.name}
                  >
                    {t.icon && <t.icon className={cn("w-5 h-5", t.color)} />}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                )}
                {(project.links.live || project.links.demo) && (
                  <a
                    href={project.links.live || project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    <HiExternalLink className="w-4 h-4" /> {project.links.live ? "Live" : "Demo"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
