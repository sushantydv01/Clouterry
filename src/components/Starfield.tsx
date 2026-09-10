"use client";

import React, { Component, ReactNode, useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AURORA NOISE-FIELD BACKGROUND
   Flowing color clouds that respond to cursor.
   Replaces the old starfield for "wow" factor.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

class AuroraErrorBoundary extends Component<
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
    console.warn("Aurora WebGL error handled gracefully:", error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

/* ── Fragment Shader: Organic flowing noise ── */
const fragmentShader = `
  precision mediump float;
  
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  
  // Simplex-style noise (compact 2D)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
  
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5 * snoise(p); p *= 2.01;
    f += 0.25 * snoise(p); p *= 2.02;
    f += 0.125 * snoise(p); p *= 2.03;
    f += 0.0625 * snoise(p);
    return f;
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = uv * aspect;
    
    float t = uTime * 0.08;
    
    // Mouse influence — subtle attraction
    vec2 mouseInfluence = (uMouse - 0.5) * 0.3;
    
    // Layer 1: Deep vermillion nebula
    float n1 = fbm(p * 1.2 + vec2(t * 0.7, t * 0.3) + mouseInfluence * 0.5);
    
    // Layer 2: Purple/midnight drift
    float n2 = fbm(p * 0.8 + vec2(-t * 0.5, t * 0.6) + mouseInfluence * 0.3);
    
    // Layer 3: Fine detail
    float n3 = fbm(p * 2.5 + vec2(t * 0.9, -t * 0.4));
    
    // Color mixing
    vec3 vermillion = vec3(1.0, 0.24, 0.18);    // #FF3D2E
    vec3 deepPurple = vec3(0.18, 0.08, 0.32);   // Deep purple
    vec3 midnight = vec3(0.04, 0.04, 0.08);      // Near-void blue
    vec3 warmBlack = vec3(0.04, 0.04, 0.06);     // Base void
    
    // Mix colors based on noise layers
    vec3 col = warmBlack;
    col = mix(col, midnight, smoothstep(-0.3, 0.6, n2) * 0.5);
    col = mix(col, deepPurple, smoothstep(0.0, 0.8, n1 * n2) * 0.35);
    col = mix(col, vermillion, smoothstep(0.3, 0.9, n1) * 0.08);
    
    // Fine detail adds subtle variation
    col += vec3(n3 * 0.012);
    
    // Vignette — darker at edges
    float vignette = 1.0 - length((uv - 0.5) * 1.4);
    vignette = smoothstep(0.0, 0.7, vignette);
    col *= vignette * 0.9 + 0.1;
    
    // Mouse proximity glow — very subtle vermillion highlight near cursor
    float mouseDist = length(uv - uMouse);
    float mouseGlow = smoothstep(0.5, 0.0, mouseDist) * 0.06;
    col += vermillion * mouseGlow;
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

function AuroraMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();

    // Smooth mouse interpolation
    const lerp = 0.03;
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * lerp;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * lerp;
    uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

/* ── Sparse star sparkle overlay — keeps some cosmic feel ── */
function StarSparkles() {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);

  const [positions, sizes] = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    const t = state.clock.getElapsedTime();
    mat.opacity = 0.4 + Math.sin(t * 0.8) * 0.15;
    pointsRef.current.rotation.z = t * 0.008;
    pointsRef.current.position.y = (scrollRef.current * 0.0008) % 2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.008}
        color="#F4F3F7"
        transparent
        opacity={0.5}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AuroraScene() {
  return (
    <>
      <AuroraMesh />
      <StarSparkles />
    </>
  );
}

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }

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

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-void"
      />
    );
  }

  // Static fallback: CSS gradient aurora
  if (reducedMotion || !webGLSupported) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 30% 20%, rgba(255, 61, 46, 0.06), transparent 60%),
            radial-gradient(ellipse 60% 60% at 70% 70%, rgba(45, 20, 80, 0.08), transparent 55%),
            radial-gradient(ellipse 80% 40% at 50% 50%, rgba(10, 10, 30, 0.3), transparent 70%),
            #0A0A0F
          `,
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <AuroraErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 1], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            alpha: false,
            powerPreference: "low-power",
            preserveDrawingBuffer: false,
          }}
          style={{ width: "100%", height: "100%" }}
          frameloop="always"
        >
          <AuroraScene />
        </Canvas>
      </AuroraErrorBoundary>
    </div>
  );
}
