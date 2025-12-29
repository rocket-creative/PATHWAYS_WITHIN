'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../../components/Footer'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-therapy font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={m}><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div>{m && <div className="md:hidden bg-white py-4 px-6 border-t"><Link href="/services" className="block py-2">Services</Link><Link href="/about" className="block py-2">About</Link><Link href="/contact" className="block py-2">Contact</Link></div>}</nav> }
// Footer imported from ../../../components/Footer

export default function ChildTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Child Therapy</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Therapy for Children</h1>
              <p className="text-xl text-slate-600 font-body">Supporting Your Child Through Big Feelings</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="support-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="support-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">You&apos;re Not Alone, and Neither Is Your Child</h2>
              <p className="text-slate-600 font-body mb-4">Children experience emotions that can feel just as all-consuming as what we feel in our adult lives, but they don&apos;t yet have the vocabulary, cognitive development, or emotional regulation skills to process those feelings independently.</p>
              <div className="bg-therapy/5 rounded-xl p-6 border border-therapy/20">
                <p className="text-therapy font-title font-medium mb-2">Important Truth</p>
                <p className="text-slate-700 font-body text-sm">Recognizing that your child needs additional support is a powerful, loving parental act—not a sign of failure. The need for therapy is not born from failure—not on your part, and not on the part of your child.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="reasons-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="reasons-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Common Reasons Parents Seek Therapy for Their Child</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { title: 'Behavioral Challenges', items: 'Aggression, defiance, impulsivity, withdrawal' },
                { title: 'Emotional Struggles', items: 'Anxiety, sadness, fears, anger, outbursts' },
                { title: 'Life Transitions', items: 'Divorce, loss, moving, new siblings' },
                { title: 'Trauma', items: 'Witnessing violence, abuse, bullying, accidents' },
                { title: 'Social Challenges', items: 'Difficulty making friends, isolation, being bullied' },
                { title: 'Academic Concerns', items: 'School refusal, concentration issues, performance drops' },
              ].map((item, i) => (
                <div key={i} className="bg-ivory rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-body">{item.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy/5 py-16" aria-labelledby="play-therapy-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">Our Approach</p>
              <h2 id="play-therapy-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Play Therapy: How Children Heal</h2>
              <p className="text-slate-600 font-body mb-4">Play therapy is the primary therapeutic approach we use with children (ages 3-12). Children process the world through play—it&apos;s their natural language for exploring emotions and working through experiences.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {['Observe patterns in play', 'Provide a safe container', 'Reflect and validate feelings', 'Build skills through play'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-therapy/20">
                    <span className="text-therapy" aria-hidden="true">✓</span>
                    <span className="text-slate-700 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Your Child Doesn&apos;t Have to Carry Big Feelings Alone</h2>
            <p className="text-white/80 font-body mb-6">We&apos;re here to help. Contact us to get started.</p>
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
              <Link href="/services/teen-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Teen Therapy</Link>
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

