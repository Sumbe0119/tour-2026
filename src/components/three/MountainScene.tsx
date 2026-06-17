"use client";

import { Suspense, useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const MountainLandscape = dynamic(
  () => import("./MountainLandscape").then((mod) => mod.MountainLandscape),
  { ssr: false }
);

type MountainSceneProps = {
  className?: string;
  summitMode?: boolean;
};

function SceneFallback() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-800 to-sage-700"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(245,230,200,0.15),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 animate-pulse rounded-full border-2 border-mist-50/30 border-t-mist-50/80" />
      </div>
    </div>
  );
}

function SceneContent({
  mouse,
  summitMode,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  summitMode?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 2.5, 12], fov: 50, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      shadows
    >
      <Suspense fallback={null}>
        <MountainLandscape mouse={mouse} summitMode={summitMode} />
      </Suspense>
    </Canvas>
  );
}

export function MountainScene({ className = "", summitMode }: MountainSceneProps) {
  const mouse = useRef({ x: 0, y: 0 });
  const [canRender3D, setCanRender3D] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLowEnd =
      navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2;

    if (!reducedMotion && !isLowEnd) {
      setCanRender3D(true);
    }

    const timer = setTimeout(() => setIsLoading(false), reducedMotion ? 0 : 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }, []);

  return (
    <div
      className={`relative h-full w-full ${className}`}
      onMouseMove={handleMouseMove}
      role="img"
      aria-label="Animated mountain landscape with forest, fog, and glowing summit"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-800 to-sage-700" />

      {isLoading && <SceneFallback />}

      {canRender3D && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <SceneContent mouse={mouse} summitMode={summitMode} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-forest-900/20" />
    </div>
  );
}
