'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/team" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

const steps = [
  { 
    num: 1, 
    title: 'Before Your Appointment', 
    items: [
      'You\'ll receive a confirmation email with date, time, and location',
      'Complete any intake forms online (basic info)',
      'Gather your insurance card if using insurance',
      'Write down any questions you have'
    ],
    tip: 'You don\'t need to prepare what to say. Your therapist will guide the conversation.'
  },
  { 
    num: 2, 
    title: 'Arriving', 
    items: [
      'Plan to arrive 10 minutes early for paperwork',
      'Our offices have free parking',
      'Check in at the front desk',
      'Wait in our comfortable waiting area'
    ],
    tip: 'Use the restroom before your session. Turn your phone to silent.'
  },
  { 
    num: 3, 
    title: 'Meeting Your Therapist', 
    items: [
      'Your therapist will come to greet you',
      'You\'ll go to a private, comfortable office',
      'They\'ll introduce themselves and explain how therapy works',
      'They\'ll explain confidentiality and answer questions'
    ],
    tip: 'It\'s okay to ask questions at any time. This is YOUR session.'
  },
  { 
    num: 4, 
    title: 'The Session Itself', 
    items: [
      'Your therapist will ask what brought you in',
      'You share what feels comfortable—no pressure',
      'Your therapist listens, asks questions, offers observations',
      'Together you\'ll discuss your goals',
      'Sessions are typically 50 minutes'
    ],
    tip: 'First sessions are about getting to know each other. You control what you share.'
  },
  { 
    num: 5, 
    title: 'After Your Session', 
    items: [
      'Your therapist will discuss next steps',
      'Schedule your next appointment (if desired)',
      'Handle payment or insurance at the front desk',
      'You may feel reflective, relieved, or tired—all normal'
    ],
    tip: 'Give yourself time after the session. Avoid scheduling stressful activities right after.'
  },
]

const worries = [
  { q: '"What if I don\'t know what to say?"', a: 'Your therapist will guide the conversation. You don\'t need to have everything figured out.' },
  { q: '"What if I cry?"', a: 'Totally normal. We have tissues. Therapy is a safe space for emotions.' },
  { q: '"What if I don\'t like my therapist?"', a: 'The fit matters. If it doesn\'t feel right, let us know and we\'ll help you find a better match.' },
  { q: '"Will they judge me?"', a: 'No. Therapists are trained in non-judgment. Whatever you\'re experiencing, they\'ve heard similar before.' },
]

export default function FirstVisitPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Your First Therapy Appointment</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">A step-by-step guide to what to expect. We want you to feel prepared and at ease.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-therapy text-white rounded-full flex items-center justify-center font-title font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-xl text-slate-800 mb-4">{step.title}</h2>
                      <ul className="space-y-2 mb-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 font-body text-sm">
                            <span className="text-therapy">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-therapy/5 rounded-lg p-3 border border-therapy/20">
                        <p className="text-slate-700 font-body text-sm"><strong className="text-therapy">Tip:</strong> {step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Common First-Session Worries</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {worries.map((w, i) => (
                <div key={i} className="bg-ivory rounded-xl p-5 border border-slate-200">
                  <p className="font-title font-medium text-slate-800 text-sm mb-2">{w.q}</p>
                  <p className="text-slate-600 font-body text-sm">{w.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Ready to Take the First Step?</h2>
            <p className="text-white/80 font-body mb-6">We&apos;re here to make the process as easy as possible.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:6313713825" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">(631) 371-3825</a>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Schedule Online</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

