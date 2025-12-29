'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-wellness">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-wellness">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const steps = [
  { 
    num: 1, 
    title: 'Before Your Appointment', 
    items: [
      'You\'ll receive a confirmation email with details',
      'Complete any health screening questions online',
      'Avoid eating a heavy meal right before',
      'Drink plenty of water'
    ],
    tip: 'For massage, avoid caffeine and alcohol beforehand. For facials, come with clean skin if possible.'
  },
  { 
    num: 2, 
    title: 'Arriving', 
    items: [
      'Arrive 10-15 minutes early',
      'Check in at the front desk',
      'You may be offered water or tea',
      'Use the restroom and turn off your phone'
    ],
    tip: 'Wear comfortable clothes you can easily change out of. Avoid heavy jewelry.'
  },
  { 
    num: 3, 
    title: 'Getting Ready', 
    items: [
      'Your practitioner will greet you and take you to your room',
      'They\'ll explain what will happen and ask about preferences',
      'You\'ll be given time to change and get comfortable',
      'Undress to your comfort level (you\'re always properly draped)'
    ],
    tip: 'For massage, most people undress completely but keep underwear on. Whatever makes you comfortable is fine.'
  },
  { 
    num: 4, 
    title: 'During Your Service', 
    items: [
      'Relax and enjoy—your only job is to receive',
      'Communicate if anything doesn\'t feel right',
      'It\'s okay to speak up about pressure, temperature, etc.',
      'Some people fall asleep—that\'s perfectly fine!'
    ],
    tip: 'Speak up if you want more or less pressure, if you\'re cold, or if anything is uncomfortable.'
  },
  { 
    num: 5, 
    title: 'After Your Service', 
    items: [
      'Take your time getting up—don\'t rush',
      'Your practitioner may offer water',
      'They\'ll give you aftercare instructions',
      'Check out and schedule your next visit'
    ],
    tip: 'Drink water throughout the day. Avoid intense exercise for a few hours. Enjoy the glow!'
  },
]

const firstTimerTips = [
  { service: 'Massage', tips: ['Light soreness afterward is normal', 'Drink extra water', 'Start with Swedish if unsure'] },
  { service: 'Facials', tips: ['Mild redness is normal', 'Avoid sun exposure after', 'Skip makeup for a few hours'] },
  { service: 'Acupuncture', tips: ['Needles are hair-thin, not like medical needles', 'Minimal sensation—many find it relaxing', 'Effects may build over sessions'] },
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
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Your First Spa Visit</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">New to spa services? Here&apos;s everything you need to know for a relaxing experience.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wellness text-white rounded-full flex items-center justify-center font-title font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h2 className="font-title font-semibold text-xl text-slate-800 mb-4">{step.title}</h2>
                      <ul className="space-y-2 mb-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 font-body text-sm">
                            <span className="text-wellness">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-wellness/5 rounded-lg p-3 border border-wellness/20">
                        <p className="text-slate-700 font-body text-sm"><strong className="text-wellness">Tip:</strong> {step.tip}</p>
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
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">First-Timer Tips by Service</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {firstTimerTips.map((item) => (
                <div key={item.service} className="bg-ivory rounded-xl p-5 border border-slate-200">
                  <h3 className="font-title font-medium text-wellness mb-3">{item.service}</h3>
                  <ul className="space-y-2">
                    {item.tips.map((tip, i) => (
                      <li key={i} className="text-slate-600 font-body text-sm flex items-start gap-2">
                        <span className="text-wellness text-xs">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-6 text-center">Great First Services</h2>
            <p className="text-slate-600 font-body text-center mb-8">If you&apos;re not sure where to start, these are perfect for first-timers:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/massage" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-wellness transition-colors block">
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">Swedish Massage</h3>
                <p className="text-slate-600 font-body text-sm">The classic spa experience. Relaxing, approachable, and perfect for beginners.</p>
              </Link>
              <Link href="/services/hydrafacial" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-wellness transition-colors block">
                <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">HydraFacial</h3>
                <p className="text-slate-600 font-body text-sm">Gentle, comfortable, and delivers visible results immediately. No downtime.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Ready to Book?</h2>
            <p className="text-white/80 font-body mb-6">We can&apos;t wait to welcome you!</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5163369209" className="bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">(516) 336-9209</a>
              <Link href="/find-your-service" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Take the Quiz</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

