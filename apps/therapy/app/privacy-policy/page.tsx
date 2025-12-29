import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Pathways Within Therapy. Learn how we protect your personal information and health data under HIPAA regulations.',
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Crisis Banner */}
      <div className="bg-therapy-dark text-white text-center py-2 text-sm">
        <div className="max-w-site mx-auto px-4">
          <span className="opacity-80">Crisis support 24/7:</span>{' '}
          <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Privacy policy navigation">
        <div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-title font-semibold text-xl text-slate-800">
            Pathways Within <span className="text-therapy">Therapy</span>
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-therapy font-body">← Back to Home</Link>
        </div>
      </nav>

      <main id="main" className="bg-ivory min-h-screen py-16">
        <article className="max-w-3xl mx-auto px-6 lg:px-12">
          <header className="mb-8">
            <h1 className="font-title font-bold text-3xl md:text-4xl text-slate-800 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            {/* HIPAA Notice */}
            <section className="bg-therapy/10 rounded-xl p-6 mb-6 border-2 border-therapy" aria-labelledby="hipaa-notice">
              <h2 id="hipaa-notice" className="font-title font-semibold text-xl text-therapy mt-0 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                HIPAA Notice of Privacy Practices
              </h2>
              <p className="text-slate-700 font-medium">
                As a mental health practice, Pathways Within Therapy is required by the Health Insurance Portability and Accountability Act (HIPAA) to protect the privacy of your Protected Health Information (PHI).
              </p>
              <p className="text-slate-600">
                This policy describes how medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Introduction</h2>
              <p className="text-slate-600">
                Pathways Within Therapy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-slate-600">
                We comply with HIPAA, the New York State Mental Hygiene Law, and all applicable state and federal privacy laws governing mental health treatment.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="phi-heading">
              <h2 id="phi-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Protected Health Information (PHI)</h2>
              <h3 className="font-title font-medium text-lg text-slate-700">What is PHI?</h3>
              <p className="text-slate-600">
                Protected Health Information includes any individually identifiable health information, such as:
              </p>
              <ul className="text-slate-600">
                <li>Your name, address, date of birth, and contact information</li>
                <li>Your mental health diagnosis and treatment records</li>
                <li>Progress notes and treatment plans</li>
                <li>Insurance and billing information</li>
                <li>Communications between you and your therapist</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">How We Use PHI</h3>
              <p className="text-slate-600">We may use and disclose your PHI for:</p>
              <ul className="text-slate-600">
                <li><strong>Treatment:</strong> To provide, coordinate, and manage your mental health care</li>
                <li><strong>Payment:</strong> To bill and receive payment for services</li>
                <li><strong>Healthcare Operations:</strong> For quality assessment and improvement activities</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Psychotherapy Notes</h3>
              <p className="text-slate-600">
                <strong>Psychotherapy notes receive special protection under HIPAA.</strong> These are your therapist&apos;s personal notes about your sessions, kept separately from your medical record. We will not disclose psychotherapy notes without your written authorization, except in limited circumstances required by law.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="website-info-heading">
              <h2 id="website-info-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Website Information Collection</h2>
              <h3 className="font-title font-medium text-lg text-slate-700">Information You Provide</h3>
              <ul className="text-slate-600">
                <li>Name and contact information (email, phone number)</li>
                <li>Service interest and preferences</li>
                <li>Location preferences for appointments</li>
                <li>Messages you send through our contact forms</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Information We Do NOT Collect Through This Website</h3>
              <ul className="text-slate-600">
                <li>Protected Health Information (PHI)</li>
                <li>Date of birth or Social Security numbers</li>
                <li>Medical history or diagnoses</li>
                <li>Insurance information</li>
              </ul>

              <div className="text-slate-600 text-sm bg-therapy/5 p-4 rounded-lg mt-4">
                <strong>Important:</strong> Clinical information and PHI are collected separately through our HIPAA-compliant patient portal (Jane App) using encrypted, secure transmission. This website contact form is for general inquiries only.
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="telehealth-heading">
              <h2 id="telehealth-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Telehealth Privacy</h2>
              <p className="text-slate-600">
                We offer telehealth services using HIPAA-compliant video platforms. When using telehealth:
              </p>
              <ul className="text-slate-600">
                <li>Video sessions are encrypted end-to-end</li>
                <li>Sessions are not recorded without your explicit written consent</li>
                <li>We recommend you use a private, secure location for sessions</li>
                <li>You should use a secure, private internet connection</li>
                <li>The same confidentiality protections apply as in-person sessions</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Telehealth Limitations:</strong> While we take every precaution, electronic communications carry inherent risks. We cannot guarantee absolute security of electronic transmissions.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="disclosures-heading">
              <h2 id="disclosures-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Required & Permitted Disclosures</h2>
              <p className="text-slate-600">
                We may be required or permitted to disclose PHI without your authorization in limited circumstances:
              </p>
              <ul className="text-slate-600">
                <li><strong>Serious Threat:</strong> To prevent or lessen a serious and imminent threat to your health and safety or the health and safety of others</li>
                <li><strong>Abuse Reporting:</strong> Reports of suspected child abuse, elder abuse, or domestic violence as required by New York State law</li>
                <li><strong>Court Orders:</strong> In response to valid court orders or subpoenas</li>
                <li><strong>Workers&apos; Compensation:</strong> For claims related to workplace injuries</li>
                <li><strong>Public Health:</strong> To public health authorities for disease prevention activities</li>
                <li><strong>Coroners/Medical Examiners:</strong> To identify deceased persons or determine cause of death</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Your Rights Under HIPAA</h2>
              <p className="text-slate-600">You have the right to:</p>
              <ul className="text-slate-600">
                <li><strong>Access:</strong> Request access to your medical records</li>
                <li><strong>Amendment:</strong> Request amendment of your records if you believe they contain errors</li>
                <li><strong>Accounting:</strong> Receive an accounting of certain disclosures of your PHI</li>
                <li><strong>Restriction:</strong> Request restrictions on certain uses and disclosures</li>
                <li><strong>Confidential Communications:</strong> Request that we communicate with you in a specific way or location</li>
                <li><strong>Paper Copy:</strong> Request a paper copy of this privacy notice</li>
                <li><strong>Complain:</strong> File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="breach-heading">
              <h2 id="breach-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Breach Notification</h2>
              <p className="text-slate-600">
                In the event of a breach of unsecured PHI, we will notify you as required by law. We will also notify the U.S. Department of Health and Human Services as required.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="security-heading">
              <h2 id="security-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Security Measures</h2>
              <p className="text-slate-600">
                We implement administrative, physical, and technical safeguards to protect your PHI, including:
              </p>
              <ul className="text-slate-600">
                <li>Encrypted electronic health records</li>
                <li>Secure, HIPAA-compliant practice management systems</li>
                <li>Staff training on privacy and security practices</li>
                <li>Access controls limiting who can view your information</li>
                <li>Secure disposal of records containing PHI</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="minors-heading">
              <h2 id="minors-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Minors&apos; Privacy</h2>
              <p className="text-slate-600">
                For minor clients, parents or legal guardians generally have the right to access their child&apos;s treatment records. However, in New York State, minors may have certain privacy rights regarding their mental health treatment. We will discuss these rights with you during the intake process.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Contact & Complaints</h2>
              <p className="text-slate-600">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Privacy Officer:
              </p>
              <div className="text-slate-600 bg-slate-50 p-4 rounded-lg">
                <strong>Pathways Within Therapy</strong><br />
                <strong>Phone:</strong> <a href="tel:6313713825" className="text-therapy hover:underline">(631) 371-3825</a><br />
                <strong>Email:</strong> <a href="mailto:Welcome@pathwayswithin.com" className="text-therapy hover:underline">Welcome@pathwayswithin.com</a>
              </div>
              <p className="text-slate-600 mt-4">
                You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights:
              </p>
              <div className="text-slate-600 text-sm bg-slate-50 p-4 rounded-lg">
                <strong>HHS Office for Civil Rights</strong><br />
                Website: <a href="https://www.hhs.gov/ocr" target="_blank" rel="noopener noreferrer" className="text-therapy hover:underline">www.hhs.gov/ocr</a><br />
                Toll-Free: 1-800-368-1019
              </div>
              <p className="text-slate-600 text-sm mt-4">
                <strong>We will not retaliate against you for filing a complaint.</strong>
              </p>
            </section>
          </div>

          <footer className="mt-8 pt-6 border-t border-slate-200">
            <Link href="/" className="text-therapy font-title font-medium hover:underline">← Back to Home</Link>
          </footer>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-chalkboard text-white py-8">
        <div className="max-w-site mx-auto px-6 text-center text-sm text-slate-400 font-body">
          © {new Date().getFullYear()} Pathways Within Therapy. All rights reserved.
        </div>
      </footer>
    </>
  )
}

