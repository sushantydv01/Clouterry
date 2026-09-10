"use client";

import React, { Component, ReactNode, useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

class StarfieldErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("Starfield WebGL error handled gracefully:", error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function StarLayer({
  count,
  depth,
  size,
  color,
  opacity,
  parallaxFactor,
  twinkle = false,
}: {
  count: number;
  depth: number;
  size: number;
  color: string;
  opacity: number;
  parallaxFactor: number;
  twinkle?: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);
  const targetScroll = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 48;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 42;
      pos[i * 3 + 2] = (Math.random() - 0.5) * depth;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, ph];
  }, [count, depth]);

  useEffect(() => {
    const handleScroll = () => {
      targetScroll.current = window.scrollY;
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Smooth scroll interpolation
    scrollRef.current += (targetScroll.current - scrollRef.current) * Math.min(1, delta * 4);
    mouseRef.current.x +=
      (mouseRef.current.targetX - mouseRef.current.x) * Math.min(1, delta * 3);
    mouseRef.current.y +=
      (mouseRef.current.targetY - mouseRef.current.y) * Math.min(1, delta * 3);

    const scrollY = (scrollRef.current * 0.0035 * parallaxFactor) % 40;
    pointsRef.current.position.y = scrollY;
    pointsRef.current.position.x = mouseRef.current.x * 0.8 * parallaxFactor;
    pointsRef.current.position.z = mouseRef.current.y * 0.5 * parallaxFactor;

    // Subtle twinkle on select stars
    if (twinkle && pointsRef.current.material) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      const t = state.clock.getElapsedTime();
      mat.opacity = opacity + Math.sin(t * 1.8) * 0.22;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function StarfieldScene() {
  return (
    <group>
      {/* Deep Far Stars: Dense, tiny, dim, slow drift */}
      <StarLayer
        count={1200}
        depth={36}
        size={0.04}
        color="#B8B8C4"
        opacity={0.38}
        parallaxFactor={0.25}
      />

      {/* Mid Layer Stars: Silver, moderate density & speed */}
      <StarLayer
        count={450}
        depth={24}
        size={0.075}
        color="#F4F3F7"
        opacity={0.65}
        parallaxFactor={0.6}
      />

      {/* Near Stars: Bright star-white with gentle twinkle */}
      <StarLayer
        count={90}
        depth={16}
        size={0.11}
        color="#FFFFFF"
        opacity={0.88}
        parallaxFactor={1.15}
        twinkle={true}
      />

      {/* Occasional Rare Ember Twinkle Stars: maximum of 8 sparse warm stars */}
      <StarLayer
        count={12}
        depth={18}
        size={0.12}
        color="#D4A94A"
        opacity={0.7}
        parallaxFactor={0.9}
        twinkle={true}
      />
    </group>
  );
}

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

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

  if (!mounted || !webGLSupported) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-void"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-void"
    >
      {/* Faint violet/deep nebula gradient wisp behind star layers */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 12%, rgba(45, 30, 80, 0.24), transparent 70%), radial-gradient(ellipse 60% 45% at 85% 75%, rgba(26, 18, 56, 0.18), transparent 65%)",
        }}
      />

      <StarfieldErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 18], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          style={{ width: "100%", height: "100%" }}
        >
          <StarfieldScene />
        </Canvas>
      </StarfieldErrorBoundary>
    </div>
  );
}
