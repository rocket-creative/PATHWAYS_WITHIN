'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-therapy font-medium">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12"><div className="grid md:grid-cols-3 gap-8 text-sm"><div><p className="font-title font-semibold text-lg mb-2">Pathways Within Therapy</p><p className="text-slate-400 font-body">(631) 371-3825</p></div><div><p className="font-title font-medium mb-2">Quick Links</p><ul className="text-slate-400 space-y-1 font-body"><li><Link href="/services" className="hover:text-white">Services</Link></li><li><Link href="/locations" className="hover:text-white">Locations</Link></li></ul></div><div><p className="font-title font-medium mb-2">Legal</p><ul className="text-slate-400 space-y-1 font-body"><li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li><li><Link href="/terms-of-service" className="hover:text-white">Terms</Link></li></ul></div></div></div></footer> }

const faqs = [
  { q: 'Where are you located?', a: 'We have five locations across Long Island plus virtual therapy. Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Virtual therapy is available throughout New York, New Jersey, North Carolina, and Florida.' },
  { q: 'Do you take insurance?', a: 'Yes! We\'re in-network with most major insurance providers including Aetna, Cigna, Optum, UHC, Oxford, UMR, Oscar, 1199, Meritain, Magnacare, Humana, Medicare, NYSHIP, and more. Out-of-network options also available.' },
  { q: 'How often will we meet?', a: 'Initially, we typically meet once a week. If therapeutically necessary, we may meet more often. As your work evolves, the schedule may change—we remain flexible and responsive to your growth.' },
  { q: 'How long do sessions last?', a: 'Each session is one full hour. This is your dedicated time, and we ask that you commit to your scheduled weekly time slot to optimize your progress.' },
  { q: 'What is your cancellation policy?', a: 'Appointments must be canceled 72 hours in advance. There\'s a $75 no-show fee for appointments canceled within the 72-hour window or missed without notice.' },
  { q: 'Do you have evening appointments?', a: 'Yes! We offer appointments outside regular business hours. With advance scheduling, we can accommodate schedules of every kind. Appointments available up to 11 PM with select clinicians.' },
  { q: 'Do you offer virtual visits?', a: 'Absolutely! You can meet with your therapist entirely through our virtual platform (SimplePractice), switch between telehealth and in-person visits, or choose what works best for you.' },
  { q: 'Is virtual therapy private?', a: 'Yes, completely. SimplePractice is both HIPAA compliant and VeriSign security sealed. Your privacy is crucial to us.' },
  { q: 'How do you incorporate Therapy and Wellness together?', a: 'Through our 360° approach to care, we partner with Pathways Within Wellness. When appropriate, your therapy and wellness providers can communicate (with your permission) to create integrated care.' },
  { q: 'Do you offer sliding scale fees?', a: 'Yes, we offer a limited number of sliding scale spots based on financial need and availability. If you\'re paying out of pocket and have concerns about affordability, please speak with us directly.' },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600 font-body">We love answering questions! Here are some of the most common ones we hear.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button 
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-title font-medium text-slate-800">{faq.q}</span>
                    <svg className={`w-5 h-5 text-therapy transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 font-body text-sm">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Have More Questions?</h2>
            <p className="text-white/80 font-body mb-6">Contact us anytime—we&apos;re here to help make your path to healing as clear and accessible as possible.</p>
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

