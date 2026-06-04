"use client";

import { personalInfo } from "@/lib/data";
import { Section } from "./section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

export function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-20">
      <div className="flex flex-col gap-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I&apos;m <span className="text-blue-600">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-950 dark:text-zinc-400 leading-relaxed"
        >
          {personalInfo.title}. Passionate about building scalable web applications and exploring the frontiers of Artificial Intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/resume"
            className="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-medium flex items-center gap-2 transition-colors"
          >
            View Resume
          </Link>
          <div className="flex items-center gap-4 px-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-950 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-950 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankkumar2777@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-950 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <HiMail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
