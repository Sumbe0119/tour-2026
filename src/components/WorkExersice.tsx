"use client";

import React from "react";
import { motion } from "framer-motion";

const practices = [
  {
    title: "Дасгал хөдөлгөөн",
    desc: "Өдөр бүр богино хугацаанд биеэ хөдөлгөж, эрч хүчээ нэмэгдүүлэх.",
  },
  {
    title: "Сунгалт",
    desc: "Булчин чангарахаас сэргийлж, ажлын дунд биеэ сэргээх.",
  },
  {
    title: "Амьсгалын дасгал",
    desc: "Тайвширч, төвлөрөл нэмэгдүүлэх энгийн дадал.",
  },
  {
    title: "Иогийн энгийн хөдөлгөөн",
    desc: "Бие, сэтгэлийн тэнцвэрийг дэмжих хөнгөн хөдөлгөөн.",
  },
] as const;

const videos = [
  {
    title: "Дасгалын бичлэг 01",
    desc: "Өдөр тутмын богино хөдөлгөөнд ашиглах боломжтой.",
    url: "https://www.youtube.com/watch?v=u2AYiHZel_Y",
  },
  {
    title: "Дасгалын бичлэг 02",
    desc: "Багаар хамтдаа хийхэд тохиромжтой хөдөлгөөн.",
    url: "https://www.youtube.com/watch?v=MDz3OCDBvrU",
  },
  {
    title: "Дасгалын бичлэг 03",
    desc: "Сунгалт болон энгийн хөдөлгөөний санаа авах боломжтой.",
    url: "https://www.youtube.com/watch?v=M-8FvC3GD8c&t=32s",
  },
] as const;

function PracticeCard({
  item,
  index,
}: {
  item: (typeof practices)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/85 p-6 shadow-xl shadow-emerald-900/5 backdrop-blur"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-200/45 blur-2xl transition group-hover:bg-emerald-300/60" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-emerald-900/15">
          {index + 1}
        </div>

        <h3 className="text-xl font-black text-slate-950">{item.title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[number];
  index: number;
}) {
  return (
    <motion.a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(34,211,238,0.22),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-black text-slate-950 transition group-hover:scale-110">
            ▶
          </div>

          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70">
            YouTube
          </span>
        </div>

        <h3 className="text-xl font-black">{video.title}</h3>

        <p className="mt-3 text-sm leading-6 text-white/65">{video.desc}</p>

        <p className="mt-6 text-sm font-black text-emerald-300">
          Бичлэг үзэх →
        </p>
      </div>
    </motion.a>
  );
}

const Conclusion = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-700">
            Healthy lifestyle
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Бие эрүүл,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-lime-500 bg-clip-text text-transparent">
              эрч хүч болгоё
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-700">
            Эрүүл байгууллага эрүүл ажилтнаас эхэлдэг.
          </p>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white/85 shadow-2xl shadow-emerald-900/10 backdrop-blur"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-cyan-600 to-slate-950 p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-white/55">
                  Гол санаа
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Өдөр бүрийн зөв дадал эрүүл соёлыг бий болгоно
                </h3>

                <p className="mt-6 text-base font-medium leading-8 text-white/80">
                  Эрүүл мэнд бол нэг өдрийн сонголт биш, харин өдөр бүрийн зөв
                  дадал юм.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-base leading-8 text-slate-700">
                Тиймээс бид эрүүл, эрч хүчтэй хамт олны соёлыг төлөвшүүлэх
                зорилгоор салбар болгон өдөр бүр багийн ойлголцоон дээр{" "}
                <span className="font-black text-emerald-700">
                  5-10 минутыг
                </span>{" "}
                өөрсдөдөө зориулж хамтдаа дасгал хөдөлгөөн хийх, сунгалт хийх,
                амьсгалын дасгал болон иогийн энгийн хөдөлгөөнүүдийг хэвшүүлэх
                санал дэвшүүлж байна.
              </p>

              <div className="mt-6 rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <p className="text-lg font-black leading-8 text-slate-950">
                  Эрүүл биеэс эрч хүч төрж, эрч хүчээс амжилт бүтдэг.
                </p>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700">
                Бид өөрсдөөсөө эхэлж, хамтдаа хөдөлж, хамтдаа эрүүлжин, эрч
                хүчтэй байгууллагыг бүтээхийг уриалж байна.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Practice cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practices.map((item, index) => (
            <PracticeCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Video links */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan-700">
            Exercise videos
          </p>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Дасгалын санал болгох 3 бичлэг
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Эдгээр бичлэгээс санаа авч, салбар бүр өдөр тутмын 5-10 минутын
            хөдөлгөөнөө эхлүүлэх боломжтой.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={video.url} video={video} index={index} />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-cyan-200 bg-white/80 px-6 py-6 text-center shadow-xl shadow-cyan-900/5 backdrop-blur"
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