'use client'
import Link from 'next/link'
import { useState } from 'react'

function CrisisBanner() { return <div className="bg-therapy-dark text-white text-center py-2 text-sm"><div className="max-w-site mx-auto px-4"><span className="opacity-80">Crisis support 24/7:</span>{' '}<a href="tel:988" className="font-medium hover:underline">Call 988</a></div></div> }
function Navigation() { const [m, setM] = useState(false); return <nav className="bg-white sticky top-0 z-40 shadow-sm"><div className="max-w-site mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"><Link href="/" className="font-title font-semibold text-xl text-slate-800">Pathways Within <span className="text-therapy">Therapy</span></Link><ul className="hidden md:flex items-center gap-6 text-sm font-body"><li><Link href="/services" className="text-slate-700 hover:text-therapy">Services</Link></li><li><Link href="/about" className="text-slate-700 hover:text-therapy">About</Link></li><li><Link href="/locations" className="text-slate-700 hover:text-therapy">Locations</Link></li><li><Link href="/faq" className="text-slate-700 hover:text-therapy">FAQ</Link></li><li><Link href="/contact" className="text-slate-700 hover:text-therapy">Contact</Link></li></ul><a href="https://pathwayswithintherapy.janeapp.com/" className="hidden sm:inline-flex items-center gap-2 bg-therapy text-white text-sm px-4 py-2 rounded-lg font-title font-medium" target="_blank" rel="noopener noreferrer">Book Now</a><button onClick={() => setM(!m)} className="md:hidden p-2" aria-label="Menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></nav> }
function Footer() { return <footer className="bg-chalkboard text-white py-12"><div className="max-w-site mx-auto px-6 lg:px-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Pathways Within Therapy. (631) 371-3825</div></footer> }

const news = [
  {
    title: 'Telehealth Expansion',
    date: 'December 2024',
    type: 'UPDATE',
    content: 'Telehealth therapy now available in New Jersey, North Carolina, and Florida in addition to New York! We\'re expanding access to our services so more people can receive quality mental health care from wherever they are. Our secure, HIPAA-compliant telehealth platform makes therapy accessible and convenient.',
  },
  {
    title: 'New Rockville Centre Location',
    date: 'Fall 2024',
    type: 'NEW LOCATION',
    content: 'We\'re excited to announce the opening of our fifth Long Island location in Rockville Centre! Located at 53 N Park Ave, Suite 203, this convenient Nassau County location brings Pathways Within Therapy even closer to our community.',
  },
  {
    title: 'A Podcast with Rachel Lessard',
    date: 'Featured',
    type: 'MEDIA',
    content: 'Rachel Lessard, LCSW-R — Owner & Founder of Pathways Within joins host Aynisa Leonardo on A New Way Podcast for an in-depth conversation about holistic healing, the integration of therapy and wellness, and creating spaces where people can find their pathways within.',
  },
  {
    title: 'Evening Appointments Now Available',
    date: 'Ongoing',
    type: 'SERVICE',
    content: 'We now offer evening appointments up to 11 PM with select clinicians. We understand that life gets busy, and we want to make therapy accessible to everyone, regardless of work schedules.',
  },
]

export default function NewsPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CrisisBanner />
      <Navigation />
      <main id="main">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-title font-bold text-4xl md:text-5xl text-slate-800 mb-4">News & Updates</h1>
            <p className="text-lg text-slate-600 font-body">Staying connected with Pathways Within</p>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-6">
              {news.map((item, i) => (
                <article key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-title font-medium bg-therapy/10 text-therapy px-2 py-1 rounded">{item.type}</span>
                    <span className="text-xs text-slate-500 font-body">{item.date}</span>
                  </div>
                  <h2 className="font-title font-semibold text-xl text-slate-800 mb-3">{item.title}</h2>
                  <p className="text-slate-600 font-body">{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-semibold text-2xl text-slate-800 mb-4">Stay Updated</h2>
            <p className="text-slate-600 font-body mb-6">Want to hear about new services, events, or updates from Pathways Within?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:Welcome@pathwayswithin.com" className="flex items-center gap-2 text-therapy font-body hover:underline">
                <span>📧</span> Join our mailing list
              </a>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-2 text-slate-600 font-body">
                <span>📱</span> Follow us on Instagram & Facebook
              </span>
            </div>
          </div>
        </section>

        <section className="bg-therapy py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-title font-bold text-2xl text-white mb-3">Questions?</h2>
            <p className="text-white/80 font-body mb-6">Your journey to healing continues to evolve. We&apos;re here to support every step.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:6313713825" className="bg-white text-therapy px-6 py-3 rounded-lg font-title font-medium">(631) 371-3825</a>
              <a href="mailto:Welcome@pathwayswithin.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium">Email Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

