'use client'

import Layout from '@/components/layout/Layout'
import { BookOpen, Heart, Award, Calendar, TrendingUp, Users, Rocket, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const beliefs = [
  {
    icon: Heart,
    title: 'Client Success First',
    description: 'We believe that our success is directly tied to our clients\' success. Every decision we make is guided by what\'s best for our clients.'
  },
  {
    icon: Target,
    title: 'Excellence in Everything',
    description: 'We strive for excellence in every project, every interaction, and every solution we deliver. Good enough is never enough.'
  },
  {
    icon: Users,
    title: 'Collaboration & Trust',
    description: 'We believe in building strong partnerships based on trust, transparency, and open communication with our clients and team members.'
  },
  {
    icon: Rocket,
    title: 'Innovation & Growth',
    description: 'We embrace change and continuously innovate to stay ahead of the curve, helping our clients grow and adapt in an ever-evolving digital landscape.'
  }
]


export default function AboutPage() {
  return (
    <Layout>
      {/* About Section from Homepage */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="space-y-12">
            {/* Top Content - Title and Description */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
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

      {/* Our Story Section */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: '#0ebab1' }}>
                Our Story
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Story Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
              >
                <p>
                  CEE Company was founded with a simple yet powerful vision: to empower businesses with innovative 
                  digital solutions that drive real results. What started as a small team of passionate technologists 
                  has grown into a trusted partner for businesses worldwide.
                </p>
                <p>
                  Our journey began when we recognized a gap in the market - businesses needed more than just technical 
                  expertise; they needed a partner who understood their challenges, shared their vision, and was committed 
                  to their success. This insight became the foundation of everything we do.
                </p>
                <p>
                  Over the years, we've worked with startups, mid-size companies, and large enterprises across various 
                  industries. Each project has taught us something new, and every client relationship has strengthened our 
                  commitment to excellence. We've grown not just in size, but in expertise, capabilities, and most 
                  importantly, in our understanding of what it takes to truly transform businesses.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when you combine technical excellence with genuine 
                  care for client success. Our story continues to unfold with every project we undertake, every challenge 
                  we overcome, and every success we help our clients achieve.
                </p>
              </motion.div>

              {/* CEO Photo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/3 flex-shrink-0"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/ceo.jpeg"
                    alt="CEO of CEE Company"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Tosif Sheraz</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">CEO Coreeliteexperts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Founder Mission Section */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: '#0ebab1' }}>
                Our Founder Mission
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/3 flex-shrink-0"
              >
                <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 mx-auto lg:mx-0">
                  <Image
                    src="/founder.jpeg"
                    alt="Founder of CEE Company"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Kamran Khan</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Founder Coreeliteexperts</p>
                </div>
              </motion.div>

              {/* Founder Mission Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
              >
                <p>
                  Our founder's mission is deeply rooted in the belief that technology should be accessible, 
                  transformative, and empowering for businesses of all sizes. With a vision to bridge the gap 
                  between innovative solutions and real-world business needs, we strive to deliver excellence 
                  in every project we undertake.
                </p>
                <p>
                  The mission extends beyond just delivering projects - it's about building lasting relationships, 
                  understanding our clients' unique challenges, and providing solutions that drive sustainable growth. 
                  We believe in transparency, integrity, and putting our clients' success at the heart of everything we do.
                </p>
                <p>
                  Through continuous innovation and a commitment to staying ahead of technological trends, our founder's 
                  mission is to position CEE Company as a trusted partner that helps businesses navigate the digital 
                  landscape with confidence and achieve their strategic objectives.
                </p>
                <p>
                  We are committed to fostering a culture of excellence where every team member is empowered to contribute 
                  their best work. Our founder believes that great results come from great teams, and we invest in creating 
                  an environment where creativity, collaboration, and innovation can thrive.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: '#0ebab1' }}>
              Team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { src: '/cto.png', alt: 'CTO', name: 'Nool ul mubeen', title: 'CTO' },
              { src: '/dev.png', alt: 'Developer', name: 'Hasnain Babar', title: 'Web Development Team Lead' },
              { src: '/emai-team-lead.jpg', alt: 'Email', name: 'Manzoor Ali Hakemzada', title: 'Marketing Manager' },
              { src: '/book-keeper-teamlead.jpg', alt: 'Book Keeper', name: 'Asif Nawaz', title: 'Accounting & Book-keeping Team Lead' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 mb-4">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe In Section */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-center mb-4">
              <h2 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: '#0ebab1' }}>
                What We Believe In
              </h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The core beliefs that guide our actions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-[#242424] border border-gray-200 dark:border-white/10"
                >
                  <div className="p-3 rounded-lg w-fit mb-4" style={{ backgroundColor: '#0ebab1' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {belief.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {belief.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: '#0ebab1' }}>
                Our Milestones
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
              Although we are a growing company, we have quickly earned the trust of businesses looking for reliable and results-focused services. 
              Our dedication to excellence and client success shapes everything we do.
              </p>
              <p>
              In our first year, we successfully delivered numerous projects across diverse industries, helping businesses strengthen their presence and achieve meaningful results.
               Every project has provided valuable insights, allowing us to continuously improve and refine our approach
              </p>
              <p>
              As we look ahead, we are excited about the opportunities to support more clients, expand our team, and create lasting impact.
               Our journey is just beginning, and we remain committed to building a company defined by quality, progress, and long-term client success
              </p>
              <p>
              We believe in building lasting partnerships based on trust, transparency, and consistent performance.
              Our team is driven by passion, precision, and a commitment to delivering measurable value in every project.
              With every milestone we achieve, we strengthen our foundation for sustainable growth and long-term success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
