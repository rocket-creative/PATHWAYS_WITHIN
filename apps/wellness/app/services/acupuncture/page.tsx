import { Metadata } from 'next'
import AcupunctureContent from './content'

export const metadata: Metadata = {
  title: 'Acupuncture | Pathways Within Wellness',
  description: 'Licensed acupuncture on Long Island for pain relief, stress, anxiety, sleep, and wellness. Traditional Chinese medicine. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://pathwayswellness.com/services/acupuncture' },
  openGraph: {
    title: 'Acupuncture Services | Long Island | Pathways Within Wellness',
    description: 'Traditional acupuncture for pain relief, stress, anxiety, sleep improvement, and holistic wellness.',
    url: 'https://pathwayswellness.com/services/acupuncture',
    type: 'website',
    images: [{ url: '/og-acupuncture.jpg', width: 1200, height: 630, alt: 'Acupuncture at Pathways Within Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'Acupuncture | Pathways Within Wellness', description: 'Traditional acupuncture on Long Island for pain, stress, and wellness.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Acupuncture', name: 'Acupuncture Services', description: 'Licensed acupuncture services using traditional Chinese medicine techniques for pain relief, stress management, anxiety, sleep improvement, digestive health, and hormonal balance.', url: 'https://pathwayswellness.com/services/acupuncture', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209', url: 'https://pathwayswellness.com' } }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is acupuncture safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, acupuncture is very safe when performed by a licensed acupuncturist. We use sterile, single-use needles and follow strict safety protocols.' }}, { '@type': 'Question', name: 'How many acupuncture sessions will I need?', acceptedAnswer: { '@type': 'Answer', text: 'For acute conditions, typically 3-6 sessions. Chronic conditions may need 8-12+ sessions. For wellness maintenance, monthly or seasonal sessions are recommended.' }}, { '@type': 'Question', name: 'Does acupuncture hurt?', acceptedAnswer: { '@type': 'Answer', text: 'Acupuncture needles are hair-thin, so most people feel only a brief pinch during insertion. You may experience warmth, tingling, or nothing at all. Many clients find it deeply relaxing.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswellness.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswellness.com/services' }, { '@type': 'ListItem', position: 3, name: 'Acupuncture', item: 'https://pathwayswellness.com/services/acupuncture' }]}

export default function AcupuncturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AcupunctureContent />
    </>
  )
}
