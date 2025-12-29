'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/team" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

const terms = [
  { name: 'Individual Therapy', desc: 'One-on-one sessions with a licensed therapist to explore thoughts, feelings, and patterns in a confidential setting.', bestFor: 'Life transitions, self-understanding, general support', href: '/services/individual-therapy' },
  { name: 'Couples Therapy', desc: 'Sessions where both partners meet together to work on communication, connection, and relationship challenges.', bestFor: 'Communication issues, reconnection, trust rebuilding', href: '/services/couples-therapy' },
  { name: 'Child Therapy', desc: 'Age-appropriate therapy using play, art, and storytelling to help children express and process emotions.', bestFor: 'Children experiencing big emotions, behavioral changes, or trauma', href: '/services/child-therapy' },
  { name: 'Teen Therapy', desc: 'Confidential support for adolescents addressing identity, school stress, relationships, and life challenges.', bestFor: 'Teens navigating identity, social pressure, or difficult experiences', href: '/services/teen-therapy' },
  { name: 'Trauma Therapy', desc: 'Specialized approaches to help process traumatic experiences and reduce their impact on daily life.', bestFor: 'Past trauma affecting the present, PTSD symptoms, flashbacks', href: '/services/trauma-therapy' },
  { name: 'EMDR Therapy', desc: 'Eye Movement Desensitization and Reprocessing uses bilateral stimulation to help process distressing memories.', bestFor: 'Specific traumatic memories, phobias, distressing events', href: '/services/emdr-therapy' },
  { name: 'Somatic Therapy', desc: 'Body-focused therapy recognizing that emotions and trauma are stored physically, incorporating body awareness and release.', bestFor: 'When talk therapy feels insufficient, chronic tension, body-stored trauma', href: '/services/somatic-therapy' },
  { name: 'Hypnotherapy', desc: 'Guided relaxation and focused attention to access the subconscious mind and support therapeutic goals.', bestFor: 'Habits, patterns resistant to change, complementing other approaches', href: '/services/hypnotherapy' },
  { name: 'Veterans & First Responders', desc: 'Specialized therapy for service members and first responders, delivered by therapists trained in service-related experiences.', bestFor: 'Veterans, active military, police, fire, EMS, healthcare workers', href: '/services/veterans-first-responders' },
  { name: 'Weight Loss Surgery Support', desc: 'Counseling for individuals preparing for or recovering from bariatric surgery, addressing emotional and psychological aspects.', bestFor: 'Pre-surgery clearance, post-surgery adjustment, emotional eating', href: '/services/weight-loss-surgery-support' },
]

const commonTerms = [
  { term: 'HIPAA', def: 'Health Insurance Portability and Accountability Act—federal law protecting your health information privacy.' },
  { term: 'Telehealth', def: 'Remote therapy sessions via secure video platform, available from anywhere with internet.' },
  { term: 'Intake', def: 'Your first session where therapist gathers background information and you discuss goals.' },
  { term: 'LCSW', def: 'Licensed Clinical Social Worker—a master\'s-level mental health professional.' },
  { term: 'LMHC', def: 'Licensed Mental Health Counselor—a master\'s-level mental health professional.' },
  { term: 'CBT', def: 'Cognitive Behavioral Therapy—focuses on changing unhelpful thought patterns and behaviors.' },
  { term: 'DBT', def: 'Dialectical Behavior Therapy—skills-based approach for emotional regulation and distress tolerance.' },
]

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const filtered = terms.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Therapy Glossary</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">Clear, jargon-free explanations of therapy types and common terms.</p>
          </div>
        </section>

        <section className="bg-ivory py-8">
          <div className="max-w-3xl mx-auto px-6">
            <input
              type="search"
              placeholder="Search therapy types..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 font-body focus:outline-none focus:ring-2 focus:ring-therapy"
            />
          </div>
        </section>

        <section className="bg-ivory pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-title font-semibold text-xl text-slate-800 mb-6">Therapy Types</h2>
            <div className="space-y-4">
              {filtered.map((term) => (
                <div key={term.name} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-title font-semibold text-lg text-therapy mb-2">{term.name}</h3>
                  <p className="text-slate-600 font-body text-sm mb-3">{term.desc}</p>
                  <p className="text-slate-500 font-body text-xs mb-4"><strong>Best for:</strong> {term.bestFor}</p>
                  <Link href={term.href} className="text-therapy text-sm font-body hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-slate-500 font-body text-center py-8">No results found. Try a different search term.</p>
              )}
            </div>

            <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 mt-12">Common Terms</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {commonTerms.map((t) => (
                <div key={t.term} className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-slate-800 text-sm">{t.term}</h3>
                  <p className="text-slate-600 font-body text-xs">{t.def}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Not Sure Where to Start?</h2>
            <p className="text-white/80 font-body mb-6">Take our quiz or schedule a free consultation.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/find-your-therapy" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">
                Take the Quiz
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

