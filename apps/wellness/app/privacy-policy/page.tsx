import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Pathways Within Wellness. Learn how we protect your personal information.',
  alternates: {
    canonical: 'https://wellness-lac.vercel.app/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <div className="bg-wellness-dark text-white text-center py-2 text-sm">
        <div className="max-w-site mx-auto px-4">
          <span className="opacity-80">Crisis support 24/7:</span>{' '}
          <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Privacy policy navigation">
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
            <h1 className="font-title font-bold text-3xl md:text-4xl text-slate-800 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Introduction</h2>
              <p className="text-slate-600">
                Pathways Within Wellness (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our wellness services.
              </p>
              <p className="text-slate-600">
                We comply with all applicable New York State privacy laws and consumer protection regulations.
              </p>
            </section>

            <section className="bg-wellness/10 rounded-xl p-6 mb-6 border-2 border-wellness" aria-labelledby="not-medical-notice">
              <h2 id="not-medical-notice" className="font-title font-semibold text-xl text-wellness mt-0 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                Important: Wellness vs. Medical Services
              </h2>
              <p className="text-slate-700">
                Pathways Within Wellness provides spa and wellness services, not medical care. Our services are not subject to HIPAA regulations. However, we still take your privacy seriously and protect your personal information.
              </p>
              <p className="text-slate-600 mt-2 text-sm">
                If you are receiving mental health services from our sister practice, Pathways Within Therapy, those services are governed by separate HIPAA-compliant privacy practices.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="info-collect-heading">
              <h2 id="info-collect-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Information We Collect</h2>
              <h3 className="font-title font-medium text-lg text-slate-700">Information You Provide</h3>
              <ul className="text-slate-600">
                <li>Name and contact information (email, phone number)</li>
                <li>Service interest and preferences</li>
                <li>Appointment scheduling information</li>
                <li>Messages you send through our contact forms</li>
                <li>Health intake information relevant to services (allergies, skin conditions, medical history for certain treatments)</li>
                <li>Payment information (processed securely through our payment provider)</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Automatically Collected Information</h3>
              <ul className="text-slate-600">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="intake-forms-heading">
              <h2 id="intake-forms-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Intake Forms & Health Information</h2>
              <p className="text-slate-600">
                For certain services (massage, acupuncture, facials, IV therapy, etc.), we collect health-related information to ensure your safety and provide appropriate care. This information:
              </p>
              <ul className="text-slate-600">
                <li>Is used solely to provide safe, appropriate services</li>
                <li>Is stored securely and confidentially</li>
                <li>Is not shared with third parties except as needed for your care or required by law</li>
                <li>May be retained according to professional standards</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Before/After Photos:</strong> For certain aesthetic services, we may take photos with your written consent. These photos are used for your treatment records and, only with additional written consent, for marketing purposes.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="how-use-heading">
              <h2 id="how-use-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">How We Use Your Information</h2>
              <ul className="text-slate-600">
                <li>To respond to your inquiries and contact requests</li>
                <li>To schedule appointments and provide services safely</li>
                <li>To process payments</li>
                <li>To improve our website and services</li>
                <li>To send appointment reminders</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="sharing-heading">
              <h2 id="sharing-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Information Sharing</h2>
              <p className="text-slate-600">
                We do not sell, trade, or rent your personal information to third parties. We may share information:
              </p>
              <ul className="text-slate-600">
                <li>With service providers who assist in operating our website and services</li>
                <li>With payment processors to complete transactions</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="related-business-heading">
              <h2 id="related-business-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Related Business</h2>
              <p className="text-slate-600">
                Pathways Within Wellness and Pathways Within Therapy operate under common ownership but maintain separate client records. Information you provide to one practice is not automatically shared with the other.
              </p>
              <p className="text-slate-600">
                If you use services at both practices and wish for information to be shared between them, you must provide separate written authorization.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Your Rights</h2>
              <p className="text-slate-600">You have the right to:</p>
              <ul className="text-slate-600">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for photo usage</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="security-heading">
              <h2 id="security-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Security</h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="text-slate-600">
                <li>Secure, encrypted payment processing</li>
                <li>Password-protected systems</li>
                <li>Staff training on privacy practices</li>
                <li>Secure disposal of personal information</li>
              </ul>
              <p className="text-slate-600">
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="cookies-heading">
              <h2 id="cookies-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Cookies & Tracking</h2>
              <p className="text-slate-600">
                Our website uses cookies and similar technologies to improve your experience and analyze site traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Contact Us</h2>
              <p className="text-slate-600">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-slate-600 bg-slate-50 p-4 rounded-lg">
                <strong>Pathways Within Wellness</strong><br />
                <strong>Phone:</strong> <a href="tel:5163369209" className="text-wellness hover:underline">(516) 336-9209</a><br />
                <strong>Email:</strong> <a href="mailto:info@pathwayswithinwellness.com" className="text-wellness hover:underline">info@pathwayswithinwellness.com</a>
              </div>
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
