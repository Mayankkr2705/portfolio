"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export function Footer() {
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      topic: formData.get("topic"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="py-8 px-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Let&apos;s Connect</h2>
            <p className="text-zinc-900 dark:text-zinc-400 mb-8 max-w-md">
              I&apos;m currently looking for new opportunities and collaborations. Feel free to reach out via email, social profiles, or by filling out the form.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:text-blue-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankkumar2777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:text-blue-600 transition-colors"
              >
                <HiMail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white dark:bg-zinc-800/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium px-1 text-zinc-900 dark:text-zinc-200">Name</label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium px-1 text-zinc-900 dark:text-zinc-200">Email</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium px-1 text-zinc-900 dark:text-zinc-200">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91-0000000000"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium px-1 text-zinc-900 dark:text-zinc-200">Topic of Discussion</label>
              <textarea
                required
                id="topic"
                name="topic"
                rows="2"
                placeholder="What would you like to talk about?"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-zinc-900 dark:text-zinc-100"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm text-center font-medium">
                Message sent successfully to Telegram!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm text-center font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="mt-10 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-900 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
