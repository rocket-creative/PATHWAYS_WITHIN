'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/team" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

const step1Options = [
  { id: 'life-change', label: 'I am navigating a major life change or transition' },
  { id: 'past', label: 'I want to work through something from my past' },
  { id: 'stuck', label: 'I am feeling stuck, overwhelmed, or not like myself' },
  { id: 'relationship', label: 'I want support for my relationship or family' },
  { id: 'child-teen', label: 'I am looking for help for my child or teenager' },
  { id: 'service', label: 'I serve others (veteran, first responder, healthcare worker)' },
  { id: 'weight-loss', label: 'I am preparing for or recovering from weight loss surgery' },
  { id: 'unsure', label: 'I\'m not sure, I just know I need support' },
]

const step2Options = [
  { id: 'specific-event', label: 'Difficulty moving past a specific event or memory' },
  { id: 'physical', label: 'Physical sensations connected to emotions (tension, etc.)' },
  { id: 'conflict', label: 'Feeling like different parts of myself are in conflict' },
  { id: 'patterns', label: 'Wanting to understand patterns in my life' },
  { id: 'communication', label: 'Communication challenges with someone I care about' },
  { id: 'heard', label: 'Needing a space to process and be heard' },
  { id: 'deeper', label: 'Interest in exploring my mind in a deeper way' },
  { id: 'unsure', label: 'I\'m not sure how to describe it' },
]

const step3Options = [
  { id: 'structured', label: 'A structured approach with specific techniques' },
  { id: 'conversational', label: 'A conversational, exploratory approach' },
  { id: 'body-based', label: 'Body-based work that connects physical and emotional' },
  { id: 'together', label: 'Working together as a couple or family' },
  { id: 'open', label: 'I\'m open to whatever my therapist recommends' },
]

const recommendations: Record<string, { primary: string; secondary: string[]; desc: string; href: string }> = {
  'life-change': { primary: 'Individual Therapy', secondary: ['Somatic Therapy'], desc: 'Navigate life transitions with personalized support', href: '/services/individual-therapy' },
  'past-specific-event-structured': { primary: 'EMDR Therapy', secondary: ['Trauma Therapy'], desc: 'Process specific memories with evidence-based techniques', href: '/services/emdr-therapy' },
  'past-physical': { primary: 'Somatic Therapy', secondary: ['EMDR Therapy', 'Trauma Therapy'], desc: 'Connect body and mind for deeper healing', href: '/services/somatic-therapy' },
  'past-conflict': { primary: 'Individual Therapy', secondary: ['Trauma Therapy'], desc: 'Explore and integrate parts of yourself', href: '/services/individual-therapy' },
  'stuck': { primary: 'Individual Therapy', secondary: ['Hypnotherapy'], desc: 'Find clarity and move forward', href: '/services/individual-therapy' },
  'stuck-physical-body-based': { primary: 'Somatic Therapy', secondary: ['Individual Therapy'], desc: 'Release what\'s held in the body', href: '/services/somatic-therapy' },
  'relationship-communication-together': { primary: 'Couples Therapy', secondary: [], desc: 'Rebuild connection and communication', href: '/services/couples-therapy' },
  'child-teen': { primary: 'Child & Teen Therapy', secondary: [], desc: 'Age-appropriate support for young people', href: '/services/child-therapy' },
  'service': { primary: 'Veterans & First Responders', secondary: ['Trauma Therapy', 'EMDR Therapy'], desc: 'Specialized support for those who serve', href: '/services/veterans-first-responders' },
  'weight-loss': { primary: 'Weight Loss Surgery Support', secondary: ['Individual Therapy'], desc: 'Comprehensive care for your journey', href: '/services/weight-loss-surgery-support' },
  'default': { primary: 'Individual Therapy', secondary: [], desc: 'A great starting point for most concerns', href: '/services/individual-therapy' },
}

