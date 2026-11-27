import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { BufferAttribute } from 'three'
import { quantum } from './quantum'

function field(count, position) {
  return new Float32Array(Array.from({ length: count }, (_, i) => position(i)).flat())
}

function random(index) {
  const value = Math.sin(index * 127.1 + 0.47) * 43758.5453
  return value - Math.floor(value)
}

function Globe({ density, scroll }) {
  const globe = useRef(null)
  const orbits = useRef(null)
  const terrain = useRef(null)
  const stars = useRef(null)
  const invalidate = useThree((state) => state.invalidate)
  const { sphere, dust, ground, network } = useMemo(() => ({
    sphere: new BufferAttribute(field(density, (i) => {
      const y = 1 - 2 * (i + .5) / density
      const radius = Math.sqrt(1 - y * y)
      const angle = i * Math.PI * (3 - Math.sqrt(5))
      return [1.72 * radius * Math.cos(angle), 1.72 * y, 1.72 * radius * Math.sin(angle)]
    }), 3),
    dust: new BufferAttribute(field(460, (i) => [
      (random(i * 3) - .5) * 16, (random(i * 3 + 1) - .5) * 10, -2 - random(i * 3 + 2) * 12,
    ]), 3),
    network: new BufferAttribute(field(96, (i) => {
      const pair = Math.floor(i / 2)
      const angle = pair * 2.39996
      const offset = i % 2
      const y = (random(pair) - .5) * 2.38
      return [Math.sin(angle + offset * .32) * 1.64, y + offset * .14, Math.cos(angle + offset * .32) * 1.64]
    }), 3),
    ground: new BufferAttribute(field(680, (i) => [(i % 40 - 19.5) * .22, -1.95, Math.floor(i / 40) * .29 - 4]), 3),
  }), [density])

  useEffect(() => {
    invalidate()
  }, [invalidate])

  useFrame(({ clock, pointer, camera }, frameDelta) => {
    const delta = Math.min(frameDelta, .05)
    const t = clock.elapsedTime
    globe.current.rotation.y += delta * .19
    globe.current.rotation.z = .15
    orbits.current.rotation.y += delta * .16
    orbits.current.rotation.z = Math.sin(t * .17) * .18
    stars.current.rotation.y += delta * .012
    const positions = terrain.current.geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      positions.setY(i, -2.05 + .22 * Math.sin(positions.getX(i) * 1.2 + t * .8) * Math.cos(positions.getZ(i) + t * .55))
    }
    positions.needsUpdate = true
    const ease = 1 - Math.exp(-delta * 4)
    camera.position.x += (pointer.x * .38 - camera.position.x) * ease
    camera.position.y += (pointer.y * .25 + scroll.current * .6 - camera.position.y) * ease
    camera.position.z += (6.8 - scroll.current * .6 - camera.position.z) * ease
    camera.lookAt(0, -.05, 0)
  })

  return (
    <>
      <fog attach="fog" args={[quantum.black, 8, 19]} />
      <points ref={stars}>
        <bufferGeometry><primitive object={dust} attach="attributes-position" /></bufferGeometry>
        <pointsMaterial color="#a9b5c7" size={.029} transparent opacity={.65} />
      </points>
      <points ref={terrain}>
        <bufferGeometry><primitive object={ground} attach="attributes-position" /></bufferGeometry>
        <pointsMaterial color={quantum.violet} size={.029} transparent opacity={.58} />
      </points>
      <group ref={globe} rotation={[.2, -.65, .15]}>
        <mesh>
          <sphereGeometry args={[1.7, 32, 24]} />
          <meshBasicMaterial color="#172943" transparent opacity={.8} />
        </mesh>
        <lineSegments scale={1.12}>
          <bufferGeometry><primitive object={network} attach="attributes-position" /></bufferGeometry>
          <lineBasicMaterial color={quantum.blue} transparent opacity={.46} />
        </lineSegments>
        <points>
          <bufferGeometry><primitive object={sphere} attach="attributes-position" /></bufferGeometry>
          <pointsMaterial color={quantum.cyan} size={.034} transparent opacity={.9} />
        </points>
      </group>
      <group ref={orbits} rotation={[0, .25, .1]}>
        {[ [.94, .18, 2.08], [-.83, .4, 2.27], [1.18, -.58, 2.49] ].map(([x, y, radius], i) => (
          <mesh key={radius} rotation={[x, y, 0]}>
            <torusGeometry args={[radius, .009, 8, 112]} />
            <meshBasicMaterial color={i === 1 ? quantum.violet : '#e9c98b'} transparent opacity={.72} />
            <mesh position={[radius, 0, 0]}>
              <sphereGeometry args={[.049, 10, 10]} />
              <meshBasicMaterial color={i === 1 ? '#bccbea' : '#f4dfb0'} />
            </mesh>
          </mesh>
        ))}
      </group>
    </>
  )
}

export default function Scene({ scroll, active }) {
  const [viewportActive, setViewportActive] = useState(false)
  const [available, setAvailable] = useState(false)
  const container = useRef(null)
  const [density] = useState(() => window.devicePixelRatio > 2 ? 1600 : 4400)

  useEffect(() => {
    const probe = document.createElement('canvas')
    try {
      const context = probe.getContext('webgl2')
      setAvailable(Boolean(context))
      context?.getExtension('WEBGL_lose_context')?.loseContext()
    } catch {
      setAvailable(false)
    }
    const update = (visible) => setViewportActive(visible && !document.hidden)
    let visible = true
    const onVisibility = () => update(visible)
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      update(visible)
    })
    observer.observe(container.current)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div ref={container} className="scene-canvas" aria-hidden="true">
      {available && (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.8], fov: 47 }}
          frameloop={active && viewportActive ? 'always' : 'demand'}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          onCreated={({ gl }) => gl.domElement.addEventListener('webglcontextlost', () => setAvailable(false), { once: true })}>
          <Globe density={density} scroll={scroll} />
        </Canvas>
      )}
    </div>
  )
}
