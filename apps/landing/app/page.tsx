'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'

// Search Modal
function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  const results = [
    { title: 'Individual Therapy', href: '/therapy/individual', cat: 'Therapy' },
    { title: 'EMDR Therapy', href: '/therapy/emdr', cat: 'Therapy' },
    { title: 'Couples Therapy', href: '/therapy/couples', cat: 'Therapy' },
    { title: 'Child & Teen Therapy', href: '/therapy/child-teen', cat: 'Therapy' },
    { title: 'Massage Services', href: '/wellness/massage', cat: 'Wellness' },
    { title: 'IV Vitamin Infusion', href: '/wellness/iv-therapy', cat: 'Wellness' },
    { title: 'Acupuncture', href: '/wellness/acupuncture', cat: 'Wellness' },
    { title: 'Facials & Skincare', href: '/wellness/facials', cat: 'Wellness' },
    { title: 'Our Locations', href: '/locations', cat: 'Info' },
    { title: 'Contact Us', href: '/contact', cat: 'Info' },
  ].filter(r => query.length > 1 && r.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div 
      className="fixed inset-0 z-50 modal-backdrop animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="max-w-xl mx-auto mt-20 px-4" onClick={e => e.stopPropagation()}>
        <div className="bg-white rounded-xl shadow-xl animate-slide-down overflow-hidden">
          <div className="p-4 border-b border-clay/30">
            <label htmlFor="search-input" className="sr-only">Search</label>
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search services, locations..."
              className="w-full text-lg text-charcoal outline-none font-body"
              autoFocus
            />
          </div>
          {query.length > 1 && (
            <ul className="max-h-72 overflow-y-auto" role="listbox">
              {results.length > 0 ? results.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    className="flex items-center justify-between p-4 hover:bg-warm border-b border-clay/10 last:border-0"
                    onClick={onClose}
                  >
                    <span className="text-charcoal">{r.title}</span>
                    <span className="text-xs text-therapy bg-therapy/10 px-2 py-0.5 rounded">{r.cat}</span>
                  </Link>
                </li>
              )) : (
                <li className="p-4 text-muted text-center">No results found</li>
              )}
            </ul>
          )}
          <div className="p-3 bg-warm/50 text-xs text-muted text-center">Press ESC to close</div>
        </div>
      </div>
    </div>
  )
}

