"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StretchItem = {
  title: string;
  src: string;
  animate: {
    rotate?: number[];
    y?: number[];
    x?: number[];
    scale?: number[];
  };
};

const stretches: StretchItem[] = [
  {
    title: "Overhead reach",
    src: "/stretches/stretch-01-overhead-reach.png",
    animate: { y: [0, -8, 0], rotate: [0, -1.5, 0] },
  },
  {
    title: "Back lean",
    src: "/stretches/stretch-02-back-lean.png",
    animate: { rotate: [0, -4, 0], y: [0, -4, 0] },
  },
  {
    title: "Forward fold",
    src: "/stretches/stretch-03-forward-fold.png",
    animate: { rotate: [0, 3, 0], y: [0, 6, 0] },
  },
  {
    title: "Leg raise",
    src: "/stretches/stretch-04-leg-raise.png",
    animate: { x: [0, 5, 0], y: [0, -3, 0] },
  },
  {
    title: "Knee hug",
    src: "/stretches/stretch-05-knee-hug.png",
    animate: { scale: [1, 1.035, 1], y: [0, -3, 0] },
  },
  {
    title: "Seated hug",
    src: "/stretches/stretch-06-seated-hug.png",
    animate: { scale: [1, 1.04, 1], rotate: [0, -1.5, 0] },
  },
  {
    title: "Chair back stretch",
    src: "/stretches/stretch-07-chair-back-stretch.png",
    animate: { x: [0, -5, 0], y: [0, 3, 0] },
  },
  {
    title: "Calf raise",
    src: "/stretches/stretch-08-standing-calf-raise.png",
    animate: { y: [0, -12, 0] },
  },
  {
    title: "Standing leg swing",
    src: "/stretches/stretch-09-standing-leg-swing.png",
    animate: { rotate: [0, -2.5, 0], x: [0, 5, 0] },
  },
];

export default function ChairStretchGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
          Office stretch
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Сандалтай дасгалууд
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
          Ажил дундуур богино хугацаанд хийж болох энгийн сунгалтын хөдөлгөөнүүд.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stretches.map((item, index) => (
          <motion.article
            key={item.src}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-teal-100/70 blur-3xl" />

            <div className="relative flex h-56 items-center justify-center rounded-2xl bg-slate-50 md:h-64">
              <motion.div
                animate={item.animate}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
                className="relative h-[88%] w-[88%]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-contain drop-shadow-sm"
                  priority={index < 3}
                />
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900">
                {index + 1}. {item.title}
              </h3>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                30 сек
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
