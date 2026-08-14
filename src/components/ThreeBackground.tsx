import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";

function Centerpiece() {
  const groupRef = useRef<Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const checkDark = () => {
      const isDarkMode = document.documentElement.classList.contains('dark') ||
        (!document.documentElement.classList.contains('light') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(isDarkMode);
    };

    checkDark();

    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Zoom in on mount
    state.camera.position.z = MathUtils.lerp(state.camera.position.z, 5.8, 0.02);

    // Smooth rotation based on mouse
    const targetRY = (mouse.current.x * Math.PI) / 6;
    const targetRX = (mouse.current.y * Math.PI) / 6;

    groupRef.current.rotation.y +=
      (targetRY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (-targetRX - groupRef.current.rotation.x) * 0.05;

    // Gentle float at original center position
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    groupRef.current.position.x = 0;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Sphere */}
      <mesh>
        <icosahedronGeometry args={[1.65, 2]} />
        <meshPhongMaterial
          color={isDark ? "#60a5fa" : "#2563eb"}
          wireframe={true}
          emissive={isDark ? "#3b82f6" : "#2563eb"}
          emissiveIntensity={isDark ? 0.4 : 0.2}
        />
      </mesh>
      {/* Inner Soft Glass Core */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhongMaterial
          color={isDark ? "#1e293b" : "#3b82f6"}
          opacity={isDark ? 0.3 : 0.08}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

export function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-transparent pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} color="#ffffff" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#ffffff"
        />
        <Centerpiece />
      </Canvas>
    </div>
  );
}

