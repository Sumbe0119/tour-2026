"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sun, CloudSun, Moon } from "lucide-react";
import { DAILY_TIMELINE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const BalanceVisualization = dynamic(
  () => import("./BalanceVisualization").then((mod) => mod.BalanceVisualization),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 items-center justify-center">
        <div className="h-32 w-32 animate-pulse rounded-full border border-warm-300/40" />
      </div>
    ),
  }
);

const periodIcons = {
  Өглөө: Sun,
  Өдөр: CloudSun,
  Орой: Moon,
};

export function DailyBalance() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="daily-practice"
      className="bg-warm-800 py-24 text-white sm:py-32"
      aria-labelledby="daily-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Өдөр тутмын дасгал"
          title="Тэнцвэрт амьдралын энгийн зам"
          description="Өдрийн туршхэн жижиг, зорилготой мөчүүд тэнцвэрт амьдралын хэмнэлийг бий болгоно."
          light
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            {DAILY_TIMELINE.map((item, index) => {
              const Icon = periodIcons[item.period as keyof typeof periodIcons];

              return (
                <motion.div
                  key={item.period}
                  className="relative flex gap-5"
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {index < DAILY_TIMELINE.length - 1 && (
                    <div
                      className="absolute left-5 top-12 h-full w-px bg-white/10"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon className="h-4 w-4 text-cream-200" aria-hidden="true" />
                  </div>

                  <div className="pb-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl">{item.period}</h3>
                      <span className="text-xs text-cream-100/50">{item.time}</span>
                    </div>
                    <p className="mt-1 font-medium text-cream-100">{item.actions}</p>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{item.details}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-cream-100/50">
              Сэтгэл · Бодол · Бие
            </p>
            <Suspense fallback={null}>
              <BalanceVisualization />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
