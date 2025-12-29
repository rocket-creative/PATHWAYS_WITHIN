'use client'

/**
 * RelatedServices Component - Therapy Site
 * 
 * Within-site service recommendations (no ownership disclosure needed).
 * Use this to suggest complementary therapy services.
 */

import Link from 'next/link'

interface RelatedService {
  name: string
  href: string
  reason?: string
}

interface RelatedServicesProps {
  current: string // Current service name for context
  services: RelatedService[]
  variant?: 'default' | 'compact'
}

export function RelatedServices({ current, services, variant = 'default' }: RelatedServicesProps) {
  if (variant === 'compact') {
    return (
      <section className="bg-pearl py-12">
        <div className="max-w-site mx-auto px-6 lg:px-12">
          <h3 className="font-title font-medium text-lg text-slate-800 mb-4">You Might Also Be Interested In</h3>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Link 
                key={service.href}
                href={service.href} 
                className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-therapy/10 hover:text-therapy border border-slate-200 transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link 
              href="/services" 
              className="bg-therapy/10 px-4 py-2 rounded-lg text-sm text-therapy font-body hover:bg-therapy/20"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-ivory py-16" aria-labelledby="related-services">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <h2 id="related-services" className="font-title font-semibold text-2xl text-slate-800 mb-8 text-center">
          You Might Also Be Interested In
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link 
              key={service.href}
              href={service.href}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-therapy hover:shadow-md transition-all group"
            >
              <h3 className="font-title font-semibold text-lg text-slate-800 mb-2 group-hover:text-therapy transition-colors">
                {service.name}
              </h3>
              {service.reason && (
                <p className="text-slate-600 font-body text-sm">{service.reason}</p>
              )}
              <span className="text-therapy text-sm font-body mt-3 inline-block group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-therapy font-title font-medium hover:underline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

// Pre-defined service relationships based on the interactive-enhancement-specification.md
export const serviceRelationships: Record<string, RelatedService[]> = {
  'individual-therapy': [
    { name: 'Somatic Therapy', href: '/services/somatic-therapy', reason: 'Connect body and mind for deeper healing' },
    { name: 'Trauma Therapy', href: '/services/trauma-therapy', reason: 'Specialized support for past experiences' },
  ],
  'couples-therapy': [
    { name: 'Individual Therapy', href: '/services/individual-therapy', reason: 'Personal growth supports relationship health' },
  ],
  'trauma-therapy': [
    { name: 'EMDR Therapy', href: '/services/emdr-therapy', reason: 'Evidence-based trauma processing technique' },
    { name: 'Somatic Therapy', href: '/services/somatic-therapy', reason: 'Release trauma held in the body' },
  ],
  'emdr-therapy': [
    { name: 'Trauma Therapy', href: '/services/trauma-therapy', reason: 'Comprehensive trauma support' },
    { name: 'Somatic Therapy', href: '/services/somatic-therapy', reason: 'Body-centered healing approach' },
  ],
  'somatic-therapy': [
    { name: 'EMDR Therapy', href: '/services/emdr-therapy', reason: 'Structured trauma processing' },
    { name: 'Trauma Therapy', href: '/services/trauma-therapy', reason: 'Comprehensive trauma care' },
    { name: 'Individual Therapy', href: '/services/individual-therapy', reason: 'Traditional talk therapy support' },
  ],
  'child-therapy': [
    { name: 'Teen Therapy', href: '/services/teen-therapy', reason: 'For adolescents ages 13-18' },
    { name: 'Couples Therapy', href: '/services/couples-therapy', reason: 'Support for parents navigating challenges' },
  ],
  'teen-therapy': [
    { name: 'Child Therapy', href: '/services/child-therapy', reason: 'For younger children' },
    { name: 'Individual Therapy', href: '/services/individual-therapy', reason: 'Adult therapy services' },
  ],
  'veterans-first-responders': [
    { name: 'Trauma Therapy', href: '/services/trauma-therapy', reason: 'Service-related trauma support' },
    { name: 'EMDR Therapy', href: '/services/emdr-therapy', reason: 'Evidence-based PTSD treatment' },
  ],
  'hypnotherapy': [
    { name: 'Individual Therapy', href: '/services/individual-therapy', reason: 'Comprehensive therapeutic support' },
  ],
  'weight-loss-surgery-support': [
    { name: 'Individual Therapy', href: '/services/individual-therapy', reason: 'Ongoing emotional support' },
  ],
}

export default RelatedServices

