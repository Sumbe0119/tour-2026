'use client';
import { motion, useReducedMotion, type TargetAndTransition } from 'framer-motion';

type StretchVariant =
  | 'overhead'
  | 'backLean'
  | 'forwardFold'
  | 'legRaise'
  | 'kneeHug'
  | 'seatedHug'
  | 'chairBack'
  | 'calfRaise'
  | 'legSwing';

type StretchItem = {
  title: string;
  subtitle: string;
  desc: string;
  duration: string;
  variant: StretchVariant;
};

const stretches: StretchItem[] = [
  {
    title: 'Дээш суниах',
    subtitle: 'Мөр, гар, цээж',
    desc: 'Нуруугаа цэх байлгаж, хоёр гараа дээш сунгана.',
    duration: '30 сек',
    variant: 'overhead',
  },
  {
    title: 'Арагш гэдийх',
    subtitle: 'Нуруу, цээж',
    desc: 'Сандлын түшлэгийг ашиглан цээжээ зөөлөн нээнэ.',
    duration: '30 сек',
    variant: 'backLean',
  },
  {
    title: 'Урагш бөхийх',
    subtitle: 'Нуруу, хүзүү',
    desc: 'Биеэ аажмаар урагш суллаж, мөрөө амраана.',
    duration: '30 сек',
    variant: 'forwardFold',
  },
  {
    title: 'Хөл өргөх',
    subtitle: 'Гуя, өвдөг',
    desc: 'Нэг хөлөө шулуун өргөж, байрлалаа тогтвортой барина.',
    duration: '30 сек',
    variant: 'legRaise',
  },
  {
    title: 'Өвдөг тэврэх',
    subtitle: 'Нуруу, өгзөг',
    desc: 'Нэг өвдгөө цээж рүүгээ ойртуулж зөөлөн татна.',
    duration: '30 сек',
    variant: 'kneeHug',
  },
  {
    title: 'Сууж тэврэх',
    subtitle: 'Бие суллах',
    desc: 'Биеэ эвтэйхэн эвхэж, амьсгалаа тайван болгоно.',
    duration: '30 сек',
    variant: 'seatedHug',
  },
  {
    title: 'Сандлын түшлэг сунгалт',
    subtitle: 'Мөр, цээж',
    desc: 'Гараа түшлэг дээр тавьж, мөрөө зөөлөн сунгана.',
    duration: '30 сек',
    variant: 'chairBack',
  },
  {
    title: 'Өсгий өргөх',
    subtitle: 'Шилбэ, шагай',
    desc: 'Сандлаас барьж, өсгийгөө аажмаар өргөнө.',
    duration: '30 сек',
    variant: 'calfRaise',
  },
  {
    title: 'Хөл савлах',
    subtitle: 'Ташаа, гуя',
    desc: 'Сандлаас барьж, хөлөө бага далайцтай хөдөлгөнө.',
    duration: '30 сек',
    variant: 'legSwing',
  },
];

const getFigureMotion = (
  variant: StretchVariant,
  reduced: boolean,
): TargetAndTransition | undefined => {
  if (reduced) return undefined;

  const motions: Record<StretchVariant, TargetAndTransition> = {
    overhead: { y: [0, -8, 0], rotate: [0, -1, 0] },
    backLean: { rotate: [0, -4, 0], y: [0, -3, 0] },
    forwardFold: { rotate: [0, 3, 0], y: [0, 5, 0] },
    legRaise: { x: [0, 5, 0], y: [0, -2, 0] },
    kneeHug: { scale: [1, 1.035, 1] },
    seatedHug: { scale: [1, 1.04, 1], rotate: [0, -1, 0] },
    chairBack: { x: [0, -5, 0], y: [0, 3, 0] },
    calfRaise: { y: [0, -10, 0] },
    legSwing: { rotate: [0, -2.5, 0], x: [0, 5, 0] },
  };

  return motions[variant];
};

