import { Metadata } from 'next'
import FacialsSkincareContent from './content'

export const metadata: Metadata = {
  title: 'Facials & Skincare | Pathways Within Wellness',
  description: 'Professional facials and skincare treatments on Long Island. Customized facials, anti-aging, acne care, and more. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://wellness-lac.vercel.app/services/facials-skincare' },
  openGraph: { title: 'Facials & Skincare | Long Island | Pathways Within Wellness', description: 'Professional facials and customized skincare treatments.', url: 'https://wellness-lac.vercel.app/services/facials-skincare', type: 'website', images: [{ url: '/og-facials.jpg', width: 1200, height: 630, alt: 'Facials & Skincare' }] },
  twitter: { card: 'summary_large_image', title: 'Facials & Skincare | Pathways Within Wellness', description: 'Professional facials and skincare on Long Island.' },
}
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Facial Treatment', name: 'Facials & Skincare', description: 'Professional facial treatments including customized facials, anti-aging treatments, acne care, and skincare consultations.', url: 'https://wellness-lac.vercel.app/services/facials-skincare', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209' } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wellness-lac.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wellness-lac.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Facials & Skincare', item: 'https://wellness-lac.vercel.app/services/facials-skincare' }] }
export default function FacialsSkincarePage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><FacialsSkincareContent /></>) }
