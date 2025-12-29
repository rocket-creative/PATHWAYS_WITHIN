'use client'

/**
 * SisterPractice Component - Therapy Site Version
 * 
 * Compliant cross-promotion module for therapy → wellness referral
 * Includes required ownership disclosure per pathways-compliant-cross-promotion.md
 */

import Link from 'next/link'

interface SisterPracticeProps {
  variant?: 'default' | 'compact' | 'footer'
}

export function SisterPractice({ variant = 'default' }: SisterPracticeProps) {
  const wellnessUrl = 'https://wellness-lac.vercel.app'
  
  if (variant === 'footer') {
    return (
      <div className="border-t border-slate-700 pt-8 mt-8">
        <div className="text-sm">
          <h4 className="font-title font-medium text-white mb-2">Pathways Within Wellness</h4>
          <p className="text-slate-400 font-body mb-2">
            Our sister practice offers massage, acupuncture, facials, and rejuvenating wellness services.
          </p>
          <a 
            href={wellnessUrl} 
            className="text-wellness hover:text-wellness/80 font-body"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Explore Wellness Services →
          </a>
          <p className="text-slate-500 text-xs font-body mt-3 italic">
            Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
            Wellness services are separate from and do not substitute for mental health treatment.
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="bg-wellness/5 rounded-xl p-6 border border-wellness/20">
        <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">
          Complement Your Healing Journey
        </h3>
        <p className="text-slate-600 font-body text-sm mb-4">
          Our sister practice, Pathways Within Wellness, offers massage, acupuncture, 
          energy work, and other services that many clients find supportive alongside therapy.
        </p>
        <a 
          href={wellnessUrl}
          className="inline-flex items-center gap-2 text-wellness font-title font-medium text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Wellness Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-slate-500 text-xs font-body mt-4 italic">
          Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
          Wellness services are separate from and do not substitute for mental health treatment.
        </p>
      </div>
    )
  }

  // Default full variant
  return (
    <section className="bg-pearl py-16" aria-labelledby="sister-practice-heading">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="sister-practice-heading" className="font-title font-semibold text-2xl text-slate-800 mb-4">
            Pathways Within Wellness
          </h2>
          <p className="text-slate-600 font-body mb-6">
            True healing encompasses mind, body, and spirit. Our sister practice offers 
            massage, acupuncture, facials, IV vitamin infusions, and other rejuvenating 
            wellness services at our Massapequa and Garden City locations.
          </p>
          <p className="text-slate-600 font-body mb-8">
            Many of our therapy clients find that wellness services like massage therapy 
            or energy work complement their therapeutic journey, helping release tension 
            held in the body and supporting overall wellbeing.
          </p>
          <a 
            href={wellnessUrl}
            className="inline-flex items-center gap-2 bg-wellness text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-wellness-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Wellness Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-slate-500 text-xs font-body mt-6 italic max-w-xl mx-auto">
            Pathways Within Therapy and Pathways Within Wellness operate under common ownership. 
            Wellness services are separate from and do not substitute for mental health treatment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SisterPractice

