"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function BalanceRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const reducedMotion = useReducedMotion();

  const rings = [
    { radius: 1.2, color: "#d4a88a", speed: 0.3, y: 0 },
    { radius: 0.85, color: "#c4846a", speed: -0.4, y: 0.05 },
    { radius: 0.5, color: "#fdba74", speed: 0.5, y: 0.1 },
  ];

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;

    rings.forEach((ring, i) => {
      const mesh = ringRefs.current[i];
      if (!mesh) return;
      mesh.rotation.z = state.clock.elapsedTime * ring.speed;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5 + i) * 0.03;
      mesh.scale.setScalar(scale);
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          ref={(node) => {
            ringRefs.current[i] = node;
          }}
          position={[0, ring.y, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[ring.radius, 0.02, 8, 64]} />
          <meshBasicMaterial color={ring.color} transparent opacity={0.7} />
        </mesh>
      ))}
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffedd5" />
      </mesh>
    </group>
  );
}

export function BalanceVisualization() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="flex h-64 w-64 items-center justify-center" aria-hidden="true">
        <div className="relative h-48 w-48">
          <div className="absolute inset-0 rounded-full border-2 border-warm-300/50" />
          <div className="absolute inset-4 rounded-full border-2 border-warm-400/50" />
          <div className="absolute inset-8 rounded-full border-2 border-cream-300/50" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream-200" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-64 w-64"
      role="img"
      aria-label="Сэтгэл, бодол, биеийн эргэдэх тэнцвэрийн дүрслэл"
    >
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <BalanceRings />
      </Canvas>
    </div>
  );
}
