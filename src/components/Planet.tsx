"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RED = "#C41E3A";
const RED_DEEP = "#8B1428";

interface PlanetMeshProps {
  onInteraction?: () => void;
}

function PlanetMesh({ onInteraction }: PlanetMeshProps) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isDragging = useRef(false);
  const angularVelocity = useRef(0.4);
  const lastPointerX = useRef(0);
  const dragMomentum = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (isDragging.current) {
      // Direct drag manipulation
      group.current.rotation.y += dragMomentum.current;
      dragMomentum.current *= 0.92; // dampen while dragging
    } else {
      // Idle spin + momentum carryover
      const targetSpeed = hovered ? 1.0 : 0.38;
      angularVelocity.current += (targetSpeed - angularVelocity.current) * Math.min(1, delta * 2.5);
      
      // Decay released drag momentum into continuous velocity
      if (Math.abs(dragMomentum.current) > 0.001) {
        group.current.rotation.y += dragMomentum.current;
        dragMomentum.current *= 0.95;
      } else {
        group.current.rotation.y += angularVelocity.current * delta;
      }
    }

    if (ring.current) {
      const targetTilt = hovered ? 0.72 : 0.52;
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
    onInteraction?.();
  };

  const handlePointerMove = (e: { clientX: number }) => {
    if (!isDragging.current || !group.current) return;
    const deltaX = e.clientX - lastPointerX.current;
    const rotationDelta = deltaX * 0.012;
    group.current.rotation.y += rotationDelta;
    dragMomentum.current = rotationDelta;
    lastPointerX.current = e.clientX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        isDragging.current = false;
      }}
      onPointerDown={(e) => handlePointerDown(e)}
      onPointerUp={handlePointerUp}
      onPointerMove={(e) => handlePointerMove(e)}
    >
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color={RED}
          roughness={0.28}
          metalness={0.08}
          emissive={RED_DEEP}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Signature diagonal slash bar slicing through the sphere */}
      <mesh rotation={[0, 0, Math.PI / 5.2]}>
        <boxGeometry args={[3.2, 0.22, 0.22]} />
        <meshStandardMaterial
          color={RED_DEEP}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Tilted orbital ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0.52]}>
        <torusGeometry args={[1.9, 0.085, 24, 120]} />
        <meshStandardMaterial
          color={RED}
          roughness={0.32}
          metalness={0.05}
        />
      </mesh>
    </group>
  );
}

export default function Planet({ className = "" }: { className?: string }) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  if (!webGLSupported) {
    // Elegant 2D Fallback
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative h-64 w-64 animate-pulse">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="50" r="32" fill={RED} />
            <rect
              x="15"
              y="47"
              width="70"
              height="6"
              rx="3"
              transform="rotate(-22 50 50)"
              fill={RED_DEEP}
            />
            <ellipse
              cx="50"
              cy="50"
              rx="46"
              ry="16"
              transform="rotate(22 50 50)"
              fill="none"
              stroke={RED}
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none touch-none ${className}`}
      aria-label="Interactive Clouterry planet mark — click and drag to spin"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#F5F1E6" />
        <PlanetMesh onInteraction={handleInteraction} />
      </Canvas>

      {/* Floating cue indicator that fades after interaction */}
      <div
        className={`pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-ink/10 bg-cream/90 backdrop-blur-xs px-3.5 py-1 text-xs font-medium text-ink/60 shadow-xs transition-opacity duration-500 ${
          hasInteracted ? "opacity-0" : "opacity-100"
        }`}
      >
        Drag to spin
      </div>
    </div>
  );
}
