import { Metadata } from 'next'
import WeightLossSurgerySupportContent from './content'

export const metadata: Metadata = {
  title: 'Weight Loss Surgery Support | Pathways Within Therapy',
  description: 'Bariatric surgery psychological evaluations and counseling on Long Island. Pre-surgical assessments, insurance documentation, and post-surgical support. Call (631) 371-3825.',
  alternates: { canonical: 'https://pathways-therapy.vercel.app/services/weight-loss-surgery-support' },
  openGraph: {
    title: 'Weight Loss Surgery Support | Bariatric Counseling | Pathways Within',
    description: 'Pre-surgical evaluations and post-surgical counseling for bariatric surgery patients.',
    url: 'https://pathways-therapy.vercel.app/services/weight-loss-surgery-support',
    type: 'website',
    images: [{ url: '/og-bariatric.jpg', width: 1200, height: 630, alt: 'Weight Loss Surgery Support at Pathways Within' }],
  },
  twitter: { card: 'summary_large_image', title: 'Weight Loss Surgery Support | Pathways Within', description: 'Bariatric psychological evaluations and ongoing support.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'MedicalTherapy', name: 'Weight Loss Surgery Support', alternateName: 'Bariatric Surgery Counseling', description: 'Comprehensive psychological support for weight loss surgery patients including pre-surgical evaluations, readiness assessments, insurance documentation, and post-surgical counseling for emotional adjustment and long-term success.', url: 'https://pathways-therapy.vercel.app/services/weight-loss-surgery-support', provider: { '@type': 'MedicalBusiness', name: 'Pathways Within Therapy', telephone: '+1-631-371-3825', url: 'https://pathways-therapy.vercel.app' }, medicalSpecialty: 'Psychiatry' }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Do I need a psychological evaluation for bariatric surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Most insurance companies and surgical programs require a psychological evaluation before approving weight loss surgery. This assessment helps ensure you\'re prepared for the lifestyle changes ahead.' }}, { '@type': 'Question', name: 'What does a pre-surgical evaluation involve?', acceptedAnswer: { '@type': 'Answer', text: 'The evaluation includes a clinical interview, psychological testing, assessment of eating patterns and mental health history, and a review of your support system. We provide documentation for your surgeon and insurance.' }}, { '@type': 'Question', name: 'Do you offer post-surgery support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide ongoing counseling to help with emotional adjustment, body image changes, relationship shifts, and developing long-term strategies for success after surgery.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathways-therapy.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathways-therapy.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Weight Loss Surgery Support', item: 'https://pathways-therapy.vercel.app/services/weight-loss-surgery-support' }]}

export default function WeightLossSurgerySupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WeightLossSurgerySupportContent />
    </>
  )
}
