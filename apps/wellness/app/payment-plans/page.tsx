'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-wellness-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-wellness">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-wellness">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-wellness">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer> }

const benefits = [
  { title: 'No Hard Credit Checks', desc: 'Your credit score won\'t be affected by applying' },
  { title: 'True 0% APR Options', desc: 'Pay no interest with qualifying plans' },
  { title: 'Low Interest Plans', desc: 'As low as 5.99% APR for longer terms' },
  { title: 'Up to $35,000', desc: 'Finance extensive treatment plans' },
  { title: 'No Hidden Fees', desc: 'Transparent, honest pricing' },
  { title: '60 Second Application', desc: 'Fast, easy process with instant decision' },
]

const testimonials = [
  { name: 'Bryana', text: 'I was worried the application would take long—but it only took a few minutes and I\'m so happy I can split my payments up now!' },
  { name: 'Alex', text: 'Cherry was really easy to use and super fast. I can\'t wait to go back and try different services now that I can split my payments!' },
  { name: 'Marie', text: 'I used this on Monday and it was great. Low down payment and low monthly. You all should try it.' },
  { name: 'Cassie', text: 'I\'ve been putting off these treatments for a long time. I scheduled them all today using Cherry!' },
]

export default function PaymentPlansPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-gradient-to-br from-wellness to-wellness-dark text-white py-20 md:py-28">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl mb-4">Payment Plans</h1>
            <p className="text-xl md:text-2xl font-body opacity-90">Treat Now, Pay Later with Cherry Financing</p>
            <p className="text-white/80 font-body mt-4 max-w-2xl mx-auto">Don&apos;t let cost stand between you and the treatments you deserve. Get care now and pay over time with flexible, affordable options.</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Benefits of Cherry Financing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 flex gap-4">
                  <div className="w-8 h-8 bg-wellness/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-wellness" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <div>
                    <h3 className="font-title font-medium text-slate-800">{b.title}</h3>
                    <p className="text-slate-600 font-body text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Example Payment Plans</h2>
            <div className="bg-wellness/5 rounded-xl p-8 border border-wellness/20 max-w-xl mx-auto text-center">
              <p className="font-title font-medium text-lg text-slate-800 mb-4">For a $250 Treatment:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-title font-semibold text-wellness">0% APR</p>
                  <p className="text-slate-600 font-body text-sm">Biweekly for 6 weeks</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-title font-semibold text-wellness">$45.17/mo</p>
                  <p className="text-slate-600 font-body text-sm">24 months • Lowest payment</p>
                </div>
              </div>
              <p className="text-slate-500 font-body text-sm mt-4">For larger treatments, even more options available!</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">How Cherry Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-wellness text-white rounded-full flex items-center justify-center font-title font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-title font-medium text-slate-800 mb-2">See If You Qualify</h3>
                <p className="text-slate-600 font-body text-sm">Takes only 60 seconds. No impact on your credit score—soft check only.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wellness text-white rounded-full flex items-center justify-center font-title font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-title font-medium text-slate-800 mb-2">Get Care</h3>
                <p className="text-slate-600 font-body text-sm">Use your approval to pay for your treatment immediately. Start your wellness journey.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wellness text-white rounded-full flex items-center justify-center font-title font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-title font-medium text-slate-800 mb-2">Pay Over Time</h3>
                <p className="text-slate-600 font-body text-sm">Choose a plan length that fits your budget. Flexible options to match your situation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-ivory rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 font-body text-sm italic mb-3">&quot;{t.text}&quot;</p>
                  <p className="font-title font-medium text-slate-800">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">Use Cherry for Any Treatment</h2>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {['Facials & Skincare', 'Laser Treatments', 'Injectable Treatments', 'Body Sculpting', 'Hair Restoration', 'Massage Packages', 'Acupuncture Series', 'IV Therapy', 'And More!'].map((s, i) => (
                <span key={i} className="bg-wellness/10 text-wellness px-4 py-2 rounded-full text-sm font-body">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wellness py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Ready to Get Started?</h2>
            <p className="text-white/80 font-body mb-6">Don&apos;t put off the treatments you&apos;ve been dreaming about. Cherry Financing makes wellness accessible and affordable!</p>
            <a href="tel:5163369209" className="inline-block bg-white text-wellness px-8 py-3 rounded-lg font-title font-medium">(516) 336-9209</a>
            <p className="text-white/70 font-body text-sm mt-4">Mention Cherry Financing when booking your appointment.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

