"use client";

import React, { Component, ReactNode, useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Image from "next/image";

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("WebGL Canvas caught error, using 2D fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const STAR_WHITE = "#F4F3F7";
const STAR_WHITE_DIM = "#E0DFEC";
const EMBER = "#D4A94A";

interface PlanetMeshProps {
  onInteraction?: () => void;
}

function PlanetMesh({ onInteraction }: PlanetMeshProps) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isDragging = useRef(false);
  const angularVelocity = useRef(0.36);
  const lastPointerX = useRef(0);
  const dragMomentum = useRef(0);

  // Wobble physics tracking
  const totalDragAngle = useRef(0);
  const wobbleDuration = useRef(1.8);
  const wobbleElapsed = useRef(99); // start inactive
  const wobbleIntensity = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (isDragging.current) {
      group.current.rotation.y += dragMomentum.current;
      dragMomentum.current *= 0.92;
    } else {
      // Natural spin: faster on hover, confident default pace
      const targetSpeed = hovered ? 1.05 : 0.36;
      angularVelocity.current +=
        (targetSpeed - angularVelocity.current) * Math.min(1, delta * 2.5);

      if (Math.abs(dragMomentum.current) > 0.001) {
        group.current.rotation.y += dragMomentum.current;
        dragMomentum.current *= 0.95;
      } else {
        group.current.rotation.y += angularVelocity.current * delta;
      }
    }

    // Dizzy wobble physics after a full revolution or aggressive spin
    if (wobbleElapsed.current < wobbleDuration.current) {
      wobbleElapsed.current += delta;
      const progress = wobbleElapsed.current / wobbleDuration.current;
      const decay = Math.exp(-progress * 4.5); // rapid exponential decay
      const freq = 18;
      const wobbleAngleX =
        Math.sin(wobbleElapsed.current * freq) * 0.35 * decay * wobbleIntensity.current;
      const wobbleAngleZ =
        Math.cos(wobbleElapsed.current * (freq * 0.75)) * 0.28 * decay * wobbleIntensity.current;
      group.current.rotation.x = wobbleAngleX;
      group.current.rotation.z = wobbleAngleZ;
    } else {
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0, delta * 8);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, 0, delta * 8);
    }

    // Tilted ring dynamic reaction
    if (ring.current) {
      const targetTilt = hovered ? 0.72 : 0.54;
      ring.current.rotation.z = THREE.MathUtils.lerp(
        ring.current.rotation.z,
        targetTilt,
        delta * 3
      );
    }
  });

  const handlePointerDown = (e: { clientX: number }) => {
    isDragging.current = true;
    lastPointerX.current = e.clientX;
    dragMomentum.current = 0;
    totalDragAngle.current = 0;
    onInteraction?.();
  };

  const handlePointerMove = (e: { clientX: number }) => {
    if (!isDragging.current || !group.current) return;
    const deltaX = e.clientX - lastPointerX.current;
    const rotationDelta = deltaX * 0.012;
    group.current.rotation.y += rotationDelta;
    dragMomentum.current = rotationDelta;
    totalDragAngle.current += Math.abs(rotationDelta);
    lastPointerX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Trigger dizzy wobble flourish if dragged past a full rotation or flicked fast
    if (totalDragAngle.current >= Math.PI * 1.5 || Math.abs(dragMomentum.current) > 0.035) {
      wobbleElapsed.current = 0;
      wobbleIntensity.current = Math.min(
        1.25,
        Math.max(0.65, totalDragAngle.current / (Math.PI * 2))
      );
    }
    totalDragAngle.current = 0;
  };

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        if (isDragging.current) handlePointerUp();
      }}
      onPointerDown={(e) => handlePointerDown(e)}
      onPointerUp={handlePointerUp}
      onPointerMove={(e) => handlePointerMove(e)}
    >
      {/* Central sphere: Star-white matte porcelain finish */}
      <mesh>
        <sphereGeometry args={[1.28, 64, 64]} />
        <meshStandardMaterial
          color={STAR_WHITE}
          roughness={0.38}
          metalness={0.12}
          emissive={STAR_WHITE_DIM}
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Signature diagonal slash bar */}
      <mesh rotation={[0, 0, Math.PI / 5.4]}>
        <boxGeometry args={[3.45, 0.22, 0.22]} />
        <meshStandardMaterial
          color={STAR_WHITE_DIM}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>

      {/* Tilted orbital ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0.54]}>
        <torusGeometry args={[2.02, 0.095, 24, 120]} />
        <meshStandardMaterial
          color={STAR_WHITE}
          roughness={0.32}
          metalness={0.16}
        />
      </mesh>
    </group>
  );
}

export default function Planet({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const supported = !!(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
      setWebGLSupported(supported);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  const fallbackUi = (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/clouterry-mark-white.png"
        alt="Clouterry logo emblem"
        width={320}
        height={220}
        style={{ width: "auto", height: "auto" }}
        className="max-h-full max-w-full object-contain drop-shadow-[0_0_24px_rgba(244,243,247,0.3)]"
        priority
      />
    </div>
  );

  if (!mounted || !webGLSupported) {
    return fallbackUi;
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none touch-none ${className}`}
      aria-label="Interactive Clouterry star-white planetary emblem, drag to rotate"
    >
      <WebGLErrorBoundary fallback={fallbackUi}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "default" }}
        >
          {/* Cool space ambient fill */}
          <ambientLight intensity={0.75} color="#DCDAF0" />

          {/* Key star-white light from front-right */}
          <directionalLight position={[3.5, 4.5, 5]} intensity={1.5} color={STAR_WHITE} />

          {/* Soft ember rim-light on one edge (like a moon lit by a distant warm sun) */}
          <directionalLight
            position={[-4.5, 1.8, -2.5]}
            intensity={2.8}
            color={EMBER}
          />

          {/* Faint under-fill light */}
          <directionalLight
            position={[0, -4, 2]}
            intensity={0.3}
            color="#A5A5C0"
          />

          <PlanetMesh onInteraction={handleInteraction} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
