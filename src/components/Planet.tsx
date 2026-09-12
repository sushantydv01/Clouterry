"use client";

import React, {
  Component,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Image from "next/image";

const emptySubscribe = () => () => {};

function checkWebGLSupport() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function useWebGLAvailable() {
  return useSyncExternalStore(emptySubscribe, checkWebGLSupport, () => false);
}

function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function checkReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotionPreference() {
  return useSyncExternalStore(emptySubscribe, checkReducedMotion, () => false);
}

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

// Brand Colors
const RED = "#C41E3A";
const RED_DEEP = "#8B1428";
const GOLD = "#D4A94A";
const CREAM = "#F5F1E6";

interface KineticEmblemMeshProps {
  reducedMotion: boolean;
  mousePos: { x: number; y: number };
}

function KineticEmblemMesh({ reducedMotion, mousePos }: KineticEmblemMeshProps) {
  const rootGroup = useRef<THREE.Group>(null);
  const emblemGroup = useRef<THREE.Group>(null);
  const outerRingGroup = useRef<THREE.Group>(null);
  const innerRingGroup = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragMomentum = useRef({ x: 0, y: 0 });
  const totalDragDistance = useRef(0);

  // Wobble physics tracking when spun vigorously
  const wobbleDuration = useRef(1.8);
  const wobbleElapsed = useRef(99);
  const wobbleIntensity = useRef(0);

  // Expansion animation lerp value for hover bloom
  const expansionScale = useRef(1);

  // 1. Procedural 3D Clouterry Emblem Central Ring
  const ringGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerR = 1.32;
    const innerR = 0.98;

    // Outer circle
    shape.absarc(0, 0, outerR, 0, Math.PI * 2, false);

    // Inner cutout hole
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      curveSegments: 64,
      steps: 1,
      depth: 0.18,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 5,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  // 2. The Iconic Clouterry Orbital Swoosh (Tilted Saturn Loop)
  const swooshGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const segments = 72;
    const aOuter = 2.12;
    const bOuter = 0.74;
    const aInner = 1.74;
    const bInner = 0.50;

    // Outer ellipse with subtle aerodynamic taper matching the logo wings
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      // Slight taper to sharpen the top-right tip and round the bottom-left lobe
      const taper = 1 + 0.09 * Math.cos(angle);
      const x = Math.cos(angle) * aOuter * taper;
      const y = Math.sin(angle) * bOuter;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }

    // Inner cutout hole
    const hole = new THREE.Path();
    for (let i = segments; i >= 0; i--) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * aInner;
      const y = Math.sin(angle) * bInner;
      if (i === segments) hole.moveTo(x, y);
      else hole.lineTo(x, y);
    }
    shape.holes.push(hole);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      curveSegments: 64,
      steps: 1,
      depth: 0.16,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.025,
      bevelSegments: 4,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  // 3. Inner Crescent Accent (Top-left highlight curve inside the ring)
  const crescentGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const rInner = 0.74;
    const rOuter = 0.88;
    const startAngle = Math.PI * 0.63; // ~113°
    const endAngle = Math.PI * 0.89; // ~160°
    const capR = (rOuter - rInner) / 2;
    const midREnd = (rOuter + rInner) / 2;

    // Outer arc
    shape.absarc(0, 0, rOuter, startAngle, endAngle, false);

    // End cap
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    shape.absarc(midREnd * endX, midREnd * endY, capR, endAngle, endAngle + Math.PI, false);

    // Inner arc back
    shape.absarc(0, 0, rInner, endAngle, startAngle, true);

    // Start cap
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    shape.absarc(midREnd * startX, midREnd * startY, capR, startAngle + Math.PI, startAngle, false);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      curveSegments: 32,
      steps: 1,
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  // Shared Materials
  const lacquerMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: RED,
        roughness: 0.68,
        metalness: 0.02,
        emissive: RED_DEEP,
        emissiveIntensity: 0.22,
      }),
    []
  );

  const goldTrimMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: GOLD,
        roughness: 0.25,
        metalness: 0.82,
        emissive: "#4E3810",
        emissiveIntensity: 0.18,
      }),
    []
  );

  useFrame((_, delta) => {
    if (!rootGroup.current || !emblemGroup.current) return;

    // ── Expansion / Bloom on Hover ──
    const targetExpansion = hovered ? 1.15 : 1.0;
    expansionScale.current = THREE.MathUtils.lerp(
      expansionScale.current,
      targetExpansion,
      delta * 4.5
    );

    if (outerRingGroup.current) {
      outerRingGroup.current.scale.setScalar(expansionScale.current);
    }
    if (innerRingGroup.current) {
      innerRingGroup.current.scale.setScalar(0.96 * expansionScale.current);
    }

    // ── Drag & Inertia vs. Parallax & Idle Spin ──
    if (isDragging.current) {
      emblemGroup.current.rotation.y += dragMomentum.current.x;
      emblemGroup.current.rotation.x += dragMomentum.current.y;
      dragMomentum.current.x *= 0.93;
      dragMomentum.current.y *= 0.93;
    } else if (reducedMotion) {
      // Settle dragging momentum only
      if (
        Math.abs(dragMomentum.current.x) > 0.0005 ||
        Math.abs(dragMomentum.current.y) > 0.0005
      ) {
        emblemGroup.current.rotation.y += dragMomentum.current.x;
        emblemGroup.current.rotation.x += dragMomentum.current.y;
        dragMomentum.current.x *= 0.88;
        dragMomentum.current.y *= 0.88;
      }
    } else {
      // Mouse Parallax Tilt for the root group
      const targetTiltX = -mousePos.y * 0.25;
      const targetTiltY = mousePos.x * 0.38;
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        targetTiltX,
        delta * 3.5
      );
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        targetTiltY,
        delta * 3.5
      );

      // Settle residual drag momentum into idle spin
      if (
        Math.abs(dragMomentum.current.x) > 0.001 ||
        Math.abs(dragMomentum.current.y) > 0.001
      ) {
        emblemGroup.current.rotation.y += dragMomentum.current.x;
        emblemGroup.current.rotation.x += dragMomentum.current.y;
        dragMomentum.current.x *= 0.94;
        dragMomentum.current.y *= 0.94;
      } else {
        // Hypnotic idle rotation of the central emblem
        const idleSpeed = hovered ? 0.75 : 0.26;
        emblemGroup.current.rotation.y += idleSpeed * delta;
        emblemGroup.current.rotation.x = THREE.MathUtils.lerp(
          emblemGroup.current.rotation.x,
          0.08,
          delta * 2
        );
      }

      // Continuous orbital motion for armillary rings
      if (outerRingGroup.current) {
        const speed = hovered ? 0.6 : 0.2;
        outerRingGroup.current.rotation.z += speed * delta;
        outerRingGroup.current.rotation.y += speed * 0.35 * delta;
      }
      if (innerRingGroup.current) {
        const speed = hovered ? -0.75 : -0.28;
        innerRingGroup.current.rotation.z += speed * delta;
        innerRingGroup.current.rotation.x += speed * 0.45 * delta;
      }
    }

    // ── Signature Dizzy-Wobble Oscillation after heavy spin ──
    if (!reducedMotion && wobbleElapsed.current < wobbleDuration.current) {
      wobbleElapsed.current += delta;
      const progress = wobbleElapsed.current / wobbleDuration.current;
      const decay = Math.exp(-progress * 4.2);
      const freq = 16;
      const wobbleX =
        Math.sin(wobbleElapsed.current * freq) * 0.3 * decay * wobbleIntensity.current;
      const wobbleZ =
        Math.cos(wobbleElapsed.current * (freq * 0.8)) * 0.22 * decay * wobbleIntensity.current;

      emblemGroup.current.rotation.x += wobbleX;
      emblemGroup.current.rotation.z = wobbleZ;
    } else if (!reducedMotion) {
      emblemGroup.current.rotation.z = THREE.MathUtils.lerp(
        emblemGroup.current.rotation.z,
        0,
        delta * 6
      );
    }
  });

  const handlePointerDown = (e: { clientX: number; clientY: number }) => {
    isDragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    dragMomentum.current = { x: 0, y: 0 };
    totalDragDistance.current = 0;
  };

  const handlePointerMove = (e: { clientX: number; clientY: number }) => {
    if (!isDragging.current || !emblemGroup.current) return;
    const deltaX = e.clientX - lastPointer.current.x;
    const deltaY = e.clientY - lastPointer.current.y;

    const rotY = deltaX * 0.012;
    const rotX = deltaY * 0.012;

    emblemGroup.current.rotation.y += rotY;
    emblemGroup.current.rotation.x += rotX;

    dragMomentum.current = { x: rotY, y: rotX };
    totalDragDistance.current += Math.hypot(rotY, rotX);

    lastPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (
      !reducedMotion &&
      (totalDragDistance.current >= Math.PI * 1.6 ||
        Math.hypot(dragMomentum.current.x, dragMomentum.current.y) > 0.038)
    ) {
      wobbleElapsed.current = 0;
      wobbleIntensity.current = Math.min(
        1.2,
        Math.max(0.6, totalDragDistance.current / (Math.PI * 2))
      );
    }
    totalDragDistance.current = 0;
  };

  return (
    <group
      ref={rootGroup}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        if (isDragging.current) handlePointerUp();
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* ── Central 3D Clouterry Dimensional Sculptural Emblem ── */}
      <group ref={emblemGroup}>
        {/* Main Extruded Emblem Ring */}
        <mesh geometry={ringGeometry} material={lacquerMaterial} castShadow receiveShadow />

        {/* Dynamic Sweeping Saturn Orbital Swoosh (Tilted 28° like Clouterry mark) */}
        <mesh
          geometry={swooshGeometry}
          material={lacquerMaterial}
          rotation={[0.22, 0.12, 0.488]}
          position={[0, 0, 0.06]}
          castShadow
          receiveShadow
        />

        {/* Inner Crescent Highlight Accent */}
        <mesh
          geometry={crescentGeometry}
          material={lacquerMaterial}
          position={[0, 0, 0.08]}
          castShadow
          receiveShadow
        />

        {/* Central Floating Gold Axis Bead */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
      </group>

      {/* ── Outer Gimbal Armillary Ring ── */}
      <group ref={outerRingGroup} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[2.22, 0.026, 24, 128]} />
          <primitive object={lacquerMaterial} attach="material" />
        </mesh>
        {/* Cardinal Gold Navigation Markers */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, idx) => (
          <mesh
            key={idx}
            position={[Math.cos(angle) * 2.22, Math.sin(angle) * 2.22, 0]}
          >
            <sphereGeometry args={[0.055, 16, 16]} />
            <primitive object={goldTrimMaterial} attach="material" />
          </mesh>
        ))}
      </group>

      {/* ── Inner Gimbal Armillary Ring ── */}
      <group ref={innerRingGroup} rotation={[Math.PI / 4, 0, -Math.PI / 4]}>
        <mesh>
          <torusGeometry args={[1.92, 0.02, 24, 128]} />
          <primitive object={lacquerMaterial} attach="material" />
        </mesh>
        {/* Micro Gold Node */}
        <mesh position={[1.92, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[-1.92, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
      </group>
    </group>
  );
}

export default function Planet({ className = "" }: { className?: string }) {
  const isMounted = useIsMounted();
  const webGLSupported = useWebGLAvailable();
  const reducedMotion = useReducedMotionPreference();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      if (innerWidth === 0 || innerHeight === 0) return;
      // Normalized coordinates from -1 to 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fallbackUi = (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/clouterry-mark.png"
        alt="Clouterry kinetic emblem"
        width={320}
        height={220}
        style={{ width: "auto", height: "auto" }}
        className="max-h-full max-w-full object-contain"
        priority
      />
    </div>
  );

  if (!isMounted || !webGLSupported) {
    return fallbackUi;
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Clouterry kinetic sculpture, drag to rotate"
    >
      <WebGLErrorBoundary fallback={fallbackUi}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "default" }}
        >
          {/* Gallery studio lighting matched to cream canvas */}
          <ambientLight intensity={0.9} color={CREAM} />

          {/* Key directional light from upper right */}
          <directionalLight
            position={[3.8, 4.8, 5]}
            intensity={1.45}
            color="#FFFDF7"
          />

          {/* Signature Gold Rim Light catching beveled chamfers */}
          <directionalLight
            position={[-4.2, 2.0, -2.8]}
            intensity={1.9}
            color={GOLD}
          />

          {/* Soft under-fill */}
          <directionalLight
            position={[0, -3.8, 2.2]}
            intensity={0.3}
            color="#EDE6D3"
          />

          <KineticEmblemMesh
            reducedMotion={reducedMotion}
            mousePos={mousePos}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}

