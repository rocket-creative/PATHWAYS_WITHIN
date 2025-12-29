import { Metadata } from 'next'
import HydraFacialContent from './content'

export const metadata: Metadata = {
  title: 'HydraFacial | Pathways Within Wellness',
  description: 'HydraFacial treatments on Long Island. Deep cleansing, extraction, and hydration with instant results. No downtime. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/hydrafacial' },
  openGraph: {
    title: 'HydraFacial | Long Island | Pathways Within Wellness',
    description: 'Medical-grade HydraFacial treatments. Cleanse, extract, hydrate—instant glow with no downtime.',
    url: 'https://pathwayswellness.com/services/hydrafacial',
    type: 'website',
    images: [{ url: '/og-hydrafacial.jpg', width: 1200, height: 630, alt: 'HydraFacial at Pathways Within Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'HydraFacial | Pathways Within Wellness', description: 'HydraFacial treatments with instant results. No downtime.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'HydraFacial', name: 'HydraFacial', description: 'Medical-grade HydraFacial treatments using patented Vortex-Fusion technology for deep cleansing, painless extraction, intensive hydration, and antioxidant protection. Instant results with no downtime.', url: 'https://pathwayswellness.com/services/hydrafacial', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209', url: 'https://pathwayswellness.com' } }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is a HydraFacial?', acceptedAnswer: { '@type': 'Answer', text: 'HydraFacial is a medical-grade facial that combines cleansing, exfoliation, extraction, and hydration in one treatment using patented Vortex-Fusion technology for instant, visible results.' }}, { '@type': 'Question', name: 'Is there any downtime after a HydraFacial?', acceptedAnswer: { '@type': 'Answer', text: 'No, there is no downtime. You can return to your normal activities immediately. Most clients see instant glow and continue with their day.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'HydraFacial', item: 'https://pathwayswellness.com/services/hydrafacial' }]}

export default function HydraFacialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HydraFacialContent />
    </>
  )
}
