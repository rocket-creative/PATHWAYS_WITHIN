import { Metadata } from 'next'
import MassageContent from './content'

export const metadata: Metadata = {
  title: 'Massage Therapy | Pathways Within Wellness',
  description: 'Professional massage therapy on Long Island. Swedish, deep tissue, sports, hot stone, and pregnancy massage. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/massage' },
  openGraph: {
    title: 'Massage Therapy | Long Island | Pathways Within Wellness',
    description: 'Swedish, deep tissue, sports, hot stone, and pregnancy massage by certified therapists.',
    url: 'https://pathwayswellness.com/services/massage',
    type: 'website',
    images: [{ url: '/og-massage.jpg', width: 1200, height: 630, alt: 'Massage Therapy at Pathways Within Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'Massage Therapy | Pathways Within Wellness', description: 'Professional massage therapy on Long Island.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Massage Therapy', name: 'Massage Therapy', description: 'Professional massage therapy services including Swedish, deep tissue, sports, hot stone, pregnancy, and relaxation massage. Certified therapists providing stress relief, pain management, and wellness support.', url: 'https://pathwayswellness.com/services/massage', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209', url: 'https://pathwayswellness.com' } }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How long should a massage session be?', acceptedAnswer: { '@type': 'Answer', text: 'A typical session is 60 minutes. We also offer 30-minute express sessions and 90-minute deep-dive sessions depending on your needs.' }}, { '@type': 'Question', name: 'How often should I get a massage?', acceptedAnswer: { '@type': 'Answer', text: 'For wellness maintenance, monthly is ideal. For chronic pain, weekly or bi-weekly initially. Athletes often schedule weekly during heavy training periods.' }}, { '@type': 'Question', name: 'What types of massage do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer Swedish massage, deep tissue massage, sports massage, hot stone massage, pregnancy massage, and relaxation massage.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Massage', item: 'https://pathwayswellness.com/services/massage' }]}

export default function MassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MassageContent />
    </>
  )
}
