'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const people = [
  {
    title: 'Идэвхтэй хүн',
    image: '/energy/active.png',
    tone: 'active',
    badge: 'Эрч хүчтэй',
    points: ['Сэргэлэн', 'Төвлөрөл сайн', 'Бүтээмж өндөр'],
  },
  {
    title: 'Эрч хүчгүй хүн',
    image: '/energy/tired.png',
    tone: 'tired',
    badge: 'Ядрамтгай',
    points: ['Ядралт их', 'Сул төвлөрөл', 'Идэвх багатай'],
  },
] as const;

const metrics = [
  { label: 'Эрч хүч', active: 92, tired: 38 },
  { label: 'Төвлөрөл', active: 86, tired: 42 },
  { label: 'Бүтээмж', active: 90, tired: 40 },
] as const;

function SideMetric({
  label,
  active,
  tired,
  isActive,
  index,
}: {
  label: string;
  active: number;
  tired: number;
  isActive: boolean;
  index: number;
}) {
  const value = isActive ? active : tired;
  const compareValue = isActive ? tired : active;

  return (
    <div className="rounded-2xl bg-white/85 p-3 shadow-sm ring-1 ring-black/5">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-black text-slate-800">{label}</p>
        <span
          className={`text-sm font-black ${
            isActive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {value}%
        </span>
      </div>

      <div
        className={`h-3 overflow-hidden rounded-full ${
          isActive ? 'bg-emerald-100' : 'bg-rose-100'
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.06 }}
          className={`h-full rounded-full ${
            isActive
              ? 'bg-gradient-to-r from-emerald-500 to-cyan-400'
              : 'bg-gradient-to-r from-rose-500 to-orange-400'
          }`}
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] font-bold text-slate-400">
        <span>{isActive ? 'Эрч хүчгүй' : 'Идэвхтэй'}</span>
        <span>{compareValue}%</span>
      </div>
    </div>
  );
}

function PersonCard({
  person,
  index,
}: {
  person: (typeof people)[number];
  index: number;
}) {
  const isActive = person.tone === 'active';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-[2.5rem] border p-4 shadow-2xl ${
        isActive
          ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-emerald-900/10'
          : 'border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 shadow-rose-900/10'
      }`}
    >
      <div
        className={`absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl ${
          isActive ? 'bg-emerald-300/35' : 'bg-rose-300/35'
        }`}
      />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p
              className={`text-xs font-black uppercase tracking-[0.22em] ${
                isActive ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {isActive ? 'Active lifestyle' : 'Low energy'}
            </p>

            <h3
              className={`mt-1 text-2xl font-black tracking-tight ${
                isActive ? 'text-emerald-950' : 'text-rose-950'
              }`}
            >
              {person.title}
            </h3>
          </div>

          <span
            className={`rounded-full px-4 py-2 text-xs font-black text-white ${
              isActive ? 'bg-emerald-600' : 'bg-rose-600'
            }`}
          >
            {person.badge}
          </span>
        </div>

        {/* Image + side metrics */}
        <div className="grid gap-4 lg:grid-cols-[1fr_230px]">
          <div
            className={`relative flex h-[420px] items-end justify-center overflow-hidden rounded-[2rem] border ${
              isActive
                ? 'border-emerald-100 bg-emerald-100/35'
                : 'border-rose-100 bg-rose-100/35'
            }`}
          >
            <div className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-black/10 blur-2xl" />

            <motion.div
              animate={
                isActive
                  ? { y: [0, -10, 0], scale: [1, 1.015, 1] }
                  : { y: [0, 6, 0], rotate: [0, -0.8, 0] }
              }
              transition={{
                duration: isActive ? 3 : 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative h-full w-full"
            >
              <Image
                src={person.image}
                alt={person.title}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-[2rem] bg-white/45 p-3 ring-1 ring-black/5">
            <div className="space-y-3">
              {metrics.map((metric, metricIndex) => (
                <SideMetric
                  key={metric.label}
                  label={metric.label}
                  active={metric.active}
                  tired={metric.tired}
                  isActive={isActive}
                  index={metricIndex}
                />
              ))}
            </div>

            <div
              className={`rounded-2xl px-4 py-4 text-center ${
                isActive ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                Үр дүн
              </p>
              <p className="mt-1 text-lg font-black text-white">
                {isActive ? 'Илүү бүтээмжтэй' : 'Илүү амархан ядарна'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {person.points.map((point) => (
            <div
              key={point}
              className="rounded-2xl bg-white/85 px-3 py-3 text-center text-xs font-black text-slate-700 shadow-sm ring-1 ring-black/5"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

const Conclusion = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-300/25 blur-3xl" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan-700">
            Conclusion
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Идэвхтэй ба эрч хүчгүй хүний ялгаа
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Хөдөлгөөнтэй өдөр илүү сэргэлэн, төвлөрсөн, бүтээмжтэй өнгөрдөг.
          </p>
        </motion.div>

        <div className="relative mt-10 grid gap-6 xl:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-black text-slate-950 shadow-2xl xl:flex">
            VS
          </div>

          {people.map((person, index) => (
            <PersonCard key={person.title} person={person} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-cyan-200 bg-white/80 px-6 py-6 text-center shadow-xl shadow-cyan-900/5 backdrop-blur"
        >
          <p className="text-lg font-black leading-8 text-slate-900 sm:text-xl">
            Багахан хөдөлгөөн ч өдөр тутмын эрч хүчийг нэмэгдүүлдэг.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;