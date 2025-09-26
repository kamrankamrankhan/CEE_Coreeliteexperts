'use client'

import Layout from '@/components/layout/Layout'
import ServiceCard3D from '@/components/3d/ServiceCard3D'
import { ArrowRight, Code, Wrench, Cloud, Brain, Palette, Image, Video, Box, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    iconName: 'Code',
    title: 'Software Engineers',
    description: 'Expert software development using modern technologies and best practices.',
    features: ['Full-Stack Development', 'API Development', 'Database Design', 'Code Optimization'],
    href: '/services/software-engineering',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    iconName: 'Wrench',
    title: 'DevOps Engineers',
    description: 'Streamline deployment, monitoring, and infrastructure management.',
    features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring & Logging', 'Security Automation'],
    href: '/services/devops',
    color: 'from-green-500 to-emerald-500'
  },
  {
    iconName: 'Cloud',
    title: 'Cloud Engineers',
    description: 'Scalable cloud solutions and infrastructure optimization.',
    features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto Scaling', 'Cost Optimization'],
    href: '/services/cloud-engineering',
    color: 'from-purple-500 to-pink-500'
  },
  {
    iconName: 'Brain',
    title: 'AI Engineers',
    description: 'Artificial intelligence and machine learning solutions.',
    features: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision', 'AI Integration'],
    href: '/services/ai-engineering',
    color: 'from-orange-500 to-red-500'
  },
  {
    iconName: 'Palette',
    title: 'UI/UX Designers',
    description: 'User-centered design and exceptional user experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    href: '/services/ui-ux-design',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    iconName: 'Image',
    title: 'Graphic Designers',
    description: 'Creative visual design and branding solutions.',
    features: ['Brand Identity', 'Logo Design', 'Print Design', 'Digital Graphics'],
    href: '/services/graphic-design',
    color: 'from-teal-500 to-green-500'
  },
  {
    iconName: 'Video',
    title: 'Video Editors',
    description: 'Professional video production and editing services.',
    features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Post Production'],
    href: '/services/video-editing',
    color: 'from-pink-500 to-rose-500'
  },
  {
    iconName: 'Box',
    title: '3D Artists',
    description: 'Immersive 3D graphics and visualizations.',
    features: ['3D Modeling', 'Texturing', 'Animation', 'Rendering'],
    href: '/services/3d-art',
    color: 'from-violet-500 to-purple-500'
  },
  {
    iconName: 'TrendingUp',
    title: 'Digital Marketers',
    description: 'Strategic digital marketing and growth solutions.',
    features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    href: '/services/digital-marketing',
    color: 'from-amber-500 to-yellow-500'
  }
]

export default function AIEngineeringPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#f4f4f4] dark:bg-[#242424] overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white mb-6 leading-tight">
              AI <span className="text-gradient">Engineering</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Artificial intelligence and machine learning solutions. 
              We help you leverage AI to solve complex business challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="group bg-black dark:bg-white text-white dark:text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
  )
}
