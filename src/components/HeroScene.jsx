import { useRef, useMemo, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingShape({ position, rotation, scale, geometry, rotationSpeed }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0]
      meshRef.current.rotation.y += rotationSpeed[1]
      meshRef.current.rotation.z += rotationSpeed[2]
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.001
    }
  })

  const geo = useMemo(() => {
    switch (geometry) {
      case 'cube': return <boxGeometry args={[1, 1, 1]} />
      case 'icosahedron': return <icosahedronGeometry args={[1, 0]} />
      case 'torusKnot': return <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
      case 'octahedron': return <octahedronGeometry args={[1, 0]} />
      default: return <boxGeometry args={[1, 1, 1]} />
    }
  }, [geometry])

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {geo}
      <meshBasicMaterial color="#00FFFF" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

function StarField({ count = 800 }) {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00FFFF" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Scene() {
  const { camera } = useThree()

  const shapes = useMemo(() => {
    const geometries = ['cube', 'icosahedron', 'torusKnot', 'octahedron']
    return Array.from({ length: 14 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 20,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: Math.random() * 1.2 + 0.4,
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      rotationSpeed: [
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
      ],
    }))
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      camera.position.x += (x * 1.5 - camera.position.x) * 0.03
      camera.position.y += (y * 1.5 - camera.position.y) * 0.03
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  return (
    <>
      <StarField count={800} />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: '#0c0e12' }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
