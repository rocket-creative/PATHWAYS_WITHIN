'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Footer } from '../../../components/Footer'

// ============================================
// SHARED COMPONENTS
// ============================================

function CrisisBanner() {
  return (
    <div 
      className="bg-therapy-dark text-white text-center py-2 text-sm" 
      role="banner"
      aria-label="Crisis support resources"
    >
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
          <a 
            href="https://pathwayswithintherapy.janeapp.com/" 
            className="hidden sm:inline-block bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Consultation
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2" 
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="block py-2 text-lg text-slate-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 mt-2">
            <a 
              href="https://pathwayswithintherapy.janeapp.com/" 
              className="block text-center bg-therapy text-white py-3 rounded-lg font-title font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
            <p className="text-center text-sm text-slate-500 mt-2">
              <a href="tel:6313713825" className="hover:text-therapy">(631) 371-3825</a>
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}

// Footer imported from ../../../components/Footer

// ============================================
// STICKY MOBILE CTA
// ============================================
function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg py-3 px-4 md:hidden"
      role="complementary"
      aria-label="Quick contact options"
    >
      <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
        <a
          href="tel:6313713825"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-title font-medium text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call
        </a>
        <a
          href="https://pathwayswithintherapy.janeapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-therapy text-white py-3 px-4 rounded-lg font-title font-medium text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          Book
        </a>
      </div>
    </div>
  )
}

// ============================================
// MAIN CONTENT
// ============================================

