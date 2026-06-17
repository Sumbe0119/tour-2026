'use client';

import Image from 'next/image';
import { Suspense, useMemo, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';

type CompanyLogo = {
  src: string;
  alt: string;
  zoom?: number;
};

const companyLogos: CompanyLogo[] = [
  { src: '/1.png', alt: 'Turel', zoom: 1.05 },
  { src: '/2.png', alt: 'Vans', zoom: 1.08 },
  { src: '/3.png', alt: 'Tse', zoom: 1.05 },
  { src: '/4.png', alt: 'Sholonde', zoom: 1.08 },
  { src: '/5.png', alt: 'Sura Korean Restaurant', zoom: 1.02 },
  { src: '/6.png', alt: 'The Bull', zoom: 1.02 },
  { src: '/7.png', alt: 'Company logo', zoom: 1.05 },
  { src: '/8.png', alt: 'Company logo', zoom: 1.05 },
  { src: '/9.png', alt: 'Экоминерал Трейд', zoom: 1 },
  { src: '/10.png', alt: 'Company logo', zoom: 1.05 },
  { src: '/11.png', alt: 'Converse', zoom: 1.02 },
  { src: '/12.png', alt: 'Bluemon', zoom: 1 },
  { src: '/13.png', alt: 'Restaurant brand', zoom: 1.02 },
];

const outerLogos = companyLogos.filter((_, index) => index % 2 === 0);
const innerLogos = companyLogos.filter((_, index) => index % 2 !== 0);

interface LogoOrbitSceneProps {
  reducedMotion: boolean;
}

interface OrbitLogoProps {
  logo: CompanyLogo;
  index: number;
  isMobile: boolean;
  isTablet: boolean;
}

function OrbitLogo({
  logo,
  index,
  isMobile,
  isTablet,
}: OrbitLogoProps) {
  const size = isMobile ? 60 : isTablet ? 66 : 82;

  return (
    <Html
      center
      zIndexRange={[120, 10]}
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.65, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.045,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative flex items-center justify-center
          rounded-full
          border border-white/85
          bg-white/95
          shadow-[0_10px_25px_rgba(255,255,255,0.18),0_12px_32px_rgba(54,23,13,0.18)]
          backdrop-blur-md
        "
        style={{
          width: size,
          height: size,
          maxWidth: 100,
          maxHeight: 100,
          padding: isMobile ? 8 : 10,
        }}
      >
        <div
          className="
            absolute inset-0 rounded-full
            bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.72)_55%,rgba(255,244,237,0.82)_100%)]
          "
        />

        <div
          className="
            absolute inset-[2px] rounded-full
            border border-white/60
          "
        />

        <img
          src={logo.src}
          alt={logo.alt}
          draggable={false}
          className="relative z-10 h-full w-full select-none object-contain"
          style={{
            transform: `scale(${logo.zoom ?? 1})`,
          }}
        />
      </motion.div>
    </Html>
  );
}

interface OrbitRingProps {
  logos: CompanyLogo[];
  radiusX: number;
  radiusY: number;
  depth: number;
  phase?: number;
  isMobile: boolean;
  isTablet: boolean;
  startIndex?: number;
  mainOpacity?: number;
}

function OrbitRing({
  logos,
  radiusX,
  radiusY,
  depth,
  phase = 0,
  isMobile,
  isTablet,
  startIndex = 0,
  mainOpacity = 0.3,
}: OrbitRingProps) {
  const points = useMemo(() => {
    return Array.from({ length: 161 }, (_, index) => {
      const angle = (index / 160) * Math.PI * 2;

      return new THREE.Vector3(
        Math.cos(angle) * radiusX,
        Math.sin(angle) * radiusY,
        Math.sin(angle * 2) * depth,
      );
    });
  }, [depth, radiusX, radiusY]);

  return (
    <>
      {/* glow */}
      <Line
        points={points}
        color="#ffffff"
        transparent
        opacity={mainOpacity * 0.14}
        lineWidth={6}
      />

      {/* main white line */}
      <Line
        points={points}
        color="#fffaf5"
        transparent
        opacity={mainOpacity}
        lineWidth={1.6}
      />

      {/* warm accent */}
      <Line
        points={points}
        color="#ffe7d2"
        transparent
        opacity={mainOpacity * 0.55}
        lineWidth={0.9}
      />

      {logos.map((logo, index) => {
        const angle = (index / logos.length) * Math.PI * 2 + phase;

        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;
        const z = Math.sin(angle * 2) * depth;

        return (
          <group key={`${logo.src}-${index}`} position={[x, y, z]}>
            <OrbitLogo
              logo={logo}
              index={startIndex + index}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </group>
        );
      })}
    </>
  );
}

