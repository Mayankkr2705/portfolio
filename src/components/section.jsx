"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ children, id, className, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("py-20 px-6", className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
