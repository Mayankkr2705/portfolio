import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import {
  SiFastapi,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiScikitlearn,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { projects as fallbackProjects } from "@/lib/data";
import { getGithubProjects } from "@/lib/github";
import { Section } from "./section";
import { ProjectImage } from "./project-image";

const accents = [
  "from-blue-600 to-cyan-500",
  "from-purple-600 to-pink-500",
  "from-emerald-600 to-teal-500",
];

const techIcons = {
  React: { icon: FaReact, color: "text-[#61dafb]" },
  "Node.js": { icon: FaNodeJs, color: "text-[#339933]" },
  MongoDB: { icon: SiMongodb, color: "text-[#47a248]" },
  Firebase: { icon: SiFirebase, color: "text-[#ffca28]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06b6d4]" },
  "Next.js": { icon: SiNextdotjs, color: "text-zinc-900 dark:text-white" },
  FastAPI: { icon: SiFastapi, color: "text-[#05998b]" },
  Python: { icon: FaPython, color: "text-[#3776ab]" },
  "Scikit-learn": { icon: SiScikitlearn, color: "text-[#f7931e]" },
  Vercel: { icon: SiVercel, color: "text-zinc-900 dark:text-white" },
  "Groq AI": { icon: SiVercel, color: "text-[#f55036]" },
  Cloudinary: { icon: SiVercel, color: "text-[#3448c5]" },
};

export async function Projects() {
  const projects = await getGithubProjects(fallbackProjects);

  return (
    <Section id="projects">
      <h2 className="mb-12 text-left text-3xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.links.github}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
          >
            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {project.localImages?.length ? (
                <ProjectImage
                  images={project.localImages}
                  title={project.title}
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={cn(
                    "flex h-full w-full items-center justify-center bg-gradient-to-br",
                    accents[index % accents.length],
                  )}
                >
                  <span className="px-6 text-center text-4xl font-black uppercase tracking-tighter text-white/40">
                    {project.title}
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-black/[0.03] dark:bg-black/[0.1]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-bold capitalize transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-zinc-950 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-3">
                {project.tech.map((technology) => {
                  const TechIcon = techIcons[technology]?.icon;
                  return TechIcon ? (
                    <span
                      key={technology}
                      title={technology}
                      className="flex items-center gap-1.5"
                    >
                      <TechIcon
                        className={cn(
                          "h-5 w-5",
                          techIcons[technology].color,
                        )}
                      />
                    </span>
                  ) : null;
                })}
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-700">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600"
                >
                  <FaGithub className="h-4 w-4" /> Code
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600"
                  >
                    <HiExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
