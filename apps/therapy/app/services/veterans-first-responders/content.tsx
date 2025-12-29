'use client'
import Link from 'next/link'

export default function VeteransFirstRespondersContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a> (Press 1 for Veterans)</div></div>
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-therapy font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a></div></nav>
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Veterans & First Responders</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Veterans & First Responders</h1>
              <p className="text-xl text-slate-600 font-body">Specialized Therapy for Those Who Serve</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="understand-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="understand-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">We Understand Your Experience</h2>
              <p className="text-slate-600 font-body mb-4">Military veterans, police officers, firefighters, EMTs, and other first responders face unique challenges that require specialized understanding. Our therapists are trained to work with the specific experiences and cultural considerations of those who serve.</p>
              <div className="bg-therapy/5 rounded-xl p-6 border border-therapy/20">
                <h3 className="font-title font-medium text-therapy mb-2">We Accept VA Community Care</h3>
                <p className="text-slate-600 font-body text-sm">Veterans can use Community Care benefits for therapy services. Contact us to verify your eligibility.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="help-with-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="help-with-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">What We Help With</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {['PTSD & Combat Trauma', 'Transition to Civilian Life', 'First Responder Stress', 'Moral Injury', 'Survivor\'s Guilt', 'Relationship Challenges', 'Sleep Issues & Nightmares', 'Substance Use', 'Depression & Anxiety', 'Anger Management'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-ivory rounded-lg p-4 border border-slate-200"><span className="text-therapy" aria-hidden="true">•</span><span className="text-slate-700 font-body text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-red-50 py-8" role="alert" aria-labelledby="veterans-crisis">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p id="veterans-crisis" className="text-red-800 font-body text-sm"><strong>Veterans Crisis Line:</strong> Call <a href="tel:988" className="underline font-medium">988</a> then press 1 | Text 838255</p>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">You&apos;ve Served Others. Let Us Serve You.</h2>
            <p className="text-white/80 font-body mb-6">You don&apos;t have to carry this alone.</p>
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
              <Link href="/services/emdr-therapy" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 border border-slate-200">EMDR Therapy</Link>
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

