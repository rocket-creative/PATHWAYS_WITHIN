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
              <li><Link href="/services/acupuncture" className="hover:text-white">Acupuncture</Link></li>
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

// Team data loaded from CSV - run "npm run build:team" to update
// Add new columns to apps/wellness/data/team.csv and they'll flow through automatically
import teamData from '../../data/team.json'

interface TeamMember {
  name: string
  title: string
  photo?: string
  bio: string
  credentials: string[]
  services?: string[]
  email?: string
  // Any additional fields from CSV will also be available
  [key: string]: unknown
}

const team: TeamMember[] = teamData

export default function AboutPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Our Team</p>
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
              Meet The Pathways Within Wellness Team
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              Expert practitioners who bring together traditional beauty treatments, medical-grade procedures, 
              and holistic wellness practices under one roof.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4 text-center">Our Story</h2>
              <p className="text-slate-600 font-body mb-4">
                <strong>Pathways Within Wellness was born from a vision:</strong> to create a sanctuary where clients 
                can heal, grow, and embrace their most authentic selves—not just through talk therapy, but through 
                comprehensive care that honors the body as much as the mind.
              </p>
              <p className="text-slate-600 font-body mb-4">
                We believe that true wellness requires tending to your whole self—your physical body, your mental 
                health, your spiritual wellbeing, and your confidence in how you show up in the world.
              </p>
              <p className="text-slate-600 font-body">
                That&apos;s why we&apos;ve assembled a team of experts who bring together traditional beauty treatments, 
                medical-grade aesthetic procedures, holistic wellness practices, and therapeutic modalities under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-linen rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span className="text-slate-400 font-body">Image</span>
              </div>
              <div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Our Philosophy</h2>
                <p className="text-slate-600 font-body mb-4">
                  <strong>We believe in the interconnectedness of body, spirit, mind, and earth.</strong>
                </p>
                <p className="text-slate-600 font-body mb-4">
                  When you feel good about how you look, it affects how you feel emotionally. When you reduce 
                  physical pain through massage or acupuncture, your mental clarity improves. When you address 
                  energetic blocks, your physical symptoms often ease. Everything is connected.
                </p>
                <p className="text-wellness font-title font-medium italic">
                  &ldquo;We create a tranquil and serene atmosphere where you can truly relax, heal, and transform.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-pearl py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-3xl text-slate-800 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <article key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover-lift">
                  {/* Photo or initials fallback */}
                  {member.photo ? (
                    <img 
                      src={`/team/${member.photo}`} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                  ) : null}
                  <div className={`w-20 h-20 bg-wellness/10 rounded-full flex items-center justify-center mb-4 text-wellness font-title font-bold text-xl ${member.photo ? 'hidden' : ''}`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-title font-semibold text-lg text-slate-800">{member.name}</h3>
                  <p className="text-wellness text-sm font-title mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm font-body mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.credentials.slice(0, 3).map((c, j) => (
                      <span key={j} className="text-xs bg-wellness/10 text-wellness px-2 py-1 rounded font-body">{c}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 text-center mb-8">Our Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Personalized Care', desc: 'We customize every treatment to your unique needs, goals, and preferences.' },
                { title: 'Clinical Expertise', desc: 'Licensed medical professionals and certified practitioners who stay current.' },
                { title: 'Holistic Approach', desc: 'We consider your whole wellbeing—not just the symptom you came in to address.' },
                { title: 'Safe Environment', desc: 'Sterile techniques, medical-grade products, and evidence-based protocols.' },
                { title: 'Compassionate Service', desc: 'You\'ll never feel judged or rushed. We genuinely care about your journey.' },
                { title: 'Therapy Integration', desc: 'We can coordinate care between wellness services and therapy when appropriate.' },
              ].map((item, i) => (
                <div key={i} className="bg-ivory rounded-xl p-5 border border-slate-200">
                  <h3 className="font-title font-semibold text-base text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-3xl text-white mb-3">Your Wellness Is Our Mission</h2>
            <p className="text-white/80 font-body mb-6">Your transformation is our passion. Welcome to Pathways Within Wellness.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5163369209" className="bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">
                Call (516) 336-9209
              </a>
              <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

