'use client';

import React from 'react';
import { motion } from 'framer-motion';

const thoughtItems = [
  {
    number: '01',
    title: 'Ажилдаа дуртай байх',
    desc: 'Хийж буй ажлынхаа үнэ цэнийг ойлгож, идэвх санаачилгатай ажиллах.',
  },
  {
    number: '02',
    title: 'Хичээл зүтгэлтэй байх',
    desc: 'Аливаа ажлыг тууштай, хариуцлагатай хийх дадал хэвшүүлэх.',
  },
  {
    number: '03',
    title: 'Хариуцлагатай байх',
    desc: 'Өөрийн үүргээ ухамсарлаж, цаг баримталж, хамт олонтойгоо найдвартай хамтран ажиллах.',
  },
];

const ThoughtClarity = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.18),transparent_36%),linear-gradient(135deg,#fff7ed_0%,#fffbeb_45%,#fef3c7_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left title */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/80 px-5 py-2 text-sm font-black text-orange-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Дотоод хандлага
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Бодлыг
              <span className="block text-orange-600">цэгцлэх</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Зөв бодол нь зөв хандлагыг бий болгож, зөв хандлага нь ажилдаа
              илүү хариуцлагатай, идэвхтэй оролцох үндэс болдог.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 rounded-[2rem] border border-orange-200 bg-white/75 p-6 shadow-xl shadow-orange-900/10 backdrop-blur"
            >
              <p className="text-lg font-black leading-8 text-slate-900">
                “Чадна гэж бодсон ч, чадахгүй гэж бодсон ч аль аль тохиолдолд
                та зөв.”
              </p>
              <p className="mt-3 text-sm font-bold text-orange-700">
                /Хенри Форд/
              </p>
            </motion.div>
          </motion.div>

          {/* Right cards */}
          <div className="grid gap-5">
            {thoughtItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/85 p-6 shadow-xl shadow-orange-900/10 backdrop-blur"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-200/35 blur-2xl" />

                <div className="relative flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4a2c16] text-sm font-black text-white">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtClarity;