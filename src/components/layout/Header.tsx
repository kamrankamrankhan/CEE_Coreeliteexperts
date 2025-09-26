'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Software Engineers', href: '/services/software-engineering' },
      { label: 'DevOps Engineers', href: '/services/devops' },
      { label: 'Cloud Engineers', href: '/services/cloud-engineering' },
      { label: 'AI Engineers', href: '/services/ai-engineering' },
      { label: 'UI/UX Designers', href: '/services/ui-ux-design' },
      { label: 'Graphic Designers', href: '/services/graphic-design' },
      { label: 'Video Editors', href: '/services/video-editing' },
      { label: '3D Artists', href: '/services/3d-art' },
      { label: 'Digital Marketers', href: '/services/digital-marketing' },
    ]
  },
  { 
    label: '3D Demo', 
    href: '/3d-demo',
    children: [
      { label: 'Scroll Animations', href: '/3d-demo#scroll' },
      { label: 'Particle Effects', href: '/3d-demo#particles' },
      { label: 'Interactive Scenes', href: '/3d-demo#interactive' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    children: [
      { label: 'E-commerce', href: '/solutions/ecommerce' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Startup', href: '/solutions/startup' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  // Handle body background when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed lg:relative top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white dark:bg-[#1a1a1a] backdrop-blur-md shadow-lg border-b border-gray-300 dark:border-gray-600'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative">
            <div className="relative">
              <Image 
                src={theme === 'light' ? "/logo-white.svg" : "/logo-dark.svg"} 
                alt="CEE Company Logo" 
                width={100} 
                height={100} 
                className="w-24 h-16 sm:w-24 sm:h-16 lg:w-24 lg:h-16 xl:w-24 xl:h-16 relative z-10"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    
                        {/* Desktop Hover Dropdown */}
                        <div className="absolute top-full left-0 mt-2 w-96 bg-[#f4f4f4] dark:bg-gray-900 rounded-lg shadow-xl border border-gray-300 dark:border-gray-600 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="grid grid-cols-2 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 text-sm"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-transparent text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
                            <Link
                  href="/contact"
                  className="hidden sm:inline-flex px-6 py-3 bg-[#0ebab1] text-white dark:text-black font-semibold rounded-lg hover:bg-[#0ebab1]/90 transition-all duration-200"
                >
                  Book a Consultancy
                </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-transparent text-black dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-300 dark:border-gray-600 fixed top-16 left-0 right-0 bg-white dark:bg-[#1a1a1a] z-40 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              activeDropdown === item.label && "rotate-180"
                            )} 
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
                                onClick={closeMenu}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200 font-medium"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700 dark:border-gray-600">
                  <Link
                    href="/contact"
                    className="block px-4 py-2 bg-[#0ebab1] text-white dark:text-black font-semibold rounded-lg hover:bg-[#0ebab1]/90 transition-all duration-200 text-center"
                    onClick={closeMenu}
                  >
                    Book a Consultancy
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