// Path Finder Quiz - Interactive service recommendation tool
function PathFinderQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [announced, setAnnounced] = useState('')
  
  const questions = [
    {
      title: "What brings you here today?",
      sub: "Select what resonates most",
      opts: [
        { id: 'therapy-change', label: 'Navigating a major life change', path: 'therapy' },
        { id: 'therapy-past', label: 'Working through something from my past', path: 'therapy' },
        { id: 'therapy-stuck', label: 'Feeling stuck or overwhelmed', path: 'therapy' },
        { id: 'therapy-relationship', label: 'Support for my relationship or family', path: 'therapy' },
        { id: 'wellness-relax', label: 'Deep relaxation and stress relief', path: 'wellness' },
        { id: 'wellness-pain', label: 'Relief from physical tension', path: 'wellness' },
        { id: 'wellness-skin', label: 'Skin rejuvenation and self-care', path: 'wellness' },
        { id: 'wellness-energy', label: 'Energy boost and overall wellness', path: 'wellness' },
        { id: 'unsure', label: "I'm not sure yet", path: 'both' },
      ]
    },
    {
      title: "What matters most to you?",
      sub: "Select your preference",
      opts: [
        { id: 'structured', label: 'A structured approach with specific techniques', path: 'therapy' },
        { id: 'conversational', label: 'A conversational, exploratory approach', path: 'therapy' },
        { id: 'hands-on', label: 'Hands-on bodywork (massage, touch-based)', path: 'wellness' },
        { id: 'technology', label: 'Technology-assisted treatments', path: 'wellness' },
        { id: 'holistic', label: 'A holistic mind-body approach', path: 'both' },
        { id: 'open', label: "I'm open to recommendations", path: 'both' },
      ]
    }
  ]
  
  const getResult = () => {
    const t = answers.filter(a => questions.flatMap(q => q.opts).find(o => o.id === a)?.path === 'therapy').length
    const w = answers.filter(a => questions.flatMap(q => q.opts).find(o => o.id === a)?.path === 'wellness').length
    return t > w ? 'therapy' : w > t ? 'wellness' : 'both'
  }
  
  const select = (id: string) => {
    const newAns = [...answers]; newAns[step] = id; setAnswers(newAns)
    const isLastStep = step >= questions.length - 1
    setAnnounced(isLastStep ? 'Calculating your recommendation...' : `Moving to question ${step + 2}`)
    setTimeout(() => setStep(step < questions.length - 1 ? step + 1 : questions.length), 250)
  }

  if (step >= questions.length) {
    const result = getResult()
    const resultText = result === 'therapy' 
      ? "Based on your responses, our therapy services may be right for you."
      : result === 'wellness' 
        ? "Based on your responses, our wellness services may be right for you."
        : "You might benefit from both our therapy and wellness services."
    
    return (
      <div className="bg-warm rounded-xl p-8 text-center animate-fade-in" role="region" aria-label="Quiz results" aria-live="polite">
        <div className="w-14 h-14 bg-therapy/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
          <svg className="w-7 h-7 text-therapy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-heading mb-2">Your Path Awaits</h3>
        <p className="text-charcoal mb-6 text-sm">{resultText}</p>
        <p className="text-xs text-muted mb-6">
          <strong>Note:</strong> This quiz helps you explore options. It does not diagnose conditions or replace professional consultation. 
          Schedule a consultation to discuss your unique needs.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {(result === 'therapy' || result === 'both') && (
            <Link href="/therapy" className="bg-therapy text-white px-5 py-2.5 rounded-lg text-sm font-medium btn-hover">
              Explore Therapy Services
            </Link>
          )}
          {(result === 'wellness' || result === 'both') && (
            <Link href="/wellness" className="bg-wellness text-white px-5 py-2.5 rounded-lg text-sm font-medium btn-hover">
              Explore Wellness Services
            </Link>
          )}
        </div>
        <button 
          onClick={() => { setStep(0); setAnswers([]); setAnnounced('Quiz restarted') }} 
          className="mt-4 text-sm text-therapy hover:underline"
          aria-label="Restart the Path Finder quiz"
        >
          Start over
        </button>
      </div>
    )
  }

  const q = questions[step]
  return (
    <div className="bg-warm rounded-xl p-6 md:p-8" role="form" aria-label="Path Finder Quiz - Find the right services for you">
      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announced}</div>
      
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-muted" aria-label={`Question ${step + 1} of ${questions.length}`}>
          Step {step + 1} of {questions.length}
        </span>
        <div className="flex-1 mx-4 h-1.5 bg-clay/50 rounded-full overflow-hidden" role="progressbar" aria-valuenow={(step + 1) * 50} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-therapy progress-bar rounded-full" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      
      {/* Question */}
      <fieldset className="text-center mb-6 animate-fade-in-up border-0 p-0 m-0">
        <legend className="font-heading text-xl md:text-2xl text-heading mb-1 w-full">{q.title}</legend>
        <p className="text-sm text-muted">{q.sub}</p>
      </fieldset>
      
      {/* Options */}
      <div className="grid gap-2" role="radiogroup" aria-label={q.title}>
        {q.opts.map((o, i) => (
          <button
            key={o.id}
            onClick={() => select(o.id)}
            className={`quiz-option text-left p-4 rounded-lg border-2 border-clay/30 text-sm animate-fade-in-up stagger-${Math.min(i + 1, 4)} ${answers[step] === o.id ? 'selected' : ''}`}
            role="radio"
            aria-checked={answers[step] === o.id}
            tabIndex={0}
          >
            {o.label}
          </button>
        ))}
      </div>
      
      {/* Back button */}
      {step > 0 && (
        <button 
          onClick={() => { setStep(step - 1); setAnnounced(`Returned to question ${step}`) }} 
          className="mt-4 text-sm text-therapy hover:underline"
          aria-label={`Go back to question ${step}`}
        >
          ← Back
        </button>
      )}
    </div>
  )
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Skip Link - Accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      {/* Crisis Banner - Recommended on landing, REQUIRED on therapy/wellness */}
      <div className="bg-crisis text-white text-center py-2 text-sm" role="banner">
        <span className="opacity-80">Crisis support 24/7:</span>{' '}
        <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        <span className="opacity-50 mx-2">|</span>
        <a href="https://988lifeline.org/chat" className="hover:underline" target="_blank" rel="noopener noreferrer">Chat</a>
        <span className="opacity-50 mx-2 hidden sm:inline">|</span>
        <span className="hidden sm:inline opacity-80">Text HOME to 741741</span>
      </div>

      {/* Nav - White for contrast */}
      <nav className="bg-white border-b border-clay/20 sticky top-0 z-40 shadow-sm" aria-label="Main navigation">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-display italic text-xl text-heading" aria-label="Pathways Within Home">
            Pathways Within
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm font-body" role="list">
            {[
              ['Therapy', '/therapy'],
              ['Wellness', '/wellness'],
              ['About', '/about'],
              ['Locations', '/locations'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-charcoal hover:text-therapy link-underline">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 text-charcoal hover:text-therapy" 
              aria-label="Open search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <Link href="/contact" className="hidden sm:inline-block bg-btn-primary text-white text-sm px-4 py-2 rounded-lg btn-hover">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero - Full viewport height, above the fold */}
        <section className="bg-cream min-h-[calc(100vh-100px)] flex items-center py-12 md:py-0" aria-labelledby="hero-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="animate-fade-in-up">
              <h1 id="hero-heading" className="font-display italic text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-4">
                Discover Your Pathways Within
              </h1>
              <p className="text-lg md:text-xl text-charcoal mb-6 font-body">A 360º Approach to Healing & Transformation</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/therapy" className="bg-therapy text-white px-6 py-3 rounded-lg text-sm font-medium btn-hover">
                  Explore Therapy
                </Link>
                <Link href="/wellness" className="border-2 border-wellness text-wellness px-6 py-3 rounded-lg text-sm font-medium btn-hover hover:bg-wellness hover:text-white">
                  Explore Wellness
                </Link>
              </div>
              {/* Scroll indicator */}
              <div className="hidden md:flex items-center gap-2 text-muted text-sm animate-fade-in-up stagger-3">
                <span>Scroll to explore</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            <div className="bg-stone border border-clay/50 rounded-xl aspect-[4/3] flex items-center justify-center animate-fade-in-up stagger-2" aria-label="Hero image placeholder">
              <span className="text-muted text-sm">Hero Image</span>
            </div>
          </div>
        </section>

        {/* Quiz - Alternating: warm */}
        <section className="bg-warm py-16" aria-labelledby="quiz-heading">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 id="quiz-heading" className="font-heading text-2xl text-heading mb-2">Find Your Path</h2>
              <p className="text-charcoal text-sm">Answer a few questions to discover which services might be right for you.</p>
            </div>
            <PathFinderQuiz />
          </div>
        </section>

        {/* Value Prop - Alternating: stone (emphasis) */}
        <section className="bg-stone py-16 md:py-20" aria-labelledby="value-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-warm border border-clay/30 rounded-xl aspect-[4/3] flex items-center justify-center order-2 md:order-1 hover-lift" aria-label="Mind body spirit image placeholder">
              <span className="text-muted text-sm">Image</span>
            </div>
            <div className="order-1 md:order-2">
              <h2 id="value-heading" className="font-heading text-3xl text-heading mb-4">Mind, Body & Spirit—In Harmony</h2>
              <p className="text-charcoal leading-relaxed font-body">
                At Pathways Within, true well-being is about caring for yourself as a whole person. 
                Our 360º holistic approach blends clinical therapy and advanced wellness services 
                for emotional healing, physical renewal, and overall well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Two Pathways - Alternating: cream */}
        <section className="bg-cream py-16 md:py-20" aria-labelledby="pathways-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 id="pathways-heading" className="font-heading text-3xl text-heading mb-2">Choose Your Path</h2>
              <p className="text-charcoal">Two practices, one philosophy of care.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Therapy */}
              <article className="bg-warm rounded-xl overflow-hidden border border-clay/30 hover-lift">
                <div className="bg-stone aspect-video flex items-center justify-center" aria-label="Therapy image placeholder">
                  <span className="text-muted text-sm">Therapy Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display italic text-2xl text-heading mb-1">Pathway to Wisdom</h3>
                  <p className="text-therapy text-sm font-medium uppercase tracking-wide mb-3">Mental Health & Therapy</p>
                  <ul className="text-sm text-charcoal space-y-1.5 mb-4 font-body" aria-label="Therapy services">
                    {['Individual, Couples & Family Therapy', 'EMDR, IFS & DBT Therapy', 'Child & Teen Therapy', 'Veterans & First Responders'].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="text-therapy" aria-hidden="true">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/therapy" className="block w-full bg-therapy text-white text-center py-2.5 rounded-lg text-sm font-medium btn-hover">
                    Explore Therapy
                  </Link>
                  <p className="text-center text-sm text-charcoal mt-3">
                    <a href="tel:6313713825" className="hover:text-therapy">(631) 371-3825</a>
                  </p>
                </div>
              </article>

              {/* Wellness */}
              <article className="bg-stone rounded-xl overflow-hidden border border-clay/30 hover-lift">
                <div className="bg-warm aspect-video flex items-center justify-center" aria-label="Wellness image placeholder">
                  <span className="text-muted text-sm">Wellness Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display italic text-2xl text-heading mb-1">Pathway to Wellness</h3>
                  <p className="text-wellness text-sm font-medium uppercase tracking-wide mb-3">Holistic Body Care</p>
                  <ul className="text-sm text-charcoal space-y-1.5 mb-4 font-body" aria-label="Wellness services">
                    {['Massage & Acupuncture', 'IV Vitamin Infusion & Reiki', 'Botox, Fillers & PRP', 'Hair Restoration & Skin Care'].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="text-wellness" aria-hidden="true">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/wellness" className="block w-full bg-wellness text-white text-center py-2.5 rounded-lg text-sm font-medium btn-hover">
                    Explore Wellness
                  </Link>
                  <p className="text-center text-sm text-charcoal mt-3">
                    <a href="tel:5163369209" className="hover:text-wellness">(516) 336-9209</a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Why Us - Alternating: warm */}
        <section className="bg-warm py-16 md:py-20" aria-labelledby="why-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="why-heading" className="font-heading text-3xl text-heading text-center mb-10">Why Pathways Within?</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" role="list">
              {[
                { icon: '◎', accent: 'therapy', title: '360º Well-Being', desc: 'Inner healing + outer renewal' },
                { icon: '◎', accent: 'wellness', title: 'Expert Team', desc: 'Licensed professionals' },
                { icon: '◎', accent: 'therapy', title: 'Tailored Care', desc: 'Personalized treatment' },
                { icon: '◎', accent: 'wellness', title: 'Holistic', desc: 'Mind-body approach' },
              ].map((item, i) => (
                <li key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`w-12 h-12 ${item.accent === 'therapy' ? 'bg-therapy/15' : 'bg-wellness/15'} rounded-full flex items-center justify-center mx-auto mb-3`} aria-hidden="true">
                    <span className={`text-lg ${item.accent === 'therapy' ? 'text-therapy' : 'text-wellness'}`}>{item.icon}</span>
                  </div>
                  <h3 className="font-medium text-heading text-sm mb-1">{item.title}</h3>
                  <p className="text-charcoal text-xs">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-xl text-heading text-center mt-10">
              Your journey to healing starts here.
            </p>
          </div>
        </section>

        {/* Locations - Alternating: stone */}
        <section className="bg-stone py-16 md:py-20" aria-labelledby="locations-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="locations-heading" className="font-heading text-3xl text-heading text-center mb-2">Our Locations</h2>
            <p className="text-charcoal text-center mb-8">5 Long Island locations + telehealth</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center" role="list">
              {['Smithtown', 'Garden City', 'Massapequa', 'Port Jefferson', 'Rockville Centre', 'Telehealth'].map((loc) => (
                <li key={loc} className="bg-cream rounded-lg p-4 border border-clay/20 hover-lift shadow-sm">
                  <p className="text-heading text-sm font-medium">{loc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs - With Schema */}
        <section className="bg-cream py-16 md:py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 id="faq-heading" className="font-heading text-3xl text-heading text-center mb-10">Frequently Asked Questions</h2>
            <dl className="space-y-4" role="list">
              {[
                {
                  q: "How do I know if I need therapy or wellness services?",
                  a: "If you're dealing with emotional challenges, relationship issues, anxiety, depression, or trauma, our therapy services can help. If you're looking for physical relaxation, stress relief, pain management, or aesthetic treatments, our wellness services are ideal. Many clients benefit from both—use our Path Finder quiz above to get a personalized recommendation."
                },
                {
                  q: "Do you accept insurance?",
                  a: "Our therapy practice accepts most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and United Healthcare. Wellness services are typically self-pay. Contact us for specific coverage questions."
                },
                {
                  q: "What's the difference between Pathways Within Therapy and Wellness?",
                  a: "Pathways Within Therapy offers licensed mental health services including individual, couples, family therapy, EMDR, and trauma treatment. Pathways Within Wellness provides spa and holistic services like massage, acupuncture, IV therapy, and aesthetic treatments. Both operate under common ownership with a shared philosophy of whole-person care."
                },
                {
                  q: "Can I book appointments online?",
                  a: "Yes! Therapy appointments can be booked through our online portal or by calling (631) 371-3825. Wellness appointments can be scheduled by calling (516) 336-9209 or through our booking system."
                },
                {
                  q: "Do you offer virtual/telehealth sessions?",
                  a: "Yes, we offer telehealth therapy sessions for clients throughout New York State. This allows you to receive quality mental health care from the comfort of your home."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-warm rounded-lg p-5 hover-lift">
                  <dt className="font-medium text-heading mb-2">{faq.q}</dt>
                  <dd className="text-charcoal text-sm leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-btn-primary py-16" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-display italic text-3xl text-white mb-3">Ready to Begin?</h2>
            <p className="text-white/70 mb-6 font-body">Start your journey to emotional support, physical renewal, or both.</p>
            <div className="flex justify-center gap-3">
              <Link href="/therapy" className="bg-white text-btn-primary px-6 py-2.5 rounded-lg text-sm font-medium btn-hover">Start Therapy</Link>
              <Link href="/wellness" className="border border-white text-white px-6 py-2.5 rounded-lg text-sm font-medium btn-hover hover:bg-white/10">Start Wellness</Link>
            </div>
          </div>
        </section>

        {/* Disclosure - Required */}
        <section className="bg-warm py-4" aria-label="Ownership disclosure">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <p className="text-xs text-muted text-center font-body">
              <strong className="text-charcoal">Disclosure:</strong> Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
              Wellness services are separate from and do not substitute for mental health treatment.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
