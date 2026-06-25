'use client';

import React from 'react';
import { motion } from 'framer-motion';

const personalResults = [
  {
    number: '01',
    title: 'Стресс буурна',
    desc: 'Дотоод сэтгэлээ ажиглаж, стрессийг зөв удирдана.',
    icon: '😊',
  },
  {
    number: '02',
    title: 'Анхаарал нэмэгдэнэ',
    desc: 'Төвлөрөл сайжирч, ажлын алдаа багасна.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Сэтгэл тогтворжино',
    desc: 'Хэцүү нөхцөлд тэнцвэрээ хадгална.',
    icon: '⚖️',
  },
];

const relationResults = [
  {
    title: 'Тайван харилцаа',
    desc: 'Зөрчил, маргаан багасдаг.',
    icon: '🕊️',
  },
  {
    title: 'Тэвчээр нэмэгдэнэ',
    desc: 'Хүнд нөхцөлд тогтвортой хэвээр үлдэнэ.',
    icon: '🧘',
  },
  {
    title: 'Сонсох чадвар',
    desc: 'Илүү сайн ойлгож харилцана.',
    icon: '👂',
  },
  {
    title: 'Багийн уур амьсгал',
    desc: 'Нийт орчин эерэг болно.',
    icon: '🌱',
  },
];

const workResults = [
  {
    title: 'Бүтээмж',
    desc: 'Илүү төвлөрч, чанартай ажиллана.',
    icon: '📈',
  },
  {
    title: 'Алдаа буурна',
    desc: 'Анхааралтай байснаар алдаа багасна.',
    icon: '✅',
  },
  {
    title: 'Хариуцлага',
    desc: 'Үүрэгтээ илүү ухамсартай хандана.',
    icon: '🎯',
  },
  {
    title: 'Тогтвортой гүйцэтгэл',
    desc: 'Урт хугацаанд тогтвортой ажиллана.',
    icon: '📊',
  },
];

const companyBenefits = [
  {
    title: 'Эрүүл сэтгэл',
    desc: 'Өндөр гүйцэтгэлийн суурь.',
    icon: '💚',
  },
  {
    title: 'Стрессгүй орчин',
    desc: 'Ажлын орчин тайван болно.',
    icon: '🏢',
  },
  {
    title: 'Нэгдмэл багийн соёл',
    desc: 'Багийн уур амьсгал сайжирна.',
    icon: '👥',
  },
  {
    title: 'Long-term growth',
    desc: 'Урт хугацааны өсөлтөд нөлөөлнө.',
    icon: '🌿',
  },
];

const inviteSteps = [
  {
    number: '01',
    title: 'Албадах биш, ойлгуулах',
    desc: 'Боломж гэдгээр хүргэх.',
  },
  {
    number: '02',
    title: 'Туршлагаар итгүүлэх',
    desc: 'Жишээ, үр дүн дурьдах.',
  },
  {
    number: '03',
    title: 'Жижиг алхмаас эхлүүлэх',
    desc: '5 минутын бясалгалаас эхлэх.',
  },
  {
    number: '04',
    title: 'Үр дүнг бодитоор харах',
    desc: 'Өөрсдөө мэдэрч оролцоно.',
  },
];

function FloatingCircle({ className }: { className: string }) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`pointer-events-none absolute rounded-full border border-orange-300/45 bg-amber-100/35 ${className}`}
    />
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-orange-300/25 blur-3xl" />

      <div className="relative flex min-h-[360px] items-center justify-center rounded-[2.5rem] border border-orange-100/80 bg-white/70 p-8 shadow-2xl shadow-orange-900/10 backdrop-blur">
        <div className="absolute h-64 w-64 rounded-full bg-orange-100/70" />
        <div className="absolute h-52 w-52 rounded-full border border-orange-300/45" />
        <div className="absolute h-40 w-40 rounded-full border border-amber-300/45" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-2xl shadow-orange-900/15"
        >
          🧘
        </motion.div>

        <div className="absolute bottom-16 left-8 right-8 text-center">
          <h3 className="text-xl font-black text-slate-950">
            Амгалан байдлыг өөрөөсөө эхлүүлье
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            Өдөр бүр багахан хугацааг өөртөө зориулж, сэтгэлээ сонсож, биеэ хайрлая.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({
  item,
  index,
}: {
  item: {
    number?: string;
    title: string;
    desc: string;
    icon?: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/85 p-6 shadow-xl shadow-orange-900/10 backdrop-blur"
    >
      <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-orange-500" />

      <div className="flex items-center gap-4">
        {item.number ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-sm font-black text-orange-800">
            {item.number}
          </div>
        ) : (
          <div className="text-3xl">{item.icon}</div>
        )}

        {item.icon && item.number && (
          <div className="text-3xl">{item.icon}</div>
        )}
      </div>

      <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {item.desc}
      </p>
    </motion.div>
  );
}

function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-black text-orange-800 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        {label}
      </div>

      <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function StepCard({
  step,
  index,
}: {
  step: {
    number: string;
    title: string;
    desc: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="relative rounded-[2rem] border border-orange-100 bg-white/85 p-6 text-center shadow-xl shadow-orange-900/10"
    >
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-black text-white ${index % 2 === 0 ? 'bg-[#4a2c16]' : 'bg-orange-500'
          }`}
      >
        {step.number}
      </div>

      <h3 className="mx-auto mt-8 max-w-[180px] text-lg font-black leading-6 text-slate-950">
        {step.title}
      </h3>

      <p className="mt-6 text-sm leading-6 text-slate-500">
        {step.desc}
      </p>

      {index !== inviteSteps.length - 1 && (
        <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-3xl font-black text-orange-400 xl:block">
          →
        </div>
      )}
    </motion.div>
  );
}

const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.22),transparent_34%),linear-gradient(135deg,#fff7ed_0%,#fffbeb_42%,#fef3c7_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <FloatingCircle className="left-8 top-10 h-24 w-24" />
      <FloatingCircle className="bottom-12 right-12 h-32 w-32" />

      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-orange-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-700/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl py-12">
        {/* HERO */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/80 px-5 py-2 text-sm font-black text-orange-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Випашяна бясалгал
            </div>
            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Сэтгэлээ
              <span className="block text-orange-600">
                ариусгая
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Бясалгал нь ажилчдын сэтгэл санаа, харилцаа, төвлөрөл,
              гүйцэтгэлд эерэг нөлөө үзүүлж, ажлын орчныг илүү тайван болгоно.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="rounded-full bg-[#2b1a10] px-6 py-3 text-sm font-black text-white shadow-xl shadow-orange-900/15">
                Тайван сэтгэл · Цэгцтэй бодол · Тогтвортой гүйцэтгэл
              </div>
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Impact;