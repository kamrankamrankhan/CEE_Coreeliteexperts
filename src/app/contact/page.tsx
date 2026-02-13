'use client'

import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react'

type ContactFormState = {
  firstName: string
  lastName: string
  email: string
  company: string
  service: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>

const initialFormState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  service: '',
  message: ''
}

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = (values: ContactFormState) => {
    const nextErrors: ContactFormErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!values.firstName.trim()) {
      nextErrors.firstName = 'First name is required.'
    }

    if (!values.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!values.service.trim()) {
      nextErrors.service = 'Please select a service.'
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target

    setFormState((prev) => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(formState)

    setErrors(nextErrors)
    setSubmitError('')

    if (Object.keys(nextErrors).length === 0) {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        setSubmitError('Web3Forms access key is missing.')
        return
      }

      setIsSubmitting(true)
      setIsSubmitted(false)
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New contact request: ${formState.firstName} ${formState.lastName}`,
            from_name: 'CEE Website',
            name: `${formState.firstName} ${formState.lastName}`,
            email: formState.email,
            company: formState.company,
            service: formState.service,
            message: formState.message
          })
        })

        if (!response.ok) {
          const responseText = await response.text()
          throw new Error(responseText || 'Unable to send message.')
        }

        setIsSubmitted(true)
        setFormState(initialFormState)
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unable to send message.'
        setSubmitError(message)
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setIsSubmitted(false)
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can help bring your vision to life 
              with our innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                        errors.firstName ? 'border-red-500' : 'border-secondary-300 dark:border-secondary-600'
                      }`}
                      placeholder="Your first name"
                      required
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.lastName)}
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                        errors.lastName ? 'border-red-500' : 'border-secondary-300 dark:border-secondary-600'
                      }`}
                      placeholder="Your last name"
                      required
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-secondary-300 dark:border-secondary-600'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Previous Company Work Experience
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Where have you worked before?"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                      errors.service ? 'border-red-500' : 'border-secondary-300 dark:border-secondary-600'
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="3d-visualization">3D Visualization</option>
                    <option value="consulting">Consulting</option>
                    <option value="software-engineers">Software Engineers</option>
                    <option value="devops-engineers">DevOps Engineers</option>
                    <option value="cloud-engineers">Cloud Engineers</option>
                    <option value="ai-engineers">AI Engineers</option>
                    <option value="ui-ux-designers">UI/UX Designers</option>
                    <option value="graphic-designers">Graphic Designers</option>
                    <option value="video-editors">Video Editors</option>
                    <option value="3d-artists">3D Artists</option>
                    <option value="digital-marketers">Digital Marketers</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-secondary-300 dark:border-secondary-600'
                    }`}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-200">
                    {submitError}
                  </div>
                )}

                {isSubmitted && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
                    Thanks! Your message has been received. We'll reply soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-secondary-900 dark:text-white mb-8">
                  Contact Information
                </h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                  We'd love to hear from you. Get in touch with us using any of the methods below, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                      Email Us
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      hello@ceecompany.com
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                      Call Us
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                      Monday - Friday, 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                      Visit Us
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      123 Innovation Drive<br />
                      Tech City, TC 12345
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-secondary-600 dark:text-secondary-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern, industry-standard technologies including Next.js, React, TypeScript, Three.js, and more. We choose the best tools for each project's specific requirements."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support packages including maintenance, updates, and technical support. We're committed to your long-term success."
              },
              {
                question: "Can you work with existing systems?",
                answer: "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure to enhance and extend your capabilities."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="card"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
