'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../../components/Footer'

function CrisisBanner() {
  return (
    <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner">
      <div className="max-w-site mx-auto px-4">
        <span className="opacity-80">Crisis support 24/7:</span>{' '}
        <a href="tel:988" className="font-medium hover:underline">Call 988</a>
      </div>
    </div>
  )
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
      <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body">
          <li><Link href="/services" className="text-therapy font-medium">Services</Link></li>
          <li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li>
          <li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li>
        </ul>
        <a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t">
          <Link href="/services" className="block py-2 text-slate-700">Services</Link>
          <Link href="/about" className="block py-2 text-slate-700">About</Link>
          <Link href="/contact" className="block py-2 text-slate-700">Contact</Link>
        </div>
      )}
    </nav>
  )
}

// Footer imported from ../../../components/Footer

export default function CouplesTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb">
              <Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Couples Therapy</span>
            </nav>
            <div className="max-w-3xl">
              <p className="text-copper font-title font-medium text-sm italic mb-2">&ldquo;Splendid isolation is for planets, not people.&rdquo; — Dr. Sue Johnson</p>
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Couples Therapy</h1>
              <p className="text-xl text-slate-600 font-body">Rebuilding Connection, Rediscovering Love</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="why-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="why-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Why Couples Seek Therapy</h2>
              <p className="text-slate-600 font-body mb-4">Relationships can be difficult to maintain, especially as the years go by and each person changes. A break in communication often leads to other problems.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {['Feeling more like roommates than partners', 'Fighting about the same things repeatedly', 'Aftermath of betrayal or broken trust', 'Avoiding each other to prevent conflict', 'Feeling like nothing is ever "good enough"', 'Love fading and struggling to reconnect'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2"><span className="text-therapy" aria-hidden="true">•</span><span className="text-slate-600 font-body text-sm">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-therapy/5 py-16" aria-labelledby="gottman-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">Spotlight</p>
              <h2 id="gottman-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">The Gottman Method</h2>
              <p className="text-slate-600 font-body mb-6">Based on 40+ years of research, the Gottman Method identifies four communication patterns that predict relationship failure—and their antidotes.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { bad: 'Criticism', good: 'Gentle Start-Up', desc: 'Address behaviors, not character' },
                  { bad: 'Contempt', good: 'Appreciation', desc: 'Build a culture of respect' },
                  { bad: 'Defensiveness', good: 'Responsibility', desc: 'Accept your role in problems' },
                  { bad: 'Stonewalling', good: 'Self-Soothing', desc: 'Take breaks, then return' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-therapy/20">
                    <p className="text-red-600 text-sm font-body line-through mb-1">{item.bad}</p>
                    <p className="text-therapy font-title font-medium">{item.good}</p>
                    <p className="text-slate-600 text-sm font-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="faq-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="faq-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
            <dl className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'What does a therapist know about my relationship?', a: 'The benefit is precisely that they\'re unbiased. A trained third party can spot patterns invisible to you and create safety for difficult conversations.' },
                { q: 'Will the therapist take sides?', a: 'No. The therapist\'s role is to help you both hear each other, not to declare anyone right or wrong.' },
                { q: 'Why not just end it and start fresh?', a: 'People bring the same patterns into new relationships. Working through challenges teaches skills you\'ll use forever.' },
                { q: 'How long does couples therapy take?', a: 'Some couples see improvement in 8-12 sessions. Others benefit from 6 months to a year. It depends on both partners\' commitment.' },
              ].map((item, i) => (
                <div key={i} className="bg-ivory rounded-xl p-6 border border-slate-200">
                  <dt className="font-title font-medium text-slate-800 mb-2">{item.q}</dt>
                  <dd className="text-slate-600 text-sm font-body">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Your Relationship Is Worth Fighting For</h2>
            <p className="text-white/80 font-body mb-6">We&apos;re here to help you fight fair and reconnect deeply.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://pathwayswithintherapy.janeapp.com/" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Online</a>
              <a href="tel:6313713825" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Call (631) 371-3825</a>
            </div>
          </div>
        </section>

        <section className="bg-pearl py-12" aria-labelledby="related-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-section" className="font-title font-medium text-lg text-slate-800 mb-4">Other Services You May Be Interested In</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/services/individual-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Individual Therapy</Link>
              <Link href="/services/trauma-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Trauma Therapy</Link>
              <Link href="/services" className="bg-therapy/10 px-4 py-2 rounded-lg text-sm text-therapy font-body hover:bg-therapy/20">View All →</Link>
            </div>
          </div>
        </section>

        {/* Sister Practice Cross-Promotion */}
        <section className="bg-wellness/5 py-12" aria-labelledby="sister-practice-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 id="sister-practice-heading" className="font-title font-semibold text-xl text-slate-800 mb-3">Complement Your Healing Journey</h3>
              <p className="text-slate-600 font-body text-sm mb-4">
                Our sister practice, Pathways Within Wellness, offers massage, acupuncture, and energy work that many clients find supportive alongside therapy.
              </p>
              <a 
                href="https://pathwayswithinwellness.com" 
                className="inline-flex items-center gap-2 text-wellness font-title font-medium text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Wellness Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-slate-500 text-xs font-body mt-3 italic">
                Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
                Wellness services are separate from and do not substitute for mental health treatment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

