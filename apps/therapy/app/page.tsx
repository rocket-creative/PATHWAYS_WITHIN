'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../components/Footer'

// ============================================
// FLAT ICONS - Single color, clean strokes
// ============================================
const icons = {
  person: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  couple: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  child: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  teen: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  eye: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  body: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75v7.5m-4.5-4.5l4.5 4.5 4.5-4.5" />
    </svg>
  ),
  spiral: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  badge: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  monitor: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  arrow: (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  external: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  ),
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

function CrisisBanner() {
  return (
    <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner" aria-label="Crisis support resources">
      <div className="max-w-site mx-auto px-4">
        <span className="opacity-80">Crisis support 24/7:</span>{' '}
        <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        <span className="opacity-50 mx-2">|</span>
        <a href="https://988lifeline.org/chat" className="hover:underline" target="_blank" rel="noopener noreferrer">Chat</a>
        <span className="opacity-50 mx-2 hidden sm:inline">|</span>
        <span className="hidden sm:inline opacity-80">Text HOME to 741741</span>
      </div>
    </div>
  )
}

function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const searchResults = [
    { title: 'Individual Therapy', href: '/services/individual-therapy', cat: 'Service' },
    { title: 'EMDR Therapy', href: '/services/emdr-therapy', cat: 'Service' },
    { title: 'Couples Therapy', href: '/services/couples-therapy', cat: 'Service' },
    { title: 'Trauma Therapy', href: '/services/trauma-therapy', cat: 'Service' },
    { title: 'Child & Teen Therapy', href: '/services/child-therapy', cat: 'Service' },
    { title: 'Our Locations', href: '/locations', cat: 'Info' },
    { title: 'About Us', href: '/about', cat: 'Info' },
    { title: 'Contact Us', href: '/contact', cat: 'Info' },
  ].filter(r => searchQuery.length > 1 && r.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      {/* Pure white nav - no border */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-title font-semibold text-xl text-slate-800" aria-label="Pathways Within Therapy Home">
            Pathways Within <span className="text-therapy">Therapy</span>
          </Link>
          
          <ul className="hidden md:flex items-center gap-6 text-sm font-body" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-700 hover:text-therapy link-underline transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-500 hover:text-therapy" aria-label="Open search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <a 
              href="https://pathwayswithintherapy.janeapp.com/" 
              className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg btn-hover font-title font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-2 text-lg text-slate-700 font-body" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                </li>
              ))}
              <li className="pt-4 border-t border-slate-100">
                <a href="tel:6313713825" className="block text-center bg-therapy text-white py-3 rounded-lg font-title font-medium">Call (631) 371-3825</a>
              </li>
              <li className="text-center text-sm text-slate-500 pt-2">
                <a href="tel:6313713825" className="hover:text-therapy">(631) 371-3825</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsSearchOpen(false)} role="dialog" aria-modal="true" aria-label="Search">
          <div className="max-w-xl mx-auto mt-20 px-4" onClick={e => e.stopPropagation()}>
            <div className="bg-white rounded-xl shadow-xl animate-slide-down overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search services, team, locations..."
                  className="w-full text-lg text-slate-800 outline-none font-body"
                  autoFocus
                  onKeyDown={e => e.key === 'Escape' && setIsSearchOpen(false)}
                />
              </div>
              {searchQuery.length > 1 && (
                <ul className="max-h-72 overflow-y-auto">
                  {searchResults.length > 0 ? searchResults.map((r, i) => (
                    <li key={i}>
                      <Link href={r.href} className="flex items-center justify-between p-4 hover:bg-ivory border-b border-slate-50 last:border-0" onClick={() => setIsSearchOpen(false)}>
                        <span className="text-slate-700 font-body">{r.title}</span>
                        <span className="text-xs text-therapy bg-therapy/10 px-2 py-0.5 rounded font-title">{r.cat}</span>
                      </Link>
                    </li>
                  )) : (
                    <li className="p-4 text-slate-500 text-center font-body">No results found</li>
                  )}
                </ul>
              )}
              <div className="p-3 bg-ivory text-xs text-slate-500 text-center font-body">Press ESC to close</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Footer imported from ../components/Footer

// ============================================
// PAGE DATA
// ============================================

