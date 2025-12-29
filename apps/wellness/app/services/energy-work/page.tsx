import { Metadata } from 'next'
import EnergyWorkContent from './content'

export const metadata: Metadata = {
  title: 'Energy Work & Reiki | Pathways Within Wellness',
  description: 'Energy healing and Reiki on Long Island. Balance your energy, reduce stress, and promote natural healing. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/energy-work' },
  openGraph: { title: 'Energy Work & Reiki | Long Island | Pathways Within Wellness', description: 'Energy healing and Reiki for balance, stress relief, and natural wellness.', url: 'https://pathwayswellness.com/services/energy-work', type: 'website', images: [{ url: '/og-energy-work.jpg', width: 1200, height: 630, alt: 'Energy Work & Reiki' }] },
  twitter: { card: 'summary_large_image', title: 'Energy Work & Reiki | Pathways Within Wellness', description: 'Energy healing and Reiki on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Energy Healing', name: 'Energy Work & Reiki', description: 'Energy healing and Reiki sessions for balancing energy, stress relief, and promoting natural healing processes.', url: 'https://pathwayswellness.com/services/energy-work', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Energy Work', item: 'https://pathwayswellness.com/services/energy-work' }] }
export default function EnergyWorkPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><EnergyWorkContent /></>) }
