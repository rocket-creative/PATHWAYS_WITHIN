'use client'
import Link from 'next/link'

export default function HydraFacialContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="bg-wellness-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div>
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-wellness">Wellness</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-wellness font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-wellness">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-wellness">Contact</Link></li></ul><a href="https://pathwayswithinwellness.janeapp.com/" className="hidden sm:inline-block bg-wellness text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a></div></nav>
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-wellness">Services</Link><span className="mx-2">/</span><span className="text-slate-800">HydraFacial</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">HydraFacial</h1>
              <p className="text-xl text-slate-600 font-body">Deep Cleansing, Extraction & Hydration in One</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="what-is-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="what-is-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">What is HydraFacial?</h2>
              <p className="text-slate-600 font-body mb-4">HydraFacial is a medical-grade facial treatment that combines cleansing, exfoliation, extraction, and hydration—all in one session. Using patented Vortex-Fusion technology, it delivers instant, noticeable results with no downtime.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="process-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="process-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">The HydraFacial Process</h2>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Cleanse & Peel', desc: 'Gentle exfoliation removes dead skin cells' },
                { step: '2', title: 'Extract', desc: 'Painless suction removes debris from pores' },
                { step: '3', title: 'Hydrate', desc: 'Intensive serums nourish the skin' },
                { step: '4', title: 'Protect', desc: 'Antioxidants & peptides maximize glow' },
              ].map((item, i) => (
                <div key={i} className="bg-wellness/5 rounded-xl p-4 text-center border border-wellness/20">
                  <span className="text-wellness font-title font-bold text-2xl" aria-hidden="true">{item.step}</span>
                  <h3 className="font-title font-medium text-slate-800 mt-2 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wellness py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Glow Up Today</h2>
            <p className="text-white/80 font-body mb-6">Book your HydraFacial and see instant results.</p>
            <a href="tel:5163369209" className="inline-block bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium">Call (516) 336-9209</a>
          </div>
        </section>

        <section className="bg-pearl py-12" aria-labelledby="related-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h3 id="related-section" className="font-title font-medium text-lg text-slate-800 mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/services/facials-skincare" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-wellness/10 border border-slate-200">Facials & Skincare</Link>
              <Link href="/services/chemical-peels" className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-wellness/10 border border-slate-200">Chemical Peels</Link>
              <Link href="/services" className="bg-wellness/10 px-4 py-2 rounded-lg text-sm text-wellness font-body hover:bg-wellness/20">View All →</Link>
            </div>
          </div>
        </section>

        {/* Sister Practice Cross-Promotion */}
        <section className="bg-therapy/5 py-12" aria-labelledby="sister-practice-heading">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 id="sister-practice-heading" className="font-title font-semibold text-xl text-slate-800 mb-3">Support for Your Mental Health</h3>
              <p className="text-slate-600 font-body text-sm mb-4">
                Our sister practice, Pathways Within Therapy, offers individual, couples, family, and specialized therapy at five Long Island locations plus telehealth.
              </p>
              <a href="https://pathwayswithintherapy.com" className="inline-flex items-center gap-2 text-therapy font-title font-medium text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Explore Therapy Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <p className="text-slate-500 text-xs font-body mt-3 italic">Pathways Within Wellness and Pathways Within Therapy operate under common ownership. Wellness services are separate from and do not substitute for mental health treatment.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-chalkboard text-white py-12" role="contentinfo"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Wellness. (516) 336-9209</div></footer>
    </>
  )
}

