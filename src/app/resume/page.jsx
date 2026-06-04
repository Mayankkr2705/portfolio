"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  personalInfo, 
  skills, 
  experience, 
  education, 
  projects 
} from "@/lib/data";
import { 
  ArrowLeft, 
  Briefcase, 
  GraduationCap, 
  Folder, 
  ExternalLink, 
  FileText, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin,
  Eye,
  CheckCircle2
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("interactive"); // "interactive" | "pdf"

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navbar />
      
      {/* Print-specific style override */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          nav, 
          footer, 
          .no-print {
            display: none !important;
          }
          .print-full-width {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-grid {
            display: block !important;
          }
          .print-card {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            background: transparent !important;
          }
        }
      `}</style>

      <main className="min-h-screen pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 print-full-width">
          
          {/* Header Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 no-print">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              {/* Tab Switcher */}
              <div className="inline-flex p-1 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur rounded-full border border-zinc-300/30 dark:border-zinc-700/30">
                <button
                  onClick={() => setActiveTab("interactive")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeTab === "interactive"
                      ? "bg-white dark:bg-zinc-900 shadow-md text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Interactive CV
                </button>
                <button
                  onClick={() => setActiveTab("pdf")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeTab === "pdf"
                      ? "bg-white dark:bg-zinc-900 shadow-md text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  PDF Document
                </button>
              </div>

              {/* Actions */}
              <a
                href="/resume.pdf"
                download="Resume_Mayank_Kumar.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-colors shadow-sm shadow-blue-500/10"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-wide transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Resume
              </button>
            </div>
          </div>

          {/* ACTIVE VIEW CONTENT */}
          {activeTab === "interactive" ? (
            /* INTERACTIVE CV VIEW */
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm print-card">
              
              {/* CV Header */}
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-8 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h1>
                <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                  {personalInfo.title}
                </p>
                
                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-sm text-zinc-600 dark:text-zinc-400">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500 transition-colors">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500 transition-colors">
                    <Phone className="w-4 h-4 text-zinc-400" />
                    {personalInfo.phone}
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    {personalInfo.location}
                  </div>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500 transition-colors">
                    <FaGithub className="w-4 h-4 text-zinc-400" />
                    GitHub
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500 transition-colors">
                    <FaLinkedin className="w-4 h-4 text-zinc-400" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Main Content Sections: 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 print-grid">
                
                {/* Left Side: Summary, Experience, Education, Projects (Col-span 2) */}
                <div className="md:col-span-2 space-y-10">
                  
                  {/* Summary */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      Professional Summary
                    </h3>
                    <p className="text-zinc-650 dark:text-zinc-350 text-sm leading-relaxed">
                      Motivated and detail-oriented B.Tech Information Technology & Network Security (ITNS) student at NSUT. Passionate about building full-stack web applications, integrating AI workflows, and optimizing security posture. Eager to solve complex challenges in modern web architectures and machine learning systems.
                    </p>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      Experience
                    </h3>
                    <div className="space-y-6">
                      {experience.map((exp, idx) => (
                        <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
                          {/* Dot */}
                          <div className="absolute left-[-3.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 border border-white dark:border-zinc-900" />
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                            <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                              {exp.role}
                            </h4>
                            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full w-fit">
                              {exp.period}
                            </span>
                          </div>
                          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                            {exp.organization} — <span className="text-zinc-500 dark:text-zinc-500 font-normal">{exp.location}</span>
                          </div>
                          <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                            {exp.description.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
                      <Folder className="w-5 h-5 text-blue-500" />
                      Key Projects
                    </h3>
                    <div className="space-y-6">
                      {projects.map((proj, idx) => (
                        <div key={idx} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 print-card print:p-0">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                              {proj.title}
                            </h4>
                            {proj.links.live && (
                              <a
                                href={proj.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-blue-500 no-print"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.tech.map((t, tIdx) => (
                              <span key={tIdx} className="text-[10px] font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-md">
                                {t.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Skills, Education (Col-span 1) */}
                <div className="space-y-8">
                  
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                      Education
                    </h3>
                    <div className="space-y-5">
                      {education.map((edu, idx) => (
                        <div key={idx} className="text-sm">
                          <h4 className="font-bold text-zinc-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium my-0.5">
                            {edu.institution}
                          </div>
                          <div className="flex justify-between text-xs text-zinc-500">
                            <span>{edu.period}</span>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{edu.score}</span>
                          </div>
                          {edu.coursework && (
                            <p className="text-[11px] text-zinc-450 dark:text-zinc-500 mt-1 leading-normal">
                              <strong>Coursework:</strong> {edu.coursework}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      Skills
                    </h3>
                    <div className="space-y-4">
                      {skills.map((cat, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                            {cat.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cat.items.map((skill, sIdx) => {
                              const SkillIcon = skill.icon;
                              return (
                                <div
                                  key={sIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                                >
                                  {SkillIcon && <SkillIcon className={`w-3.5 h-3.5 ${skill.color || ""}`} />}
                                  <span>{skill.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* PDF DOCUMENT VIEW */
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 shadow-sm h-[850px] flex flex-col">
              <iframe
                src="/resume.pdf"
                className="w-full h-full rounded-2xl border-0 bg-zinc-100 dark:bg-zinc-800"
                title="Mayank Kumar Resume PDF"
              />
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
