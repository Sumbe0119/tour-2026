"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Cloud, Clouds, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useScrollContext } from "@/context/ScrollContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type MountainLandscapeProps = {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  summitMode?: boolean;
};

function Mountain({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <coneGeometry args={[1, 1.8, 6]} />
      <meshStandardMaterial color={color} flatShading roughness={0.9} />
    </mesh>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.08, 0.5, 5]} />
        <meshStandardMaterial color="#3d2b1f" roughness={1} />
      </mesh>
      <mesh position={[0, 0.7, 0]} castShadow>
        <coneGeometry args={[0.25, 0.6, 5]} />
        <meshStandardMaterial color="#2d4a35" flatShading roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.05, 0]} castShadow>
        <coneGeometry args={[0.18, 0.45, 5]} />
        <meshStandardMaterial color="#3a5c42" flatShading roughness={0.9} />
      </mesh>
    </group>
  );
}

function Stone({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="#6b6b5e" flatShading roughness={1} />
    </mesh>
  );
}

function EnergyParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const reducedMotion = useReducedMotion();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 8 + 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    const posAttr = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = positions[i * 3 + 1] + Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.15;
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#e8d5a3"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function GlowingPeak() {
  const ref = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!ref.current || reducedMotion) return;
    const pulse = 0.6 + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    (ref.current.material as THREE.MeshBasicMaterial).opacity = pulse;
  });

  return (
    <mesh ref={ref} position={[0, 4.2, -8]}>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshBasicMaterial color="#f5e6c8" transparent opacity={0.6} />
    </mesh>
  );
}

function Terrain() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[40, 40, 32, 32]} />
      <meshStandardMaterial color="#2a3d2e" roughness={1} flatShading />
    </mesh>
  );
}

function SunriseSky({ progress }: { progress: number }) {
  const { scene } = useThree();

  useEffect(() => {
    const t = progress;
    const r = THREE.MathUtils.lerp(0.05, 0.15, t);
    const g = THREE.MathUtils.lerp(0.08, 0.2, t);
    const b = THREE.MathUtils.lerp(0.12, 0.28, t);
    scene.background = new THREE.Color(r, g, b);
    scene.fog = new THREE.FogExp2(
      new THREE.Color(
        THREE.MathUtils.lerp(0.12, 0.25, t),
        THREE.MathUtils.lerp(0.18, 0.32, t),
        THREE.MathUtils.lerp(0.22, 0.38, t)
      ),
      THREE.MathUtils.lerp(0.08, 0.04, t)
    );
  }, [progress, scene]);

  return null;
}

function CameraController({
  mouse,
  summitMode,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  summitMode?: boolean;
}) {
  const { camera } = useThree();
  const { scrollProgress } = useScrollContext();
  const reducedMotion = useReducedMotion();
  const progress = summitMode ? Math.min(1, scrollProgress * 1.2 + 0.7) : scrollProgress;

  useFrame(() => {
    const baseX = THREE.MathUtils.lerp(0, 0, progress);
    const baseY = THREE.MathUtils.lerp(2.5, 5.5, progress);
    const baseZ = THREE.MathUtils.lerp(12, 4, progress);
    const lookY = THREE.MathUtils.lerp(1.5, 4, progress);
    const lookZ = THREE.MathUtils.lerp(-2, -8, progress);

    const mouseInfluence = reducedMotion ? 0 : 0.4;
    const targetX = baseX + mouse.current.x * mouseInfluence;
    const targetY = baseY + mouse.current.y * mouseInfluence * 0.3;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, baseZ, 0.05);
    camera.lookAt(0, lookY, lookZ);
  });

  return null;
}

export function MountainLandscape({ mouse, summitMode }: MountainLandscapeProps) {
  const { scrollProgress } = useScrollContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const particleCount = isMobile ? 40 : 120;

  const treePositions = useMemo(
    () =>
      Array.from({ length: isMobile ? 8 : 18 }, (_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const radius = 3 + (i % 5) * 1.2;
        return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 2] as [
          number,
          number,
          number,
        ];
      }),
    [isMobile]
  );

  const stonePositions = useMemo(
    () =>
      Array.from({ length: isMobile ? 4 : 10 }, () => [
        (Math.random() - 0.5) * 14,
        0,
        (Math.random() - 0.5) * 10 - 1,
      ] as [number, number, number]),
    [isMobile]
  );

  return (
    <>
      <SunriseSky progress={scrollProgress} />
      <CameraController mouse={mouse} summitMode={summitMode} />

      <ambientLight intensity={0.35} color="#a8c4d4" />
      <directionalLight
        position={[8, 12, -6]}
        intensity={1.2}
        color="#f5e6c8"
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}
      />
      <pointLight position={[0, 5, -8]} intensity={0.8} color="#ffe4b5" distance={20} />

      <Terrain />

      <Mountain position={[0, 1.4, -6]} scale={3.5} color="#3a4f3c" />
      <Mountain position={[-3, 0.8, -5]} scale={2} color="#2f4032" />
      <Mountain position={[3.5, 0.6, -4.5]} scale={1.8} color="#354838" />
      <Mountain position={[-5, 0.4, -3]} scale={1.4} color="#2a382c" />

      <GlowingPeak />

      {treePositions.map((pos, i) => (
        <Tree key={`tree-${i}`} position={pos} />
      ))}

      {stonePositions.map((pos, i) => (
        <Stone key={`stone-${i}`} position={pos} scale={0.5 + Math.random() * 0.5} />
      ))}

      <EnergyParticles count={particleCount} />

      {!isMobile && (
        <Clouds limit={200}>
          <Cloud position={[-4, 4, -10]} opacity={0.3} speed={0.1} bounds={[6, 2, 2]} segments={12} />
          <Cloud position={[5, 3.5, -9]} opacity={0.25} speed={0.08} bounds={[5, 1.5, 1.5]} segments={10} />
          <Cloud position={[0, 5, -12]} opacity={0.2} speed={0.06} bounds={[8, 2, 2]} segments={14} />
        </Clouds>
      )}

      {scrollProgress > 0.6 && !isMobile && (
        <Stars radius={30} depth={20} count={200} factor={2} saturation={0.2} fade speed={0.3} />
      )}
    </>
  );
}
