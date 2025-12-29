'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Footer } from '../../../components/Footer'

// ============================================
// SHARED COMPONENTS
// ============================================

function CrisisBanner() {
  return (
    <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner" aria-label="Crisis support resources">
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
    <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
      <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-title font-semibold text-xl text-slate-800" aria-label="Pathways Within Therapy Home">
          Pathways Within <span className="text-therapy">Therapy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={item.label === 'Services' ? 'text-therapy font-medium' : 'text-slate-700 hover:text-therapy'}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
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
          <div className="pt-4 border-t border-slate-100 mt-2">
            <a href="https://pathwayswithintherapy.janeapp.com/" className="block text-center bg-therapy text-white py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Consultation</a>
            <p className="text-center text-sm text-slate-500 mt-2"><a href="tel:6313713825" className="hover:text-therapy">(631) 371-3825</a></p>
          </div>
        </div>
      )}
    </nav>
  )
}

// Footer imported from ../../../components/Footer

function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  if (!isVisible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg py-3 px-4 md:hidden" role="complementary" aria-label="Quick contact options">
      <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
        <a href="tel:6313713825" className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-title font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
          Call
        </a>
        <a href="https://pathwayswithintherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-therapy text-white py-3 px-4 rounded-lg font-title font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
          Book
        </a>
      </div>
    </div>
  )
}

// ============================================
// MAIN CONTENT
// ============================================

const commonReasons = [
  { title: 'Anxiety', desc: 'Persistent worry, panic attacks, social anxiety, phobias' },
  { title: 'Depression', desc: 'Ongoing sadness, loss of interest, feelings of hopelessness' },
  { title: 'Grief & Loss', desc: 'Processing death, relationship endings, job loss' },
  { title: 'Relationship Issues', desc: 'Patterns of conflict, trust issues, boundaries' },
  { title: 'Life Transitions', desc: 'Moving, career changes, becoming a parent, divorce' },
  { title: 'Trauma', desc: 'Past experiences affecting your present life' },
  { title: 'Stress Management', desc: 'Feeling overwhelmed, burned out, unable to relax' },
  { title: 'Self-Esteem', desc: 'Negative self-talk, feelings of worthlessness' },
  { title: 'Identity Questions', desc: 'Exploring who you are and what you value' },
]

const faqs = [
  { q: 'Why would I talk to a therapist instead of a friend?', a: 'Therapists bring specialized training and clinical expertise. Therapy is unbiased—your therapist doesn\'t have a personal stake in your decisions. It\'s your space entirely, and it\'s completely confidential.' },
  { q: 'How long do I have to be in therapy?', a: 'As long as it\'s helpful, which you get to decide. Some people come for a few months; others stay for years. You can see us weekly, transition to less frequent sessions, or take breaks as needed.' },
  { q: 'How confidential is therapy?', a: 'We adhere to strict HIPAA guidelines. We can\'t share what you discuss in sessions. The only exceptions are if there\'s risk of harm to yourself or others, or child/elder abuse.' },
  { q: 'What happens in a session?', a: 'First sessions involve getting to know you and your goals. Ongoing sessions include check-ins, main therapeutic work, and wrap-up with any between-session practice. You guide what we discuss.' },
]

