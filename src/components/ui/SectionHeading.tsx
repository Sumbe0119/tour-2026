"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-3xl ${alignClass}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.25em] ${
            light ? "text-cream-200" : "text-warm-400"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={` text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-warm-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream-100/85" : "text-warm-700/80"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
