'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="container-custom">
        {/* Top Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Branding */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo-dark.svg" 
                  alt="CEE Company Logo" 
                  width={80} 
                  height={80} 
                  className="w-20 h-20"
                  priority
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted IT partner for innovative digital solutions and cutting-edge technology services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Web Development</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Mobile Apps</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">3D Visualization</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">UI/UX Design</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Contact</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="/help" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Help Center</a></li>
                <li><a href="/documentation" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Documentation</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Contact Us</a></li>
                <li><a href="/status" className="text-gray-400 hover:text-[#0ebab1] transition-colors duration-200 text-sm">Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CEE Company. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Developed by CEE Company Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