const services = [
  { id: 'individual-therapy', name: 'Individual Therapy', description: 'One-on-one counseling for personal growth and healing', icon: 'person' },
  { id: 'couples-therapy', name: 'Couples Therapy', description: 'Strengthen your relationship together', icon: 'couple' },
  { id: 'child-therapy', name: 'Child Therapy', description: 'Specialized support for children ages 5-12', icon: 'child' },
  { id: 'teen-therapy', name: 'Teen Therapy', description: 'Adolescent-focused mental health support', icon: 'teen' },
  { id: 'trauma-therapy', name: 'Trauma Therapy', description: 'Healing from past experiences with evidence-based care', icon: 'heart' },
  { id: 'emdr-therapy', name: 'EMDR Therapy', description: 'Eye Movement Desensitization and Reprocessing', icon: 'eye' },
  { id: 'somatic-therapy', name: 'Somatic Therapy', description: 'Body-based healing approaches', icon: 'body' },
  { id: 'hypnotherapy', name: 'Hypnotherapy', description: 'Therapeutic hypnosis for lasting change', icon: 'spiral' },
  { id: 'veterans-first-responders', name: 'Veterans & First Responders', description: 'Specialized support for those who serve', icon: 'badge' },
]

const locations = [
  { name: 'Smithtown', address: '496 Smithtown Bypass, Suites 203 & 204' },
  { name: 'Garden City', address: '520 Franklin Ave, Suite L1' },
  { name: 'Massapequa', address: '4160 Merrick Rd, Suites 5 & 7' },
  { name: 'Port Jefferson', address: '1227 Main Street, Suite 101' },
  { name: 'Rockville Centre', address: '53 N Park Ave, Suite 203' },
]

const faqs = [
  { q: 'What types of therapy do you offer?', a: 'We offer individual therapy, couples therapy, family therapy, child & teen therapy, EMDR therapy, trauma therapy, somatic therapy, and hypnotherapy. Each service is tailored to your unique needs by our licensed clinicians.' },
  { q: 'Do you accept insurance?', a: 'Yes! We accept most major insurance plans including Aetna, Cigna, UHC, Oxford, Humana, Medicare, NYSHIP, and many more. We also offer sliding scale options for those who qualify.' },
  { q: 'Do you offer telehealth sessions?', a: 'Absolutely! We offer secure, HIPAA-compliant telehealth sessions for clients in New York, New Jersey, North Carolina, and Florida. Meet with your therapist from anywhere.' },
  { q: 'How do I book my first appointment?', a: 'You can book online through our secure portal or call (631) 371-3825. Our team will help match you with a therapist suited to your needs and schedule your first session.' },
  { q: 'What should I expect in my first session?', a: 'Your first session focuses on getting to know you—your concerns, history, and goals. Together with your therapist, you\'ll develop a personalized treatment plan. Sessions are typically one hour.' },
]

// ============================================
// THERAPY HOMEPAGE
// ============================================

