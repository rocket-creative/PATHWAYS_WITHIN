import { Metadata } from 'next'
import TeethWhiteningContent from './content'

export const metadata: Metadata = {
  title: 'Teeth Whitening | Pathways Within Wellness',
  description: 'Professional teeth whitening on Long Island. Brighten your smile up to 8 shades. Safe, fast results. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/teeth-whitening' },
  openGraph: { title: 'Teeth Whitening | Long Island | Pathways Within Wellness', description: 'Professional teeth whitening for a brighter smile.', url: 'https://pathwayswellness.com/services/teeth-whitening', type: 'website', images: [{ url: '/og-teeth-whitening.jpg', width: 1200, height: 630, alt: 'Teeth Whitening' }] },
  twitter: { card: 'summary_large_image', title: 'Teeth Whitening | Pathways Within Wellness', description: 'Teeth whitening on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Teeth Whitening', name: 'Teeth Whitening', description: 'Professional teeth whitening treatments that can brighten your smile up to 8 shades. Safe, fast, and effective.', url: 'https://pathwayswellness.com/services/teeth-whitening', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Teeth Whitening', item: 'https://pathwayswellness.com/services/teeth-whitening' }] }
export default function TeethWhiteningPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><TeethWhiteningContent /></>) }
