"use client";
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  Sphere, 
  PerspectiveCamera,
  Environment,
  ContactShadows,
  PresentationControls
} from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed, distort, radius, factor = 1 }: any) {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.cos(t / 4) / 2;
      ref.current.rotation.y = Math.sin(t / 4) / 2;
      ref.current.rotation.z = Math.sin(t / 4) / 2;
      ref.current.position.y = position[1] + Math.sin(t * 0.5) * factor;
    }
  });

  return (
    <Sphere ref={ref} args={[radius, 100, 100]} position={position}>
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        radius={radius}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

function FloatingShapes() {
  const { viewport } = useThree();
  
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <AnimatedSphere 
          position={[-viewport.width / 4, viewport.height / 6, 0]} 
          color="#0EA5A0" 
          speed={2} 
          distort={0.4} 
          radius={2} 
        />
      </Float>
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
        <AnimatedSphere 
          position={[viewport.width / 4, -viewport.height / 6, -2]} 
          color="#D4A853" 
          speed={1.5} 
          distort={0.5} 
          radius={2.5} 
        />
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.5, 64, 64]} position={[-viewport.width / 6, -viewport.height / 4, 1]}>
          <MeshWobbleMaterial color="#3b82f6" speed={3} factor={0.6} />
        </Sphere>
      </Float>

      {/* Small floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[
            (Math.random() - 0.5) * viewport.width,
            (Math.random() - 0.5) * viewport.height,
            (Math.random() - 1) * 5
          ]}>
            <octahedronGeometry args={[0.1 * (Math.random() + 0.5), 0]} />
            <meshStandardMaterial color="#ffffff" emissive="#0EA5A0" emissiveIntensity={0.5} transparent opacity={0.4} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function Visuals3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#0EA5A0" />
          
          <FloatingShapes />
          
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -10, 0]} 
            opacity={0.4} 
            scale={40} 
            blur={2} 
            far={10} 
            color="#000000" 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