function LogoOrbitScene({ reducedMotion }: LogoOrbitSceneProps) {
  const sceneRef = useRef<THREE.Group>(null);
  const outerOrbitRef = useRef<THREE.Group>(null);
  const innerOrbitRef = useRef<THREE.Group>(null);

  const { viewport, size, pointer } = useThree();

  const isMobile = size.width < 640;
  const isTablet = size.width >= 640 && size.width < 1024;

  // Толгойн дээгүүр байрлал
  const orbitCenterY = viewport.height * (isMobile ? 0.23 : 0.26);

  // Зайг ихэсгэсэн
  const outerRadiusX = viewport.width * (isMobile ? 0.36 : 0.34);
  const outerRadiusY = viewport.height * (isMobile ? 0.16 : 0.17);

  const innerRadiusX = viewport.width * (isMobile ? 0.25 : 0.24);
  const innerRadiusY = viewport.height * (isMobile ? 0.11 : 0.12);

  const outerDepth = isMobile ? 0.1 : 0.18;
  const innerDepth = isMobile ? 0.08 : 0.14;

  useFrame((state, delta) => {
    if (!reducedMotion) {
      if (outerOrbitRef.current) {
        outerOrbitRef.current.rotation.z += delta * 0.05;
      }

      if (innerOrbitRef.current) {
        innerOrbitRef.current.rotation.z -= delta * 0.07;
      }
    }

    if (!sceneRef.current) return;

    const targetRotationX = reducedMotion ? -0.03 : -0.03 + pointer.y * 0.025;
    const targetRotationY = reducedMotion ? 0 : pointer.x * 0.035;
    const targetRotationZ = reducedMotion ? 0 : pointer.x * 0.015;

    sceneRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneRef.current.rotation.x,
      targetRotationX,
      0.04,
    );

    sceneRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneRef.current.rotation.y,
      targetRotationY,
      0.04,
    );

    sceneRef.current.rotation.z = THREE.MathUtils.lerp(
      sceneRef.current.rotation.z,
      targetRotationZ,
      0.04,
    );

    if (!reducedMotion) {
      sceneRef.current.position.y =
        orbitCenterY + Math.sin(state.clock.elapsedTime * 0.65) * 0.02;
    }
  });

  return (
    <group
      ref={sceneRef}
      position={[0, orbitCenterY, 0]}
      rotation={[-0.03, 0, 0]}
    >
      <group ref={outerOrbitRef}>
        <OrbitRing
          logos={outerLogos}
          radiusX={outerRadiusX}
          radiusY={outerRadiusY}
          depth={outerDepth}
          phase={Math.PI / 10}
          isMobile={isMobile}
          isTablet={isTablet}
          mainOpacity={0.34}
        />
      </group>

      <group ref={innerOrbitRef} position={[0, 0.03, 0.04]}>
        <OrbitRing
          logos={innerLogos}
          radiusX={innerRadiusX}
          radiusY={innerRadiusY}
          depth={innerDepth}
          phase={Math.PI / 5}
          isMobile={isMobile}
          isTablet={isTablet}
          startIndex={outerLogos.length}
          mainOpacity={0.26}
        />
      </group>
    </group>
  );
}

function CompanyLogoOrbit({ reducedMotion }: LogoOrbitSceneProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 8],
          fov: 32,
          near: 0.1,
          far: 100,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <LogoOrbitScene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function MeditationHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative isolate overflow-hidden
        h-[100svh] min-h-[100svh] w-full
        bg-[#b96e48]
      "
    >
      {/* background */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_38%,rgba(255,232,205,0.28),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_25%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-[34%]
          h-[70vw] w-[70vw]
          max-h-[760px] max-w-[760px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#f3c089]/12 blur-[90px]
        "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto h-full w-full max-w-[520px] sm:max-w-[680px] lg:max-w-[920px]"
      >
        {/* image background holder */}
        <div
          className="
      absolute inset-x-0 top-0 bottom-0
      flex items-center justify-center
      px-3 py-4 
      sm:px-5 sm:py-5
    "
        >
          <div
            className="
        relative h-full w-full
        rounded-[28px] bg-transparent
      "
          >
            <Image
              src="/meditation.png"
              alt="Бясалгал хийж буй хүн"
              fill
              priority
              sizes="100vw"
              className="select-none object-contain object-center"
            />
          </div>
        </div>

        <div className='mt-10'>
          <CompanyLogoOrbit reducedMotion={Boolean(shouldReduceMotion)} />
        </div>

        <div
          aria-hidden="true"
          className="
      pointer-events-none absolute inset-x-0 bottom-0 z-30
      h-[14svh]
      bg-gradient-to-t from-[#b96e48] via-[#b96e48]/55 to-transparent
    "
        />
      </motion.div>
    </section>
  );
}