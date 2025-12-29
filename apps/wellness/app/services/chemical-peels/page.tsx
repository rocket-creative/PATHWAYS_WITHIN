import { Metadata } from 'next'
import ChemicalPeelsContent from './content'

export const metadata: Metadata = {
  title: 'Chemical Peels | Pathways Within Wellness',
  description: 'Professional chemical peels on Long Island. Improve skin texture, reduce wrinkles, and brighten complexion. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/chemical-peels' },
  openGraph: { title: 'Chemical Peels | Long Island | Pathways Within Wellness', description: 'Professional chemical peels for skin rejuvenation and texture improvement.', url: 'https://pathwayswellness.com/services/chemical-peels', type: 'website', images: [{ url: '/og-chemical-peels.jpg', width: 1200, height: 630, alt: 'Chemical Peels' }] },
  twitter: { card: 'summary_large_image', title: 'Chemical Peels | Pathways Within Wellness', description: 'Professional chemical peels on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Chemical Peel', name: 'Chemical Peels', description: 'Professional chemical peel treatments for skin rejuvenation, texture improvement, and brightening.', url: 'https://pathwayswellness.com/services/chemical-peels', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Chemical Peels', item: 'https://pathwayswellness.com/services/chemical-peels' }] }
export default function ChemicalPeelsPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><ChemicalPeelsContent /></>) }
