'use client'

/**
 * StickyCTA Component - Wellness Site
 * 
 * Frictionless contact bar that appears on scroll for easy booking/calling.
 * Only shows after user scrolls past hero section for better UX.
 */

import { useEffect, useState } from 'react'

interface StickyCTAProps {
  phone?: string
  bookingUrl?: string
  showAfter?: number // pixels scrolled before showing
}

export function StickyCTA({
  phone = '(516) 336-9209',
  bookingUrl = 'https://pathwayswithinwellness.janeapp.com/',
  showAfter = 400,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfter])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg py-3 px-4 animate-slide-up md:hidden"
      role="complementary"
      aria-label="Quick contact options"
    >
      <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-title font-medium text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-wellness text-white py-3 px-4 rounded-lg font-title font-medium text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          Book
        </a>
      </div>
    </div>
  )
}

/**
 * InlineCTA Component
 * 
 * Inline contact section for mid-page or end-of-page placement.
 */
export function InlineCTA({
  title = "Ready to Get Started?",
  subtitle = "Take the first step toward wellness. Our team is here to help.",
  phone = "(516) 336-9209",
  bookingUrl = "https://pathwayswithinwellness.janeapp.com/",
  variant = 'default'
}: {
  title?: string
  subtitle?: string
  phone?: string
  bookingUrl?: string
  variant?: 'default' | 'compact' | 'accent'
}) {
  if (variant === 'compact') {
    return (
      <div className="bg-ivory rounded-xl p-6 border border-slate-200">
        <p className="font-title font-semibold text-lg text-slate-800 mb-3">{title}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 text-wellness font-title font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {phone}
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wellness text-white px-4 py-2 rounded-lg font-title font-medium text-sm"
          >
            Book Appointment →
          </a>
        </div>
      </div>
    )
  }

  if (variant === 'accent') {
    return (
      <section className="bg-wellness py-12" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="font-title font-bold text-2xl text-white mb-2">{title}</h2>
          <p className="text-white/80 mb-6 font-body">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-wellness px-6 py-3 rounded-lg font-title font-medium"
            >
              Book Online
            </a>
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-white/10"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-pearl py-12" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 id="cta-heading" className="font-title font-semibold text-2xl text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600 mb-6 font-body">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wellness text-white px-6 py-3 rounded-lg font-title font-medium"
          >
            Book Appointment
          </a>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="border-2 border-wellness text-wellness px-6 py-3 rounded-lg font-title font-medium hover:bg-wellness hover:text-white transition-colors"
          >
            Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default StickyCTA