export default function IndividualTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main" role="main">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-therapy">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-therapy">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-slate-800" aria-current="page">Individual Therapy</span></li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-copper font-title font-medium text-sm italic mb-2">
                &ldquo;The shoe that fits one person pinches another; there is no one recipe for living that suits all cases.&rdquo; — Carl Jung
              </p>
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
                Individual Therapy
              </h1>
              <p className="text-xl text-slate-600 font-body mb-6">
                Your Journey to Self Discovery and Healing
              </p>
              {/* Hero CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href="https://pathwayswithintherapy.janeapp.com/" className="bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
                <a href="tel:6313713825" className="border-2 border-therapy text-therapy px-6 py-3 rounded-lg font-title font-medium hover:bg-therapy hover:text-white transition-colors">
                  Call (631) 371-3825
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Is */}
        <section className="bg-ivory py-16" aria-labelledby="what-is-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="what-is-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">What is Individual Therapy?</h2>
              <p className="text-slate-600 font-body mb-4">
                Individual therapy is professional one-on-one counseling where you work with a trained, licensed therapist 
                to explore your thoughts, feelings, and life experiences in a safe, confidential space. It&apos;s sometimes 
                called psychotherapy, talk therapy, or counseling—all terms for the same deeply personal process of healing and growth.
              </p>
              <p className="text-slate-600 font-body">
                <strong>The ultimate goal</strong> of individual therapy is to help you find greater self-awareness and equip you with 
                practical tools to live a more meaningful, fulfilling life. Along the way, you&apos;ll better understand your patterns, 
                develop healthier coping strategies, improve your relationships, and build resilience to face life&apos;s inevitable challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Common Reasons */}
        <section className="bg-white py-16" aria-labelledby="reasons-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="reasons-heading" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Common Reasons People Seek Individual Therapy</h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto" role="list">
              {commonReasons.map((item, i) => (
                <li key={i} className="bg-ivory rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-body">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CBT Spotlight */}
        <section className="bg-therapy/5 py-16" aria-labelledby="cbt-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-therapy font-title font-medium text-sm uppercase tracking-wide mb-2">Spotlight</p>
              <h2 id="cbt-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">Cognitive Behavioral Therapy (CBT)</h2>
              <p className="text-slate-600 font-body mb-4">
                CBT is one of the most researched and evidence-based approaches in mental health treatment. The core insight 
                is that <strong>the way you think about situations influences how you feel, and how you feel influences what you do</strong>.
              </p>
              <div className="bg-white rounded-xl p-6 border border-therapy/20 mb-4">
                <p className="text-slate-700 font-body text-sm">
                  <strong>Example:</strong> You send a text to a friend and don&apos;t get a response for several hours. 
                  Your automatic thought might be &ldquo;They&apos;re ignoring me&rdquo;—creating anxiety and hurt. 
                  In CBT, we examine whether this thought is accurate, and develop more balanced perspectives.
                </p>
              </div>
              <p className="text-slate-600 font-body">
                CBT helps with depression, anxiety disorders, OCD, PTSD, eating disorders, insomnia, and many other conditions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16" aria-labelledby="faq-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="faq-heading" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
            <dl className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="bg-ivory rounded-xl p-6 border border-slate-200">
                  <dt className="font-title font-medium text-slate-800 mb-2">{item.q}</dt>
                  <dd className="text-slate-600 text-sm font-body">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-therapy py-16" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-title font-bold text-3xl text-white mb-3">Take the First Step</h2>
            <p className="text-white/80 font-body mb-6">
              You don&apos;t have to have everything figured out. You just need to be willing to show up and start the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://pathwayswithintherapy.janeapp.com/" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
              <a href="tel:6313713825" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-white/10">
                Call (631) 371-3825
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4 font-body">5 Long Island locations + telehealth in NY, NJ, NC, FL</p>
          </div>
        </section>

        {/* Other Services */}
        <section className="bg-pearl py-12" aria-labelledby="related-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-heading" className="font-title font-medium text-lg text-slate-800 mb-4">You May Also Be Interested In</h3>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Related services">
              <Link href="/services/couples-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Couples Therapy</Link>
              <Link href="/services/trauma-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Trauma Therapy</Link>
              <Link href="/services/teen-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Teen Therapy</Link>
              <Link href="/services/somatic-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Somatic Therapy</Link>
              <Link href="/services" className="bg-therapy/10 px-4 py-2 rounded-lg text-sm text-therapy font-body hover:bg-therapy/20">View All Services →</Link>
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
      <StickyCTA />
    </>
  )
}

