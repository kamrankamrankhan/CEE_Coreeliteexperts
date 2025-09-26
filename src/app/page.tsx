'use client'

import Layout from '@/components/layout/Layout'
import ParticlesBackground from '@/components/ParticlesBackground'
import ServiceCard3D from '@/components/3d/ServiceCard3D'
import AnimatedCounter from '@/components/AnimatedCounter'
import { ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useRef, useState, useEffect } from 'react'

const services = [
  {
    iconName: 'Code',
    title: 'Software Engineers',
    description: 'Expert software development using modern technologies and best practices.',
    href: '/services/software-engineering'
  },
  {
    iconName: 'Wrench',
    title: 'DevOps Engineers',
    description: 'Streamline deployment, monitoring, and infrastructure management.',
    href: '/services/devops'
  },
  {
    iconName: 'Cloud',
    title: 'Cloud Engineers',
    description: 'Scalable cloud solutions and infrastructure optimization.',
    href: '/services/cloud-engineering'
  },
  {
    iconName: 'Brain',
    title: 'AI Engineers',
    description: 'Artificial intelligence and machine learning solutions.',
    href: '/services/ai-engineering'
  },
  {
    iconName: 'Palette',
    title: 'UI/UX Designers',
    description: 'User-centered design and exceptional user experiences.',
    href: '/services/ui-ux-design'
  },
  {
    iconName: 'Image',
    title: 'Graphic Designers',
    description: 'Creative visual design and branding solutions.',
    href: '/services/graphic-design'
  },
  {
    iconName: 'Video',
    title: 'Video Editors',
    description: 'Professional video production and editing services.',
    href: '/services/video-editing'
  },
  {
    iconName: 'Box',
    title: '3D Artists',
    description: 'Immersive 3D graphics and visualizations.',
    href: '/services/3d-art'
  },
  {
    iconName: 'TrendingUp',
    title: 'Digital Marketers',
    description: 'Strategic digital marketing and growth solutions.',
    href: '/services/digital-marketing'
  }
]

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 50, suffix: '+', label: 'Happy Clients' },
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 24, suffix: '/7', label: 'Support Available' }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'CEE Company transformed our digital presence completely. Their expertise in modern web technologies is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content: 'The team delivered our mobile app on time and exceeded our expectations. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'Our new website increased conversions by 300%. The 3D visualizations are absolutely stunning.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Founder, StartupHub',
    content: 'The 3D animations and interactive features they created for our platform are incredible. Users love the experience!',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    role: 'Product Manager, TechFlow',
    content: 'Professional, creative, and delivered exactly what we needed. The attention to detail is outstanding.',
    rating: 5
  }
]

interface TestimonialCard3DProps {
  testimonial: {
    name: string
    role: string
    content: string
    rating: number
  }
  index: number
}

