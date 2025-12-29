'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-wellness font-medium">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-wellness">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const locations = [
  { 
    name: 'Massapequa', 
    address: '4160 Merrick Rd',
    city: 'Massapequa, NY 11758', 
    phone: '(516) 336-9209',
    services: ['All wellness and spa treatments', 'Medical aesthetics', 'Massage therapy', 'Acupuncture', 'Energy work', 'IV therapy', 'Facials and skincare'],
    access: 'Sunrise Highway, Merrick Road, Southern State Parkway'
  },
  { 
    name: 'Garden City', 
    address: '647 Franklin Ave, Lower Level',
    city: 'Garden City, NY 11530', 
    phone: '(516) 336-9209',
    services: ['All wellness and spa treatments', 'Medical aesthetics', 'Massage therapy', 'Acupuncture', 'Energy work', 'IV therapy', 'Facials and skincare'],
    access: 'Meadowbrook Parkway, Northern State Parkway, Franklin Avenue'
  },
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
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Our Locations</h1>
            <p className="text-lg text-slate-600 font-body">Two convenient Long Island locations to serve you.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="font-title font-semibold text-2xl text-wellness mb-4 flex items-center gap-2"><svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>{loc.name}</h2>
                  <p className="text-slate-700 font-body text-lg">{loc.address}</p>
                  <p className="text-slate-700 font-body text-lg mb-4">{loc.city}</p>
                  <p className="text-wellness font-body font-medium mb-6">{loc.phone}</p>
                  
                  <h3 className="font-title font-medium text-sm text-slate-800 mb-2">Services Offered:</h3>
                  <ul className="text-slate-600 font-body text-sm space-y-1 mb-6">
                    {loc.services.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                  
                  <p className="text-slate-500 font-body text-xs">
                    <strong>Parking:</strong> Dedicated parking lot<br />
                    <strong>Easy access from:</strong> {loc.access}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Hours</h2>
              <div className="bg-wellness/5 rounded-xl p-6 border border-wellness/20 inline-block">
                <p className="font-body text-slate-700"><strong>Monday - Friday:</strong> 9am - 6pm</p>
                <p className="font-body text-slate-700"><strong>Saturday:</strong> 10am - 4pm</p>
                <p className="font-body text-slate-700"><strong>Sunday:</strong> Closed</p>
                <p className="font-body text-sm text-slate-500 mt-3 italic">Evening appointments available with select providers by advance arrangement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-6 text-center">What to Expect When You Arrive</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-center">
                {['Welcoming, professional staff', 'Clean, serene environment', 'Spa-like treatment rooms', 'Comfortable waiting area', 'Easy check-in process'].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-700 font-body text-sm">✓ {item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-600 font-body text-sm mt-6">We&apos;ve designed our spaces to feel calming from the moment you walk in.</p>
            </div>
          </div>
        </section>

        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Book Your Visit</h2>
            <p className="text-white/80 font-body mb-6">Either location offers the same high-quality services. Choose what&apos;s most convenient for you.</p>
            <a href="tel:5163369209" className="inline-block bg-white text-wellness px-8 py-3 rounded-lg font-title font-medium">(516) 336-9209</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

