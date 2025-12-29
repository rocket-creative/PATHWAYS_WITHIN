'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../components/Footer'

// ============================================
// FLAT ICONS - Single color, clean strokes
// ============================================
const icons = {
  sparkle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  hand: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
    </svg>
  ),
  face: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  drop: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.28.041.56.08.841.117l2.122 3.536a.75.75 0 001.278 0l2.122-3.536c.28-.037.561-.076.841-.117 1.978-.29 3.348-2.024 3.348-3.97V6.741c0-1.946-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25z" />
    </svg>
  ),
  needle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  energy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  hair: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  teeth: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10h.01M15 10h.01" />
    </svg>
  ),
  body: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75v7.5m-4.5-4.5l4.5 4.5 4.5-4.5" />
    </svg>
  ),
  laser: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  leaf: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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
  phone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

function CrisisBanner() {
  return (
    <div className="bg-wellness-dark text-white text-center py-2 text-sm" role="banner" aria-label="Crisis support resources">
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
    { title: 'Massage Services', href: '/services/massage', cat: 'Service' },
    { title: 'Acupuncture', href: '/services/acupuncture', cat: 'Service' },
    { title: 'HydraFacial', href: '/services/hydrafacial', cat: 'Service' },
    { title: 'IV Vitamin Infusion', href: '/services/iv-vitamin-infusion', cat: 'Service' },
    { title: 'Body Sculpting', href: '/services/body-sculpting', cat: 'Service' },
    { title: 'Hair Restoration', href: '/services/hair-restoration', cat: 'Service' },
    { title: 'Energy Work', href: '/services/energy-work', cat: 'Service' },
    { title: 'Our Locations', href: '/locations', cat: 'Info' },
    { title: 'Contact Us', href: '/contact', cat: 'Info' },
  ].filter(r => searchQuery.length > 1 && r.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-title font-semibold text-xl text-slate-800" aria-label="Pathways Within Wellness Home">
            Pathways Within <span className="text-wellness">Wellness</span>
          </Link>
          
          <ul className="hidden md:flex items-center gap-6 text-sm font-body" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-700 hover:text-wellness link-underline transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-500 hover:text-wellness" aria-label="Open search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <a 
              href="https://pathwayswithinwellness.janeapp.com/" 
              className="hidden sm:inline-flex items-center gap-2 bg-wellness text-white text-sm px-4 py-2 rounded-lg btn-hover font-title font-medium"
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
                <a href="tel:5163369209" className="block text-center bg-wellness text-white py-3 rounded-lg font-title font-medium">Call (516) 336-9209</a>
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
                  placeholder="Search services, locations..."
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
                        <span className="text-xs text-wellness bg-wellness/10 px-2 py-0.5 rounded font-title">{r.cat}</span>
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
  { id: 'massage', name: 'Massage Therapy', description: 'Relaxation, Swedish, sports, hot stone & prenatal', icon: 'hand', category: 'Body' },
  { id: 'acupuncture', name: 'Acupuncture', description: 'Traditional Chinese medicine for modern wellness', icon: 'needle', category: 'Healing' },
  { id: 'hydrafacial', name: 'HydraFacial', description: 'Deep cleansing, exfoliation & hydration', icon: 'sparkle', category: 'Facial' },
  { id: 'facials-skincare', name: 'Facials & Skincare', description: 'Oxygen dome, Hollywood carbon & custom facials', icon: 'face', category: 'Facial' },
  { id: 'iv-vitamin-infusion', name: 'IV Vitamin Infusion', description: 'Direct nutrient delivery for energy & wellness', icon: 'drop', category: 'Wellness' },
  { id: 'rf-microneedling', name: 'Genius RF Microneedling', description: 'Skin tightening & texture improvement', icon: 'sparkle', category: 'Advanced' },
  { id: 'body-sculpting', name: 'Body Sculpting', description: 'Lutronic Accufit non-invasive toning', icon: 'body', category: 'Body' },
  { id: 'prp-vampire-facial', name: 'PRP Vampire Facial', description: 'Natural skin rejuvenation with your own plasma', icon: 'sparkle', category: 'Advanced' },
  { id: 'hair-restoration', name: 'Hair Restoration', description: 'KeraLase treatment for thinning hair', icon: 'hair', category: 'Advanced' },
  { id: 'teeth-whitening', name: 'Teeth Whitening', description: '3-12 shades lighter in just 15 minutes', icon: 'teeth', category: 'Beauty' },
  { id: 'energy-work', name: 'Energy Work', description: 'Reiki & Integrative Energy Therapy', icon: 'energy', category: 'Healing' },
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', description: 'Permanent hair reduction technology', icon: 'laser', category: 'Beauty' },
]

const locations = [
  { name: 'Massapequa', address: '4160 Merrick Rd, Massapequa, NY 11758' },
  { name: 'Garden City', address: '647 Franklin Ave, Lower Level, Garden City, NY 11530' },
]

const faqs = [
  { q: 'What wellness services do you offer?', a: 'We offer massage therapy, acupuncture, facials (HydraFacial, PRP, RF microneedling), IV vitamin infusion, body sculpting, hair restoration, teeth whitening, energy work (Reiki), and more.' },
  { q: 'Do you accept insurance?', a: 'Wellness services are typically self-pay. We offer flexible payment options through Cherry financing. Contact us for specific pricing and payment plans.' },
  { q: 'How do I book an appointment?', a: 'Call us at (516) 336-9209 to schedule your appointment. We recommend booking in advance for popular services like massage and facials.' },
  { q: 'What locations do you serve?', a: 'We have two Long Island locations: Massapequa (4160 Merrick Rd) and Garden City (647 Franklin Ave, Lower Level). Both offer our full range of services.' },
  { q: 'What is your connection to Pathways Within Therapy?', a: 'Pathways Within Wellness and Pathways Within Therapy operate under common ownership with a shared philosophy of whole-person care. Wellness services complement but do not substitute for mental health treatment.' },
]

// ============================================
// WELLNESS HOMEPAGE
// ============================================

export default function WellnessHome() {
  const getIcon = (name: string) => icons[name as keyof typeof icons] || icons.sparkle

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
              <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Pathway to Wellness</p>
              <h1 id="hero-heading" className="font-title font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-4">
                Welcome to Your Wellness
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-6 font-body">
                Let us help you build a beautiful outside that matches your inside. Premium spa 
                and holistic wellness services on Long Island.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a 
                  href="tel:5163369209"
                  className="bg-wellness text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover inline-flex items-center gap-2"
                >
                  {icons.phone}
                  Call to Book
                </a>
                <Link href="/services" className="border-2 border-wellness text-wellness px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover hover:bg-wellness hover:text-white transition-colors">
                  View Services
                </Link>
              </div>
              <p className="text-sm text-slate-500 font-body">
                Massapequa & Garden City locations
              </p>
            </div>
            <div className="bg-pearl border border-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center animate-fade-in-up stagger-2" aria-label="Wellness spa image placeholder">
              <span className="text-slate-400 text-sm font-body">Hero Image</span>
            </div>
          </div>
        </section>

        {/* Mind-Body Connection - Ivory */}
        <section className="bg-ivory py-16 md:py-20" aria-labelledby="philosophy-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-linen border border-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center order-2 md:order-1 hover-lift">
              <span className="text-slate-400 text-sm font-body">Image</span>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Our Philosophy</p>
              <h2 id="philosophy-heading" className="font-title font-semibold text-3xl text-slate-800 mb-4">You Deserve to Love What You See</h2>
              <p className="text-slate-600 leading-relaxed font-body mb-4">
                Loving yourself is not about the way you look, but it can make a difference to feel like 
                what you see on the outside matches the aspirations you&apos;re reaching for from within.
              </p>
              <p className="text-slate-600 leading-relaxed font-body mb-4">
                Your body, your confidence, and your image are yours to own. If you&apos;re ready to change 
                the skin you&apos;re in so you can feel your confidence from the top of your head to the 
                depths of your soul, we invite you to follow that pathway to wellness within.
              </p>
              <p className="text-wellness font-title font-medium italic">
                &ldquo;Being well is an inside job, but often the way we feel about ourselves moves in reverse.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Services - White */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="services-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Our Wellness Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-body">
                Personalized care to tend to your mind, body, and spirit so that you can be your best self, inside and out.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <Link 
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="bg-ivory rounded-xl p-5 border border-slate-200 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wellness/10 rounded-lg flex items-center justify-center text-wellness flex-shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <span className="text-xs text-copper font-title uppercase tracking-wide">{service.category}</span>
                      <h3 className="font-title font-semibold text-lg text-slate-800 mb-1 group-hover:text-wellness transition-colors">{service.name}</h3>
                      <p className="text-sm text-slate-600 font-body">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center text-wellness font-title font-medium hover:underline">
                View all services
                {icons.arrow}
              </Link>
            </div>
          </div>
        </section>

        {/* Mission - Pearl */}
        <section className="bg-pearl py-16 md:py-20" aria-labelledby="mission-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 id="mission-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Our Mission</h2>
              <p className="text-slate-600 max-w-3xl mx-auto font-body">
                We create a tranquil and serene atmosphere by combining beauty and wellness through 
                environmentally friendly products, organic options, and holistic services that honor the whole person.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-wellness/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-wellness">
                  {icons.heart}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Whole-Person Care</h3>
                <p className="text-sm text-slate-600 font-body">Mind, body & spirit in harmony</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-copper">
                  {icons.leaf}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Eco-Friendly</h3>
                <p className="text-sm text-slate-600 font-body">Organic and sustainable options</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-wellness/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-wellness">
                  {icons.shield}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Expert Team</h3>
                <p className="text-sm text-slate-600 font-body">Licensed, certified professionals</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center hover-lift border border-slate-200">
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-copper">
                  {icons.globe}
                </div>
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Holistic Approach</h3>
                <p className="text-sm text-slate-600 font-body">Body, spirit, mind & earth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations - White */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="locations-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <h2 id="locations-heading" className="font-title font-semibold text-3xl text-slate-800 mb-3">Visit Us</h2>
              <p className="text-slate-600 font-body">Two convenient Long Island locations to serve you.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {locations.map((loc) => (
                <Link 
                  key={loc.name}
                  href={`/locations/${loc.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="bg-ivory rounded-xl p-6 border border-slate-200 hover-lift group"
                >
                  <h3 className="font-title font-semibold text-xl text-slate-800 mb-2 group-hover:text-wellness transition-colors">{loc.name}</h3>
                  <p className="text-slate-600 font-body mb-4">{loc.address}</p>
                  <div className="flex items-center text-wellness font-title text-sm font-medium">
                    Get directions
                    {icons.arrow}
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="tel:5163369209" className="inline-flex items-center gap-2 text-slate-700 font-body hover:text-wellness">
                {icons.phone}
                <span className="font-title font-semibold">(516) 336-9209</span>
              </a>
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
              <Link href="/faq" className="inline-flex items-center text-wellness font-title font-medium hover:underline">
                View all FAQs
                {icons.arrow}
              </Link>
            </div>
          </div>
        </section>

        {/* Sister Practice - White with blue accent */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="sister-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-therapy/20 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">Our Sister Practice</p>
              <h2 id="sister-heading" className="font-title font-semibold text-2xl md:text-3xl text-slate-800 mb-4">Pathways Within Therapy</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-4 font-body">
                True healing happens when mind and body are supported together. Our sister practice offers 
                licensed mental health therapy including individual, couples, family therapy, EMDR, and trauma treatment.
              </p>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6 font-body">
                Combine massage with therapy for holistic stress relief, or integrate energy work with 
                trauma therapy for deeper healing.
              </p>
              <a 
                href="https://pathwaystherapy.com" 
                className="inline-flex items-center bg-therapy text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Therapy Services
                {icons.external}
              </a>
            </div>
          </div>
        </section>

        {/* CTA - Wellness green */}
        <section className="bg-wellness py-16" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-title font-bold text-3xl text-white mb-3">Ready to Begin Your Wellness Journey?</h2>
            <p className="text-white/80 mb-6 font-body">Your journey to wellness starts here. Let&apos;s help you feel beautiful inside and out.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="tel:5163369209"
                className="bg-white text-wellness px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover inline-flex items-center gap-2"
              >
                {icons.phone}
                Call (516) 336-9209
              </a>
              <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-title font-medium btn-hover hover:bg-white/10">
                Browse Services
              </Link>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="bg-pearl py-4" aria-label="Ownership disclosure">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <p className="text-xs text-slate-500 text-center font-body">
              <strong className="text-slate-700">Disclosure:</strong> Pathways Within Wellness and Pathways Within Therapy operate under common ownership. 
              Wellness services are separate from and do not substitute for mental health treatment.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

