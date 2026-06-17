"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

type ScrollContextValue = {
  scrollProgress: number;
};

const ScrollContext = createContext<ScrollContextValue>({ scrollProgress: 0 });

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollProgress = useScrollProgress();

  return (
    <ScrollContext.Provider value={{ scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext(): ScrollContextValue {
  return useContext(ScrollContext);
}
