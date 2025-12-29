'use client'

import Link from 'next/link'
import { useState } from 'react'

// Reusable Components (imported pattern from main page)
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
        <Link href="/" className="font-title font-semibold text-xl text-slate-800">
          Pathways Within <span className="text-therapy">Therapy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-slate-700 hover:text-therapy transition-colors">{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-lg text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-chalkboard text-white py-12">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-title font-semibold text-xl mb-2">Pathways Within Therapy</p>
            <p className="text-slate-400 font-body">Your journey to wisdom, healing, and personal growth.</p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Contact</p>
            <p className="text-slate-400 font-body"><a href="tel:6313713825" className="hover:text-white">(631) 371-3825</a></p>
            <p className="text-slate-400 font-body break-all"><a href="mailto:Welcome@pathwayswithin.com" className="hover:text-white">Welcome@pathwayswithin.com</a></p>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Services</p>
            <ul className="space-y-1 text-slate-400 font-body">
              <li><Link href="/services/individual-therapy" className="hover:text-white">Individual Therapy</Link></li>
              <li><Link href="/services/couples-therapy" className="hover:text-white">Couples Therapy</Link></li>
              <li><Link href="/services/trauma-therapy" className="hover:text-white">Trauma & EMDR</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-title font-medium mb-3">Legal</p>
            <ul className="space-y-1 text-slate-400 font-body">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-xs font-body">
          © {new Date().getFullYear()} Pathways Within Therapy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Team Data
const clinicians = [
  {
    name: 'Rachel Lessard, LCSW-R',
    title: 'Founder & Owner',
    bio: 'Together we can explore your experiences to help you feel safe and secure again. In my office, with or without your loved one, we can develop new styles of communication that create the relationship you\'ve always wanted.',
    specialties: ['Anxiety and Depression', 'PTSD and Trauma', 'Couples Therapy', 'Hypnotherapy', 'Veterans & First Responders', 'Weight Loss Surgery Evaluations'],
  },
  {
    name: 'Benjamin Marmorstein, LCSW',
    title: 'Licensed Clinical Social Worker',
    bio: 'Welcome to a compassionate and creative approach to life\'s difficult challenges. Together we\'ll create a safe, non-judgmental space of unwavering support.',
    specialties: ['School-Related Challenges', 'Children & Adolescents', 'Complex PTSD', 'Religious Trauma', 'Family Conflict', 'ADHD'],
  },
  {
    name: 'Beth Gabellini, LCSW',
    title: 'Licensed Clinical Social Worker',
    bio: 'My philosophy is that we are all perfectly imperfect and should seek to live as our authentic selves.',
    specialties: ['Relationships', 'Veterans', 'Women\'s Empowerment', 'Life Transitions'],
  },
  {
    name: 'Carly Sandstrom, LMHC',
    title: 'Licensed Mental Health Counselor',
    bio: 'In therapy, there is no "one size fits all" approach. Using an eclectic approach, I tailor each session to be most beneficial for you.',
    specialties: ['Trauma', 'Anxiety', 'Veterans & First Responders', 'Attachment & Parts Work'],
  },
  {
    name: 'Jennifer Thieke, LCSW',
    title: 'Licensed Clinical Social Worker',
    bio: 'My approach to psychotherapy is cognitive-behavioral and psychodynamic. We\'ll explore your current beliefs through the lens of your history.',
    specialties: ['Mood Disorders', 'Anxiety Disorders', 'Trauma', 'Self-Esteem'],
  },
  {
    name: 'Joe Bush, LCSW',
    title: 'Licensed Clinical Social Worker',
    bio: 'You do not have to go through this alone. In my sessions, I strive to create a non-judgmental and empathetic environment.',
    specialties: ['Anxiety & Depression', 'Adolescents', 'College Transition', 'Relationship Issues', 'Men\'s Issues'],
  },
  {
    name: 'Lauren Hollander, LCSW',
    title: 'Licensed Clinical Social Worker',
    bio: 'I focus on incorporating a client\'s mind, body, spirit, and emotions in the healing process.',
    specialties: ['Somatic Therapy', 'Trauma & PTSD', 'Depression & Anxiety', 'Bipolar Disorder'],
  },
  {
    name: 'Lee Wasser, LMHC-D',
    title: 'Licensed Mental Health Counselor',
    bio: 'The world is a very diverse place. Every person is different and comes from a different perspective.',
    specialties: ['LGBTQ+ Issues', 'Teens & Adults', 'Trauma & Depression', 'Domestic Violence'],
  },
]

