'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeContext'

interface ParticleScrollSceneProps {
  className?: string
  height?: string
  particleCount?: number
}

export default function ParticleScrollScene({ 
  className = '', 
  height = '100vh',
  particleCount = 1000 
}: ParticleScrollSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement)

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount_actual = Math.min(particleCount, 2000) // Limit for performance
    
    const positions = new Float32Array(particleCount_actual * 3)
    const colors = new Float32Array(particleCount_actual * 3)
    const sizes = new Float32Array(particleCount_actual)
    const velocities = new Float32Array(particleCount_actual * 3)

    // Theme-based colors
    const colorPalette = theme === 'dark' 
      ? [
          0x60a5fa, // Blue
          0xa855f7, // Purple
          0x10b981, // Green
          0xf59e0b, // Yellow
          0xef4444, // Red
          0x06b6d4  // Cyan
        ]
      : [
          0x3b82f6, // Blue
          0x8b5cf6, // Purple
          0x059669, // Green
          0xd97706, // Yellow
          0xdc2626, // Red
          0x0891b2  // Cyan
        ]

    for (let i = 0; i < particleCount_actual; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 // z

      // Color
      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const color = new THREE.Color(colorPalette[colorIndex])
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Size
      sizes[i] = Math.random() * 3 + 1

      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.1     // vx
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1 // vy
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1 // vz
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    // Create particle system
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const scrollFactor = scrollProgress * 2 - 1

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

        // Update particle positions based on scroll
        for (let i = 0; i < particleCount_actual; i++) {
          const i3 = i * 3
          
          // Add velocity
          positions[i3] += velocities[i3]
          positions[i3 + 1] += velocities[i3 + 1]
          positions[i3 + 2] += velocities[i3 + 2]

          // Scroll-based transformations
          const waveX = Math.sin(scrollProgress * Math.PI * 2 + i * 0.01) * 5
          const waveY = Math.cos(scrollProgress * Math.PI * 2 + i * 0.01) * 5
          const waveZ = Math.sin(scrollProgress * Math.PI + i * 0.02) * 3

          positions[i3] += waveX * 0.01
          positions[i3 + 1] += waveY * 0.01
          positions[i3 + 2] += waveZ * 0.01

          // Wrap particles around boundaries
          if (positions[i3] > 50) positions[i3] = -50
          if (positions[i3] < -50) positions[i3] = 50
          if (positions[i3 + 1] > 50) positions[i3 + 1] = -50
          if (positions[i3 + 1] < -50) positions[i3 + 1] = 50
          if (positions[i3 + 2] > 50) positions[i3 + 2] = -50
          if (positions[i3 + 2] < -50) positions[i3 + 2] = 50
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true

        // Rotate entire particle system based on scroll
        particlesRef.current.rotation.x = scrollProgress * Math.PI * 2
        particlesRef.current.rotation.y = scrollProgress * Math.PI * 1.5
        particlesRef.current.rotation.z = scrollProgress * Math.PI

        // Scale based on scroll
        const scale = 0.5 + scrollProgress * 1.5
        particlesRef.current.scale.setScalar(scale)
      }

      // Camera movement based on scroll
      const cameraDistance = 50 + scrollProgress * 20
      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * cameraDistance
      camera.position.y = Math.cos(scrollProgress * Math.PI) * cameraDistance * 0.5
      camera.position.z = Math.cos(scrollProgress * Math.PI * 2) * cameraDistance
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return

      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [theme, scrollY, particleCount])

  return (
    <div 
      ref={mountRef} 
      className={`w-full overflow-hidden ${className}`}
      style={{ height }}
    />
  )
}
