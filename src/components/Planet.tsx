"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RED = "#C41E3A";
const RED_DEEP = "#8B1428";

function PlanetMesh() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const velocity = useRef(0.35);
  const lastX = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    // idle spin, speeds up on hover, momentum on drag release
    const target = dragging ? 0 : hovered ? 0.9 : 0.35;
    velocity.current += (target - velocity.current) * Math.min(1, delta * 2);
    group.current.rotation.y += velocity.current * delta;
    if (ring.current) {
      ring.current.rotation.z = THREE.MathUtils.lerp(
        ring.current.rotation.z,
        hovered ? 0.75 : 0.55,
        delta * 3
      );
    }
  });

  const onPointerMove = (e: { movementX?: number; clientX: number }) => {
    if (!dragging || !group.current) return;
    const dx = e.clientX - lastX.current;
    group.current.rotation.y += dx * 0.01;
    lastX.current = e.clientX;
  };

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setDragging(false);
      }}
      onPointerDown={(e) => {
        setDragging(true);
        lastX.current = e.clientX;
      }}
      onPointerUp={() => setDragging(false)}
      onPointerMove={onPointerMove}
    >
      {/* core sphere, hollow look via wireframe-ish shading */}
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color={RED}
          roughness={0.35}
          metalness={0.05}
          emissive={RED_DEEP}
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* the diagonal slash bar cutting through the sphere, echoes the logo */}
      <mesh rotation={[0, 0, Math.PI / 5.2]}>
        <boxGeometry args={[3.1, 0.22, 0.22]} />
        <meshStandardMaterial color={RED} roughness={0.3} />
      </mesh>

      {/* tilted ring, the "orbit" from the logo */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0.55]}>
        <torusGeometry args={[1.85, 0.09, 24, 100]} />
        <meshStandardMaterial color={RED} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Planet({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-label="Interactive Clouterry planet mark — drag to spin">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <directionalLight position={[-4, -2, -3]} intensity={0.3} />
        <PlanetMesh />
      </Canvas>
    </div>
  );
}
