'use client';

import React from 'react';
import { motion } from 'framer-motion';

const conclusionPoints = [
  {
    title: 'Бие эрүүл бол өдөр илүү бүтээмжтэй',
    desc: 'Хөдөлгөөнтэй хүн ядрах нь бага, ажилдаа төвлөрөх чадвар илүү тогтвортой байдаг.',
  },
  {
    title: 'Сэтгэл тайван бол бодол цэгцтэй',
    desc: 'Тайван сэтгэл нь зөв шийдвэр гаргах, өөрийгөө удирдах үндэс болдог.',
  },
  {
    title: 'Жижиг дадал том өөрчлөлт авчирна',
    desc: 'Өдөр бүр багахан хөдөлгөөн хийх нь урт хугацаанд эрүүл амьдралын хэв маяг болдог.',
  },
];

const Conclusion = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-emerald-950 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
            Дүгнэлт
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Эрүүл бие, тайван сэтгэл,
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              эрч хүчтэй амьдрал
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Дасгал хөдөлгөөн бол зөвхөн биеийн хүчний асуудал биш. Энэ нь
            хүний сэтгэл санаа, бодол, бүтээмж, амьдралын хэмнэлд шууд
            нөлөөлдөг өдөр тутмын хамгийн энгийн боловч үнэ цэнтэй дадал юм.
          </p>
        </motion.div>

        {/* Main conclusion card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"
        >
          <div className="rounded-[2rem] bg-white p-6 text-center sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-4xl shadow-xl shadow-emerald-900/20">
              ⚡
            </div>

            <h3 className="mx-auto mt-6 max-w-3xl text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
              Өдөр бүр багахан хөдөлгөөн хийж хэвших нь өөрийгөө хайрлаж
              буйн хамгийн бодит илэрхийлэл юм.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Идэвхтэй хүн илүү сэргэлэн, илүү төвлөрсөн, илүү тогтвортой
              байдаг. Харин хөдөлгөөн багатай амьдралын хэв маяг нь ядралт,
              стресс, төвлөрөл сулрах шалтгаан болж болно. Тиймээс эрүүл,
              эрч хүчтэй амьдрахын эхлэл нь өдөр тутмын энгийн хөдөлгөөнөөс
              эхэлнэ.
            </p>
          </div>
        </motion.div>

        {/* Points */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {conclusionPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-cyan-950/20 backdrop-blur-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-lg font-black text-emerald-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h4 className="text-xl font-black text-white">{item.title}</h4>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 px-6 py-7 text-center backdrop-blur"
        >
          <p className="text-lg font-black leading-8 text-white sm:text-2xl">
            “Эрүүл бие бол эрч хүчний эхлэл, тайван сэтгэл бол амжилтын
            суурь юм.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;