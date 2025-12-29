'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-wellness">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-wellness">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const categories = [
  { 
    name: 'Massage & Bodywork', 
    services: [
      { name: 'Swedish Massage', desc: 'Classic technique with flowing strokes for relaxation and circulation.', href: '/services/massage' },
      { name: 'Hot Stone Massage', desc: 'Heated stones placed on body and used for deeper muscle relaxation.', href: '/services/massage' },
      { name: 'Sports Massage', desc: 'Targeted work for athletes focusing on muscle recovery and flexibility.', href: '/services/massage' },
    ]
  },
  { 
    name: 'Facial Treatments', 
    services: [
      { name: 'HydraFacial', desc: 'Multi-step treatment that cleanses, extracts, and hydrates with instant results.', href: '/services/hydrafacial' },
      { name: 'Chemical Peels', desc: 'Exfoliating treatments to improve skin texture, tone, and clarity.', href: '/services/chemical-peels' },
      { name: 'PRP Vampire Facial', desc: 'Uses your own platelet-rich plasma to stimulate collagen and rejuvenation.', href: '/services/prp-vampire-facial' },
      { name: 'RF Microneedling', desc: 'Combines microneedling with radiofrequency to tighten and improve skin.', href: '/services/rf-microneedling' },
    ]
  },
  { 
    name: 'Energy & Holistic', 
    services: [
      { name: 'Acupuncture', desc: 'Ancient practice using fine needles to support wellness and balance.', href: '/services/acupuncture' },
      { name: 'Reiki', desc: 'Gentle energy practice for relaxation and emotional balance.', href: '/services/energy-work' },
      { name: 'IET', desc: 'Integrative Energy Therapy focused on releasing emotional blocks.', href: '/services/energy-work' },
    ]
  },
  { 
    name: 'Body & Aesthetic', 
    services: [
      { name: 'Body Sculpting', desc: 'Non-invasive electrical muscle stimulation to tone and strengthen.', href: '/services/body-sculpting' },
      { name: 'Laser Hair Removal', desc: 'Permanent hair reduction using targeted laser technology.', href: '/services/laser-hair-removal' },
      { name: 'Hair Restoration', desc: 'KeraLase treatment combining laser and growth factors for scalp health.', href: '/services/hair-restoration' },
    ]
  },
  { 
    name: 'Wellness Infusions', 
    services: [
      { name: 'IV Vitamin Infusion', desc: 'Direct delivery of vitamins and nutrients into bloodstream for maximum absorption.', href: '/services/iv-vitamin-infusion' },
    ]
  },
  { 
    name: 'Cosmetic Enhancements', 
    services: [
      { name: 'Teeth Whitening', desc: 'Professional whitening for a brighter, stain-free smile.', href: '/services/teeth-whitening' },
      { name: 'Permanent Makeup', desc: 'Long-lasting cosmetic tattooing for brows, lips, and eyeliner.', href: '/services/permanent-makeup' },
    ]
  },
]

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const filteredCategories = categories.map(cat => ({
    ...cat,
    services: cat.services.filter(s => 
      s.name.toLowerCase().includes(search.toLowerCase()) || 
      s.desc.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.services.length > 0)

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Wellness Glossary</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">Clear, jargon-free explanations of all our wellness services.</p>
          </div>
        </section>

        <section className="bg-ivory py-8">
          <div className="max-w-3xl mx-auto px-6">
            <input
              type="search"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 font-body focus:outline-none focus:ring-2 focus:ring-wellness"
            />
          </div>
        </section>

        <section className="bg-ivory pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {filteredCategories.map((cat) => (
              <div key={cat.name} className="mb-10">
                <h2 className="font-title font-semibold text-xl text-wellness mb-4">{cat.name}</h2>
                <div className="space-y-3">
                  {cat.services.map((service) => (
                    <div key={service.name} className="bg-white rounded-xl p-5 border border-slate-200">
                      <h3 className="font-title font-medium text-lg text-slate-800 mb-2">{service.name}</h3>
                      <p className="text-slate-600 font-body text-sm mb-3">{service.desc}</p>
                      <Link href={service.href} className="text-wellness text-sm font-body hover:underline">
                        Learn more →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {filteredCategories.length === 0 && (
              <p className="text-slate-500 font-body text-center py-8">No results found. Try a different search term.</p>
            )}
          </div>
        </section>

        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Not Sure Where to Start?</h2>
            <p className="text-white/80 font-body mb-6">Take our quiz or give us a call—we&apos;re happy to help you choose.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/find-your-service" className="bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">
                Take the Quiz
              </Link>
              <a href="tel:5163369209" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">
                (516) 336-9209
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

