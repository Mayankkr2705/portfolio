import { Section } from "./section";
import { GraduationCap, ShieldCheck, Users, Code } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Editorial Typography Narrative */}
        <div className="relative z-10 text-left">
          <h2 className="text-4xl font-semibold font-serif mb-6 text-zinc-950 dark:text-zinc-50 tracking-tight">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="font-serif italic text-xl text-zinc-950 dark:text-zinc-200 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
              "I am a B.Tech student at NSUT, Delhi, driven by a passion for crafting elegant full-stack applications and integrating intelligent AI systems."
            </p>
            <p className="text-base text-zinc-950 dark:text-zinc-400 leading-relaxed font-sans">
              My tech journey is rooted in building impactful digital experiences. As the <span className="font-semibold text-zinc-900 dark:text-zinc-100">Society Head of the Algorithm Society of NSUT</span>, I lead coding initiatives, hackathons, and algorithm mentoring sessions, fostering a robust programming culture.
            </p>
            <p className="text-base text-zinc-950 dark:text-zinc-400 leading-relaxed font-sans">
              During my ethical hacking internship at <span className="font-semibold text-zinc-900 dark:text-zinc-100">CDAC Noida</span>, I conducted domain reconnaissance and API security audits. I love bridging clean frontend layouts, high-performance backends, and AI-driven automation.
            </p>
          </div>
        </div>

        {/* Right Side: Smaller, Compact Grid Cards */}
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
            <div className="flex flex-col p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Education</h4>
              <p className="text-xs text-zinc-950 dark:text-zinc-400 mt-1">B.Tech ITNS @ NSUT</p>
            </div>
            <div className="flex flex-col p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:scale-[1.02] hover:border-purple-500/50 transition-all duration-300">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Leadership</h4>
              <p className="text-xs text-zinc-950 dark:text-zinc-400 mt-1">Head @ Algorithm Soc</p>
            </div>
            <div className="flex flex-col p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:scale-[1.02] hover:border-emerald-500/50 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Security</h4>
              <p className="text-xs text-zinc-950 dark:text-zinc-400 mt-1">Hacking Intern @ CDAC</p>
            </div>
            <div className="flex flex-col p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:scale-[1.02] hover:border-pink-500/50 transition-all duration-300">
              <Code className="w-8 h-8 text-pink-600 dark:text-pink-400 mb-3" />
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Full Stack & AI</h4>
              <p className="text-xs text-zinc-950 dark:text-zinc-400 mt-1">React, Next.js, ML</p>
            </div>
          </div>
          
          {/* Subtle background glow effect behind the card deck */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl -z-10 pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
