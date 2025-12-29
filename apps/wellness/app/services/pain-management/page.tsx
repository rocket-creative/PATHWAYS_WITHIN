import { Metadata } from 'next'
import PainManagementContent from './content'

export const metadata: Metadata = {
  title: 'Pain Management | Pathways Within Wellness',
  description: 'Holistic pain management on Long Island. Acupuncture, massage, and natural approaches to chronic pain relief. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://wellness-lac.vercel.app/services/pain-management' },
  openGraph: { title: 'Pain Management | Long Island | Pathways Within Wellness', description: 'Holistic pain management with acupuncture and massage.', url: 'https://wellness-lac.vercel.app/services/pain-management', type: 'website', images: [{ url: '/og-pain-management.jpg', width: 1200, height: 630, alt: 'Pain Management' }] },
  twitter: { card: 'summary_large_image', title: 'Pain Management | Pathways Within Wellness', description: 'Holistic pain management on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Pain Management', name: 'Pain Management', description: 'Holistic pain management services combining acupuncture, massage, and natural approaches for chronic pain relief.', url: 'https://wellness-lac.vercel.app/services/pain-management', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wellness-lac.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wellness-lac.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Pain Management', item: 'https://wellness-lac.vercel.app/services/pain-management' }] }
export default function PainManagementPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PainManagementContent /></>) }
