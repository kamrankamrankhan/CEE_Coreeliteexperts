'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeContext'

interface ScrollThreeSceneProps {
  className?: string
  height?: string
}

export default function ScrollThreeScene({ className = '', height = '100vh' }: ScrollThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
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
    camera.position.z = 5

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

    // Create multiple geometric shapes with different behaviors
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.6, 32, 32),
      new THREE.ConeGeometry(0.5, 1.2, 32),
      new THREE.TorusGeometry(0.4, 0.15, 16, 100),
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.6)
    ]

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x60a5fa : 0x3b82f6,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xa855f7 : 0x8b5cf6,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x10b981 : 0x059669,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xf59e0b : 0xd97706,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0xef4444 : 0xdc2626,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x06b6d4 : 0x0891b2,
        transparent: true,
        opacity: 0.8
      })
    ]

    const meshes: THREE.Mesh[] = []
    const originalPositions: THREE.Vector3[] = []
    const originalRotations: THREE.Euler[] = []

    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index])
      
      // Set initial positions in a grid pattern
      const row = Math.floor(index / 3)
      const col = index % 3
      mesh.position.set(
        (col - 1) * 3,
        (row - 0.5) * 3,
        (Math.random() - 0.5) * 2
      )
      
      // Store original positions and rotations
      originalPositions.push(mesh.position.clone())
      originalRotations.push(mesh.rotation.clone())
      
      scene.add(mesh)
      meshes.push(mesh)
    })

    // Add ambient light for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Calculate scroll progress once
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const scrollFactor = scrollProgress * 2 - 1 // Convert to -1 to 1 range

      // Update meshes based on scroll position
      meshes.forEach((mesh, index) => {
        const originalPos = originalPositions[index]
        const originalRot = originalRotations[index]
        
        // Position changes based on scroll
        mesh.position.x = originalPos.x + Math.sin(scrollProgress * Math.PI * 2 + index) * 2
        mesh.position.y = originalPos.y + Math.cos(scrollProgress * Math.PI * 2 + index) * 2
        mesh.position.z = originalPos.z + scrollFactor * 3
        
        // Rotation changes based on scroll
        mesh.rotation.x = originalRot.x + scrollProgress * Math.PI * 4 + index * 0.5
        mesh.rotation.y = originalRot.y + scrollProgress * Math.PI * 3 + index * 0.3
        mesh.rotation.z = originalRot.z + scrollProgress * Math.PI * 2 + index * 0.7
        
        // Scale changes based on scroll
        const scale = 1 + Math.sin(scrollProgress * Math.PI * 2 + index) * 0.3
        mesh.scale.setScalar(scale)
        
        // Opacity changes based on scroll depth
        const opacity = 0.3 + Math.abs(Math.sin(scrollProgress * Math.PI + index)) * 0.7
        ;(mesh.material as THREE.MeshBasicMaterial).opacity = opacity
      })

      // Camera movement based on scroll
      const cameraDistance = 5 + scrollProgress * 3
      camera.position.x = Math.sin(scrollProgress * Math.PI) * cameraDistance
      camera.position.z = Math.cos(scrollProgress * Math.PI) * cameraDistance
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
  }, [theme, scrollY])

  return (
    <div 
      ref={mountRef} 
      className={`w-full overflow-hidden ${className}`}
      style={{ height }}
    />
  )
}
