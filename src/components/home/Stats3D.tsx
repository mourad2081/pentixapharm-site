"use client";
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingMesh({ position, color, speed, distort, radius }: any) {
  const ref = useRef<any>();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[radius, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

export function Stats3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5A0" />
          
          <FloatingMesh position={[-15, 10, 0]} color="#0EA5A0" speed={1} radius={5} />
          <FloatingMesh position={[15, -10, -5]} color="#D4A853" speed={1.2} radius={6} />
          <FloatingMesh position={[0, 0, -10]} color="#3b82f6" speed={0.8} radius={8} />

          {/* Random wires/lines */}
          {Array.from({ length: 10 }).map((_, i) => (
             <mesh key={i} position={[(Math.random()-0.5)*40, (Math.random()-0.5)*40, -15]}>
                <boxGeometry args={[Math.random()*20, 0.02, 0.02]} />
                <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
             </mesh>
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
