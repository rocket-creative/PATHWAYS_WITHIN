'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-wellness">Locations</Link></li><li><Link href="/faq" className="text-wellness font-medium">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const faqSections = [
  { title: 'General Questions', faqs: [
    { q: 'Where are you located?', a: 'Two Long Island locations: Massapequa (4160 Merrick Rd) and Garden City (647 Franklin Ave, Lower Level). Both offer the full range of wellness services.' },
    { q: 'What are your hours?', a: 'Monday-Friday: 9am-6pm, Saturday: 10am-4pm, Sunday: Closed. Evening appointments available with select providers.' },
    { q: 'Do you offer consultations?', a: 'Yes! For advanced treatments, we recommend consultations first. Some are free, others have fees credited toward treatment.' },
    { q: 'How do I book an appointment?', a: 'Call (516) 336-9209, book online, or walk in (subject to availability—appointments preferred).' },
  ]},
  { title: 'Payment & Pricing', faqs: [
    { q: 'How much do treatments cost?', a: 'Pricing varies: Facials $110-$1,395, Massage $90-$180, Acupuncture $100-$150, IV Therapy $150-$300, Laser $125-$1,000+.' },
    { q: 'Do you accept insurance?', a: 'Most spa services aren\'t covered by insurance. However, some cover acupuncture or massage with prescription. Check with your provider.' },
    { q: 'Do you offer payment plans?', a: 'Yes! We partner with Cherry Financing. No hard credit checks, 0% APR options, approvals up to $35,000, apply in 60 seconds.' },
    { q: 'Do you offer package deals?', a: 'Yes! Many treatments offer package pricing—laser hair removal series, facial packages, RF microneedling, and more.' },
  ]},
  { title: 'Treatment Questions', faqs: [
    { q: 'Are treatments safe?', a: 'Yes, when performed by qualified professionals. We use licensed medical professionals, FDA-approved devices, and strict safety protocols.' },
    { q: 'Will treatments hurt?', a: 'Varies by treatment. Facials and massage have no discomfort. Laser and RF treatments have moderate discomfort with numbing.' },
    { q: 'Is there downtime?', a: 'Varies: No downtime for massage, facials, acupuncture. 24-48 hours for some laser. 2-5 days for RF microneedling.' },
    { q: 'How many treatments will I need?', a: 'Depends on your goals. Single treatments for maintenance, 3-6 for laser hair removal or peels, 6+ for hair restoration.' },
  ]},
  { title: 'Integration with Therapy', faqs: [
    { q: 'Can I combine wellness and therapy services?', a: 'Absolutely! Popular combinations: massage + therapy, energy work + trauma therapy, acupuncture + anxiety treatment.' },
    { q: 'How does the 360° approach work?', a: 'Pathways Within Wellness and Therapy work together. With your permission, providers can communicate and create integrated treatment plans.' },
  ]},
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600 font-body">We love answering questions! If yours isn&apos;t listed, just reach out.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            {faqSections.map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="font-title font-semibold text-xl text-wellness mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.faqs.map((faq, i) => {
                    const key = `${section.title}-${i}`
                    return (
                      <div key={key} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <button 
                          className="w-full text-left p-5 flex items-center justify-between gap-4"
                          onClick={() => setOpenIndex(openIndex === key ? null : key)}
                          aria-expanded={openIndex === key}
                        >
                          <span className="font-title font-medium text-slate-800 text-sm">{faq.q}</span>
                          <svg className={`w-5 h-5 text-wellness transition-transform flex-shrink-0 ${openIndex === key ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openIndex === key && (
                          <div className="px-5 pb-5">
                            <p className="text-slate-600 font-body text-sm">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/80 font-body mb-6">We&apos;re here to help make your wellness journey as clear and accessible as possible!</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5163369209" className="bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">(516) 336-9209</a>
              <a href="mailto:info@pathwayswithinwellness.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Email Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

