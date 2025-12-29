'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../../components/Footer'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-therapy font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={m}><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div>{m && <div className="md:hidden bg-white py-4 px-6 border-t"><Link href="/services" className="block py-2">Services</Link><Link href="/about" className="block py-2">About</Link><Link href="/contact" className="block py-2">Contact</Link></div>}</nav> }
// Footer imported from ../../../components/Footer

export default function TeenTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Teen Therapy</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Therapy for Teens</h1>
              <p className="text-xl text-slate-600 font-body">You Don&apos;t Have to Figure This Out Alone</p>
            </div>
          </div>
        </section>

        <section className="bg-therapy/5 py-16" aria-labelledby="for-teens-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">For Teens</p>
              <h2 id="for-teens-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">This Section Is For You</h2>
              <p className="text-slate-600 font-body mb-4">Are you feeling hopeless, frustrated, or overwhelmed? No one here is going to tell you it&apos;s &ldquo;normal&rdquo; or that you&apos;re being too &ldquo;angsty.&rdquo; You&apos;re going through real, significant challenges.</p>
              <div className="bg-white rounded-xl p-6 border border-therapy/20 mb-6">
                <h3 className="font-title font-medium text-slate-800 mb-3">What to Expect in Therapy</h3>
                <ul className="text-slate-600 font-body text-sm space-y-2">
                  <li>• Your therapist won&apos;t lecture you or tell you what to do</li>
                  <li>• Won&apos;t judge your choices or feelings</li>
                  <li>• Won&apos;t share what you talk about with your parents (with safety exceptions)</li>
                  <li>• Therapy is YOUR space—you decide what to talk about</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {['School Stress', 'Family Dynamics', 'Social & Relationships', 'Trauma & Abuse', 'Mental Health', 'Identity & Belonging'].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-center border border-therapy/20">
                    <span className="text-slate-700 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="for-parents-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">For Parents</p>
              <h2 id="for-parents-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Supporting Your Teen</h2>
              <p className="text-slate-600 font-body mb-6">Teens are in a unique developmental stage. Their brains are literally under construction, and what looks like rebellion is often a necessary part of individuation.</p>
              <div className="bg-ivory rounded-xl p-6 border border-slate-200">
                <h3 className="font-title font-medium text-slate-800 mb-3">When to Seek Therapy for Your Teen</h3>
                <ul className="text-slate-600 font-body text-sm space-y-1">
                  <li>• Persistently sad, anxious, or angry</li>
                  <li>• Withdrawn from activities they used to enjoy</li>
                  <li>• Self-harming or talking about death</li>
                  <li>• Dramatic changes in eating or sleeping</li>
                  <li>• Engaging in risky behaviors</li>
                  <li>• Just seems &ldquo;off&rdquo; in ways you can&apos;t name</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50 py-8" role="alert" aria-labelledby="crisis-alert">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p id="crisis-alert" className="text-red-800 font-body text-sm"><strong>If you&apos;re in crisis:</strong> Call/text <a href="tel:988" className="underline font-medium">988</a> or text HELLO to 741741</p>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Being a Teenager is Hard</h2>
            <p className="text-white/80 font-body mb-6">You don&apos;t have to do it alone. We&apos;re here when you&apos;re ready.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:6313713825" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">Call (631) 371-3825</a>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

        <section className="bg-pearl py-12" aria-labelledby="related-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-section" className="font-title font-medium text-lg text-slate-800 mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/services/child-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Child Therapy</Link>
              <Link href="/services/individual-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Individual Therapy</Link>
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

