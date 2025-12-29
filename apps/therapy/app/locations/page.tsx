'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-therapy font-medium">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

const locations = [
  { name: 'Garden City', address: '520 Franklin Ave, Suite L1', city: 'Garden City, NY 11530', desc: 'Central Nassau County location with easy access from major highways.', slug: 'garden-city' },
  { name: 'Port Jefferson', address: '1227 Main Street, Suite 101', city: 'Port Jefferson, NY 11777', desc: 'Charming North Shore location in the heart of Port Jefferson village.', slug: 'port-jefferson' },
  { name: 'Massapequa', address: '4160 Merrick Rd, Suites 5 & 7', city: 'Massapequa, NY 11758', desc: 'South Shore location with ample parking and accessibility.', slug: 'massapequa' },
  { name: 'Smithtown', address: '496 Smithtown Bypass, Suites 203 & 204', city: 'Smithtown, NY 11787', desc: 'Easily accessible from Route 347 and surrounding areas.', slug: 'smithtown' },
  { name: 'Rockville Centre', address: '53 N Park Ave, Suite 203', city: 'Rockville Centre, NY 11570', desc: 'Convenient Nassau County location near shopping and transit.', slug: 'rockville-centre' },
]

export default function LocationsPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Our Long Island Locations</h1>
            <p className="text-lg text-slate-600 font-body">Five convenient locations throughout Long Island. Each office offers dedicated parking.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <div key={loc.slug} className="bg-white rounded-xl p-6 border border-slate-200 hover-lift">
                  <h2 className="font-title font-semibold text-xl text-therapy mb-2 flex items-center gap-2"><svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>{loc.name}</h2>
                  <p className="text-slate-700 font-body text-sm">{loc.address}</p>
                  <p className="text-slate-700 font-body text-sm mb-3">{loc.city}</p>
                  <p className="text-slate-600 font-body text-sm">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="bg-therapy/5 rounded-xl p-8 border border-therapy/20 text-center">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4 flex items-center justify-center gap-2"><svg className="w-6 h-6 text-therapy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>Virtual Therapy Available</h2>
              <p className="text-slate-600 font-body mb-4">Can&apos;t make it to an office? We offer secure telehealth appointments throughout:</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {['New York', 'New Jersey', 'North Carolina', 'Florida'].map((state) => (
                  <span key={state} className="bg-therapy/10 text-therapy px-3 py-1 rounded-full text-sm font-body">{state}</span>
                ))}
              </div>
              <p className="text-slate-600 font-body text-sm">Meet with your therapist from the comfort of your home, office, or anywhere private.</p>
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Ready to Get Started?</h2>
            <p className="text-white/80 font-body mb-6">Contact us to schedule an appointment at any location or learn about virtual therapy.</p>
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

