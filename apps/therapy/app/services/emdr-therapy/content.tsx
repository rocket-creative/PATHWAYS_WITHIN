'use client'
import Link from 'next/link'

export default function EMDRTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div>
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-therapy font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a></div></nav>
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">EMDR Therapy</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">EMDR Therapy</h1>
              <p className="text-xl text-slate-600 font-body">Eye Movement Desensitization and Reprocessing</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="what-is-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="what-is-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">What is EMDR?</h2>
              <p className="text-slate-600 font-body mb-4">EMDR is a structured, evidence-based approach that uses bilateral stimulation (eye movements, tapping, or sounds) to help your brain process traumatic memories.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-therapy mb-2">What Makes It Different</h3>
                  <ul className="text-slate-600 text-sm font-body space-y-1">
                    <li>• More structured than talk therapy</li>
                    <li>• Don&apos;t have to describe trauma in detail</li>
                    <li>• Works directly with how memories are stored</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-title font-medium text-therapy mb-2">The Process</h3>
                  <ul className="text-slate-600 text-sm font-body space-y-1">
                    <li>• Identify traumatic memory</li>
                    <li>• Follow bilateral stimulation</li>
                    <li>• Memory becomes less disturbing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="treats-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="treats-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">What EMDR Treats</h2>
            <div className="grid md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {['PTSD', 'Anxiety', 'Panic Attacks', 'Phobias', 'Depression', 'Grief', 'Childhood Trauma', 'Disturbing Memories'].map((item, i) => (
                <div key={i} className="bg-therapy/5 rounded-lg p-3 text-center border border-therapy/20"><span className="text-slate-700 font-body text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Ready to Learn More About EMDR?</h2>
            <p className="text-white/80 font-body mb-6">Contact us to see if EMDR is right for you.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://pathwayswithintherapy.janeapp.com/" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Online</a>
              <a href="tel:6313713825" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Call (631) 371-3825</a>
            </div>
          </div>
        </section>

        <section className="bg-pearl py-12" aria-labelledby="related-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-section" className="font-title font-medium text-lg text-slate-800 mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/services/trauma-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Trauma Therapy</Link>
              <Link href="/services/somatic-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">Somatic Therapy</Link>
              <Link href="/services" className="bg-therapy/10 px-4 py-2 rounded-lg text-sm text-therapy font-body hover:bg-therapy/20">View All →</Link>
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
              <a href="https://wellness-lac.vercel.app" className="inline-flex items-center gap-2 text-wellness font-title font-medium text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Explore Wellness Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <p className="text-slate-500 text-xs font-body mt-3 italic">Pathways Within Therapy and Pathways Within Wellness operate under common ownership. Wellness services are separate from and do not substitute for mental health treatment.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-chalkboard text-white py-12" role="contentinfo"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer>
    </>
  )
}