function Chair() {
  return (
    <g>
      <path
        d="M158 96 H210 Q220 96 220 106 V138 H158 Z"
        className="fill-cyan-100 stroke-cyan-700/60"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M212 92 V52 Q212 42 202 42 H182 Q172 42 172 52 V92"
        className="fill-cyan-50 stroke-cyan-700/60"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M188 138 V174"
        className="stroke-cyan-800/70"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M162 178 H214"
        className="stroke-cyan-800/70"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M170 178 L156 190 M206 178 L220 190"
        className="stroke-cyan-800/60"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

function StandingChair() {
  return (
    <g>
      <path
        d="M150 104 H214 Q224 104 224 114 V140 H150 Z"
        className="fill-cyan-100 stroke-cyan-700/60"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M214 100 V58 Q214 48 204 48 H184 Q174 48 174 58 V100"
        className="fill-cyan-50 stroke-cyan-700/60"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M188 140 V178 M164 182 H214"
        className="stroke-cyan-800/70"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  );
}

function Body({ variant }: { variant: StretchVariant }) {
  const common = 'stroke-slate-900';
  const skin = 'fill-amber-100 stroke-slate-900';
  const shirt = 'stroke-teal-600';
  const pants = 'stroke-slate-700';

  switch (variant) {
    case 'overhead':
      return (
        <g>
          <circle cx="116" cy="58" r="14" className={skin} strokeWidth="5" />
          <path d="M116 74 L128 108" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M120 78 L96 38 M126 78 L150 38" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M130 112 L108 150 L82 150" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M134 112 L164 148 L196 148" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'backLean':
      return (
        <g>
          <circle cx="120" cy="62" r="14" className={skin} strokeWidth="5" />
          <path d="M126 76 L152 110" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M145 108 L120 130 M151 110 L176 130" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M156 118 L130 152 L92 152" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 118 L188 150 L216 150" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'forwardFold':
      return (
        <g>
          <circle cx="102" cy="110" r="14" className={skin} strokeWidth="5" />
          <path d="M118 104 L150 124" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M116 118 L92 154 M126 122 L114 164" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M152 130 L126 156 L94 156" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M158 130 L188 156 L214 156" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'legRaise':
      return (
        <g>
          <circle cx="122" cy="64" r="14" className={skin} strokeWidth="5" />
          <path d="M126 80 L148 114" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M142 104 L122 130 M150 108 L174 126" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M152 124 L92 124 L62 124" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M156 126 L188 154 L214 154" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'kneeHug':
      return (
        <g>
          <circle cx="124" cy="62" r="14" className={skin} strokeWidth="5" />
          <path d="M128 78 L150 112" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M142 102 L122 122 M150 104 L134 132" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M152 118 L132 140 L122 112" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M158 122 L190 154 L214 154" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'seatedHug':
      return (
        <g>
          <circle cx="124" cy="68" r="14" className={skin} strokeWidth="5" />
          <path d="M128 84 L146 116" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M138 106 L116 130 M148 108 L128 136" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M150 120 L122 144 L110 116" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M154 122 L176 150 L198 148" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'chairBack':
      return (
        <g>
          <circle cx="118" cy="58" r="14" className={skin} strokeWidth="5" />
          <path d="M126 74 L154 110" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M148 100 L126 126 M154 104 L184 126" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M156 120 L126 154 L86 154" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 122 L192 154 L220 154" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'calfRaise':
      return (
        <g>
          <circle cx="104" cy="54" r="14" className={skin} strokeWidth="5" />
          <path d="M106 70 L112 116" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M112 82 L152 86 M108 84 L88 110" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M112 118 L100 176 L82 186" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M116 118 L132 176 L152 186" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    case 'legSwing':
      return (
        <g>
          <circle cx="104" cy="54" r="14" className={skin} strokeWidth="5" />
          <path d="M106 70 L112 116" className={shirt} strokeWidth="12" strokeLinecap="round" />
          <path d="M112 84 L154 88 M106 86 L90 112" className={common} strokeWidth="7" strokeLinecap="round" />
          <path d="M112 118 L102 176 L84 186" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M116 118 L154 152 L184 150" className={pants} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    default:
      return null;
  }
}

function StretchFigure({
  variant,
  index,
}: {
  variant: StretchVariant;
  index: number;
}) {
  const reducedMotion = useReducedMotion();
  const isStanding = variant === 'calfRaise' || variant === 'legSwing';

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-50 via-white to-teal-50 md:h-64">
      <div className="absolute left-5 top-5 h-20 w-20 rounded-full bg-cyan-200/40 blur-2xl" />
      <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full bg-teal-200/40 blur-2xl" />

      <svg
        viewBox="0 0 280 220"
        className="relative z-10 h-full w-full"
        role="img"
        aria-label="Сандалтай сунгалтын vector хөдөлгөөн"
      >
        <path
          d="M42 190 C88 170 132 178 178 188 C214 196 238 194 258 184"
          className="fill-none stroke-cyan-200"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {isStanding ? <StandingChair /> : <Chair />}

        <motion.g
          animate={getFigureMotion(variant, !!reducedMotion)}
          transition={{
            duration: 2.8,
            repeat: reducedMotion ? 0 : Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: index * 0.08,
          }}
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        >
          <Body variant={variant} />
        </motion.g>
      </svg>
    </div>
  );
}

export default function ChairStretchGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-sm font-bold uppercase tracking-[0.32em] text-cyan-300"
          >
            Office stretch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            Сандалтай дасгалууд
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base"
          >
            Ажил дундуур 30 секундэд хийж болох энгийн сунгалтын
            хөдөлгөөнүүд. Өвдөлт мэдрэгдвэл хөдөлгөөнөө зогсооно.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stretches.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -7, scale: 1.015 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-cyan-400/10 opacity-70" />

              <div className="relative rounded-[1.7rem] bg-white p-3">
                <div className="mb-3 flex items-start justify-between gap-3 px-1">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-bold text-white">
                    {item.duration}
                  </span>
                </div>

                <StretchFigure variant={item.variant} index={index} />

                <p className="px-1 pt-4 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}