"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollIndicator() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-10 w-6 rounded-full border border-mist-50/40" />
      </div>
    );
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      aria-hidden="true"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-mist-50/60">Scroll</span>
      <div className="relative h-10 w-6 rounded-full border border-mist-50/40">
        <motion.div
          className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-mist-50/70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
