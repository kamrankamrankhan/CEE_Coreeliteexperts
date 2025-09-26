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

export default function ServicesPage() {
  return (
    <Layout>


      {/* Services Grid */}
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

      {/* Process Section */}
      <section className="py-24 bg-[#f4f4f4] dark:bg-[#242424]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black dark:text-white mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your needs and project requirements' },
              { number: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
              { number: '03', title: 'Development', description: 'Building your solution with best practices' },
              { number: '04', title: 'Launch', description: 'Deploying and supporting your project' }
            ].map((step, index) => (
              <div
                key={step.number}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0ebab1] to-[#0ebab1]/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-black dark:text-white">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0ebab1]">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white dark:text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white dark:text-black mb-8">
              Let's discuss your project and how we can help bring your vision to life with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="group bg-black dark:bg-white text-white dark:text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
