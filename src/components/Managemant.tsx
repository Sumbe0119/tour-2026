'use client';

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Сэтгэлээ ариусгая',
    desc: 'Дотоод сэтгэлээ тайвшруулж, эерэг хандлагаа сэргээе.',
    number: '01',
  },
  {
    title: 'Бодлоо цэгцэлье',
    desc: 'Өдөр тутмын бодлоо эмхэлж, зорилгоо илүү тодорхой болгоё.',
    number: '02',
  },
  {
    title: 'Бие эрүүл, эрч хүчтэй болгоё',
    desc: 'Эрүүл дадал, зөв хэмнэлээр өөрийгөө цэнэглэе.',
    number: '03',
  },
];

const Managemant = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background blur decorations */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

      {/* Floating animation circles */}
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-20 h-24 w-24 rounded-full border border-cyan-300/50 bg-white/30 backdrop-blur"
      />

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-12 h-32 w-32 rounded-full bg-sky-300/20"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/70 px-4 py-2 text-sm font-bold text-cyan-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Цэнгэлийн манлайд хүрэх
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Сэтгэл санаа
              <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                амгалан
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Өөрийгөө тайвшруулж, бодлоо цэгцэлж, бие махбодоо эрүүл
              эрч хүчтэй байлгах нь амьдралын чанарыг дээшлүүлэх хамгийн
              энгийн боловч чухал алхам юм.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <div className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-900/20">
                Тайван сэтгэл · Цэгцтэй бодол · Эрүүл бие
              </div>

              <div className="rounded-full border border-cyan-300/60 bg-white/70 px-6 py-3 text-sm font-bold text-cyan-900 backdrop-blur">
                Дотоод амар амгалан
              </div>
            </div>
          </motion.div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/70 via-white/60 to-sky-300/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-cyan-900/15 backdrop-blur-xl sm:p-8">
              {/* Calm vector illustration */}
              <div className="relative mx-auto flex aspect-square max-w-[420px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 via-white to-sky-100">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute h-[78%] w-[78%] rounded-full border border-cyan-300/70"
                />

                <motion.div
                  animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.65, 0.35] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute h-[58%] w-[58%] rounded-full border border-sky-300/70"
                />

                <div className="relative z-10 text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl shadow-cyan-900/10">
                    <span className="text-5xl">🧘</span>
                  </div>

                  <p className="mt-5 text-lg font-black text-slate-900">
                    Амгалан байдлыг өөрөөсөө эхлүүлье
                  </p>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                    Өдөр бүр багахан хугацааг өөртөө зориулж, сэтгэлээ
                    сонсож, биеэ хайрлая.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-cyan-200/80 bg-white/60 px-6 py-7 text-center shadow-xl shadow-cyan-900/10 backdrop-blur"
        >
          <p className="text-lg font-bold leading-8 text-slate-900 sm:text-2xl">
            Хүний 3-н биеийн эрүүл мэндийн хөтөлбөр.
          </p>
        </motion.div>
        {/* 3 main points */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-black text-cyan-800">
                  {item.number}
                </div>

                <div className="h-2 w-2 rounded-full bg-cyan-500 transition group-hover:scale-[2.2]" />
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}

      </div>
    </section>
  );
};

export default Managemant;