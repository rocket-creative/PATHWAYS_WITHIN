import { Metadata } from 'next'
import EMDRTherapyContent from './content'

export const metadata: Metadata = {
  title: 'EMDR Therapy | Pathways Within Therapy',
  description: 'EMDR therapy on Long Island for PTSD, trauma, anxiety, and phobias. Evidence-based Eye Movement Desensitization and Reprocessing. 5 locations + telehealth. Call (631) 371-3825.',
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app/services/emdr-therapy',
  },
  openGraph: {
    title: 'EMDR Therapy | Trauma Treatment | Pathways Within',
    description: 'Evidence-based EMDR therapy for PTSD, trauma, anxiety, and phobias on Long Island.',
    url: 'https://pathways-therapy.vercel.app/services/emdr-therapy',
    type: 'website',
    images: [{ url: '/og-emdr-therapy.jpg', width: 1200, height: 630, alt: 'EMDR Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMDR Therapy | Long Island | Pathways Within',
    description: 'Evidence-based Eye Movement Desensitization and Reprocessing for trauma.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'EMDR Therapy',
  alternateName: 'Eye Movement Desensitization and Reprocessing',
  description: 'EMDR is a structured, evidence-based psychotherapy approach that uses bilateral stimulation to help process traumatic memories. Effective for PTSD, anxiety, phobias, grief, and disturbing memories.',
  url: 'https://pathways-therapy.vercel.app/services/emdr-therapy',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathways-therapy.vercel.app',
  },
  medicalSpecialty: 'Psychiatry',
  relevantSpecialty: ['PTSD Treatment', 'Trauma Recovery', 'Anxiety Treatment'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EMDR therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EMDR (Eye Movement Desensitization and Reprocessing) is a structured therapy that uses bilateral stimulation (eye movements, tapping, or sounds) to help your brain process traumatic memories so they become less disturbing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to talk about my trauma in detail during EMDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Unlike traditional talk therapy, EMDR doesn\'t require detailed verbal descriptions of your trauma. The therapy works directly with how memories are stored in the brain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions does EMDR treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EMDR is effective for PTSD, anxiety, panic attacks, phobias, depression, grief, childhood trauma, and other disturbing memories. It\'s one of the most researched trauma treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does EMDR therapy take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many people see significant improvement in 6-12 sessions for single-incident trauma. Complex or childhood trauma may require longer treatment. Your therapist will discuss expected timelines.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathways-therapy.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathways-therapy.vercel.app/services' },
    { '@type': 'ListItem', position: 3, name: 'EMDR Therapy', item: 'https://pathways-therapy.vercel.app/services/emdr-therapy' },
  ],
}

export default function EMDRTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EMDRTherapyContent />
    </>
  )
}
