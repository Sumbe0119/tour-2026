"use client";

import { useReducer, useEffect, useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { BREATHING_PHASES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Phase = (typeof BREATHING_PHASES)[number];

type BreathingState = {
  isActive: boolean;
  phaseIndex: number;
  countdown: number;
};

type BreathingAction = { type: "toggle" } | { type: "reset" } | { type: "tick" };

const BREATHING_MUSIC_SRC = "/music/short-music.mp3";

const initialState: BreathingState = {
  isActive: false,
  phaseIndex: 0,
  countdown: BREATHING_PHASES[0].duration,
};

function breathingReducer(state: BreathingState, action: BreathingAction): BreathingState {
  switch (action.type) {
    case "toggle":
      return { ...state, isActive: !state.isActive };
    case "reset":
      return { ...initialState };
    case "tick": {
      if (!state.isActive) return state;
      if (state.countdown > 1) {
        return { ...state, countdown: state.countdown - 1 };
      }
      const nextIndex = (state.phaseIndex + 1) % BREATHING_PHASES.length;
      return {
        ...state,
        phaseIndex: nextIndex,
        countdown: BREATHING_PHASES[nextIndex].duration,
      };
    }
    default:
      return state;
  }
}

export function BreathingExercise() {
  const reducedMotion = useReducedMotion();
  const [{ isActive, phaseIndex, countdown }, dispatch] = useReducer(
    breathingReducer,
    initialState,
  );
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentPhase: Phase = BREATHING_PHASES[phaseIndex];

  const toggleAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioEnabled) {
      audio.pause();
      audio.currentTime = 0;
      setAudioEnabled(false);
      return;
    }

    try {
      await audio.play();
      setAudioEnabled(true);
    } catch {
      setAudioEnabled(false);
    }
  }, [audioEnabled]);

  const getScale = useCallback(() => {
    if (!isActive) return 1;
    switch (currentPhase.name) {
      case "Амьсгалах":
        return 1.4;
      case "Барих":
        return 1.4;
      case "Гаргах":
        return 0.8;
      case "Зогсох":
        return 0.8;
      default:
        return 1;
    }
  }, [isActive, currentPhase.name]);

  useEffect(() => {
    if (!isActive) return;

    const id = window.setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => window.clearInterval(id);
  }, [isActive]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <section
      id="breathing"
      className="bg-gradient-to-b from-warm-100 to-warm-50 py-24 sm:py-32"
      aria-labelledby="breathing-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <audio
          ref={audioRef}
          src={BREATHING_MUSIC_SRC}
          loop
          preload="none"
          className="hidden"
          aria-hidden
        />
        <SectionHeading
          eyebrow="Ухаалаг мөч"
          title="Удирдлагат амьсгалын дасгал"
          description="Амьсгалын хэмнэлийг дагана уу. Сэтгэлийг төвлөрүүлж, биеийг тайвшруулах энгийн дасгал."
        />

        <div className="mt-12 flex flex-col items-center">
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
            <motion.div
              className="absolute inset-0 rounded-full border border-warm-300/50"
              animate={reducedMotion ? {} : { scale: isActive ? getScale() * 1.15 : 1.15, opacity: 0.3 }}
              transition={{ duration: currentPhase.duration, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-br from-cream-100/60 to-warm-200/40 backdrop-blur-sm"
              animate={reducedMotion ? {} : { scale: isActive ? getScale() : 1 }}
              transition={{ duration: currentPhase.duration, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white/85 shadow-lg backdrop-blur-md sm:h-36 sm:w-36"
              animate={reducedMotion ? {} : { scale: isActive ? getScale() * 0.85 : 0.85 }}
              transition={{ duration: currentPhase.duration, ease: "easeInOut" }}
            >
              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPhase.name}
                    className="font-serif text-xl text-warm-800 sm:text-2xl"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentPhase.name}
                  </motion.p>
                </AnimatePresence>
                {isActive && (
                  <p className="mt-1 text-3xl font-light text-warm-500" aria-live="polite">
                    {countdown}
                  </p>
                )}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => dispatch({ type: "toggle" })}
              className="flex items-center gap-2 rounded-full bg-warm-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-200"
              aria-label={isActive ? "Амьсгалын дасгалыг түр зогсоох" : "Амьсгалын дасгалыг эхлүүлэх"}
            >
              {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isActive ? "Зогсоох" : "Эхлэх"}
            </button>

            <button
              type="button"
              onClick={() => dispatch({ type: "reset" })}
              className="flex items-center gap-2 rounded-full border border-warm-300 px-5 py-3 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-200"
              aria-label="Амьсгалын дасгалыг дахин эхлүүлэх"
            >
              <RotateCcw className="h-4 w-4" />
              Дахин эхлэх
            </button>

            <button
              type="button"
              onClick={() => void toggleAudio()}
              className="rounded-full border border-warm-300 p-3 text-warm-600 transition-colors hover:bg-warm-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-200"
              aria-label={audioEnabled ? "Дууг хаах" : "Дуу асаах (анхдагчаар унтраалттай)"}
              aria-pressed={audioEnabled}
            >
              {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
          </div>

          <p className="mt-6 text-sm text-warm-600">
            Амьсгалах 4 сек · Барих 4 сек · Гаргах 6 сек · Зогсох 2 сек
          </p>
        </div>
      </div>
    </section>
  );
}
