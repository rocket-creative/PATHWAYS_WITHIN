import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pathways Within',
  description: 'Privacy Policy for Pathways Within. Learn how we protect your personal information.',
}

export default function PrivacyPolicy() {
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
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-2">Privacy Policy</h1>
            <p className="text-muted font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Introduction</h2>
              <p className="text-charcoal">
                Pathways Within (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-charcoal">
                This landing page serves as an entry point to our two practices: Pathways Within Therapy (mental health services) and Pathways Within Wellness (spa and wellness services). Each practice has its own detailed privacy policy.
              </p>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Information We Collect</h2>
              <p className="text-charcoal">Through this landing page, we may collect:</p>
              <ul className="text-charcoal">
                <li>Basic contact information if you submit a form</li>
                <li>Service preferences (therapy vs wellness)</li>
                <li>Anonymous usage data for site improvement</li>
              </ul>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">How We Use Your Information</h2>
              <ul className="text-charcoal">
                <li>To direct you to the appropriate practice</li>
                <li>To respond to inquiries</li>
                <li>To improve our website</li>
              </ul>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Our Practices&apos; Privacy Policies</h2>
              <p className="text-charcoal">For detailed privacy information specific to each practice:</p>
              <ul className="text-charcoal">
                <li><strong>Therapy Services:</strong> Visit the Pathways Within Therapy website</li>
                <li><strong>Wellness Services:</strong> Visit the Pathways Within Wellness website</li>
              </ul>
            </section>

            <section className="bg-warm rounded-xl p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-heading mt-0">Contact Us</h2>
              <p className="text-charcoal">
                If you have questions about this Privacy Policy:
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

