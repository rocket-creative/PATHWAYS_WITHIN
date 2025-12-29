import { Metadata } from 'next'
import CouplesTherapyContent from './content'

export const metadata: Metadata = {
  title: 'Couples Therapy | Pathways Within Therapy',
  description: 'Expert couples therapy on Long Island using the Gottman Method. Rebuild connection, improve communication, and rediscover love. 5 locations + telehealth. Call (631) 371-3825.',
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app/services/couples-therapy',
  },
  openGraph: {
    title: 'Couples Therapy | Rebuild Connection | Pathways Within',
    description: 'Expert couples therapy using the Gottman Method. Improve communication and reconnect with your partner.',
    url: 'https://pathways-therapy.vercel.app/services/couples-therapy',
    type: 'website',
    images: [{ url: '/og-couples-therapy.jpg', width: 1200, height: 630, alt: 'Couples Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couples Therapy | Long Island | Pathways Within',
    description: 'Rebuild connection and improve communication with expert couples therapy.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Couples Therapy',
  description: 'Expert couples therapy using evidence-based approaches including the Gottman Method to help couples rebuild connection, improve communication, and resolve conflicts.',
  url: 'https://pathways-therapy.vercel.app/services/couples-therapy',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathways-therapy.vercel.app',
  },
  medicalSpecialty: 'Psychiatry',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a therapist know about my relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The benefit is precisely that they're unbiased. A trained third party can spot patterns invisible to you and create safety for difficult conversations.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will the therapist take sides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. The therapist's role is to help you both hear each other, not to declare anyone right or wrong.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does couples therapy take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some couples see improvement in 8-12 sessions. Others benefit from 6 months to a year. It depends on both partners' commitment.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Gottman Method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on 40+ years of research by Drs. John and Julie Gottman, this method identifies four communication patterns that predict relationship failure and teaches their antidotes.',
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
    { '@type': 'ListItem', position: 3, name: 'Couples Therapy', item: 'https://pathways-therapy.vercel.app/services/couples-therapy' },
  ],
}

export default function CouplesTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CouplesTherapyContent />
    </>
  )
}
