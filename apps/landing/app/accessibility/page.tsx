import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Pathways Within',
  description: 'Accessibility Statement for Pathways Within. Our commitment to digital accessibility.',
}

export default function Accessibility() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-display italic text-xl text-heading">
            Pathways Within
          </Link>
          <Link href="/" className="text-sm text-charcoal hover:text-therapy font-body">← Back to Home</Link>
        </div>
      </nav>

      <main id="main" className="bg-cream min-h-screen py-16">
        <article className="max-w-3xl mx-auto px-6 lg:px-12">
          <header className="mb-8">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-2">Accessibility Statement</h1>
            <p className="text-muted font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Our Commitment</h2>
              <p className="text-charcoal">
                Pathways Within is committed to ensuring digital accessibility for people with disabilities. We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Accessibility Features</h2>
              <ul className="text-charcoal">
                <li><strong>Skip navigation links</strong></li>
                <li><strong>Semantic HTML</strong> with proper heading hierarchy</li>
                <li><strong>Keyboard navigation</strong> support</li>
                <li><strong>Focus indicators</strong> for keyboard users</li>
                <li><strong>Color contrast</strong> meeting WCAG AA requirements</li>
                <li><strong>Responsive design</strong></li>
                <li><strong>Reduced motion</strong> support</li>
              </ul>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Physical Accessibility</h2>
              <p className="text-charcoal">
                Our therapy and wellness locations are committed to physical accessibility. Please contact us in advance if you have specific accessibility needs for in-person visits.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Feedback</h2>
              <p className="text-charcoal">
                We welcome your feedback on accessibility:
              </p>
              <p className="text-charcoal">
                <strong>Therapy:</strong> (631) 371-3825 | Welcome@pathwayswithin.com<br />
                <strong>Wellness:</strong> (516) 336-9209 | info@pathwayswithinwellness.com
              </p>
            </section>
          </div>

          <footer className="mt-8 pt-6 border-t border-clay/30">
            <Link href="/" className="text-therapy font-medium hover:underline">← Back to Home</Link>
          </footer>
        </article>
      </main>

      <footer className="bg-btn-primary text-white py-8">
        <div className="max-w-site mx-auto px-6 text-center text-sm text-white/60 font-body">
          © {new Date().getFullYear()} Pathways Within. All rights reserved.
        </div>
      </footer>
    </>
  )
}

