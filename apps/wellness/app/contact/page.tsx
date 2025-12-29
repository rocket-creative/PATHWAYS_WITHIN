'use client'

import Link from 'next/link'
import { useState } from 'react'

// Reusable Components
function CrisisBanner() {
  return (
    <div className="bg-wellness-dark text-white text-center py-2 text-sm" role="banner">
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
    <nav className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-title font-semibold text-xl text-slate-800">
          Pathways Within <span className="text-wellness">Wellness</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-slate-700 hover:text-wellness">{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Menu">
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
            <p className="font-title font-semibold text-xl mb-2">Pathways Within Wellness</p>
            <p className="text-slate-400 font-body">Your journey to wellness, beauty, and renewal.</p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Contact</p>
            <p className="text-slate-400 font-body"><a href="tel:5163369209" className="hover:text-white">(516) 336-9209</a></p>
            <p className="text-slate-400 font-body break-all"><a href="mailto:info@pathwayswithinwellness.com" className="hover:text-white">info@pathwayswithinwellness.com</a></p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Services</p>
            <ul className="space-y-1 text-slate-400 font-body">
              <li><Link href="/services/massage" className="hover:text-white">Massage</Link></li>
              <li><Link href="/services/facials-skincare" className="hover:text-white">Facials</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
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
          © {new Date().getFullYear()} Pathways Within Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Locations
const locations = [
  { name: 'Massapequa', address: '4160 Merrick Rd', city: 'Massapequa, NY 11758' },
  { name: 'Garden City', address: '647 Franklin Ave, Lower Level', city: 'Garden City, NY 11530' },
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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              Ready to begin your wellness journey? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <a href="tel:5163369209" className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group">
                <div className="w-12 h-12 bg-wellness/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-wellness">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-wellness">Call Us</h3>
                <p className="text-wellness font-title font-medium">(516) 336-9209</p>
                <p className="text-slate-500 text-sm font-body mt-1">Best way to book appointments</p>
              </a>
              
              <a href="mailto:info@pathwayswithinwellness.com" className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group">
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-copper">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-copper">Email Us</h3>
                <p className="text-copper font-title font-medium text-sm">info@pathwayswithinwellness.com</p>
                <p className="text-slate-500 text-sm font-body mt-1">For questions & inquiries</p>
              </a>
            </div>

            {/* Contact Form & Locations */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Send Us a Message</h2>
                <p className="text-slate-600 font-body mb-6">
                  Have a question or want to inquire about a service? Fill out the form and we&apos;ll get back to you.
                </p>
                
                {submitted ? (
                  <div className="bg-wellness/10 border border-wellness/20 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-wellness/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-wellness" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 font-body text-sm">Thank you! We&apos;ll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-title font-medium text-slate-700 mb-1">Name *</label>
                      <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-title font-medium text-slate-700 mb-1">Email *</label>
                        <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-title font-medium text-slate-700 mb-1">Phone</label>
                        <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-title font-medium text-slate-700 mb-1">Service Interest</label>
                        <select id="service" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness">
                          <option value="">Select a service</option>
                          <option value="massage">Massage</option>
                          <option value="acupuncture">Acupuncture</option>
                          <option value="facial">Facials & Skincare</option>
                          <option value="iv">IV Vitamin Infusion</option>
                          <option value="body">Body Sculpting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-title font-medium text-slate-700 mb-1">Preferred Location</label>
                        <select id="location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness">
                          <option value="">Select a location</option>
                          <option value="massapequa">Massapequa</option>
                          <option value="garden-city">Garden City</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-title font-medium text-slate-700 mb-1">Message</label>
                      <textarea id="message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-wellness" placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})} className="mt-1" required />
                      <label htmlFor="consent" className="text-sm text-slate-600 font-body">
                        I consent to being contacted about my inquiry. I understand my information will be handled according to the <Link href="/privacy-policy" className="text-wellness hover:underline">Privacy Policy</Link>.
                      </label>
                    </div>
                    <button type="submit" className="w-full bg-wellness text-white py-3 rounded-lg font-title font-medium hover:bg-wellness-dark transition-colors">
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Locations */}
              <div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Our Locations</h2>
                <div className="space-y-4 mb-8">
                  {locations.map((loc) => (
                    <div key={loc.name} className="bg-white rounded-xl p-6 border border-slate-200">
                      <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">{loc.name}</h3>
                      <p className="text-slate-600 font-body">{loc.address}</p>
                      <p className="text-slate-600 font-body mb-4">{loc.city}</p>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.address}, ${loc.city}`)}`} target="_blank" rel="noopener noreferrer" className="text-wellness font-title text-sm font-medium hover:underline">
                        Get Directions →
                      </a>
                    </div>
                  ))}
                </div>

                <div className="bg-pearl rounded-xl p-6 border border-slate-200">
                  <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Hours</h3>
                  <ul className="space-y-1 text-slate-600 font-body text-sm">
                    <li className="flex justify-between"><span>Monday - Friday</span><span>9am - 6pm</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span>10am - 4pm</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Practice - With Required Ownership Disclosure */}
        <section className="bg-pearl py-16" aria-labelledby="sister-practice">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">Looking for Mental Health Support?</p>
              <h2 id="sister-practice" className="font-title font-semibold text-2xl text-slate-800 mb-4">Pathways Within Therapy</h2>
              <p className="text-slate-600 font-body mb-6">
                Our sister practice offers individual, couples, family, and specialized therapy services 
                at five Long Island locations plus telehealth throughout New York, New Jersey, North Carolina, and Florida.
              </p>
              <p className="text-slate-600 font-body mb-6">
                Many of our wellness clients find that professional mental health support complements 
                their self-care journey, providing tools for stress management, relationship health, and personal growth.
              </p>
              <p className="text-slate-700 font-body mb-4">
                <a href="tel:6313713825" className="text-therapy font-semibold text-lg">(631) 371-3825</a>
              </p>
              <a 
                href="https://pathways-therapy.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-therapy-dark transition-colors"
              >
                Explore Therapy Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {/* Required Ownership Disclosure */}
              <p className="text-slate-500 text-xs font-body mt-6 italic">
                Pathways Within Wellness and Pathways Within Therapy operate under common ownership. 
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

