'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/team" className="text-therapy font-medium">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

// Team data loaded from CSV - run "npm run build:team" to update
// Add new columns to apps/therapy/data/team.csv and they'll flow through automatically
import cliniciansData from '../../data/team.json'

interface TeamMember {
  name: string
  title: string
  photo?: string
  specialties: string[]
  locations?: string[]
  accepting_new?: boolean
  email?: string
  // Any additional fields from CSV will also be available
  [key: string]: unknown
}

const clinicians: TeamMember[] = cliniciansData

export default function TeamPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Meet Our Team</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">Expert therapists who truly care. Our diverse team brings different backgrounds, specialties, and approaches so we can match you with someone who&apos;s the right fit.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Our Clinical Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicians.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover-lift">
                  {/* Photo or initials fallback */}
                  {c.photo ? (
                    <img 
                      src={`/team/${c.photo}`} 
                      alt={c.name}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                  ) : null}
                  <div className={`w-20 h-20 bg-therapy/10 rounded-full flex items-center justify-center text-therapy font-title font-bold text-xl mb-4 ${c.photo ? 'hidden' : ''}`}>
                    {c.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <h3 className="font-title font-semibold text-lg text-slate-800">{c.name}</h3>
                  <p className="text-therapy text-sm font-body mb-2">{c.title}</p>
                  {c.locations && c.locations.length > 0 && (
                    <p className="text-slate-500 text-xs font-body mb-3">{c.locations.join(' • ')}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {c.specialties.slice(0, 3).map((s, j) => (
                      <span key={j} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-body">{s}</span>
                    ))}
                  </div>
                  {c.accepting_new === false && (
                    <p className="text-amber-600 text-xs font-body mt-3">Currently not accepting new clients</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Finding Your Match</h2>
              <p className="text-slate-600 font-body mb-6">When you contact us, we&apos;ll ask about what you&apos;re hoping to work on, your preferences for therapist gender, approach, or specialty, your schedule and location preferences, and insurance or payment considerations.</p>
              <p className="text-slate-600 font-body">Then we&apos;ll match you with a therapist who has the expertise, availability, and approach that fits your needs.</p>
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Ready to Find Your Therapist?</h2>
            <p className="text-white/80 font-body mb-6">Your healing journey deserves the right guide. We&apos;re here to help you find them.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:6313713825" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">(631) 371-3825</a>
              <a href="mailto:Welcome@pathwayswithin.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Email Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

