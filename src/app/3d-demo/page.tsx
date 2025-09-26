import Layout from '@/components/layout/Layout'
import ScrollThreeScene from '@/components/3d/ScrollThreeScene'
import ParticleScrollScene from '@/components/3d/ParticleScrollScene'
import ThreeScene from '@/components/3d/ThreeScene'

export default function ThreeDDemoPage() {
  return (
    <Layout>
      {/* Hero Section with Particle Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <ParticleScrollScene height="100vh" particleCount={800} />
        </div>
        
        {/* Content Overlay */}
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Interactive <span className="text-gradient">3D Animations</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience our cutting-edge 3D visualizations that respond to your scroll, 
            creating immersive and engaging user experiences.
          </p>
          <div className="text-white/80 text-sm">
            <p>Scroll down to explore different 3D animation types</p>
          </div>
        </div>
      </section>

      {/* Geometric Shapes Animation */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
            Geometric <span className="text-gradient">Shapes</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-8">
            Watch as geometric shapes transform and move based on your scroll position. 
            Each shape has unique behaviors and animations.
          </p>
        </div>
        
        {/* 3D Scene Overlay */}
        <div className="absolute inset-0 z-0">
          <ScrollThreeScene height="100vh" />
        </div>
      </section>

      {/* Interactive 3D Scene */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Interactive <span className="text-gradient">3D Scene</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              A standalone 3D scene with floating geometric objects that continuously animate 
              and respond to theme changes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ThreeScene className="shadow-2xl" />
            <p className="text-center text-secondary-500 dark:text-secondary-400 mt-4 text-sm">
              Standalone 3D scene - Colors automatically adjust to your theme preference
            </p>
          </div>
        </div>
      </section>

      {/* Particle System Demo */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary-900 dark:bg-black overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Particle <span className="text-gradient">System</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Experience a dynamic particle system with thousands of animated particles 
            that respond to scroll position and create mesmerizing visual effects.
          </p>
        </div>
        
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <ParticleScrollScene height="100vh" particleCount={1200} />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              3D Animation <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Our 3D animations are built with performance and user experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Scroll Responsive',
                description: 'All animations respond to scroll position, creating dynamic visual feedback.',
                icon: '🎯'
              },
              {
                title: 'Theme Aware',
                description: 'Colors automatically adjust between light and dark themes for consistency.',
                icon: '🎨'
              },
              {
                title: 'Performance Optimized',
                description: 'Built with efficient rendering techniques for smooth 60fps animations.',
                icon: '⚡'
              },
              {
                title: 'Responsive Design',
                description: 'Adapts to all screen sizes and device capabilities.',
                icon: '📱'
              },
              {
                title: 'Interactive Elements',
                description: 'Engaging user interactions that enhance the browsing experience.',
                icon: '🔄'
              },
              {
                title: 'Customizable',
                description: 'Easy to modify colors, shapes, and animation behaviors.',
                icon: '⚙️'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Technical <span className="text-gradient">Implementation</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Built with modern web technologies for optimal performance and compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <li>• Three.js for 3D graphics rendering</li>
                <li>• WebGL for hardware acceleration</li>
                <li>• React hooks for state management</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                Performance Features
              </h3>
              <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <li>• Efficient buffer geometry</li>
                <li>• Optimized rendering loops</li>
                <li>• Memory management</li>
                <li>• Responsive design</li>
                <li>• Cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 dark:bg-black">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Add 3D to Your Website?
            </h2>
            <p className="text-lg text-secondary-300 mb-8">
              Let's discuss how we can integrate these stunning 3D animations 
              into your company website to create an unforgettable user experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </a>
              <a href="/services" className="btn-secondary text-lg px-8 py-4 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
