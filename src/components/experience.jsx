import { experience } from "@/lib/data";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold mb-12 text-left text-zinc-900 dark:text-white uppercase tracking-tight">
        Professional Journey
      </h2>
      <div className="space-y-12">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-zinc-100 dark:border-zinc-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-950"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {exp.organization}
                </p>
              </div>
              <div className="text-sm font-medium text-zinc-950 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-zinc-950 dark:text-zinc-400">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
