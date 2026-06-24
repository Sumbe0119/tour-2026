"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const books = [
  {
    title: "Хандлагын хүч",
    author: "Жон Максвэл",
    image: "/books/attitude_power.png",
    link: "https://book.mn/product/Handlagin-huch-31810",
    accent: "from-red-800 via-red-600 to-orange-300",
    spine: "bg-red-900",
    summary:
      "Хүний амжилт, харилцаа, манлайлалд мэдлэг чадвараас гадна хандлага маш хүчтэй нөлөөлдөг.",
    description:
      "Хүн нөхцөл байдлаа үргэлж удирдаж чадахгүй ч, түүнд хэрхэн хандахаа өөрөө сонгож чадна. Зөв хандлага нь асуудлыг боломж болгон харж, өөрийгөө болон бусдыг урагшлуулах хүч болдог.",
  },
  {
    title: "Саятны сэтгэлгээний нууц",
    author: "Харв Экер",
    image: "/books/secret.png",
    link: "https://www.m-book.mn/summary/tovch-nom-saytnii-setgelgeenii-nuuts",
    accent: "from-red-800 via-rose-600 to-yellow-300",
    spine: "bg-red-950",
    summary:
      "Хүний мөнгөтэй харьцах байдал нь зөвхөн орлогоос биш, дотоод итгэл үнэмшил, сэтгэлгээний загвараас хамаардаг.",
    description:
      "Мөнгөний талаарх багаасаа авсан ойлголт, айдас, дадал нь санхүүгийн амьдралд хүчтэй нөлөөлдөг. Орлого өсөхөөс өмнө мөнгө удирдах сэтгэлгээ, хариуцлага, боломж харах өнцөг өсөх хэрэгтэй.",
  },
  {
    title: "Маркетингийн хөдөлшгүй 22 хууль",
    author: "Эл Райс, Жек Траут",
    image: "/books/marketing.png",
    link: "https://internom.mn/%D0%B1%D0%B0%D1%80%D0%B0%D0%B0/9789997830517-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D1%85%D3%A9%D0%B4%D0%BB%D3%A9%D1%88%D0%B3%D2%AF%D0%B9-22-%D1%85%D1%83%D1%83%D0%BB%D1%8C?srsltid=AfmBOoqEXR-wm98-kELlueus-VV1OLyWPbUMKUHt7Gan-LQCRsC0qcSU",
    accent: "from-indigo-900 via-violet-700 to-orange-500",
    spine: "bg-indigo-950",
    summary:
      "Маркетинг бол хамгийн сайн бүтээгдэхүүнтэй байх тухай биш, хэрэглэгчийн оюун санаанд зөв байр суурь эзлэх тухай.",
    description:
      "Брэнд амжилттай байхын тулд хэрэглэгчийн тархинд тодорхой нэг ойлголтоор байрших ёстой. Бүх хүнд таалагдах гэж оролдохоос илүү, нэг хүчтэй байр суурь эзлэх нь илүү үр дүнтэй.",
  },
];

type Book = (typeof books)[number];

