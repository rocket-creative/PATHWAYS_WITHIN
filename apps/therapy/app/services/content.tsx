'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Footer } from '../../components/Footer'

function CrisisBanner() {
  return (
    <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner">
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
        <Link href="/" className="font-title font-semibold text-xl text-slate-800">
          Pathways Within <span className="text-therapy">Therapy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`transition-colors ${item.href === '/services' ? 'text-therapy font-medium' : 'text-slate-700 hover:text-therapy'}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
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
  person: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  child: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
  teen: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>,
  couple: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  heart: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  scale: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>,
  badge: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  body: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75v7.5m-4.5-4.5l4.5 4.5 4.5-4.5" /></svg>,
  eye: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  spiral: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
}

const services = [
  { title: 'Individual Therapy', description: 'One-on-one counseling to explore your thoughts, feelings, and experiences in a safe, confidential space.', href: '/services/individual-therapy', icon: 'person', highlights: ['Anxiety & Depression', 'Life Transitions', 'Self-Discovery'] },
  { title: 'Child Therapy', description: 'Specialized support for children through play therapy and age-appropriate techniques.', href: '/services/child-therapy', icon: 'child', highlights: ['Play Therapy', 'Behavioral Support', 'Family Guidance'] },
  { title: 'Teen Therapy', description: 'A safe space for teens to navigate the challenges of adolescence with professional support.', href: '/services/teen-therapy', icon: 'teen', highlights: ['School Stress', 'Identity & Belonging', 'Family Dynamics'] },
  { title: 'Couples Therapy', description: 'Rebuild connection and improve communication in your relationship with expert guidance.', href: '/services/couples-therapy', icon: 'couple', highlights: ['Gottman Method', 'Communication Skills', 'Conflict Resolution'] },
  { title: 'Trauma Therapy', description: 'Evidence-based approaches to help you heal from past experiences and reclaim your life.', href: '/services/trauma-therapy', icon: 'heart', highlights: ['EMDR', 'CPT', 'Somatic Approaches'] },
  { title: 'Weight Loss Surgery Support', description: 'Pre-surgical evaluations and ongoing counseling for bariatric surgery patients.', href: '/services/weight-loss-surgery-support', icon: 'scale', highlights: ['Evaluations', 'Emotional Support', 'Lifestyle Change'] },
  { title: 'Veterans & First Responders', description: 'Specialized therapy for those who serve, addressing unique challenges with expertise and respect.', href: '/services/veterans-first-responders', icon: 'badge', highlights: ['PTSD', 'Transition Support', 'First Responder Stress'] },
  { title: 'Somatic Therapy', description: 'Body-centered approaches that address trauma and stress stored in your body.', href: '/services/somatic-therapy', icon: 'body', highlights: ['Mind-Body Connection', 'Nervous System', 'Embodied Healing'] },
  { title: 'EMDR Therapy', description: 'Eye Movement Desensitization and Reprocessing for trauma and disturbing memories.', href: '/services/emdr-therapy', icon: 'eye', highlights: ['Trauma Processing', 'Anxiety Relief', 'Evidence-Based'] },
  { title: 'Hypnotherapy', description: 'Clinical hypnosis to access your subconscious mind for healing and positive change.', href: '/services/hypnotherapy', icon: 'spiral', highlights: ['Habit Change', 'Anxiety', 'Performance'] },
]

export default function ServicesContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">Our Services</p>
            <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
              Therapy Services
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              We offer a wide range of therapy services to meet you where you are. 
              Every journey is unique—find the support that&apos;s right for you.
            </p>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="services-grid">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="services-grid" className="sr-only">All Therapy Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white rounded-xl p-6 border border-slate-200 hover-lift">
                  <div className="w-10 h-10 bg-therapy/10 rounded-lg flex items-center justify-center text-therapy mb-4" aria-hidden="true">
                    {icons[service.icon]}
                  </div>
                  <h3 className="font-title font-semibold text-lg text-slate-800 group-hover:text-therapy transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-body mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-therapy/10 text-therapy px-2 py-1 rounded font-body">{h}</span>
                    ))}
                  </div>
                  <div className="mt-4 text-therapy font-title text-sm font-medium group-hover:underline">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="accessibility-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="accessibility-section" className="sr-only">Insurance and Scheduling</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-therapy/5 rounded-xl p-6 border border-therapy/20">
                <h3 className="font-title font-semibold text-xl text-slate-800 mb-3">Insurance Accepted</h3>
                <p className="text-slate-600 font-body text-sm mb-4">
                  We accept most major insurance providers including Aetna, Cigna, UHC, Oxford, Medicare, and many more.
                </p>
                <Link href="/contact" className="text-therapy font-title text-sm font-medium hover:underline">
                  Verify Your Coverage →
                </Link>
              </div>
              <div className="bg-copper/5 rounded-xl p-6 border border-copper/20">
                <h3 className="font-title font-semibold text-xl text-slate-800 mb-3">Flexible Scheduling</h3>
                <p className="text-slate-600 font-body text-sm mb-4">
                  Evening appointments available up to 11 PM with select clinicians. Virtual therapy throughout NY, NJ, NC, and FL.
                </p>
                <a href="https://pathwayswithintherapy.janeapp.com/" className="text-copper font-title text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  Book Online →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pearl py-16" aria-labelledby="not-sure-section">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 id="not-sure-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Not Sure Which Service Is Right for You?</h2>
            <p className="text-slate-600 font-body max-w-2xl mx-auto mb-6">
              That&apos;s okay! Many people aren&apos;t sure where to start. Contact us and we&apos;ll help match you 
              with the right therapist and approach for your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:6313713825" className="bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium">
                Call (631) 371-3825
              </a>
              <Link href="/contact" className="border-2 border-therapy text-therapy px-6 py-3 rounded-lg font-title font-medium">
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