function TestimonialCard3D({ testimonial, index }: TestimonialCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

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
  const rotateX = isHovered ? (mousePosition.y / 15) : 0
  const rotateY = isHovered ? (mousePosition.x / 15) : 0
  const translateZ = isHovered ? 20 : 0

  return (
    <div 
      ref={cardRef}
      className="group bg-[#1f2937] dark:bg-[#1f2937] rounded-xl p-3 sm:p-4 lg:p-4 border border-[#1f2937] dark:border-[#1f2937] hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex-shrink-0 w-full max-w-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 3D Background Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 dark:to-white/5 transition-opacity duration-300"
        style={{
          transform: `translateZ(-10px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
          opacity: isHovered ? 0.3 : 0.1
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div 
          className="flex items-center mb-4 transition-transform duration-300"
          style={{
            transform: `translateZ(10px) rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg)`
          }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#df7606] fill-current" />
          ))}
        </div>
        
        <p 
          className="text-white mb-4 leading-relaxed italic text-sm transition-transform duration-300"
          style={{
            transform: `translateZ(5px) rotateX(${rotateX * 0.2}deg) rotateY(${rotateY * 0.2}deg)`
          }}
        >
          "{testimonial.content}"
        </p>
        
        <div
          className="transition-transform duration-300"
          style={{
            transform: `translateZ(8px) rotateX(${rotateX * 0.4}deg) rotateY(${rotateY * 0.4}deg)`
          }}
        >
          <div className="font-semibold text-white text-sm">
            {testimonial.name}
          </div>
          <div className="text-white text-xs">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [gapSize, setGapSize] = useState(8) // Default gap size
  const carouselRef = useRef<HTMLDivElement>(null)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      let newCardsPerView
      let newGapSize
      if (width < 640) {
        newCardsPerView = 1 // Mobile: 1 card
        newGapSize = 8 // gap-2 = 8px
      } else if (width < 1024) {
        newCardsPerView = 2 // Tablet: 2 cards
        newGapSize = 12 // gap-3 = 12px
      } else {
        newCardsPerView = 3 // Desktop: 3 cards
        newGapSize = 16 // gap-4 = 16px
      }
      
      console.log(`Screen width: ${width}px, Cards per view: ${newCardsPerView}, Gap: ${newGapSize}px`)
      setCardsPerView(newCardsPerView)
      setGapSize(newGapSize)
      // Reset current index when cards per view changes
      setCurrentIndex(0)
    }

    // Set initial value immediately
    updateCardsPerView()
    
    // Add resize listener
    window.addEventListener('resize', updateCardsPerView)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Force update on mount to ensure correct initial value
  useEffect(() => {
    const width = window.innerWidth
    if (width >= 1024) {
      setCardsPerView(3)
    } else if (width >= 640) {
      setCardsPerView(2)
    } else {
      setCardsPerView(1)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - cardsPerView ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - cardsPerView : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        // Reset to 0 when we reach the end, creating seamless loop
        return nextIndex >= testimonials.length - cardsPerView + 1 ? 0 : nextIndex
      })
    }, 3000) // Change slide every 3 seconds for smoother loop

    return () => clearInterval(interval)
  }, [cardsPerView]) // Re-run when cardsPerView changes

  // Use regular testimonials array for simpler positioning
  const displayTestimonials = testimonials

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-2 sm:gap-3 lg:gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
          }}
        >
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex justify-center"
              style={{ 
                width: `calc(${100 / cardsPerView}% - ${cardsPerView === 1 ? '0px' : (cardsPerView - 1) * gapSize / cardsPerView + 'px'})`
              }}
            >
              <TestimonialCard3D testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
      </div>


      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.max(4, testimonials.length - cardsPerView + 1) }).map((_, index) => {
          // Calculate the correct active dot based on current index
          const totalDots = Math.max(4, testimonials.length - cardsPerView + 1)
          const isActive = index === (currentIndex % totalDots)
          return (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#0ebab1] scale-125' 
                  : 'bg-black/30 dark:bg-white/50 hover:bg-black/50 dark:hover:bg-white/70'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#f4f4f4] dark:bg-[#242424] overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20" style={{contain: 'layout style paint', isolation: 'isolate'}}>
        {/* Particles Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{contain: 'layout style paint', isolation: 'isolate', clipPath: 'inset(0 0 0 0)'}}>
          <ParticlesBackground />
        </div>
        
        <div className="container-custom text-center relative z-10 w-full max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-[#0ebab1] text-white dark:text-black rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden xs:inline">Trusted by 50+ companies worldwide</span>
              <span className="xs:hidden">50+ companies worldwide</span>
            </div>
            
            <h1 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight" style={{fontFamily: "'Story Script', cursive"}}>
              <span className="block xs:inline">Innovative{' '}</span>
              <span className="text-gradient">Digital Solutions</span>
              <span className="block xs:inline">{' '}for Modern Businesses</span>
            </h1>
            
            <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black dark:text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
              We specialize in creating cutting-edge web applications, mobile solutions, 
              and immersive 3D experiences that drive business growth.
            </p>
            
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <Link href="/contact" className="group bg-black dark:bg-white text-white dark:text-black font-semibold text-base sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full xs:w-auto text-center">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="group border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold text-base sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 w-full xs:w-auto text-center">
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-black dark:text-white">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white mr-2" />
                <span className="text-xs sm:text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white mr-2" />
                <span className="text-xs sm:text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white mr-2" />
                <span className="text-xs sm:text-sm">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-[#0ebab1] border-t border-b border-[#0ebab1]">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-black">
              WE ARE
            </h2>
          </div>
          <Marquee 
            speed={50} 
            gradient={false}
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                Software Engineers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                DevOps Engineers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                Cloud Engineers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                AI Engineers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                UI/UX Designers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                Graphic Designers
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                Video Editors
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                3D Artists
              </span>
              <span className="text-2xl text-white/60 dark:text-black/60">•</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white dark:text-black whitespace-nowrap">
                Digital Marketers
              </span>
            </div>
          </Marquee>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="space-y-12">
            {/* Top Content - Title and Description */}
            <div className="flex justify-between items-start gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white">
                  About.
                </h2>
                <div className="text-[#0ebab1] text-sm sm:text-base font-semibold uppercase tracking-wider">
                  A STARTUP ON A MISSION
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                We're the leading IT company in Gilgit-Baltistan. We believe in the power of technology to make a real difference. Through our flagship Skill Development Program we are making great progress in training the future IT professionals. Also, we are the leading software exporter in the region.
              </p>
            </div>

            {/* Bottom Content - Visual Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
              {/* Left Column - Large Card */}
              <div className="relative group lg:col-span-4">
                <div className="aspect-[4/3] lg:aspect-[3/2] relative rounded-2xl overflow-hidden">
                  {/* WebP Image */}
                  <Image
                    src="/card1.webp"
                    alt="Skill Development Program"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-white font-bold text-lg mb-1">Skill Development Program</h3>
                    <p className="text-[#0ebab1] text-sm">Imparting quality technical skills</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Two smaller cards stacked */}
              <div className="space-y-2 lg:col-span-2">
                {/* Talent Hunt Scholarship */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    {/* WebP Image */}
                    <Image
                      src="/card1.webp"
                      alt="Talent Hunt Scholarship"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-white font-bold text-sm mb-1">Talent Hunt Scholarship</h3>
                      <p className="text-[#0ebab1] text-xs">Career opportunity for IT students</p>
                    </div>
                  </div>
                </div>

                {/* Promoting Local Talent */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    {/* WebP Image */}
                    <Image
                      src="/card1.webp"
                      alt="Promoting Local Talent"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-white font-bold text-sm mb-1">Promoting Local Talent</h3>
                      <p className="text-[#0ebab1] text-xs">We support local artists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-6">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
              Our diverse team of experts provides comprehensive solutions across all aspects of digital technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard3D
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0ebab1]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white dark:text-black mb-3">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2000}
                    className="inline-block"
                  />
                </div>
                <div className="text-white dark:text-black font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-[#f4f4f4] dark:bg-[#242424]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {[
                {
                  question: "What services do you offer?",
                  answer: "We offer comprehensive IT services including web development, mobile app development, 3D visualization, UI/UX design, cloud solutions, AI/ML development, and digital marketing. Our team specializes in modern technologies and best practices."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We have different support packages available to meet your specific needs and budget."
                },
                {
                  question: "What technologies do you work with?",
                  answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, Docker, and various 3D frameworks. We stay updated with the latest trends and best practices in the industry."
                },
                {
                  question: "How do you ensure project quality?",
                  answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions. Our team is experienced and we maintain high standards throughout the development process."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We can integrate seamlessly with your existing team, provide technical consultation, or work as an extension of your development team. We're flexible and adapt to your preferred working style and communication methods."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "Our pricing varies based on project scope, complexity, and timeline. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a detailed quote tailored to your specific needs."
                },
                {
                  question: "Do you provide project updates?",
                  answer: "Yes, we maintain regular communication throughout the project lifecycle. We provide weekly progress reports, milestone updates, and are always available for questions or feedback. Transparency and communication are key to our success."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div 
                    className="p-5"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-black dark:text-white pr-4 group-hover:text-[#0ebab1] transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                          openFAQ === index 
                            ? 'bg-[#0ebab1] rotate-45' 
                            : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-[#0ebab1]'
                        }`}>
                          <span className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                            openFAQ === index 
                              ? 'text-white' 
                              : 'text-gray-600 dark:text-gray-400 group-hover:text-white'
                          }`}>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}
