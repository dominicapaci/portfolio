import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Pipeline / Network nodes connected by lines
function NetworkShape() {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005
      groupRef.current.rotation.y += 0.007
    }
  })

  const nodes = [
    [-0.5, 0.5, 0],
    [0.5, 0.5, 0],
    [-0.5, -0.5, 0],
    [0.5, -0.5, 0],
    [0, 0, 0.5],
  ]

  const lines = useMemo(() => {
    const result = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const points = [new THREE.Vector3(...nodes[i]), new THREE.Vector3(...nodes[j])]
        result.push(new THREE.BufferGeometry().setFromPoints(points))
      }
    }
    return result
  }, [])

  const lineMat = useMemo(() => new THREE.LineBasicMaterial({ color: '#00FFFF', opacity: 0.5, transparent: true }), [])

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshBasicMaterial color="#00FFFF" opacity={0.9} transparent />
        </mesh>
      ))}
      {lines.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, lineMat)} />
      ))}
    </group>
  )
}

// Audio waveform bars that animate
function WaveformShape() {
  const groupRef = useRef()
  const barsRef = useRef([])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008
    }
    barsRef.current.forEach((mesh, i) => {
      if (mesh) {
        const scale = 0.5 + Math.abs(Math.sin(clock.getElapsedTime() * 2.5 + i * 0.7)) * 1.2
        mesh.scale.y = scale
      }
    })
  })

  const bars = 7
  return (
    <group ref={groupRef}>
      {Array.from({ length: bars }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (barsRef.current[i] = el)}
          position={[(i - bars / 2) * 0.22, 0, 0]}
        >
          <boxGeometry args={[0.12, 0.6, 0.12]} />
          <meshBasicMaterial color="#00FFFF" wireframe opacity={0.8} transparent />
        </mesh>
      ))}
    </group>
  )
}

// 3D bar chart
function BarChartShape() {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.004
      groupRef.current.rotation.y += 0.008
    }
  })

  const heights = [0.4, 0.7, 0.5, 0.9, 0.6]
  return (
    <group ref={groupRef}>
      {heights.map((h, i) => (
        <mesh key={i} position={[(i - heights.length / 2) * 0.3, h / 2 - 0.45, 0]}>
          <boxGeometry args={[0.2, h, 0.2]} />
          <meshBasicMaterial color="#00FFFF" wireframe opacity={0.8} transparent />
        </mesh>
      ))}
    </group>
  )
}

// Interlocking gears
function GearsShape() {
  const gear1Ref = useRef()
  const gear2Ref = useRef()

  useFrame(() => {
    if (gear1Ref.current) gear1Ref.current.rotation.z += 0.015
    if (gear2Ref.current) gear2Ref.current.rotation.z -= 0.015
  })

  const gearGeo = useMemo(() => {
    const makeGear = (radius, teeth) => {
      const points = []
      const segments = teeth * 2
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        const r = i % 2 === 0 ? radius : radius * 0.75
        points.push(new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle) * r, 0))
      }
      points.push(points[0].clone())
      return new THREE.BufferGeometry().setFromPoints(points)
    }
    return { big: makeGear(0.38, 8), small: makeGear(0.28, 6) }
  }, [])

  const lineMat = useMemo(() => new THREE.LineBasicMaterial({ color: '#00FFFF', opacity: 0.8, transparent: true }), [])

  return (
    <group>
      <group ref={gear1Ref} position={[-0.22, 0.15, 0]}>
        <primitive object={new THREE.Line(gearGeo.big, lineMat)} />
        <mesh>
          <circleGeometry args={[0.12, 16]} />
          <meshBasicMaterial color="#00FFFF" wireframe opacity={0.6} transparent />
        </mesh>
      </group>
      <group ref={gear2Ref} position={[0.22, -0.15, 0]}>
        <primitive object={new THREE.Line(gearGeo.small, lineMat.clone())} />
        <mesh>
          <circleGeometry args={[0.1, 16]} />
          <meshBasicMaterial color="#00FFFF" wireframe opacity={0.6} transparent />
        </mesh>
      </group>
    </group>
  )
}

// Wrapper that creates a small Canvas for each icon
function Icon3DCanvas({ children }) {
  return (
    <div className="w-28 h-28 mb-4 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}

export function PipelineIcon() {
  return <Icon3DCanvas><NetworkShape /></Icon3DCanvas>
}

export function VoiceIcon() {
  return <Icon3DCanvas><WaveformShape /></Icon3DCanvas>
}

export function DashboardIcon() {
  return <Icon3DCanvas><BarChartShape /></Icon3DCanvas>
}

export function BuildIcon() {
  return <Icon3DCanvas><GearsShape /></Icon3DCanvas>
}
