'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'

// Reusable Components
function CrisisBanner() {
  return (
    <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner">
      <div className="max-w-site mx-auto px-4">
        <span className="opacity-80">Crisis support 24/7:</span>{' '}
        <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        <span className="opacity-50 mx-2">|</span>
        <a href="https://988lifeline.org/chat" className="hover:underline" target="_blank" rel="noopener noreferrer">Chat</a>
      </div>
    </div>
  )
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
      <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-title font-semibold text-xl text-slate-800">
          Pathways Within <span className="text-therapy">Therapy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-slate-700 hover:text-therapy">{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2 text-lg text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-chalkboard text-white py-12">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-title font-semibold text-xl mb-2">Pathways Within Therapy</p>
            <p className="text-slate-400 font-body">Your journey to wisdom, healing, and personal growth.</p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Contact</p>
            <p className="text-slate-400 font-body"><a href="tel:6313713825" className="hover:text-white">(631) 371-3825</a></p>
            <p className="text-slate-400 font-body break-all"><a href="mailto:Welcome@pathwayswithin.com" className="hover:text-white">Welcome@pathwayswithin.com</a></p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Quick Links</p>
            <ul className="space-y-1 text-slate-400 font-body">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Legal</p>
            <ul className="space-y-1 text-slate-400 font-body">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Pathways Within Therapy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Form Error Message Component with aria-live
function FormError({ message, id }: { message: string; id: string }) {
  if (!message) return null
  return (
    <p 
      id={id} 
      role="alert" 
      aria-live="polite" 
      className="text-red-600 text-sm mt-1 font-body"
    >
      {message}
    </p>
  )
}

// Locations Data
const locations = [
  { name: 'Smithtown', address: '496 Smithtown Bypass, Suites 203 & 204', city: 'Smithtown, NY 11787' },
  { name: 'Garden City', address: '520 Franklin Ave, Suite L1', city: 'Garden City, NY 11530' },
  { name: 'Massapequa', address: '4160 Merrick Rd, Suites 5 & 7', city: 'Massapequa, NY 11758' },
  { name: 'Port Jefferson', address: '1227 Main Street, Suite 101', city: 'Port Jefferson, NY 11777' },
  { name: 'Rockville Centre', address: '53 N Park Ave, Suite 203', city: 'Rockville Centre, NY 11570' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (formData.phone && !/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Please consent to be contacted'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Announce success to screen readers
    statusRef.current?.focus()
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Get In Touch</p>
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Let&apos;s Talk</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              Reaching out is the hardest part. Once you do, we&apos;ll guide you through the rest.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-ivory py-16" aria-labelledby="contact-methods-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="contact-methods-heading" className="sr-only">Ways to Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="tel:6313713825" className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group" aria-label="Call us at (631) 371-3825">
                <div className="w-12 h-12 bg-therapy/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-therapy">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-therapy">Call Us</h3>
                <p className="text-therapy font-title font-medium">(631) 371-3825</p>
              </a>
              
              <a href="mailto:Welcome@pathwayswithin.com" className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group" aria-label="Email us at Welcome@pathwayswithin.com">
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-copper">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-copper">Email Us</h3>
                <p className="text-copper font-title font-medium text-sm">Welcome@pathwayswithin.com</p>
              </a>
              
              <a href="https://pathwayswithintherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group" aria-label="Book online through Jane App">
                <div className="w-12 h-12 bg-therapy/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-therapy">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-therapy">Book Online</h3>
                <p className="text-therapy font-title font-medium text-sm">Schedule via Jane App</p>
              </a>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Send Us a Message</h2>
                <p className="text-slate-600 font-body mb-6">
                  Fill out the form and someone from our team will be in touch within one business day.
                </p>
                
                {submitted ? (
                  <div 
                    ref={statusRef}
                    tabIndex={-1}
                    className="bg-therapy/10 border border-therapy/20 rounded-xl p-6 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-12 h-12 bg-therapy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-therapy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 font-body text-sm">We&apos;ll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Error Summary for Screen Readers */}
                    {Object.keys(errors).length > 0 && (
                      <div 
                        role="alert" 
                        aria-live="assertive"
                        className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4"
                      >
                        <p className="text-red-800 font-title font-medium text-sm">Please fix the following errors:</p>
                        <ul className="list-disc list-inside text-red-700 text-sm mt-2 font-body">
                          {Object.entries(errors).map(([field, error]) => (
                            <li key={field}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-title font-medium text-slate-700 mb-1">
                        Name <span className="text-red-500" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        autoComplete="name"
                        required 
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        value={formData.name} 
                        onChange={e => handleChange('name', e.target.value)} 
                        className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
                      />
                      <FormError message={errors.name} id="name-error" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-title font-medium text-slate-700 mb-1">
                          Email <span className="text-red-500" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          autoComplete="email"
                          required 
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          value={formData.email} 
                          onChange={e => handleChange('email', e.target.value)} 
                          className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        <FormError message={errors.email} id="email-error" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-title font-medium text-slate-700 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          autoComplete="tel"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          value={formData.phone} 
                          onChange={e => handleChange('phone', e.target.value)} 
                          className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                        />
                        <FormError message={errors.phone} id="phone-error" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-title font-medium text-slate-700 mb-1">Service Interest</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formData.service} 
                          onChange={e => handleChange('service', e.target.value)} 
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy"
                        >
                          <option value="">Select a service</option>
                          <option value="individual">Individual Therapy</option>
                          <option value="couples">Couples Therapy</option>
                          <option value="child">Child Therapy</option>
                          <option value="teen">Teen Therapy</option>
                          <option value="trauma">Trauma / EMDR</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-title font-medium text-slate-700 mb-1">Preferred Location</label>
                        <select 
                          id="location" 
                          name="location"
                          value={formData.location} 
                          onChange={e => handleChange('location', e.target.value)} 
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy"
                        >
                          <option value="">Select a location</option>
                          <option value="smithtown">Smithtown</option>
                          <option value="garden-city">Garden City</option>
                          <option value="massapequa">Massapequa</option>
                          <option value="port-jefferson">Port Jefferson</option>
                          <option value="rockville-centre">Rockville Centre</option>
                          <option value="telehealth">Telehealth</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-title font-medium text-slate-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4} 
                        value={formData.message} 
                        onChange={e => handleChange('message', e.target.value)} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-therapy" 
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        name="consent"
                        checked={formData.consent} 
                        onChange={e => handleChange('consent', e.target.checked)} 
                        className="mt-1"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                      />
                      <div>
                        <label htmlFor="consent" className="text-sm text-slate-600 font-body">
                          I consent to being contacted about my inquiry. I understand my information will be handled according to the <Link href="/privacy-policy" className="text-therapy hover:underline">Privacy Policy</Link>.
                          <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <FormError message={errors.consent} id="consent-error" />
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-therapy text-white py-3 rounded-lg font-title font-medium hover:bg-therapy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-describedby="submit-description"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <p id="submit-description" className="sr-only">
                      Submitting this form will send your message to our team.
                    </p>
                  </form>
                )}
              </div>

              {/* Locations */}
              <div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Our Locations</h2>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.name} className="bg-white rounded-xl p-4 border border-slate-200">
                      <h3 className="font-title font-semibold text-slate-800">{loc.name}</h3>
                      <p className="text-slate-600 font-body text-sm">{loc.address}</p>
                      <p className="text-slate-600 font-body text-sm">{loc.city}</p>
                    </div>
                  ))}
                  <div className="bg-therapy/5 rounded-xl p-4 border border-therapy/20">
                    <h3 className="font-title font-semibold text-therapy">Telehealth Available</h3>
                    <p className="text-slate-600 font-body text-sm">NY, NJ, NC, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="bg-white py-16" aria-labelledby="next-steps-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="next-steps-heading" className="font-title font-semibold text-2xl text-slate-800 mb-6">What Happens Next</h2>
              <ol className="grid md:grid-cols-4 gap-6 text-center" role="list">
                {[
                  { num: '1', title: 'We Respond', desc: 'Within one business day' },
                  { num: '2', title: 'We Listen', desc: 'To what you\'re looking for' },
                  { num: '3', title: 'We Match', desc: 'You with the right therapist' },
                  { num: '4', title: 'You Schedule', desc: 'Your first appointment' },
                ].map((step) => (
                  <li key={step.num}>
                    <div className="w-10 h-10 bg-therapy text-white rounded-full flex items-center justify-center mx-auto mb-3 font-title font-bold" aria-hidden="true">
                      {step.num}
                    </div>
                    <h3 className="font-title font-medium text-slate-800">Step {step.num}: {step.title}</h3>
                    <p className="text-sm text-slate-600 font-body">{step.desc}</p>
                  </li>
                ))}
              </ol>
              <p className="text-slate-700 font-body mt-8">
                <strong>You don&apos;t have to have everything figured out.</strong> You just need to take the first step.
              </p>
            </div>
          </div>
        </section>

        {/* Sister Practice - With Required Ownership Disclosure */}
        <section className="bg-pearl py-16" aria-labelledby="sister-practice">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-wellness font-title font-medium text-sm uppercase tracking-wide mb-2">Complement Your Healing Journey</p>
              <h2 id="sister-practice" className="font-title font-semibold text-2xl text-slate-800 mb-4">Pathways Within Wellness</h2>
              <p className="text-slate-600 font-body mb-6">
                True healing encompasses mind, body, and spirit. Our sister practice offers massage, 
                acupuncture, facials, IV vitamin infusions, and other rejuvenating wellness services 
                at our Massapequa and Garden City locations.
              </p>
              <p className="text-slate-600 font-body mb-6">
                Many of our therapy clients find that wellness services like massage therapy or 
                energy work complement their therapeutic journey, helping release tension held in 
                the body and supporting overall wellbeing.
              </p>
              <p className="text-slate-700 font-body mb-4">
                <a href="tel:5163369209" className="text-wellness font-semibold text-lg">(516) 336-9209</a>
              </p>
              <a 
                href="https://pathwayswithinwellness.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-wellness text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-wellness-dark transition-colors"
              >
                Explore Wellness Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {/* Required Ownership Disclosure */}
              <p className="text-slate-500 text-xs font-body mt-6 italic">
                Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
                Wellness services are separate from and do not substitute for mental health treatment.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
