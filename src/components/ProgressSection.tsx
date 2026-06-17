"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROGRESS_AREAS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function getMessage(area: (typeof PROGRESS_AREAS)[number], value: number): string {
  if (value <= 33) return area.lowMessage;
  if (value <= 66) return area.midMessage;
  return area.highMessage;
}

const JOURNEY_MESSAGES = {
  low: "Урагш алхам бүр чухал. Өөртөө тэвчээртэй, эелдэг байгаарай.",
  mid: "Та утга учиртай ахиц гаргаж байна. Өдөр тутмын дасгалаа үргэлжлүүлээрэй.",
  high: "Та нарийн, зорилготой алхаж байна. Бий болгосон тэнцвэрээ хадгалж үргэлжлүүлээрэй.",
};

export function ProgressSection() {
  const reducedMotion = useReducedMotion();
  const [values, setValues] = useState<Record<string, number>>({
    peace: 50,
    clarity: 50,
    vitality: 50,
  });

  const overallProgress = Math.round(
    (values.peace + values.clarity + values.vitality) / 3
  );

  const journeyMessage =
    overallProgress < 40
      ? JOURNEY_MESSAGES.low
      : overallProgress < 70
        ? JOURNEY_MESSAGES.mid
        : JOURNEY_MESSAGES.high;

  return (
    <section
      id="progress"
      className="bg-warm-50 py-24 sm:py-32"
      aria-labelledby="progress-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Өөрийгөө эргэцүүлэх"
          title="Манлай руух ахиц"
          description="Өнөөдөр хаана байгаагаа зөөлөн үнэлээрэй. Энэ бол оноо биш — өөрийгөө чин сэтгэлээс харсан эргэцүүллийн мөч."
        />

        <motion.div
          className="mt-16 space-y-10"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {PROGRESS_AREAS.map((area) => (
            <div
              key={area.id}
              className="rounded-2xl border border-warm-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <label htmlFor={`slider-${area.id}`} className="font-medium text-warm-800">
                  {area.label}
                </label>
                <span className="text-sm text-warm-400" aria-hidden="true">
                  {values[area.id]}%
                </span>
              </div>

              <input
                id={`slider-${area.id}`}
                type="range"
                min={0}
                max={100}
                value={values[area.id]}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [area.id]: Number(e.target.value) }))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-warm-200 accent-warm-600"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={values[area.id]}
                aria-label={`${area.label} өөрийгөө үнэлэх түвшин`}
              />

              <p className="mt-4 text-sm leading-relaxed text-warm-700" role="status">
                {getMessage(area, values[area.id])}
              </p>
            </div>
          ))}

          <div className="rounded-2xl bg-gradient-to-br from-warm-700 to-warm-900 p-8 text-center text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-cream-200">Өнөөдрийн аялал</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-2 max-w-xs flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cream-200 via-warm-300 to-cream-100"
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
            <p className="mt-4 font-serif text-lg">{journeyMessage}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
