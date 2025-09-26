'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeContext'

interface ThreeSceneProps {
  className?: string
}

export default function ThreeScene({ className }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const { theme } = useTheme()

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

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
      new THREE.TorusGeometry(0.3, 0.1, 16, 100)
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
      })
    ]

    const meshes: THREE.Mesh[] = []
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index])
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      scene.add(mesh)
      meshes.push(mesh)
    })

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Rotate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index + 1)
        mesh.rotation.y += 0.01 * (index + 1)
        mesh.rotation.z += 0.01 * (index + 1)

        // Float up and down
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002
      })

      // Rotate camera around the scene
      const time = Date.now() * 0.0005
      camera.position.x = Math.cos(time) * 5
      camera.position.z = Math.sin(time) * 5
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

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
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [theme])

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-64 rounded-lg overflow-hidden ${className || ''}`}
      style={{ minHeight: '256px' }}
    />
  )
}
