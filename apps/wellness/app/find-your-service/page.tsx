'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-wellness">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-wellness">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const step1Options = [
  { id: 'relaxation', label: 'Deep relaxation and stress relief' },
  { id: 'tension', label: 'Relief from physical tension or discomfort' },
  { id: 'skin', label: 'Skin rejuvenation and a healthy glow' },
  { id: 'body', label: 'Body contouring or toning' },
  { id: 'energy', label: 'Energy balancing or spiritual alignment' },
  { id: 'boost', label: 'A boost to my energy and overall wellness' },
  { id: 'treat', label: 'I want to treat myself to something special' },
  { id: 'explore', label: 'I\'m not sure, help me explore' },
]

const step2Options = [
  { id: 'hands-on', label: 'I love hands-on bodywork (massage, touch-based)' },
  { id: 'technology', label: 'I prefer technology-assisted treatments' },
  { id: 'energy-based', label: 'I\'m drawn to energy-based or gentle approaches' },
  { id: 'open', label: 'I\'m open to anything' },
]

const step3Options = [
  { id: 'quick', label: 'Quick refresh (30-45 minutes)' },
  { id: 'standard', label: 'Standard session (60 minutes)' },
  { id: 'extended', label: 'Extended experience (90+ minutes)' },
  { id: 'flexible', label: 'I\'m flexible' },
]

const recommendations: Record<string, { primary: string; secondary: string[]; desc: string; href: string }> = {
  'relaxation-hands-on': { primary: 'Swedish Massage', secondary: ['Hot Stone Massage', 'Relaxation Massage'], desc: 'Classic relaxation with flowing, soothing strokes', href: '/services/massage' },
  'relaxation-energy-based': { primary: 'Reiki', secondary: ['Acupuncture', 'Energy Work'], desc: 'Gentle energy balancing for deep peace', href: '/services/energy-work' },
  'tension-hands-on': { primary: 'Massage Therapy', secondary: ['Acupuncture'], desc: 'Targeted relief for muscle tension', href: '/services/massage' },
  'skin-technology': { primary: 'HydraFacial', secondary: ['RF Microneedling', 'Chemical Peels'], desc: 'Multi-step rejuvenation with visible results', href: '/services/hydrafacial' },
  'skin-hands-on': { primary: 'Facials & Skincare', secondary: ['HydraFacial'], desc: 'Hands-on skin treatments for radiance', href: '/services/facials-skincare' },
  'body-technology': { primary: 'Body Sculpting', secondary: [], desc: 'Non-invasive toning and contouring', href: '/services/body-sculpting' },
  'energy': { primary: 'Energy Work', secondary: ['Acupuncture', 'Reiki'], desc: 'Balance your body\'s natural energy flow', href: '/services/energy-work' },
  'boost': { primary: 'IV Vitamin Infusion', secondary: ['Acupuncture'], desc: 'Direct nutrient delivery for vitality', href: '/services/iv-vitamin-infusion' },
  'treat': { primary: 'Swedish Massage', secondary: ['HydraFacial'], desc: 'A classic spa experience to pamper yourself', href: '/services/massage' },
  'default': { primary: 'Swedish Massage', secondary: ['HydraFacial'], desc: 'A great starting point for first-timers', href: '/services/massage' },
}

export default function FindYourServicePage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({ step1: '', step2: '', step3: '' })
  const [result, setResult] = useState<typeof recommendations['default'] | null>(null)

  const handleStep1 = (id: string) => {
    setAnswers({ ...answers, step1: id })
    if (['energy', 'boost'].includes(id)) {
      setResult(recommendations[id])
      setStep(4)
    } else {
      setStep(2)
    }
  }

  const handleStep2 = (id: string) => {
    setAnswers({ ...answers, step2: id })
    
    // Some combinations can go directly to results
    if (answers.step1 === 'body' && id === 'technology') {
      setResult(recommendations['body-technology'])
      setStep(4)
    } else {
      setStep(3)
    }
  }

  const handleStep3 = (id: string) => {
    setAnswers({ ...answers, step3: id })
    
    // Build recommendation key
    let key = `${answers.step1}-${answers.step2}`
    if (!recommendations[key]) {
      key = answers.step1 === 'treat' || answers.step1 === 'explore' ? 'treat' : 'default'
    }
    
    setResult(recommendations[key] || recommendations['default'])
    setStep(4)
  }

  const restart = () => {
    setStep(1)
    setAnswers({ step1: '', step2: '', step3: '' })
    setResult(null)
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Find Your Wellness Experience</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">Answer a few questions to discover which service might be perfect for you.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-2xl mx-auto px-6">
            {/* Progress */}
            {step < 4 && (
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`w-3 h-3 rounded-full ${step >= s ? 'bg-wellness' : 'bg-slate-300'}`} />
                ))}
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">What are you hoping to experience today?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select one</p>
                {step1Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep1(opt.id)}
                    className="w-full text-left p-4 bg-white rounded-xl border border-slate-200 hover:border-wellness hover:bg-wellness/5 transition-colors font-body text-slate-700"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">What&apos;s your comfort level?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select one</p>
                {step2Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep2(opt.id)}
                    className="w-full text-left p-4 bg-white rounded-xl border border-slate-200 hover:border-wellness hover:bg-wellness/5 transition-colors font-body text-slate-700"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">How much time do you have?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select one</p>
                {step3Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep3(opt.id)}
                    className="w-full text-left p-4 bg-white rounded-xl border border-slate-200 hover:border-wellness hover:bg-wellness/5 transition-colors font-body text-slate-700"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
            {step === 4 && result && (
              <div className="text-center">
                <div className="bg-wellness/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-wellness" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-2">Perfect match found!</h2>
                <p className="text-slate-600 font-body mb-8">Based on your preferences, we recommend:</p>
                
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-6">
                  <h3 className="font-title font-bold text-2xl text-wellness mb-2">{result.primary}</h3>
                  <p className="text-slate-600 font-body mb-6">{result.desc}</p>
                  <Link href={result.href} className="inline-block bg-wellness text-white px-6 py-3 rounded-lg font-title font-medium">
                    Learn More
                  </Link>
                </div>

                {result.secondary.length > 0 && (
                  <div className="mb-8">
                    <p className="text-slate-600 font-body text-sm mb-3">You might also enjoy:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {result.secondary.map((s) => (
                        <Link key={s} href={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="text-wellness font-body text-sm hover:underline">
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="tel:5163369209" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-title font-medium">
                    Book Now: (516) 336-9209
                  </a>
                  <button onClick={restart} className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-title font-medium">
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

