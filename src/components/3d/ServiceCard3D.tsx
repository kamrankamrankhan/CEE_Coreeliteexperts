'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Code, 
  Cloud, 
  Brain, 
  Palette, 
  Image, 
  Video, 
  Box, 
  TrendingUp,
  Wrench
} from 'lucide-react'

interface ServiceCard3DProps {
  iconName: string
  title: string
  description: string
  href: string
  index: number
}

export default function ServiceCard3D({ iconName, title, description, href, index }: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Map icon names to React icons
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'Code': Code,
      'Cloud': Cloud,
      'Brain': Brain,
      'Palette': Palette,
      'Image': Image,
      'Video': Video,
      'Box': Box,
      'TrendingUp': TrendingUp,
      'Wrench': Wrench
    }
    return iconMap[iconName] || Code
  }

  const IconComponent = getIcon(iconName)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const mouseX = e.clientX - centerX
        const mouseY = e.clientY - centerY
        
        setMousePosition({ x: mouseX, y: mouseY })
      }
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  // Calculate rotation based on mouse position
  const rotateX = isHovered ? (mousePosition.y / 10) : 0
  const rotateY = isHovered ? (mousePosition.x / 10) : 0
  const translateZ = isHovered ? 20 : 0

  return (
    <Link href={href} className="block w-full h-full">
      <div 
        ref={cardRef}
        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-[#0ebab1] relative overflow-hidden cursor-pointer w-full h-full min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
      {/* 3D Background Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 transition-opacity duration-300"
        style={{
          transform: `translateZ(-10px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
          opacity: isHovered ? 0.3 : 0.1
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div 
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#0ebab1] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300"
          style={{
            transform: `translateZ(10px) rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg) scale(${isHovered ? 1.1 : 1})`
          }}
        >
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white dark:text-black" />
        </div>
        <h3 
          className="text-lg sm:text-xl lg:text-xl font-bold text-black mb-3 sm:mb-4 transition-transform duration-300"
          style={{
            transform: `translateZ(5px) rotateX(${rotateX * 0.2}deg) rotateY(${rotateY * 0.2}deg)`
          }}
        >
          {title}
        </h3>
        <p 
          className="text-sm sm:text-base lg:text-base text-black leading-relaxed transition-transform duration-300"
          style={{
            transform: `translateZ(2px) rotateX(${rotateX * 0.1}deg) rotateY(${rotateY * 0.1}deg)`
          }}
        >
          {description}
        </p>
      </div>
      </div>
    </Link>
  )
}