export default function TherapyHome() {
  const getIcon = (name: string) => icons[name as keyof typeof icons] || icons.person

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        {/* Hero - Pure white */}
        <section className="bg-white min-h-[calc(100vh-120px)] flex items-center py-12 md:py-0" aria-labelledby="hero-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="animate-fade-in-up">
              <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Pathway to Wisdom</p>
              <h1 id="hero-heading" className="font-title font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-4">
                Your Journey to Healing Begins Here
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-6 font-body">
                Licensed mental health therapy across Long Island. Individual, couples, family, 
                trauma, and specialized care—in person or via telehealth.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a 
                  href="https://pathwayswithintherapy.janeapp.com/"
                  className="bg-therapy text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
                <a href="tel:6313713825" className="border-2 border-therapy text-therapy px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover hover:bg-therapy hover:text-white transition-colors">
                  Call (631) 371-3825
                </a>
              </div>
              <p className="text-sm text-slate-500 font-body">
                5 Long Island locations + telehealth in NY, NJ, NC, FL
              </p>
            </div>
            <div className="bg-pearl border border-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center animate-fade-in-up stagger-2" aria-label="Therapy session image placeholder">
              <span className="text-slate-400 text-sm font-body">Hero Image</span>
            </div>
          </div>
        </section>

        {/* Services - Ultra light ivory */}
        <section className="bg-ivory py-16 md:py-20" aria-labelledby="services-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Our Therapy Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-body">
                Every path to healing is unique. Our licensed clinicians offer a range of evidence-based therapies 
                tailored to your specific needs and goals.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <Link 
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-therapy/10 rounded-lg flex items-center justify-center text-therapy flex-shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-therapy transition-colors">{service.name}</h3>
                      <p className="text-sm text-slate-600 font-body">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center text-therapy font-title font-medium hover:underline">
                View all services
                {icons.arrow}
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition - White */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="value-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-linen border border-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center order-2 md:order-1 hover-lift">
              <span className="text-slate-400 text-sm font-body">Image</span>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Our Philosophy</p>
              <h2 id="value-heading" className="font-title font-semibold text-3xl text-slate-800 mb-4">Knowing Yourself Is the Beginning of Wisdom</h2>
              <p className="text-slate-600 leading-relaxed font-body mb-4">
                We believe therapy is fundamentally a path to knowing yourself better—with the goal of managing 
                mental health challenges more effectively. When you understand why you think, feel, and behave 
                the way you do, you gain the power to make different choices.
              </p>
              <p className="text-slate-600 leading-relaxed font-body">
                Our team of licensed therapists brings years of education, clinical experience, and specialized 
                skills to support your healing. Together, we create the conditions for real, lasting change.
              </p>
              <div className="mt-6">
                <Link href="/team" className="inline-flex items-center text-therapy font-title font-medium hover:underline">
                  Meet our team
                  {icons.arrow}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accessible Care - Pearl */}
        <section className="bg-pearl py-16 md:py-20" aria-labelledby="insurance-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 id="insurance-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Accessible Care</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-body">We accept most major insurance plans and offer flexible options.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-therapy/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-therapy">
                  {icons.shield}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Insurance Accepted</h3>
                <p className="text-sm text-slate-600 font-body">Aetna, Cigna, UHC, Oxford, Medicare, and many more. We&apos;ll verify your benefits.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-copper">
                  {icons.monitor}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Telehealth Available</h3>
                <p className="text-sm text-slate-600 font-body">Secure video sessions from anywhere in NY, NJ, NC, or FL. Same quality care, more convenience.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-therapy/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-therapy">
                  {icons.clock}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Flexible Hours</h3>
                <p className="text-sm text-slate-600 font-body">Evening appointments available up to 11 PM with select clinicians. We work around your schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations - White */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="locations-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 id="locations-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Our Locations</h2>
              <p className="text-slate-600 font-body">5 convenient Long Island locations, plus telehealth throughout the Northeast.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <Link 
                  key={loc.name}
                  href={`/locations/${loc.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="bg-ivory rounded-xl p-5 border border-slate-200 hover-lift group"
                >
                  <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-therapy transition-colors">{loc.name}</h3>
                  <p className="text-sm text-slate-600 font-body">{loc.address}</p>
                </Link>
              ))}
              <div className="bg-therapy/5 rounded-xl p-5 border border-therapy/20">
                <h3 className="font-title font-semibold text-lg text-therapy mb-1">Telehealth</h3>
                <p className="text-sm text-slate-600 font-body">Available in NY, NJ, NC, FL</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/locations" className="inline-flex items-center text-therapy font-title font-medium hover:underline">
                View all locations & directions
                {icons.arrow}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ - Ivory */}
        <section className="bg-ivory py-16 md:py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 id="faq-heading" className="font-title font-semibold text-3xl text-slate-800 text-center mb-10">Frequently Asked Questions</h2>
            <dl className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-5 hover-lift border border-slate-200">
                  <dt className="font-title font-medium text-slate-800 mb-2">{faq.q}</dt>
                  <dd className="text-slate-600 text-sm leading-relaxed font-body">{faq.a}</dd>
                </div>
              ))}
            </dl>
            <div className="text-center mt-8">
              <Link href="/faq" className="inline-flex items-center text-therapy font-title font-medium hover:underline">
                View all FAQs
                {icons.arrow}
              </Link>
            </div>
          </div>
        </section>

        {/* Sister Practice - White with blue accent */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="sister-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-wellness/20 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-wellness font-title font-medium text-sm uppercase tracking-wide mb-2">Our Sister Practice</p>
              <h2 id="sister-heading" className="font-title font-semibold text-2xl md:text-3xl text-slate-800 mb-4">Pathways Within Wellness</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6 font-body">
                True healing happens when mind and body are supported together. Our wellness practice offers 
                massage, acupuncture, IV therapy, and holistic body care to complement your therapeutic journey.
              </p>
              <a 
                href="https://pathwayswellness.com" 
                className="inline-flex items-center bg-wellness text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Wellness Services
                {icons.external}
              </a>
            </div>
          </div>
        </section>

        {/* CTA - Wisdom green */}
        <section className="bg-therapy py-16" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-title font-bold text-3xl text-white mb-3">Ready to Begin Your Journey?</h2>
            <p className="text-white/80 mb-6 font-body">Take the first step toward healing and self-discovery. Our team is here to help.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://pathwayswithintherapy.janeapp.com/"
                className="bg-white text-therapy px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Online
              </a>
              <a href="tel:6313713825" className="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover hover:bg-white/10">
                Call (631) 371-3825
              </a>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="bg-pearl py-4" aria-label="Ownership disclosure">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <p className="text-xs text-slate-500 text-center font-body">
              <strong className="text-slate-700">Disclosure:</strong> Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
              Wellness services are separate from and do not substitute for mental health treatment.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
