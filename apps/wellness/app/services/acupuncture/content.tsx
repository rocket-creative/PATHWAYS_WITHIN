'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../../components/Footer'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-wellness font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={m}><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div>{m && <div className="md:hidden bg-white py-4 px-6 border-t"><Link href="/services" className="block py-2">Services</Link><Link href="/about" className="block py-2">About</Link><Link href="/contact" className="block py-2">Contact</Link></div>}</nav> }
// Footer imported from ../../../components/Footer

export default function AcupunctureContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-wellness">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Acupuncture</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Acupuncture Services</h1>
              <p className="text-xl text-slate-600 font-body">Ancient Wisdom for Modern Wellness</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="traditional-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="traditional-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Traditional Healing, Modern Results</h2>
              <p className="text-slate-600 font-body mb-4">Traditional acupuncture has been used for thousands of years. Our licensed acupuncturist uses this time-tested technique to help you achieve optimal health by balancing the flow of energy (Qi) throughout your body.</p>
              <p className="text-slate-600 font-body">Modern research shows acupuncture works through nervous system stimulation, endorphin release, inflammation reduction, and neurotransmitter regulation.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="benefits-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="benefits-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Benefits of Acupuncture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Pain Relief', items: 'Back pain, neck pain, arthritis, migraines, sciatica, fibromyalgia' },
                { title: 'Stress & Anxiety', items: 'Generalized anxiety, panic, PTSD symptoms, chronic stress, burnout' },
                { title: 'Better Sleep', items: 'Insomnia, frequent waking, non-restorative sleep, shift work issues' },
                { title: 'Immune Function', items: 'Cold/flu season, recovery, chronic illness, high-stress periods' },
                { title: 'Digestive Health', items: 'IBS, constipation, acid reflux, nausea, bloating' },
                { title: 'Hormonal Balance', items: 'PMS, menopause, fertility support, PCOS, thyroid symptoms' },
              ].map((item, i) => (
                <div key={i} className="bg-ivory rounded-xl p-6 border border-slate-200">
                  <h3 className="font-title font-semibold text-lg text-wellness mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-body">{item.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wellness/5 py-16" aria-labelledby="expect-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 id="expect-section" className="font-title font-semibold text-2xl text-slate-800 mb-6 text-center">What to Expect</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border border-wellness/20">
                  <h3 className="font-title font-medium text-slate-800 mb-2">Initial Consultation</h3>
                  <p className="text-slate-600 text-sm font-body">Health history, primary concerns, traditional assessments (pulse, tongue), treatment plan explanation.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-wellness/20">
                  <h3 className="font-title font-medium text-slate-800 mb-2">Treatment</h3>
                  <p className="text-slate-600 text-sm font-body">Thin, sterile needles inserted at specific points. Rest quietly while needles work—many fall asleep!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="faq-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="faq-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
            <dl className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'Is acupuncture safe?', a: 'Yes, very safe when performed by a licensed acupuncturist. We use sterile, single-use needles and follow strict protocols.' },
                { q: 'How many sessions will I need?', a: 'Acute conditions: 3-6 sessions. Chronic conditions: 8-12+ sessions. Wellness maintenance: monthly or seasonal.' },
                { q: 'Does it hurt?', a: 'Needles are hair-thin—most feel only a brief pinch. You may feel warmth, tingling, or nothing at all.' },
              ].map((item, i) => (
                <div key={i} className="bg-ivory rounded-xl p-5 border border-slate-200">
                  <dt className="font-title font-medium text-slate-800 mb-2">{item.q}</dt>
                  <dd className="text-slate-600 text-sm font-body">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-wellness py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Ready to Experience Acupuncture?</h2>
            <p className="text-white/80 font-body mb-6">Ancient wisdom. Modern wellness. Natural healing.</p>
            <a href="tel:5163369209" className="inline-block bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">Call (516) 336-9209</a>
          </div>
        </section>

        <section className="bg-pearl py-12" aria-labelledby="related-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-section" className="font-title font-medium text-lg text-slate-800 mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/services/massage" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-wellness/10 border border-slate-200">Massage</Link>
              <Link href="/services/energy-work" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-wellness/10 border border-slate-200">Energy Work</Link>
              <Link href="/services" className="bg-wellness/10 px-4 py-2 rounded-lg text-sm text-wellness font-body hover:bg-wellness/20">View All →</Link>
            </div>
          </div>
        </section>

        {/* Sister Practice Cross-Promotion */}
        <section className="bg-therapy/5 py-12" aria-labelledby="sister-practice-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 id="sister-practice-heading" className="font-title font-semibold text-xl text-slate-800 mb-3">Support for Your Mental Health</h3>
              <p className="text-slate-600 font-body text-sm mb-4">
                Our sister practice, Pathways Within Therapy, offers individual, couples, family, and specialized therapy at five Long Island locations plus telehealth.
              </p>
              <a href="https://pathways-therapy.vercel.app" className="inline-flex items-center gap-2 text-therapy font-title font-medium text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Explore Therapy Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <p className="text-slate-500 text-xs font-body mt-3 italic">Pathways Within Wellness and Pathways Within Therapy operate under common ownership. Wellness services are separate from and do not substitute for mental health treatment.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

