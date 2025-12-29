import { Metadata } from 'next'
import SomaticTherapyContent from './content'

export const metadata: Metadata = {
  title: 'Somatic Therapy | Pathways Within Therapy',
  description: 'Body-centered somatic therapy on Long Island. Release stored trauma, regulate your nervous system, and reconnect with your body. 5 locations + telehealth. Call (631) 371-3825.',
  alternates: { canonical: 'https://pathways-therapy.vercel.app/services/somatic-therapy' },
  openGraph: {
    title: 'Somatic Therapy | Body-Centered Healing | Pathways Within',
    description: 'Body-centered approaches to healing trauma and stress through somatic therapy.',
    url: 'https://pathways-therapy.vercel.app/services/somatic-therapy',
    type: 'website',
    images: [{ url: '/og-somatic-therapy.jpg', width: 1200, height: 630, alt: 'Somatic Therapy at Pathways Within' }],
  },
  twitter: { card: 'summary_large_image', title: 'Somatic Therapy | Long Island | Pathways Within', description: 'Body-centered approaches to healing trauma and stress.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'MedicalTherapy', name: 'Somatic Therapy', description: 'Body-centered therapeutic approach that addresses trauma and stress stored in the body through techniques like body awareness, tension release, and nervous system regulation.', url: 'https://pathways-therapy.vercel.app/services/somatic-therapy', provider: { '@type': 'MedicalBusiness', name: 'Pathways Within Therapy', telephone: '+1-631-371-3825', url: 'https://pathways-therapy.vercel.app' }, medicalSpecialty: 'Psychiatry' }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is somatic therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Somatic therapy is a body-centered approach that recognizes trauma and stress are stored in the body, not just the mind. It uses techniques like body awareness, tension release, and nervous system regulation to promote healing.' }}, { '@type': 'Question', name: 'Who benefits from somatic therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Somatic therapy is especially helpful for trauma survivors, those with chronic stress or tension, people who have difficulty accessing emotions verbally, and anyone wanting to develop a healthier relationship with their body.' }}, { '@type': 'Question', name: 'Do I have to talk about my trauma?', acceptedAnswer: { '@type': 'Answer', text: 'No. Somatic therapy can process trauma through the body without requiring detailed verbal descriptions. This makes it a good option for those who find traditional talk therapy difficult.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathways-therapy.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathways-therapy.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'Somatic Therapy', item: 'https://pathways-therapy.vercel.app/services/somatic-therapy' }]}

export default function SomaticTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SomaticTherapyContent />
    </>
  )
}
