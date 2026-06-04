"use client";
 
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/#home" className="text-xl font-bold tracking-tighter">
          {personalInfo.name.split(" ")[0]}
          <span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
