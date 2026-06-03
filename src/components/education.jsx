import { education } from "@/lib/data";
import { Section } from "./section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education">
      <h2 className="text-3xl font-bold mb-12 text-left text-zinc-900 dark:text-white uppercase tracking-tight">
        Education
      </h2>
      <div className="relative ml-4 md:ml-8 space-y-12 py-4">
        {/* Gradient vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-zinc-100 dark:to-zinc-800" />

        {education.map((edu, idx) => (
          <div key={idx} className="relative pl-8 group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[15px] top-1.5 w-8 h-8 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-300">
              <GraduationCap className="w-4 h-4" />
            </div>
            
            {/* Content Layout */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between border-b border-zinc-100 dark:border-zinc-900 pb-8 last:border-0 last:pb-0">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full">
                  {edu.period}
                </span>
                
                <h3 className="text-2xl font-bold mt-3 text-zinc-950 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                                <p className="text-base text-zinc-950 dark:text-zinc-400 font-medium mt-1">
                  {edu.institution}
                </p>
                
                {edu.coursework && (
                  <p className="text-sm text-zinc-950 dark:text-zinc-400 leading-relaxed italic mt-4 max-w-3xl">
                    <strong className="text-xs uppercase tracking-wider not-italic text-zinc-700 dark:text-zinc-500 mr-2 block md:inline-block">Relevant Coursework:</strong>
                    {edu.coursework}
                  </p>
                )}
              </div>
              
              <div className="flex items-center gap-2 shrink-0 md:mt-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 px-4 py-2.5 rounded-xl self-start">
                <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Score:</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400 text-base">{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
