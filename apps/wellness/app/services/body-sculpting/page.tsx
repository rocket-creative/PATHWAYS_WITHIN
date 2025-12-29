import { Metadata } from 'next'
import BodySculptingContent from './content'

export const metadata: Metadata = {
  title: 'Body Sculpting | Pathways Within Wellness',
  description: 'Non-invasive body sculpting on Long Island. Reduce fat, contour your body, and tighten skin without surgery. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/body-sculpting' },
  openGraph: { title: 'Body Sculpting | Long Island | Pathways Within Wellness', description: 'Non-invasive body contouring and fat reduction treatments.', url: 'https://pathwayswellness.com/services/body-sculpting', type: 'website', images: [{ url: '/og-body-sculpting.jpg', width: 1200, height: 630, alt: 'Body Sculpting' }] },
  twitter: { card: 'summary_large_image', title: 'Body Sculpting | Pathways Within Wellness', description: 'Non-invasive body contouring on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Body Sculpting', name: 'Body Sculpting', description: 'Non-invasive body sculpting treatments for fat reduction, body contouring, and skin tightening.', url: 'https://pathwayswellness.com/services/body-sculpting', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Body Sculpting', item: 'https://pathwayswellness.com/services/body-sculpting' }] }
export default function BodySculptingPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><BodySculptingContent /></>) }