export default function FindYourTherapyPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({ step1: '', step2: [] as string[], step3: '' })
  const [result, setResult] = useState<typeof recommendations['default'] | null>(null)

  const handleStep1 = (id: string) => {
    setAnswers({ ...answers, step1: id })
    if (['child-teen', 'service', 'weight-loss'].includes(id)) {
      setResult(recommendations[id])
      setStep(4)
    } else {
      setStep(2)
    }
  }

  const handleStep2 = (id: string) => {
    const newStep2 = answers.step2.includes(id) 
      ? answers.step2.filter(i => i !== id)
      : [...answers.step2, id]
    setAnswers({ ...answers, step2: newStep2 })
  }

  const handleStep3 = (id: string) => {
    setAnswers({ ...answers, step3: id })
    
    // Simple matching logic
    let key = answers.step1
    if (answers.step1 === 'past' && answers.step2.includes('specific-event') && id === 'structured') {
      key = 'past-specific-event-structured'
    } else if (answers.step1 === 'past' && answers.step2.includes('physical')) {
      key = 'past-physical'
    } else if (answers.step1 === 'past' && answers.step2.includes('conflict')) {
      key = 'past-conflict'
    } else if (answers.step1 === 'stuck' && answers.step2.includes('physical') && id === 'body-based') {
      key = 'stuck-physical-body-based'
    } else if (answers.step1 === 'relationship' && answers.step2.includes('communication') && id === 'together') {
      key = 'relationship-communication-together'
    }
    
    setResult(recommendations[key] || recommendations['default'])
    setStep(4)
  }

  const restart = () => {
    setStep(1)
    setAnswers({ step1: '', step2: [], step3: '' })
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
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Find Your Therapy</h1>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">Answer a few questions to explore which therapy approach might resonate with your situation. This is a starting point—not a diagnosis.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-2xl mx-auto px-6">
            {/* Progress */}
            {step < 4 && (
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`w-3 h-3 rounded-full ${step >= s ? 'bg-therapy' : 'bg-slate-300'}`} />
                ))}
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">What brings you here today?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select one that resonates most</p>
                {step1Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep1(opt.id)}
                    className="w-full text-left p-4 bg-white rounded-xl border border-slate-200 hover:border-therapy hover:bg-therapy/5 transition-colors font-body text-slate-700"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">How would you describe what you&apos;re experiencing?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select all that apply</p>
                {step2Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep2(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors font-body ${
                      answers.step2.includes(opt.id) 
                        ? 'bg-therapy/10 border-therapy text-therapy' 
                        : 'bg-white border-slate-200 hover:border-therapy hover:bg-therapy/5 text-slate-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
                <button
                  onClick={() => setStep(3)}
                  disabled={answers.step2.length === 0}
                  className="w-full mt-6 bg-therapy text-white py-3 rounded-lg font-title font-medium disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="font-title font-semibold text-xl text-slate-800 mb-6 text-center">What matters most to you in therapy?</h2>
                <p className="text-slate-600 font-body text-sm text-center mb-8">Select one</p>
                {step3Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleStep3(opt.id)}
                    className="w-full text-left p-4 bg-white rounded-xl border border-slate-200 hover:border-therapy hover:bg-therapy/5 transition-colors font-body text-slate-700"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
            {step === 4 && result && (
              <div className="text-center">
                <div className="bg-therapy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-therapy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-title font-semibold text-2xl text-slate-800 mb-2">Based on your answers...</h2>
                <p className="text-slate-600 font-body mb-8">We think this might be a good starting point:</p>
                
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-6">
                  <h3 className="font-title font-bold text-2xl text-therapy mb-2">{result.primary}</h3>
                  <p className="text-slate-600 font-body mb-6">{result.desc}</p>
                  <Link href={result.href} className="inline-block bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium">
                    Learn More About {result.primary}
                  </Link>
                </div>

                {result.secondary.length > 0 && (
                  <div className="mb-8">
                    <p className="text-slate-600 font-body text-sm mb-3">You might also explore:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {result.secondary.map((s) => (
                        <Link key={s} href={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="text-therapy font-body text-sm hover:underline">
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-slate-500 font-body text-sm mb-6">This quiz helps you explore options. It doesn&apos;t diagnose or prescribe. The best next step is a consultation.</p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/contact" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-title font-medium">
                    Schedule a Consultation
                  </Link>
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

