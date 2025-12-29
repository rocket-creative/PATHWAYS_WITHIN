import { Metadata } from 'next'
import LaserHairRemovalContent from './content'

export const metadata: Metadata = {
  title: 'Laser Hair Removal | Pathways Within Wellness',
  description: 'Laser hair removal on Long Island. Safe, effective permanent hair reduction for all skin types. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://wellness-lac.vercel.app/services/laser-hair-removal' },
  openGraph: { title: 'Laser Hair Removal | Long Island | Pathways Within Wellness', description: 'Safe and effective laser hair removal for permanent reduction.', url: 'https://wellness-lac.vercel.app/services/laser-hair-removal', type: 'website', images: [{ url: '/og-laser-hair.jpg', width: 1200, height: 630, alt: 'Laser Hair Removal' }] },
  twitter: { card: 'summary_large_image', title: 'Laser Hair Removal | Pathways Within Wellness', description: 'Laser hair removal on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Laser Hair Removal', name: 'Laser Hair Removal', description: 'Safe, effective laser hair removal treatments for permanent hair reduction on all skin types.', url: 'https://wellness-lac.vercel.app/services/laser-hair-removal', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wellness-lac.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wellness-lac.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Laser Hair Removal', item: 'https://wellness-lac.vercel.app/services/laser-hair-removal' }] }
export default function LaserHairRemovalPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><LaserHairRemovalContent /></>) }
