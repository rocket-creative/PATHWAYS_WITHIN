'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  variant: 'therapy' | 'wellness' | 'landing'
  currentPath?: string
}

const therapyNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Locations', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const wellnessNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const landingNav: NavItem[] = [
  { label: 'Therapy', href: '/therapy' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'About', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
]

const config = {
  therapy: {
    nav: therapyNav,
    logo: 'Pathways Within Therapy',
    accent: 'therapy',
    cta: { label: 'Book Consultation', href: 'https://pathwayswithintherapy.janeapp.com/' },
    phone: '(631) 371-3825',
  },
  wellness: {
    nav: wellnessNav,
    logo: 'Pathways Within Wellness',
    accent: 'wellness',
    cta: { label: 'Schedule Appointment', href: '/contact' },
    phone: '(516) 336-9209',
  },
  landing: {
    nav: landingNav,
    logo: 'Pathways Within',
    accent: 'therapy',
    cta: { label: 'Get Started', href: '/contact' },
    phone: '(631) 371-3825',
  },
}

export function Navigation({ variant, currentPath }: NavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const { nav, logo, accent, cta, phone } = config[variant]
  const accentClass = accent === 'therapy' ? 'text-therapy' : 'text-wellness'
  const accentBgClass = accent === 'therapy' ? 'bg-therapy' : 'bg-wellness'
  
  // Search results mock - in production, this would search real content
  const searchResults = [
    { title: 'Individual Therapy', href: '/services/individual-therapy', cat: 'Service' },
    { title: 'EMDR Therapy', href: '/services/emdr-therapy', cat: 'Service' },
    { title: 'Couples Therapy', href: '/services/couples-therapy', cat: 'Service' },
    { title: 'Our Locations', href: '/locations', cat: 'Info' },
    { title: 'Contact Us', href: '/contact', cat: 'Info' },
  ].filter(r => searchQuery.length > 1 && r.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <nav 
        className="bg-white border-b border-clay/20 sticky top-0 z-40 shadow-sm" 
        aria-label="Main navigation"
      >
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display italic text-xl text-heading hover:opacity-80 transition-opacity" 
            aria-label={`${logo} Home`}
          >
            {logo}
          </Link>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-body" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`hover:${accentClass} link-underline transition-colors ${currentPath === item.href ? accentClass : 'text-charcoal'}`}
                  aria-current={currentPath === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 text-charcoal hover:${accentClass} transition-colors`}
              aria-label="Open search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            
            {/* CTA Button - Desktop */}
            <Link 
              href={cta.href}
              className={`hidden sm:inline-block ${accentBgClass} text-white text-sm px-4 py-2 rounded-lg btn-hover`}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {cta.label}
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-clay/20 py-4 px-6">
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`block py-2 text-lg ${currentPath === item.href ? accentClass : 'text-charcoal'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-clay/20">
                <Link 
                  href={cta.href}
                  className={`block text-center ${accentBgClass} text-white py-3 rounded-lg`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cta.label}
                </Link>
              </li>
              <li className="text-center text-sm text-muted pt-2">
                <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className={`hover:${accentClass}`}>
                  {phone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Search Modal */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="max-w-xl mx-auto mt-20 px-4" onClick={e => e.stopPropagation()}>
            <div className="bg-white rounded-xl shadow-xl animate-slide-down overflow-hidden">
              <div className="p-4 border-b border-clay/30">
                <label htmlFor="nav-search" className="sr-only">Search</label>
                <input
                  id="nav-search"
                  type="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search services, locations..."
                  className="w-full text-lg text-charcoal outline-none font-body"
                  autoFocus
                  onKeyDown={e => e.key === 'Escape' && setIsSearchOpen(false)}
                />
              </div>
              {searchQuery.length > 1 && (
                <ul className="max-h-72 overflow-y-auto" role="listbox">
                  {searchResults.length > 0 ? searchResults.map((r, i) => (
                    <li key={i}>
                      <Link
                        href={r.href}
                        className="flex items-center justify-between p-4 hover:bg-warm border-b border-clay/10 last:border-0"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <span className="text-charcoal">{r.title}</span>
                        <span className={`text-xs ${accentClass} bg-${accent}/10 px-2 py-0.5 rounded`}>{r.cat}</span>
                      </Link>
                    </li>
                  )) : (
                    <li className="p-4 text-muted text-center">No results found</li>
                  )}
                </ul>
              )}
              <div className="p-3 bg-warm/50 text-xs text-muted text-center">Press ESC to close</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

