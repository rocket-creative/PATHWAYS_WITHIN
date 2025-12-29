import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility Statement for Pathways Within Wellness. Our commitment to digital accessibility.',
}

export default function Accessibility() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <div className="bg-wellness-dark text-white text-center py-2 text-sm">
        <div className="max-w-site mx-auto px-4">
          <span className="opacity-80">Crisis support 24/7:</span>{' '}
          <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-title font-semibold text-xl text-slate-800">
            Pathways Within <span className="text-wellness">Wellness</span>
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-wellness font-body">← Back to Home</Link>
        </div>
      </nav>

      <main id="main" className="bg-ivory min-h-screen py-16">
        <article className="max-w-3xl mx-auto px-6 lg:px-12">
          <header className="mb-8">
            <h1 className="font-title font-bold text-3xl md:text-4xl text-slate-800 mb-2">Accessibility Statement</h1>
            <p className="text-slate-500 font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Our Commitment</h2>
              <p className="text-slate-600">
                Pathways Within Wellness is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Conformance Status</h2>
              <p className="text-slate-600">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Accessibility Features</h2>
              <p className="text-slate-600">Our website includes the following accessibility features:</p>
              <ul className="text-slate-600">
                <li><strong>Skip navigation links</strong> - Allow keyboard users to skip to main content</li>
                <li><strong>Semantic HTML</strong> - Proper heading hierarchy and landmark regions</li>
                <li><strong>Keyboard navigation</strong> - All interactive elements are keyboard accessible</li>
                <li><strong>Focus indicators</strong> - Visible focus states for keyboard navigation</li>
                <li><strong>Color contrast</strong> - Text meets WCAG AA contrast requirements</li>
                <li><strong>Text alternatives</strong> - Images include descriptive alt text</li>
                <li><strong>Responsive design</strong> - Content adapts to different screen sizes</li>
                <li><strong>Reduced motion</strong> - Animations respect user preferences</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Physical Accessibility</h2>
              <p className="text-slate-600">
                Our spa locations are committed to accessibility. Both Massapequa and Garden City locations offer accessible facilities. If you have specific accessibility needs, please contact us in advance.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Feedback</h2>
              <p className="text-slate-600">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <p className="text-slate-600">
                <strong>Phone:</strong> (516) 336-9209<br />
                <strong>Email:</strong> info@pathwayswithinwellness.com
              </p>
              <p className="text-slate-600">
                We try to respond to feedback within 5 business days.
              </p>
            </section>
          </div>

          <footer className="mt-8 pt-6 border-t border-slate-200">
            <Link href="/" className="text-wellness font-title font-medium hover:underline">← Back to Home</Link>
          </footer>
        </article>
      </main>

      <footer className="bg-chalkboard text-white py-8">
        <div className="max-w-site mx-auto px-6 text-center text-sm text-slate-400 font-body">
          © {new Date().getFullYear()} Pathways Within Wellness. All rights reserved.
        </div>
      </footer>
    </>
  )
}

