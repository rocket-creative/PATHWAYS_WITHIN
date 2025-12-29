import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Pathways Within',
  description: 'Terms of Service for Pathways Within website.',
}

export default function TermsOfService() {
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
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-2">Terms of Service</h1>
            <p className="text-muted font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Agreement to Terms</h2>
              <p className="text-charcoal">
                By accessing or using the Pathways Within website, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">About Pathways Within</h2>
              <p className="text-charcoal">
                Pathways Within serves as a portal to two related practices under common ownership:
              </p>
              <ul className="text-charcoal">
                <li><strong>Pathways Within Therapy:</strong> Licensed mental health therapy services</li>
                <li><strong>Pathways Within Wellness:</strong> Spa and wellness services</li>
              </ul>
              <p className="text-charcoal text-sm bg-stone p-3 rounded">
                <strong>Disclosure:</strong> Wellness services are separate from and do not substitute for mental health treatment.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">User Responsibilities</h2>
              <p className="text-charcoal">When using our website, you agree to:</p>
              <ul className="text-charcoal">
                <li>Provide accurate information</li>
                <li>Not use the website for unlawful purposes</li>
                <li>Not interfere with website functionality</li>
              </ul>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Intellectual Property</h2>
              <p className="text-charcoal">
                All content on this website is the property of Pathways Within and is protected by copyright and trademark laws.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Contact Us</h2>
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

