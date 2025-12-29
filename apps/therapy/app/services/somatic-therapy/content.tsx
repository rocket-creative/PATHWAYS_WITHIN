'use client'
import Link from 'next/link'

export default function SomaticTherapyContent() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="bg-therapy-dark text-white text-center py-2 text-sm" role="banner"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div>
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Main navigation"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-therapy font-medium">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a></div></nav>
      
      <main id="main">
        <section className="bg-white py-16 md:py-20" aria-labelledby="page-title">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <nav className="text-sm text-slate-500 font-body mb-6" aria-label="Breadcrumb"><Link href="/services" className="hover:text-therapy">Services</Link><span className="mx-2">/</span><span className="text-slate-800">Somatic Therapy</span></nav>
            <div className="max-w-3xl">
              <h1 id="page-title" className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">Somatic Therapy</h1>
              <p className="text-xl text-slate-600 font-body">Body-Centered Approaches to Healing</p>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16" aria-labelledby="body-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 id="body-section" className="font-title font-semibold text-2xl text-slate-800 mb-4">Trauma Lives in Your Body</h2>
              <p className="text-slate-600 font-body mb-4">Somatic therapy recognizes that trauma and stress aren&apos;t just stored in your mind—they&apos;re held in your body. Your body remembers what your mind might forget.</p>
              <p className="text-slate-600 font-body">Body-centered approaches address this directly through noticing body sensations, releasing trapped tension, completing interrupted survival responses, restoring a sense of safety in your body, and grounding techniques.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="helps-section">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <h2 id="helps-section" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">How Somatic Therapy Helps</h2>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {['Release stored trauma', 'Regulate your nervous system', 'Reconnect with your body', 'Reduce chronic tension', 'Process without words', 'Build body awareness'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-therapy/5 rounded-lg p-4 border border-therapy/20"><span className="text-therapy" aria-hidden="true">✓</span><span className="text-slate-700 font-body text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16" aria-labelledby="cta-section">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-section" className="font-title font-bold text-3xl text-white mb-3">Ready to Reconnect with Your Body?</h2>
            <p className="text-white/80 font-body mb-6">Somatic therapy offers a unique path to healing.</p>
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

