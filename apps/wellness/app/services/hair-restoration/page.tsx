import { Metadata } from 'next'
import HairRestorationContent from './content'

export const metadata: Metadata = {
  title: 'Hair Restoration | Pathways Within Wellness',
  description: 'Hair restoration treatments on Long Island. PRP therapy, scalp treatments, and hair growth solutions. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/hair-restoration' },
  openGraph: { title: 'Hair Restoration | Long Island | Pathways Within Wellness', description: 'PRP therapy and hair growth treatments for thinning hair.', url: 'https://pathwayswellness.com/services/hair-restoration', type: 'website', images: [{ url: '/og-hair-restoration.jpg', width: 1200, height: 630, alt: 'Hair Restoration' }] },
  twitter: { card: 'summary_large_image', title: 'Hair Restoration | Pathways Within Wellness', description: 'Hair restoration treatments on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Hair Restoration', name: 'Hair Restoration', description: 'Hair restoration treatments including PRP therapy, scalp treatments, and hair growth solutions for thinning hair.', url: 'https://pathwayswellness.com/services/hair-restoration', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Hair Restoration', item: 'https://pathwayswellness.com/services/hair-restoration' }] }
export default function HairRestorationPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><HairRestorationContent /></>) }
