'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../components/Footer'

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
              <Link href={item.href} className={`transition-colors ${item.href === '/services' ? 'text-wellness font-medium' : 'text-slate-700 hover:text-wellness'}`}>{item.label}</Link>
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

// Footer imported from ../../components/Footer

// Monochromatic flat icons
const icons: Record<string, JSX.Element> = {
  massage: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" /></svg>,
  acupuncture: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  energy: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
  iv: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.28.041.56.08.841.117l2.122 3.536a.75.75 0 001.278 0l2.122-3.536c.28-.037.561-.076.841-.117 1.978-.29 3.348-2.024 3.348-3.97V6.741c0-1.946-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25z" /></svg>,
  pain: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  facial: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
  hydra: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  peel: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  prp: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" /></svg>,
  rf: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  laser: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
  hair: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  body: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75v7.5m-4.5-4.5l4.5 4.5 4.5-4.5" /></svg>,
  teeth: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10h.01M15 10h.01" /></svg>,
  makeup: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62" /></svg>,
}

// Service Categories
const serviceCategories = [
  {
    title: 'Relaxation & Body Work',
    services: [
      { title: 'Massage Services', href: '/services/massage', description: 'Swedish, deep tissue, sports, hot stone, and pregnancy massage.', icon: 'massage' },
      { title: 'Acupuncture', href: '/services/acupuncture', description: 'Traditional healing for pain relief, stress reduction, and wellness.', icon: 'acupuncture' },
      { title: 'Energy Work', href: '/services/energy-work', description: 'Reiki, IET, and other energy healing modalities.', icon: 'energy' },
    ]
  },
  {
    title: 'Medical & IV Treatments',
    services: [
      { title: 'IV Vitamin Infusion', href: '/services/iv-vitamin-infusion', description: 'Direct nutrient delivery for energy, immunity, and recovery.', icon: 'iv' },
      { title: 'Pain Management', href: '/services/pain-management', description: 'Advanced treatments for chronic pain relief.', icon: 'pain' },
    ]
  },
  {
    title: 'Skincare & Facials',
    services: [
      { title: 'Facials & Skincare', href: '/services/facials-skincare', description: 'Customized treatments for glowing, healthy skin.', icon: 'facial' },
      { title: 'HydraFacial', href: '/services/hydrafacial', description: 'Deep cleansing, extraction, and hydration in one treatment.', icon: 'hydra' },
      { title: 'Chemical Peels', href: '/services/chemical-peels', description: 'Exfoliation treatments for skin renewal.', icon: 'peel' },
      { title: 'PRP Vampire Facial', href: '/services/prp-vampire-facial', description: 'Platelet-rich plasma for natural skin rejuvenation.', icon: 'prp' },
      { title: 'RF Microneedling', href: '/services/rf-microneedling', description: 'Genius RF for collagen stimulation and skin tightening.', icon: 'rf' },
    ]
  },
  {
    title: 'Aesthetic Treatments',
    services: [
      { title: 'Laser Hair Removal', href: '/services/laser-hair-removal', description: 'Permanent hair reduction with advanced laser technology.', icon: 'laser' },
      { title: 'Hair Restoration', href: '/services/hair-restoration', description: 'KeraLase treatment for thicker, healthier hair.', icon: 'hair' },
      { title: 'Body Sculpting', href: '/services/body-sculpting', description: 'Lutronic Accufit for non-invasive muscle toning.', icon: 'body' },
      { title: 'Teeth Whitening', href: '/services/teeth-whitening', description: 'Professional whitening for a brighter smile.', icon: 'teeth' },
      { title: 'Permanent Makeup', href: '/services/permanent-makeup', description: 'Microblading and permanent cosmetic enhancements.', icon: 'makeup' },
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Our Services</p>
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
              Wellness Services
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              From relaxing massage to advanced aesthetic treatments, discover our full range of 
              services designed to help you feel your best—inside and out.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, idx) => (
          <section key={category.title} className={idx % 2 === 0 ? 'bg-ivory py-16' : 'bg-white py-16'}>
            <div className="max-w-site mx-auto px-6 lg:px-12">
              <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8">{category.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Link key={service.href} href={service.href} className="group bg-white rounded-xl p-6 border border-slate-200 hover-lift">
                    <div className="w-10 h-10 bg-wellness/10 rounded-lg flex items-center justify-center text-wellness mb-4">
                      {icons[service.icon]}
                    </div>
                    <h3 className="font-title font-semibold text-lg text-slate-800 group-hover:text-wellness transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-body mb-4">{service.description}</p>
                    <span className="text-wellness font-title text-sm font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Locations */}
        <section className="bg-pearl py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-title font-semibold text-xl text-slate-800 mb-2">Massapequa</h3>
                <p className="text-slate-600 font-body text-sm mb-1">4160 Merrick Rd</p>
                <p className="text-slate-600 font-body text-sm mb-4">Massapequa, NY 11758</p>
                <p className="text-slate-500 font-body text-sm">Mon-Fri 9am-6pm | Sat 10am-4pm</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-title font-semibold text-xl text-slate-800 mb-2">Garden City</h3>
                <p className="text-slate-600 font-body text-sm mb-1">647 Franklin Ave, Lower Level</p>
                <p className="text-slate-600 font-body text-sm mb-4">Garden City, NY 11530</p>
                <p className="text-slate-500 font-body text-sm">Mon-Fri 9am-6pm | Sat 10am-4pm</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-3xl text-white mb-3">Ready to Begin Your Wellness Journey?</h2>
            <p className="text-white/80 font-body mb-6">Call us to book an appointment or ask about any of our services.</p>
            <a href="tel:5163369209" className="inline-block bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">
              Call (516) 336-9209
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

