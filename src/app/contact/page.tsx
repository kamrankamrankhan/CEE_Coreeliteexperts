'use client'

import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { ChevronDown, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index))
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-primary dark:bg-secondary-900 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Our specialists in Development, DevOps, UI/UX, Email Marketing, and Bookkeeping are ready to help you achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[440px,1fr] gap-12 items-start">
            {/* Contact Card */}
            <div className="bg-[#0ebab1] rounded-2xl p-10 text-white shadow-xl min-h-[520px] border border-secondary-700">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-semibold">Visit us</p>
                  <p className="text-white/90">
                  CEE Company , 2nd Floor, Thrift Bank Building , Shah Sultan Chowk, KKH , Danyore
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Chat to us</p>
                  <p className="text-white/90">
                    Our friendly team is here to help.
                    <br />
                    coreeliteexperts@gmail.com
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="text-white/90">
                    Mon-Fri from 10am to 4am
                    <br />
                    03428914050
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Social media</p>
                  <div className="flex items-center space-x-3 text-white/90">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      aria-label="Fiverr"
                      className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden="true">
                        <text x="5" y="16" fill="currentColor" fontSize="10" fontWeight="700">
                          fi
                        </text>
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Upwork"
                      className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden="true">
                        <text x="3" y="16" fill="currentColor" fontSize="10" fontWeight="700">
                          up
                        </text>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary-900 text-white">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200"
                    placeholder="+923-555889675"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary-800 text-white border border-secondary-700 focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us what we can help you with"
                  ></textarea>
                </div>

                <label className="flex items-start space-x-2 text-xs text-white/70">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I'd like to receive more information about company. I understand and agree to the{' '}
                    <span className="underline">Privacy Policy</span>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0ebab1] text-white font-semibold hover:bg-[#0ebab1]/90 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              If you can't find an answer that you're looking for, feel free to drop us a line.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What exactly do you guys do?",
                answer:
                  "We help businesses build, automate, design, and grow. From bookkeeping and financial clarity to development, DevOps, UI/UX, and email marketing — we handle the heavy lifting so you can focus on scaling."
              },
              {
                question: "Do you work with startups?",
                answer:
                  "Absolutely. We love startups. Whether you're validating an idea or scaling fast, we build solutions that grow with you."
              },
              {
                question: "Can I hire just one service?",
                answer:
                  " Yes. Need only DevOps? Just UI/UX? Only bookkeeping? No problem.You can work with one team or combine services for a complete solution.     "
              },
              {
                question: "How long does a project take?",
                answer:
                  "It depends on scope and complexity. After our first discussion, we give you a clear roadmap with realistic timelines."
              },
              {
                question: "How do you handle security and data protection?",
                answer:
                  "We follow modern best practices in infrastructure, deployment, and access control to keep your systems secure and reliable."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-800 px-5 py-4"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={openFaqIndex === index}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary-500 dark:text-secondary-300 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <p className="mt-3 text-sm sm:text-base text-secondary-600 dark:text-secondary-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
