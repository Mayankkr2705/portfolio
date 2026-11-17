"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import { ProjectImage } from "./project-image";

const accents = [
  "from-blue-600 to-cyan-500",
  "from-purple-600 to-pink-500",
  "from-emerald-600 to-teal-500",
];

const techIcons = {
  React: { icon: FaReact, color: "text-[#61dafb]" },
  "React.js": { icon: FaReact, color: "text-[#61dafb]" },
  ReactJs: { icon: FaReact, color: "text-[#61dafb]" },
  "Node.js": { icon: FaNodeJs, color: "text-[#339933]" },
  NodeJs: { icon: FaNodeJs, color: "text-[#339933]" },
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

function getTechnologyName(technology) {
  return typeof technology === "string" ? technology : technology.name;
}

function ProjectCard({
  project,
  position,
  setActiveIndex,
}) {
  const positionClass = {
    0: "lg:left-0",
    1: "lg:left-1/2 lg:-translate-x-1/2",
    2: "lg:right-0",
  }[position];
  const isActive = position === 1;

  return (
    <article
      onClick={setActiveIndex}
      className={cn(
        "group flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-500 dark:border-zinc-700 dark:bg-zinc-800",
        "md:w-[calc(50%-1rem)] lg:absolute lg:w-[31%]",
        isActive
          ? "z-20 shadow-xl lg:scale-100"
          : "lg:z-10 lg:scale-[0.86]",
        positionClass,
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {project.localImages?.length ? (
          <ProjectImage images={project.localImages} title={project.title} />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br",
              accents[project.index % accents.length],
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
            const name = getTechnologyName(technology);
            const TechIcon = techIcons[name]?.icon;
            return TechIcon ? (
              <span key={name} title={name} className="flex items-center gap-1.5">
                <TechIcon className={cn("h-5 w-5", techIcons[name].color)} />
              </span>
            ) : null;
          })}
        </div>
        <div className="flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-700">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600"
          >
            <FaGithub className="h-4 w-4" /> Code
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600"
            >
              <HiExternalLink className="h-4 w-4" /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(null);
  const visibleProjects = [0, 1, 2].map((position) => {
    const index =
      (activeIndex + position - 1 + projects.length) % projects.length;
    return { ...projects[index], index };
  });

  useEffect(() => {
    if (projects.length < 2 || isHovered || isDragging) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isDragging, isHovered, projects.length]);

  function moveBy(step) {
    setActiveIndex(
      (current) => (current + step + projects.length) % projects.length,
    );
  }

  function handlePointerDown(event) {
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event) {
    if (dragStartX.current !== null) {
      const distance = event.clientX - dragStartX.current;
      if (Math.abs(distance) > 40) {
        moveBy(distance > 0 ? -1 : 1);
      }
    }

    dragStartX.current = null;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function handlePointerCancel() {
    dragStartX.current = null;
    setIsDragging(false);
  }

  return (
    <div
      className={cn(
        "relative touch-pan-y select-none",
        isDragging ? "cursor-grabbing" : "cursor-grab",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handlePointerCancel();
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <div className="flex flex-col gap-8 md:flex-row lg:relative lg:h-[520px]">
        {visibleProjects.map((project, position) => (
          <ProjectCard
            key={`${project.links.github}-${position}`}
            project={project}
            position={position}
            setActiveIndex={() => setActiveIndex(project.index)}
          />
        ))}
      </div>
      {projects.length > 1 && (
        <div className="mt-8 flex justify-center gap-2 lg:mt-0">
          {projects.map((project, index) => (
            <button
              key={project.links.github}
              type="button"
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-zinc-300 dark:bg-zinc-600",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
