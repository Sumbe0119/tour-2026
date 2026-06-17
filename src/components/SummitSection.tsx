"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SummitSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="summit"
      className="relative min-h-screen overflow-hidden bg-[#b96e48]"
      aria-labelledby="summit-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,229,190,0.35),transparent_50%),linear-gradient(180deg,rgba(75,32,21,0.15),rgba(54,23,13,0.4))]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cream-200/10 blur-[120px]"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
        <motion.div
          className="max-w-2xl"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cream-200">
            Манлай
          </p>

          <h2
            id="summit-heading"
            className="font-serif text-3xl leading-snug text-white sm:text-4xl md:text-5xl"
          >
            Цэнгэл бол зорилго биш. Өдөр бүр дотооддоо бий болгодог тэнцвэр юм.
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#daily-practice" variant="primary" ariaLabel="Өдөр тутмын дасгалаа эхлүүлэх">
              Өдөр тутмын дасгалаа эхлүүлэх
            </Button>
            <Button href="#progress" variant="secondary" ariaLabel="Аяллаа эргэцүүлэх">
              Аяллаа эргэцүүлэх
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