function BookReader({
  book,
  onClose,
}: {
  book: Book;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-12 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        aria-label="Close book"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-11 right-0 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Хаах
        </button>

        <div className="relative mx-auto flex min-h-[560px] w-full items-center justify-center [perspective:2400px]">
          <div className="absolute bottom-5 h-12 w-[70%] rounded-full bg-black/75 blur-3xl" />

          <motion.div
            initial={{ rotateX: 8, rotateY: -8 }}
            animate={{ rotateX: 0, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative grid w-full max-w-4xl grid-cols-1 overflow-visible rounded-[28px] shadow-[0_50px_120px_rgba(0,0,0,0.72)] [transform-style:preserve-3d] md:grid-cols-2"
          >
            {/* Left inside cover / left page */}
            <div className="relative min-h-[520px] overflow-hidden rounded-t-[28px] border-b border-black/10 bg-[#f7ecd8] p-8 md:rounded-l-[28px] md:rounded-tr-none md:border-b-0 md:border-r">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_31px,rgba(120,80,40,0.08)_32px)]" />
              <div className="absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-black/12 to-transparent md:block" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/70" />

              <motion.div
                initial={{ opacity: 0, x: -22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.62, duration: 0.45 }}
                className="relative z-10"
              >
                <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-black/35">
                  Номын гол санаа
                </p>

                <h3 className="text-3xl font-black leading-tight text-[#2b1d13] sm:text-4xl">
                  {book.title}
                </h3>

                <p className="mt-3 text-base font-semibold text-[#7b4d2b]">
                  {book.author}
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-black/20 via-black/10 to-transparent" />

                <p className="text-xl font-black leading-relaxed text-[#2b1d13]">
                  “{book.summary}”
                </p>
              </motion.div>
            </div>

            {/* Right page */}
            <div className="relative min-h-[520px] overflow-hidden rounded-b-[28px] bg-[#fff6e8] p-8 md:rounded-r-[28px] md:rounded-bl-none">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_31px,rgba(120,80,40,0.08)_32px)]" />
              <div className="absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-black/12 to-transparent md:block" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/70" />

              <motion.div
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.72, duration: 0.45 }}
                className="relative z-10 flex h-full flex-col justify-between"
              >
                <div>
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-black/35">
                    Тайлбар
                  </p>

                  <p className="text-lg font-medium leading-9 text-[#3b2a1c]">
                    {book.description}
                  </p>
                </div>

                <div className="mt-10">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-[#2b1d13] px-6 py-3 text-sm font-black text-white transition hover:bg-black"
                  >
                    Дэлгэрэнгүй унших
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Center fold */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-14 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/4 to-black/10 md:block" />

            {/* Front cover: starts on right page, opens to left from the center fold */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -168 }}
              transition={{
                duration: 1.08,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16,
              }}
              className="pointer-events-none absolute right-0 top-0 z-40 hidden h-full w-1/2 origin-left [transform-style:preserve-3d] md:block"
              style={{
                transformOrigin: "left center",
              }}
            >
              {/* Outside cover */}
              <div className="absolute inset-0 overflow-hidden rounded-r-[28px] bg-white shadow-[-28px_20px_70px_rgba(0,0,0,0.48)] [backface-visibility:hidden]">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="420px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.08)_30%,transparent_48%,rgba(0,0,0,0.22)_100%)]" />
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/28 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/12 to-transparent" />
              </div>

              {/* Inside cover visible after opening */}
              <div className="absolute inset-0 overflow-hidden rounded-l-[28px] bg-[#f3e4cc] shadow-[inset_18px_0_34px_rgba(0,0,0,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_31px,rgba(120,80,40,0.08)_32px)]" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/18 to-transparent" />
                <div className="absolute left-6 top-6 bottom-6 w-px bg-black/10" />

                <div className="relative z-10 flex h-full items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-black/30">
                      Open Book
                    </p>
                    <p className="mt-4 text-2xl font-black text-[#2b1d13]">
                      {book.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Book3D({
  book,
  index,
  onOpen,
}: {
  book: Book;
  index: number;
  onOpen: (book: Book) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group flex flex-col items-center"
    >
      <div className="relative flex h-[455px] w-full items-center justify-center [perspective:1800px]">
        <motion.button
          type="button"
          onClick={() => onOpen(book)}
          initial={{
            rotateY: -18,
            rotateX: 4,
          }}
          whileHover={{
            rotateY: -32,
            rotateX: 5,
            y: -20,
            scale: 1.055,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 17,
          }}
          className="relative block aspect-[3/4] w-[250px] cursor-pointer text-left [transform-style:preserve-3d] sm:w-[285px]"
        >
          {/* Right page block */}
          <div
            className="absolute -right-[26px] top-[13px] z-0 h-[calc(100%-26px)] w-[34px] rounded-r-[14px] bg-[#f7efe1] shadow-[inset_10px_0_16px_rgba(0,0,0,0.20),inset_-3px_0_8px_rgba(255,255,255,0.75)]"
            style={{
              transform: "rotateY(82deg) translateZ(15px)",
              transformOrigin: "left center",
            }}
          >
            <div className="absolute inset-0 rounded-r-[14px] bg-[repeating-linear-gradient(to_bottom,#d9cdb9_0px,#d9cdb9_1px,#fbf5eb_2px,#fbf5eb_6px)] opacity-80" />
            <div className="absolute inset-y-0 left-0 w-1.5 bg-black/10" />
          </div>

          {/* Top page edge */}
          <div
            className="absolute left-[16px] top-[-12px] z-0 h-[24px] w-[calc(100%-22px)] rounded-t-xl bg-[#f8f1e6] shadow-[inset_0_-7px_10px_rgba(0,0,0,0.10)]"
            style={{
              transform: "rotateX(90deg) translateZ(12px)",
              transformOrigin: "bottom center",
            }}
          >
            <div className="h-full w-full rounded-t-xl bg-[repeating-linear-gradient(to_right,#e2d7c3_0px,#e2d7c3_1px,#fff8ee_2px,#fff8ee_7px)] opacity-70" />
          </div>

          {/* Bottom page edge */}
          <div
            className="absolute bottom-[-12px] left-[16px] z-0 h-[24px] w-[calc(100%-22px)] rounded-b-xl bg-[#eadfcd] shadow-[inset_0_7px_10px_rgba(0,0,0,0.14)]"
            style={{
              transform: "rotateX(-90deg) translateZ(12px)",
              transformOrigin: "top center",
            }}
          >
            <div className="h-full w-full rounded-b-xl bg-[repeating-linear-gradient(to_right,#d8cbb8_0px,#d8cbb8_1px,#f7efe4_2px,#f7efe4_7px)] opacity-75" />
          </div>

          {/* Spine */}
          <div
            className={`absolute left-0 top-[9px] z-10 h-[calc(100%-18px)] w-[38px] rounded-l-[18px] ${book.spine} shadow-[inset_-10px_0_18px_rgba(0,0,0,0.42),inset_4px_0_10px_rgba(255,255,255,0.16)]`}
            style={{
              transform: "rotateY(-82deg) translateZ(19px)",
              transformOrigin: "right center",
            }}
          >
            <div
              className={`absolute inset-0 rounded-l-[18px] bg-gradient-to-b ${book.accent} opacity-85`}
            />
            <div className="absolute inset-y-5 right-2 w-px bg-white/25" />
            <div className="absolute inset-y-5 left-2 w-px bg-black/25" />
          </div>

          {/* Front hard cover */}
          <div
            className="absolute inset-0 z-30 overflow-hidden rounded-[18px] bg-white shadow-[0_42px_90px_rgba(0,0,0,0.68),-10px_10px_24px_rgba(0,0,0,0.24)] ring-1 ring-white/25"
            style={{
              transform: "translateZ(4px)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={book.image}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 78vw, 285px"
              className="object-cover"
              priority={index === 0}
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.10)_24%,transparent_45%,rgba(0,0,0,0.14)_100%)] opacity-55" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[34px] bg-gradient-to-r from-black/22 via-black/8 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/55" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/35" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-black/15" />

            <div className="pointer-events-none absolute inset-y-0 -left-24 w-20 -skew-x-12 bg-white/28 opacity-0 blur-[2px] transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
          </div>
        </motion.button>

        <div className="absolute bottom-5 h-10 w-[250px] rounded-full bg-black/55 blur-2xl transition-all duration-500 group-hover:w-[310px] group-hover:bg-black/70" />
        <div className="absolute bottom-10 h-4 w-[170px] rounded-full bg-black/35 blur-md transition-all duration-500 group-hover:w-[220px]" />
      </div>

      <div className="mt-1 text-center">
        <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
          {book.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/45">{book.author}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
          Дараад нээх
        </p>
      </div>
    </motion.div>
  );
}

export default function BookShowcase() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#07070f] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,70,70,0.16),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(91,70,255,0.14),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-white/45">
              Recommended books
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Сэтгэлгээ өөрчилдөг{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                3 ном
              </span>
            </h2>
          </div>

          <div className="grid gap-14 md:grid-cols-3">
            {books.map((book, index) => (
              <Book3D
                key={book.title}
                book={book}
                index={index}
                onOpen={setSelectedBook}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedBook && (
          <BookReader
            key={selectedBook.title}
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}