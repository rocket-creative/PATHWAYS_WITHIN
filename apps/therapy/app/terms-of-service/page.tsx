import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Pathways Within Therapy website and mental health services, including telehealth policies.',
  alternates: {
    canonical: 'https://pathwayswithintherapy.com/terms-of-service',
  },
}

export default function TermsOfService() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <div className="bg-therapy-dark text-white text-center py-2 text-sm">
        <div className="max-w-site mx-auto px-4">
          <span className="opacity-80">Crisis support 24/7:</span>{' '}
          <a href="tel:988" className="font-medium hover:underline">Call 988</a>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-40 shadow-sm" aria-label="Terms of service navigation">
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
            <h1 className="font-title font-bold text-3xl md:text-4xl text-slate-800 mb-2">Terms of Service</h1>
            <p className="text-slate-500 font-body text-sm">Last Updated: December 2025</p>
          </header>

          <div className="prose prose-slate max-w-none font-body">
            {/* Crisis Notice */}
            <section className="bg-red-50 rounded-xl p-6 mb-6 border-2 border-red-200" aria-labelledby="crisis-notice">
              <h2 id="crisis-notice" className="font-title font-semibold text-xl text-red-800 mt-0 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Important Notice: Mental Health Emergencies
              </h2>
              <p className="text-red-800 font-medium mb-2">
                This website is not for emergencies. If you are experiencing a mental health crisis:
              </p>
              <ul className="text-red-700">
                <li><strong>Call 988</strong> (Suicide & Crisis Lifeline)</li>
                <li><strong>Call 911</strong> or go to your nearest emergency room</li>
                <li><strong>Text HOME to 741741</strong> (Crisis Text Line)</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="agreement-heading">
              <h2 id="agreement-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Agreement to Terms</h2>
              <p className="text-slate-600">
                By accessing or using the Pathways Within Therapy website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
              </p>
              <p className="text-slate-600">
                These terms govern your use of our website only. Therapeutic services are governed by separate informed consent documents provided at the start of treatment.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="services-heading">
              <h2 id="services-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Services Description</h2>
              <p className="text-slate-600">
                Pathways Within Therapy provides mental health therapy services through licensed clinicians in New York, New Jersey, North Carolina, and Florida. This website provides information about our services, team, and allows visitors to contact us for inquiries.
              </p>
              
              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">This Website Does Not Provide:</h3>
              <ul className="text-slate-600">
                <li>Medical advice, diagnosis, or treatment</li>
                <li>Emergency or crisis intervention services</li>
                <li>A substitute for professional mental health care</li>
                <li>Therapeutic relationship through contact forms or emails</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Educational Content Disclaimer</h3>
              <p className="text-slate-600">
                Information on this website about mental health conditions, treatments, and wellness is for educational purposes only. It is not intended to diagnose or treat any condition. Always consult with a qualified healthcare provider for personalized advice.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="telehealth-heading">
              <h2 id="telehealth-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Telehealth Services</h2>
              <p className="text-slate-600">
                We offer telehealth (video therapy) services for clients in states where our clinicians are licensed: New York, New Jersey, North Carolina, and Florida.
              </p>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Telehealth Requirements</h3>
              <ul className="text-slate-600">
                <li>You must be physically located in a state where your clinician is licensed during the session</li>
                <li>You must have a stable internet connection and device with camera/microphone</li>
                <li>You must be in a private location during sessions</li>
                <li>A separate telehealth informed consent is required before beginning telehealth services</li>
              </ul>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Technology Limitations</h3>
              <p className="text-slate-600">
                Telehealth sessions may be affected by technology issues including:
              </p>
              <ul className="text-slate-600">
                <li>Internet connectivity problems</li>
                <li>Audio or video quality issues</li>
                <li>Platform outages</li>
              </ul>
              <p className="text-slate-600">
                If technical issues disrupt a session, your therapist will attempt to reconnect or reschedule. We are not responsible for missed sessions due to your technology or connectivity issues.
              </p>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Emergency Protocols During Telehealth</h3>
              <p className="text-slate-600">
                Before beginning telehealth services, you will provide your physical location and emergency contact information. If an emergency arises during a telehealth session, your therapist may contact emergency services or your emergency contact.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="no-guarantee-heading">
              <h2 id="no-guarantee-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">No Guarantee of Results</h2>
              <p className="text-slate-600">
                While we are committed to providing high-quality mental health care, <strong>we cannot guarantee specific outcomes from therapy</strong>. Mental health treatment is a collaborative process, and results vary based on many factors including individual circumstances, engagement in the therapeutic process, and external life factors.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="communication-heading">
              <h2 id="communication-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Communication Policies</h2>
              <h3 className="font-title font-medium text-lg text-slate-700">Website Contact Forms</h3>
              <p className="text-slate-600">
                Contact forms on this website are for general inquiries only. <strong>Do not submit sensitive health information through these forms.</strong> Contact form submissions are not part of your therapy record and do not establish a therapeutic relationship.
              </p>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Email Communication</h3>
              <p className="text-slate-600">
                Email is not a secure form of communication. We recommend limiting email use to scheduling and administrative matters. For clinical concerns, please contact your therapist through our secure patient portal or by phone.
              </p>

              <h3 className="font-title font-medium text-lg text-slate-700 mt-4">Response Times</h3>
              <p className="text-slate-600">
                We aim to respond to inquiries within 1-2 business days. <strong>We do not provide 24/7 crisis support.</strong> For emergencies, contact 988, 911, or your local emergency services.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="user-responsibilities-heading">
              <h2 id="user-responsibilities-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">User Responsibilities</h2>
              <p className="text-slate-600">When using our website, you agree to:</p>
              <ul className="text-slate-600">
                <li>Provide accurate information in any forms you submit</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Not submit content that is defamatory, harassing, or harmful</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="cancellation-heading">
              <h2 id="cancellation-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Appointment Cancellation Policy</h2>
              <p className="text-slate-600">
                Please refer to your service agreement for our cancellation and no-show policies. Generally:
              </p>
              <ul className="text-slate-600">
                <li>Cancel appointments at least 24 hours in advance to avoid fees</li>
                <li>Late cancellations and no-shows may incur a fee</li>
                <li>Repeated cancellations may result in discharge from services</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="payment-heading">
              <h2 id="payment-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Payment & Insurance</h2>
              <p className="text-slate-600">
                Payment policies and insurance acceptance are outlined in your service agreement. Key points:
              </p>
              <ul className="text-slate-600">
                <li>We accept many major insurance plans — verification required</li>
                <li>You are responsible for knowing your insurance benefits</li>
                <li>Copays and deductibles are due at time of service</li>
                <li>Self-pay options are available</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="intellectual-property-heading">
              <h2 id="intellectual-property-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Intellectual Property</h2>
              <p className="text-slate-600">
                All content on this website, including text, graphics, logos, and images, is the property of Pathways Within Therapy and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="liability-heading">
              <h2 id="liability-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Limitation of Liability</h2>
              <p className="text-slate-600">
                To the fullest extent permitted by law, Pathways Within Therapy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.
              </p>
              <p className="text-slate-600">
                We are not liable for:
              </p>
              <ul className="text-slate-600">
                <li>Actions taken based on website information</li>
                <li>Technical failures affecting website access or telehealth sessions</li>
                <li>Third-party website content linked from our site</li>
                <li>Unauthorized access to your information due to factors beyond our control</li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="external-links-heading">
              <h2 id="external-links-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">External Links</h2>
              <p className="text-slate-600">
                Our website may contain links to external sites. We are not responsible for the content, privacy practices, or availability of these sites. External links do not imply endorsement.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="governing-law-heading">
              <h2 id="governing-law-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Governing Law</h2>
              <p className="text-slate-600">
                These Terms of Service are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="changes-heading">
              <h2 id="changes-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="bg-white rounded-xl p-6 mb-6 border border-slate-200" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-title font-semibold text-xl text-slate-800 mt-0">Contact Us</h2>
              <p className="text-slate-600">
                Questions about these Terms of Service should be sent to:
              </p>
              <div className="text-slate-600 bg-slate-50 p-4 rounded-lg">
                <strong>Pathways Within Therapy</strong><br />
                <strong>Phone:</strong> <a href="tel:6313713825" className="text-therapy hover:underline">(631) 371-3825</a><br />
                <strong>Email:</strong> <a href="mailto:Welcome@pathwayswithin.com" className="text-therapy hover:underline">Welcome@pathwayswithin.com</a>
              </div>
            </section>
          </div>

          <footer className="mt-8 pt-6 border-t border-slate-200">
            <Link href="/" className="text-therapy font-title font-medium hover:underline">← Back to Home</Link>
          </footer>
        </article>
      </main>

      <footer className="bg-chalkboard text-white py-8">
        <div className="max-w-site mx-auto px-6 text-center text-sm text-slate-400 font-body">
          © {new Date().getFullYear()} Pathways Within Therapy. All rights reserved.
        </div>
      </footer>
    </>
  )
}
