// src/bits/HeroCanvas.tsx
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 650;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02;
      ref.current.rotation.x = clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        size={0.042}
        color="#a78bfa"
        transparent
        opacity={0.48}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const { mouse } = useThree();

  useEffect(() => {
    if (!meshRef.current || !matRef.current) return;

    // Start invisible
    meshRef.current.scale.set(0.01, 0.01, 0.01);
    matRef.current.opacity = 0;

    const delay = 1.3;
    gsap.to(meshRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 2.6,
      ease: "elastic.out(1, 0.45)",
      delay,
    });
    gsap.to(matRef.current, {
      opacity: 0.62,
      duration: 1.2,
      ease: "power2.out",
      delay,
    });
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * 0.13;
    meshRef.current.rotation.y = clock.elapsedTime * 0.19;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      3.3 + mouse.x * 0.5,
      0.04
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mouse.y * 0.5,
      0.04
    );
  });

  return (
    <mesh ref={meshRef} position={[3.3, 0, 0]}>
      <torusKnotGeometry args={[1.3, 0.4, 200, 20, 2, 3]} />
      <meshStandardMaterial
        ref={matRef}
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={0.75}
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  );
}

function Octahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    if (!meshRef.current || !matRef.current) return;
    meshRef.current.scale.set(0.01, 0.01, 0.01);
    matRef.current.opacity = 0;

    const delay = 2.0;
    gsap.to(meshRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      delay,
    });
    gsap.to(matRef.current, {
      opacity: 0.35,
      duration: 1.2,
      ease: "power2.out",
      delay,
    });
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * -0.1;
    meshRef.current.rotation.y = clock.elapsedTime * 0.13;
    meshRef.current.position.y =
      -1.8 + Math.sin(clock.elapsedTime * 0.55) * 0.35;
  });

  return (
    <mesh ref={meshRef} position={[-3.8, -1.8, -1.5]}>
      <octahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial
        ref={matRef}
        color="#2563eb"
        emissive="#1e3a8a"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  );
}

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    if (!meshRef.current || !matRef.current) return;
    meshRef.current.scale.set(0.01, 0.01, 0.01);
    matRef.current.opacity = 0;

    const delay = 2.4;
    gsap.to(meshRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      delay,
    });
    gsap.to(matRef.current, {
      opacity: 0.28,
      duration: 1,
      ease: "power2.out",
      delay,
    });
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * 0.07;
    meshRef.current.rotation.z = clock.elapsedTime * 0.09;
    meshRef.current.position.y =
      2 + Math.sin(clock.elapsedTime * 0.4 + 1) * 0.25;
  });

  return (
    <mesh ref={meshRef} position={[-5, 2, -3]}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshStandardMaterial
        ref={matRef}
        color="#06b6d4"
        emissive="#0e7490"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 5, 5]} intensity={3.5} color="#7c3aed" />
        <pointLight position={[-5, -4, 3]} intensity={2} color="#2563eb" />
        <pointLight position={[2, -3, 6]} intensity={1.2} color="#06b6d4" />
        <TorusKnot />
        <Octahedron />
        <Icosahedron />
        <ParticleField />
      </Canvas>
    </div>
  );
}
