import { Metadata } from 'next'
import VeteransFirstRespondersContent from './content'

export const metadata: Metadata = {
  title: 'Veterans & First Responders Therapy | Pathways Within',
  description: 'Specialized therapy for veterans and first responders on Long Island. PTSD, trauma, transition support. VA Community Care accepted. Call (631) 371-3825.',
  alternates: { canonical: 'https://pathways-therapy.vercel.app/services/veterans-first-responders' },
  openGraph: {
    title: 'Veterans & First Responders Therapy | Pathways Within',
    description: 'Specialized therapy for military veterans, police, firefighters, and EMTs. VA Community Care accepted.',
    url: 'https://pathways-therapy.vercel.app/services/veterans-first-responders',
    type: 'website',
    images: [{ url: '/og-veterans.jpg', width: 1200, height: 630, alt: 'Veterans Therapy at Pathways Within' }],
  },
  twitter: { card: 'summary_large_image', title: 'Veterans & First Responders | Pathways Within', description: 'Specialized therapy for those who serve. VA Community Care accepted.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'MedicalTherapy', name: 'Veterans and First Responders Therapy', description: 'Specialized therapy for military veterans, police officers, firefighters, EMTs, and other first responders. Addressing PTSD, combat trauma, transition challenges, and occupational stress with cultural competence.', url: 'https://pathways-therapy.vercel.app/services/veterans-first-responders', provider: { '@type': 'MedicalBusiness', name: 'Pathways Within Therapy', telephone: '+1-631-371-3825', url: 'https://pathways-therapy.vercel.app' }, medicalSpecialty: 'Psychiatry' }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Do you accept VA Community Care?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We accept VA Community Care benefits for eligible veterans. Contact us to verify your eligibility and begin the approval process.' }}, { '@type': 'Question', name: 'What makes your therapy specialized for veterans?', acceptedAnswer: { '@type': 'Answer', text: 'Our therapists are trained in military and first responder culture, understand the unique challenges of service, and use evidence-based treatments like EMDR and CPT specifically designed for trauma.' }}, { '@type': 'Question', name: 'Do you work with first responders?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with police officers, firefighters, EMTs, paramedics, 911 dispatchers, and other first responders who face unique occupational stressors and trauma exposure.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathways-therapy.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathways-therapy.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Veterans & First Responders', item: 'https://pathways-therapy.vercel.app/services/veterans-first-responders' }]}

export default function VeteransFirstRespondersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VeteransFirstRespondersContent />
    </>
  )
}
