import { Metadata } from 'next'
import HypnotherapyContent from './content'

export const metadata: Metadata = {
  title: 'Hypnotherapy | Pathways Within Therapy',
  description: 'Clinical hypnotherapy on Long Island for anxiety, habit change, phobias, sleep, and performance. Safe, therapeutic hypnosis. 5 locations + telehealth. Call (631) 371-3825.',
  alternates: { canonical: 'https://pathwayswithintherapy.com/services/hypnotherapy' },
  openGraph: {
    title: 'Hypnotherapy | Clinical Hypnosis | Pathways Within',
    description: 'Clinical hypnotherapy for anxiety, habit change, phobias, and performance enhancement.',
    url: 'https://pathwayswithintherapy.com/services/hypnotherapy',
    type: 'website',
    images: [{ url: '/og-hypnotherapy.jpg', width: 1200, height: 630, alt: 'Hypnotherapy at Pathways Within' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hypnotherapy | Long Island | Pathways Within', description: 'Clinical hypnosis for anxiety, habits, phobias, and more.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'MedicalTherapy', name: 'Hypnotherapy', alternateName: 'Clinical Hypnosis', description: 'Hypnotherapy uses guided relaxation and focused attention to achieve a heightened state of awareness for therapeutic benefit. Effective for anxiety, habit change, phobias, sleep improvement, and more.', url: 'https://pathwayswithintherapy.com/services/hypnotherapy', provider: { '@type': 'MedicalBusiness', name: 'Pathways Within Therapy', telephone: '+1-631-371-3825', url: 'https://pathwayswithintherapy.com' }, medicalSpecialty: 'Psychiatry' }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is hypnotherapy safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Clinical hypnotherapy is safe when performed by a trained professional. You remain in control throughout the session and cannot be made to do anything against your will. It\'s very different from stage hypnosis.' }}, { '@type': 'Question', name: 'What can hypnotherapy treat?', acceptedAnswer: { '@type': 'Answer', text: 'Hypnotherapy can help with anxiety, stress, habit change (like smoking), weight management, phobias, sleep improvement, performance enhancement, pain management, confidence building, and trauma processing.' }}, { '@type': 'Question', name: 'Will I lose control during hypnotherapy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Contrary to popular belief, you remain fully aware and in control during hypnotherapy. You cannot be made to do anything against your will. The trance state is similar to being deeply absorbed in a book or movie.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswithintherapy.com' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswithintherapy.com/services' }, { '@type': 'ListItem', position: 3, name: 'Hypnotherapy', item: 'https://pathwayswithintherapy.com/services/hypnotherapy' }]}

export default function HypnotherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HypnotherapyContent />
    </>
  )
}
