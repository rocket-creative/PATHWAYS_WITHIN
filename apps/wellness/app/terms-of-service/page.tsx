import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Pathways Within Wellness website and services.',
}

export default function TermsOfService() {
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
            <h1 className="font-title font-bold text-3xl md:text-4xl text-slate-800 mb-2">Terms of Service</h1>
            <p className="text-slate-500 font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Agreement to Terms</h2>
              <p className="text-slate-600">
                By accessing or using the Pathways Within Wellness website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Services Description</h2>
              <p className="text-slate-600">
                Pathways Within Wellness provides spa and wellness services including massage, acupuncture, facials, IV therapy, body treatments, and aesthetic services. This website provides information about our services and allows visitors to contact us.
              </p>
              <p className="text-slate-600 text-sm bg-wellness/5 p-3 rounded">
                <strong>Disclaimer:</strong> Wellness services are separate from and do not substitute for medical treatment. Results may vary. Consult with our practitioners to determine if services are appropriate for you.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">User Responsibilities</h2>
              <p className="text-slate-600">When using our website, you agree to:</p>
              <ul className="text-slate-600">
                <li>Provide accurate information in any forms you submit</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Appointment & Cancellation Policy</h2>
              <p className="text-slate-600">
                Appointments should be cancelled at least 24 hours in advance. Late cancellations or no-shows may be subject to a cancellation fee.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Intellectual Property</h2>
              <p className="text-slate-600">
                All content on this website, including text, graphics, logos, and images, is the property of Pathways Within Wellness and is protected by copyright and trademark laws.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Limitation of Liability</h2>
              <p className="text-slate-600">
                Pathways Within Wellness shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
              <h2 className="font-title font-semibold text-xl text-slate-800 mt-0">Contact Us</h2>
              <p className="text-slate-600">
                Questions about these Terms of Service should be sent to:
              </p>
              <p className="text-slate-600">
                <strong>Phone:</strong> (516) 336-9209<br />
                <strong>Email:</strong> info@pathwayswithinwellness.com
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