export default function AboutPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      
      <main id="main">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="hero-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <p className="text-copper font-title font-medium text-sm uppercase tracking-wide mb-2">About</p>
            <h1 id="hero-heading" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">
              Meet Our Therapists
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
              Expert clinicians who truly care. Our diverse team brings different backgrounds, specialties, 
              and approaches so we can match you with the right fit for your unique needs.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-ivory py-16" aria-labelledby="philosophy-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="philosophy-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">The People Behind Pathways Within</h2>
              <p className="text-slate-600 font-body mb-4">
                Choosing a therapist is one of the most important decisions you&apos;ll make in your healing journey. 
                The relationship between you and your therapist is the foundation of effective therapy—research 
                consistently shows it matters more than the specific techniques used.
              </p>
              <p className="text-slate-600 font-body">
                Every therapist on our team shares a commitment to creating a safe, non-judgmental space, 
                honoring your autonomy and pace, using evidence-based approaches, and treating you with 
                compassion and respect.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-white py-16 md:py-20" aria-labelledby="team-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="team-heading" className="font-title font-semibold text-3xl text-slate-800 text-center mb-12">Our Clinical Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicians.map((clinician, i) => (
                <article key={i} className="bg-ivory rounded-xl p-6 border border-slate-200 hover-lift">
                  <div className="w-16 h-16 bg-therapy/10 rounded-full flex items-center justify-center mb-4 text-therapy font-title font-bold text-xl">
                    {clinician.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <h3 className="font-title font-semibold text-lg text-slate-800">{clinician.name}</h3>
                  <p className="text-therapy text-sm font-title mb-3">{clinician.title}</p>
                  <p className="text-slate-600 text-sm font-body mb-4">{clinician.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {clinician.specialties.slice(0, 4).map((s, j) => (
                      <span key={j} className="text-xs bg-therapy/10 text-therapy px-2 py-1 rounded font-body">{s}</span>
                    ))}
                    {clinician.specialties.length > 4 && (
                      <span className="text-xs text-slate-500 px-2 py-1 font-body">+{clinician.specialties.length - 4} more</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-slate-600 font-body mb-4">Plus 20+ additional licensed clinicians ready to support your journey.</p>
              <a href="tel:6313713825" className="inline-flex items-center text-therapy font-title font-medium hover:underline">
                Call to find your match: (631) 371-3825
              </a>
            </div>
          </div>
        </section>

        {/* Therapy Dogs */}
        <section className="bg-pearl py-16" aria-labelledby="dogs-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 id="dogs-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">Meet Our Therapy Dogs!</h2>
            <p className="text-slate-600 font-body max-w-2xl mx-auto mb-8">
              Specializing in creating a comfortable and cozy place where humans can express their dreams, hopes, and feelings.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-20 h-20 bg-copper/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🐕</div>
                <h3 className="font-title font-semibold text-lg text-slate-800">Domino</h3>
                <p className="text-slate-600 text-sm font-body mt-2">
                  With his calm presence and gentle eyes, Domino brings comfort to every client. Known for offering 
                  the best snuggles and silent support. Truly a good boy—and an even better therapist.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-20 h-20 bg-copper/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🐕</div>
                <h3 className="font-title font-semibold text-lg text-slate-800">Gypsy Sassafras</h3>
                <p className="text-slate-600 text-sm font-body mt-2">
                  A kind soul with a warm smile who connects with people on an emotional level. She holds space 
                  for laughter and crying and comforts the most sensitive feelings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finding Your Match */}
        <section className="bg-white py-16" aria-labelledby="match-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="match-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">Finding Your Match</h2>
              <p className="text-slate-600 font-body mb-6">
                With such a diverse team, we&apos;re confident we have someone who&apos;s the right fit for you.
              </p>
              <div className="bg-ivory rounded-xl p-6 text-left mb-8">
                <p className="font-title font-medium text-slate-800 mb-3">When you contact us, we&apos;ll ask about:</p>
                <ul className="space-y-2 text-slate-600 font-body text-sm">
                  <li className="flex items-start gap-2"><span className="text-therapy">✓</span> What you&apos;re hoping to work on</li>
                  <li className="flex items-start gap-2"><span className="text-therapy">✓</span> Any preferences for therapist gender, approach, or specialty</li>
                  <li className="flex items-start gap-2"><span className="text-therapy">✓</span> Your schedule and location preferences</li>
                  <li className="flex items-start gap-2"><span className="text-therapy">✓</span> Insurance or payment considerations</li>
                </ul>
              </div>
              <p className="text-slate-700 font-body font-medium mb-6">
                Then we&apos;ll match you with a therapist who has the expertise, availability, and approach that fits your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://pathwayswithintherapy.janeapp.com/" className="bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">
                  Book Online
                </a>
                <a href="tel:6313713825" className="border-2 border-therapy text-therapy px-6 py-3 rounded-lg font-title font-medium">
                  Call (631) 371-3825
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-3xl text-white mb-3">Your Healing Journey Deserves the Right Guide</h2>
            <p className="text-white/80 font-body mb-6">We&apos;re here to help you find them.</p>
            <Link href="/contact" className="inline-block bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

