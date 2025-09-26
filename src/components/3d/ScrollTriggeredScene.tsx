'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeContext'

interface ScrollTriggeredSceneProps {
  className?: string
  height?: string
  intensity?: number
  shapeCount?: number
}

export default function ScrollTriggeredScene({ 
  className = '', 
  height = '50vh',
  intensity = 1,
  shapeCount = 5
}: ScrollTriggeredSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const meshesRef = useRef<THREE.Mesh[]>([])
  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [isInView, setIsInView] = useState(false)

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
    camera.position.z = 8

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

    // Create shapes
    const geometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.ConeGeometry(0.4, 1, 16),
      new THREE.TorusGeometry(0.3, 0.1, 8, 16),
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.5),
      new THREE.DodecahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.4)
    ]

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x60a5fa : 0x3b82f6,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xa855f7 : 0x8b5cf6,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x10b981 : 0x059669,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xf59e0b : 0xd97706,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xef4444 : 0xdc2626,
        transparent: true,
        opacity: 0.7
      })
    ]

    const meshes: THREE.Mesh[] = []
    const originalPositions: THREE.Vector3[] = []
    const originalRotations: THREE.Euler[] = []

    // Create limited number of shapes
    for (let i = 0; i < Math.min(shapeCount, geometries.length); i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i % materials.length])
      
      // Position in a circle
      const angle = (i / Math.min(shapeCount, geometries.length)) * Math.PI * 2
      const radius = 3
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 2
      )
      
      // Store original positions and rotations
      originalPositions.push(mesh.position.clone())
      originalRotations.push(mesh.rotation.clone())
      
      scene.add(mesh)
      meshes.push(mesh)
    }

    meshesRef.current = meshes

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      if (isInView) {
        meshes.forEach((mesh, index) => {
          const originalPos = originalPositions[index]
          const originalRot = originalRotations[index]
          
          // Get scroll progress within this section
          const rect = mountRef.current?.getBoundingClientRect()
          if (rect) {
            const sectionProgress = Math.max(0, Math.min(1, 
              (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
            ))
            
            // Apply scroll-based transformations
            const scrollFactor = sectionProgress * intensity
            
            // Position changes
            mesh.position.x = originalPos.x + Math.sin(scrollFactor * Math.PI * 2 + index) * 1.5
            mesh.position.y = originalPos.y + Math.cos(scrollFactor * Math.PI * 2 + index) * 1.5
            mesh.position.z = originalPos.z + Math.sin(scrollFactor * Math.PI + index) * 2
            
            // Rotation changes
            mesh.rotation.x = originalRot.x + scrollFactor * Math.PI * 2 + index * 0.5
            mesh.rotation.y = originalRot.y + scrollFactor * Math.PI * 1.5 + index * 0.3
            mesh.rotation.z = originalRot.z + scrollFactor * Math.PI + index * 0.7
            
            // Scale changes
            const scale = 1 + Math.sin(scrollFactor * Math.PI * 2 + index) * 0.2
            mesh.scale.setScalar(scale)
            
            // Opacity changes
            const opacity = 0.3 + Math.abs(Math.sin(scrollFactor * Math.PI + index)) * 0.4
            ;(mesh.material as THREE.MeshBasicMaterial).opacity = opacity
          }
        })
      }

      renderer.render(scene, camera)
    }

    animate()

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (mountRef.current) {
      observer.observe(mountRef.current)
    }

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
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [theme, isInView, intensity, shapeCount])

  return (
    <div 
      ref={mountRef} 
      className={`w-full overflow-hidden ${className}`}
      style={{ height }}
    />
  )
}
