'use client'

/**
 * SisterPractice Component - Wellness Site Version
 * 
 * Compliant cross-promotion module for wellness → therapy referral
 * Includes required ownership disclosure per pathways-compliant-cross-promotion.md
 */

import Link from 'next/link'
import { SITE_URLS } from '@shared/lib/constants'

interface SisterPracticeProps {
  variant?: 'default' | 'compact' | 'footer'
}

export function SisterPractice({ variant = 'default' }: SisterPracticeProps) {
  const therapyUrl = SITE_URLS.therapy
  
  if (variant === 'footer') {
    return (
      <div className="border-t border-slate-700 pt-8 mt-8">
        <div className="text-sm">
          <h4 className="font-title font-medium text-white mb-2">Pathways Within Therapy</h4>
          <p className="text-slate-400 font-body mb-2">
            Our sister practice offers individual, couples, family, and specialized therapy services.
          </p>
          <a 
            href={therapyUrl} 
            className="text-therapy hover:text-therapy/80 font-body"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Explore Therapy Services →
          </a>
          <p className="text-slate-500 text-xs font-body mt-3 italic">
            Pathways Within Wellness and Pathways Within Therapy operate under common ownership. 
            Wellness services are separate from and do not substitute for mental health treatment.
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="bg-therapy/5 rounded-xl p-6 border border-therapy/20">
        <h3 className="font-title font-semibold text-lg text-slate-800 mb-2">
          Support for Your Mental Health
        </h3>
        <p className="text-slate-600 font-body text-sm mb-4">
          Our sister practice, Pathways Within Therapy, offers individual, couples, family, 
          and specialized therapy at five Long Island locations plus telehealth.
        </p>
        <a 
          href={therapyUrl}
          className="inline-flex items-center gap-2 text-therapy font-title font-medium text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Therapy Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-slate-500 text-xs font-body mt-4 italic">
          Pathways Within Wellness and Pathways Within Therapy operate under common ownership. 
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
            Pathways Within Therapy
          </h2>
          <p className="text-slate-600 font-body mb-6">
            True wellness encompasses mind, body, and spirit. Our sister practice offers 
            individual, couples, family, and specialized therapy services at five Long Island 
            locations plus telehealth throughout New York, New Jersey, North Carolina, and Florida.
          </p>
          <p className="text-slate-600 font-body mb-8">
            Many of our wellness clients find that professional mental health support 
            complements their self-care journey, providing tools for stress management, 
            relationship health, and personal growth.
          </p>
          <a 
            href={therapyUrl}
            className="inline-flex items-center gap-2 bg-therapy text-white px-6 py-3 rounded-lg font-title font-medium hover:bg-therapy-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Therapy Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-slate-500 text-xs font-body mt-6 italic max-w-xl mx-auto">
            Pathways Within Wellness and Pathways Within Therapy operate under common ownership. 
            Wellness services are separate from and do not substitute for mental health treatment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SisterPractice

