'use client'

/**
 * RelatedServices Component - Wellness Site
 * 
 * Within-site service recommendations (no ownership disclosure needed).
 * Use this to suggest complementary wellness services.
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
          <h3 className="font-title font-medium text-lg text-slate-800 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Link 
                key={service.href}
                href={service.href} 
                className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 font-body hover:bg-wellness/10 hover:text-wellness border border-slate-200 transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link 
              href="/services" 
              className="bg-wellness/10 px-4 py-2 rounded-lg text-sm text-wellness font-body hover:bg-wellness/20"
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
          You Might Also Enjoy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link 
              key={service.href}
              href={service.href}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-wellness hover:shadow-md transition-all group"
            >
              <h3 className="font-title font-semibold text-lg text-slate-800 mb-2 group-hover:text-wellness transition-colors">
                {service.name}
              </h3>
              {service.reason && (
                <p className="text-slate-600 font-body text-sm">{service.reason}</p>
              )}
              <span className="text-wellness text-sm font-body mt-3 inline-block group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-wellness font-title font-medium hover:underline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

// Pre-defined service relationships based on the interactive-enhancement-specification.md
export const serviceRelationships: Record<string, RelatedService[]> = {
  'massage': [
    { name: 'Acupuncture', href: '/services/acupuncture', reason: 'Enhance relaxation and pain relief' },
    { name: 'Energy Work', href: '/services/energy-work', reason: 'Deepen mind-body connection' },
  ],
  'acupuncture': [
    { name: 'Massage Therapy', href: '/services/massage', reason: 'Physical relaxation and release' },
    { name: 'Energy Work', href: '/services/energy-work', reason: 'Holistic energy balancing' },
  ],
  'energy-work': [
    { name: 'Acupuncture', href: '/services/acupuncture', reason: 'Traditional energy medicine' },
    { name: 'Massage Therapy', href: '/services/massage', reason: 'Physical relaxation support' },
  ],
  'hydrafacial': [
    { name: 'Facials & Skincare', href: '/services/facials-skincare', reason: 'Explore other facial treatments' },
    { name: 'Chemical Peels', href: '/services/chemical-peels', reason: 'Deeper exfoliation options' },
  ],
  'facials-skincare': [
    { name: 'HydraFacial', href: '/services/hydrafacial', reason: 'Multi-step hydrating treatment' },
    { name: 'RF Microneedling', href: '/services/rf-microneedling', reason: 'Advanced skin tightening' },
  ],
  'rf-microneedling': [
    { name: 'PRP Vampire Facial', href: '/services/prp-vampire-facial', reason: 'Natural collagen stimulation' },
    { name: 'HydraFacial', href: '/services/hydrafacial', reason: 'Hydration and maintenance' },
  ],
  'prp-vampire-facial': [
    { name: 'RF Microneedling', href: '/services/rf-microneedling', reason: 'Enhanced skin tightening' },
    { name: 'HydraFacial', href: '/services/hydrafacial', reason: 'Maintenance treatments' },
  ],
  'iv-vitamin-infusion': [
    { name: 'Acupuncture', href: '/services/acupuncture', reason: 'Holistic wellness support' },
  ],
  'body-sculpting': [
    { name: 'Massage Therapy', href: '/services/massage', reason: 'Enhance results with circulation' },
  ],
  'laser-hair-removal': [
    { name: 'Facials & Skincare', href: '/services/facials-skincare', reason: 'Complete skincare routine' },
  ],
}

export default RelatedServices

