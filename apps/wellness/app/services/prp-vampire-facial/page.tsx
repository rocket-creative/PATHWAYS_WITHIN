import { Metadata } from 'next'
import PRPVampireFacialContent from './content'

export const metadata: Metadata = {
  title: 'PRP Vampire Facial | Pathways Within Wellness',
  description: 'PRP Vampire Facial on Long Island. Rejuvenate skin using your own platelet-rich plasma. Natural skin renewal. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/prp-vampire-facial' },
  openGraph: { title: 'PRP Vampire Facial | Long Island | Pathways Within Wellness', description: 'Natural skin rejuvenation with PRP therapy.', url: 'https://pathwayswellness.com/services/prp-vampire-facial', type: 'website', images: [{ url: '/og-prp-facial.jpg', width: 1200, height: 630, alt: 'PRP Vampire Facial' }] },
  twitter: { card: 'summary_large_image', title: 'PRP Vampire Facial | Pathways Within Wellness', description: 'PRP Vampire Facial on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'PRP Facial', name: 'PRP Vampire Facial', description: 'PRP Vampire Facial using platelet-rich plasma for natural skin rejuvenation, collagen stimulation, and anti-aging.', url: 'https://pathwayswellness.com/services/prp-vampire-facial', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'PRP Vampire Facial', item: 'https://pathwayswellness.com/services/prp-vampire-facial' }] }
export default function PRPVampireFacialPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PRPVampireFacialContent /></>) }