export default function TraumaTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main" role="main">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-therapy">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-therapy">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-slate-800" aria-current="page">Trauma Therapy</span></li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-copper font-title font-medium text-sm italic mb-2">
                &ldquo;Trauma is hell on earth. Trauma resolved is a gift from the gods.&rdquo; — Peter A. Levine
              </p>
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
                Trauma Therapy
              </h1>
              <p className="text-xl text-slate-600 font-body mb-6">
                Healing What Happened to You
              </p>
              {/* Quick Contact in Hero */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://pathwayswithintherapy.janeapp.com/" 
                  className="bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="tel:6313713825" 
                  className="border-2 border-therapy text-therapy px-6 py-3 rounded-lg font-title font-medium hover:bg-therapy hover:text-white transition-colors"
                >
                  Call (631) 371-3825
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Trauma */}
        <section className="bg-ivory py-16" aria-labelledby="understanding-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="understanding-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">
                You Don&apos;t Have to Carry This Forever
              </h2>
              <p className="text-slate-600 font-body mb-6">
                Trauma has lasting physical and emotional effects that can leave you feeling tired, jumpy, anxious, 
                ashamed, insecure, disconnected, or numb. <strong>Healing is possible.</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4" role="list" aria-label="Types of trauma we treat">
                <article className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 mb-2">Big-T Trauma</h3>
                  <p className="text-slate-600 text-sm font-body">Sexual assault, physical violence, accidents, combat, medical trauma, sudden loss</p>
                </article>
                <article className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 mb-2">Little-t Trauma</h3>
                  <p className="text-slate-600 text-sm font-body">Childhood neglect, bullying, divorce, emotional abuse, betrayal, invalidation</p>
                </article>
                <article className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 mb-2">Complex Trauma</h3>
                  <p className="text-slate-600 text-sm font-body">Ongoing abuse, domestic violence, long-term captivity, repeated medical procedures</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Approaches */}
        <section className="bg-white py-16" aria-labelledby="approaches-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="approaches-heading" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">
              Evidence-Based Therapeutic Approaches
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <article className="bg-therapy/5 rounded-xl p-6 border border-therapy/20">
                <h3 className="font-title font-semibold text-lg text-therapy mb-2">EMDR Therapy</h3>
                <p className="text-slate-600 text-sm font-body mb-3">
                  Eye Movement Desensitization and Reprocessing uses bilateral stimulation to help your brain process traumatic memories.
                </p>
                <ul className="text-slate-600 text-sm font-body space-y-1" aria-label="EMDR benefits">
                  <li>• Don&apos;t have to describe trauma in detail</li>
                  <li>• Often effective in 6-12 sessions</li>
                  <li>• Strong research support for PTSD</li>
                </ul>
                <Link href="/services/emdr-therapy" className="text-therapy text-sm font-title font-medium mt-3 inline-block hover:underline">
                  Learn more about EMDR →
                </Link>
              </article>
              <article className="bg-copper/5 rounded-xl p-6 border border-copper/20">
                <h3 className="font-title font-semibold text-lg text-copper mb-2">CPT (Cognitive Processing Therapy)</h3>
                <p className="text-slate-600 text-sm font-body mb-3">
                  Examines and challenges unhelpful beliefs keeping you trapped in trauma patterns.
                </p>
                <ul className="text-slate-600 text-sm font-body space-y-1" aria-label="CPT benefits">
                  <li>• Identify &ldquo;stuck points&rdquo;</li>
                  <li>• Develop balanced, realistic thinking</li>
                  <li>• Build resilience for the future</li>
                </ul>
              </article>
              <article className="bg-pearl rounded-xl p-6 border border-slate-200">
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Somatic Therapy</h3>
                <p className="text-slate-600 text-sm font-body">
                  Trauma lives in your body. Body-centered approaches address this directly through grounding, releasing tension, and restoring a sense of safety in your body.
                </p>
                <Link href="/services/somatic-therapy" className="text-therapy text-sm font-title font-medium mt-3 inline-block hover:underline">
                  Learn more about Somatic Therapy →
                </Link>
              </article>
              <article className="bg-pearl rounded-xl p-6 border border-slate-200">
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Traditional Talk Therapy</h3>
                <p className="text-slate-600 text-sm font-body">
                  Sometimes you need to tell your story and have it witnessed by someone who truly understands. Build relationship, feel heard, and gain insights and perspective.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-ivory py-16" aria-labelledby="benefits-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="benefits-heading" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">
              Benefits of Trauma Therapy
            </h2>
            <ul className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto" role="list">
              {[
                'Understand how trauma affects you',
                'Identify and manage triggers',
                'Establish a sense of safety',
                'Develop healthy coping skills',
                'Process traumatic memories',
                'Reduce symptoms and reclaim your life'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                  <span className="text-therapy text-lg" aria-hidden="true">✓</span>
                  <span className="text-slate-700 font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 id="faq-heading" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-4">
              <div className="bg-ivory rounded-xl p-5 border border-slate-200">
                <dt className="font-title font-medium text-slate-800 mb-2">What types of trauma do you treat?</dt>
                <dd className="text-slate-600 text-sm font-body">
                  We treat all types of trauma including Big-T trauma (assault, accidents, combat), Little-t trauma (neglect, bullying, emotional abuse), and Complex trauma (ongoing abuse, domestic violence). All trauma is valid.
                </dd>
              </div>
              <div className="bg-ivory rounded-xl p-5 border border-slate-200">
                <dt className="font-title font-medium text-slate-800 mb-2">Do I have to talk about my trauma in detail?</dt>
                <dd className="text-slate-600 text-sm font-body">
                  No. Some therapies like EMDR and Somatic Therapy do not require detailed verbal processing. You decide when and how much to share. We meet you where you are.
                </dd>
              </div>
              <div className="bg-ivory rounded-xl p-5 border border-slate-200">
                <dt className="font-title font-medium text-slate-800 mb-2">How long does trauma therapy take?</dt>
                <dd className="text-slate-600 text-sm font-body">
                  Duration varies. EMDR often shows results in 6-12 sessions. Complex trauma may require longer treatment. Your therapist will discuss timelines during your consultation.
                </dd>
              </div>
              <div className="bg-ivory rounded-xl p-5 border border-slate-200">
                <dt className="font-title font-medium text-slate-800 mb-2">Do you accept insurance?</dt>
                <dd className="text-slate-600 text-sm font-body">
                  Yes! We accept most major insurance plans including Aetna, Cigna, UHC, Oxford, and Medicare. We also offer sliding scale options for those who qualify.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Crisis Alert */}
        <section className="bg-red-50 py-8" role="alert" aria-label="Crisis resources">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-red-800 font-body text-sm">
              <strong>If you&apos;re in crisis:</strong> Call <a href="tel:988" className="underline font-medium">988</a> (Suicide & Crisis Lifeline) 
              or text HELLO to <a href="sms:741741" className="underline font-medium">741741</a> (Crisis Text Line). 
              For veterans: 988 then press 1.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-therapy py-16" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-title font-bold text-3xl text-white mb-3">
              You Don&apos;t Have to Carry This Alone
            </h2>
            <p className="text-white/80 font-body mb-6">
              Starting trauma therapy takes courage. The fact that you&apos;re considering it shows your strength.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://pathwayswithintherapy.janeapp.com/" 
                className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
              <a 
                href="tel:6313713825" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-white/10"
              >
                Call (631) 371-3825
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4 font-body">
              5 Long Island locations + telehealth in NY, NJ, NC, FL
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-pearl py-12" aria-labelledby="related-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-heading" className="font-title font-medium text-lg text-slate-800 mb-4">
              Related Services
            </h3>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Related therapy services">
              <Link href="/services/emdr-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">
                EMDR Therapy
              </Link>
              <Link href="/services/somatic-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">
                Somatic Therapy
              </Link>
              <Link href="/services/veterans-first-responders" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">
                Veterans & First Responders
              </Link>
              <Link href="/services/individual-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">
                Individual Therapy
              </Link>
              <Link href="/services" className="bg-therapy/10 px-4 py-2 rounded-lg text-sm text-therapy font-body hover:bg-therapy/20">
                View All Services →
              </Link>
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
                href="https://wellness-lac.vercel.app" 
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

