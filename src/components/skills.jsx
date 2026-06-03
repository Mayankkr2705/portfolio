import { skills } from "@/lib/data";
import { Section } from "./section";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold mb-12 text-left text-zinc-900 dark:text-white uppercase tracking-tight">
        My Technical Arsenal
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-4 text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-all group bg-transparent"
                >
                  {skill.icon && <skill.icon className={cn("w-7 h-7 transition-transform group-hover:scale-110", skill.color)} />}
                  <span className="text-sm font-semibold text-zinc-950 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
