import { Metadata } from 'next'
import PermanentMakeupContent from './content'

export const metadata: Metadata = {
  title: 'Permanent Makeup | Pathways Within Wellness',
  description: 'Permanent makeup on Long Island. Microblading, lip blush, eyeliner, and brow enhancement by skilled artists. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/permanent-makeup' },
  openGraph: { title: 'Permanent Makeup | Long Island | Pathways Within Wellness', description: 'Microblading, lip blush, and permanent cosmetics.', url: 'https://pathwayswellness.com/services/permanent-makeup', type: 'website', images: [{ url: '/og-permanent-makeup.jpg', width: 1200, height: 630, alt: 'Permanent Makeup' }] },
  twitter: { card: 'summary_large_image', title: 'Permanent Makeup | Pathways Within Wellness', description: 'Permanent makeup on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Permanent Makeup', name: 'Permanent Makeup', description: 'Permanent makeup services including microblading, lip blush, eyeliner, and brow enhancement by skilled artists.', url: 'https://pathwayswellness.com/services/permanent-makeup', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Permanent Makeup', item: 'https://pathwayswellness.com/services/permanent-makeup' }] }
export default function PermanentMakeupPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PermanentMakeupContent /></>) }
