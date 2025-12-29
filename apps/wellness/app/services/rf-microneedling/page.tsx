import { Metadata } from 'next'
import RFMicroneedlingContent from './content'

export const metadata: Metadata = {
  title: 'RF Microneedling | Pathways Within Wellness',
  description: 'Genius RF Microneedling on Long Island. Stimulate collagen, tighten skin, and reduce wrinkles. Advanced technology. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://wellness-lac.vercel.app/services/rf-microneedling' },
  openGraph: { title: 'RF Microneedling | Long Island | Pathways Within Wellness', description: 'Advanced RF microneedling for skin tightening and collagen stimulation.', url: 'https://wellness-lac.vercel.app/services/rf-microneedling', type: 'website', images: [{ url: '/og-rf-microneedling.jpg', width: 1200, height: 630, alt: 'RF Microneedling' }] },
  twitter: { card: 'summary_large_image', title: 'RF Microneedling | Pathways Within Wellness', description: 'RF Microneedling on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'RF Microneedling', name: 'RF Microneedling', description: 'Genius RF Microneedling treatment combining radiofrequency with microneedling for collagen stimulation, skin tightening, and wrinkle reduction.', url: 'https://wellness-lac.vercel.app/services/rf-microneedling', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wellness-lac.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wellness-lac.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'RF Microneedling', item: 'https://wellness-lac.vercel.app/services/rf-microneedling' }] }
export default function RFMicroneedlingPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><RFMicroneedlingContent /></>) }
