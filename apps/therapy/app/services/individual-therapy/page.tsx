import { Metadata } from 'next'
import IndividualTherapyContent from './content'

// ============================================
// PAGE-SPECIFIC SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Individual Therapy | Pathways Within Therapy',
  description: 'Personalized one-on-one therapy on Long Island. Licensed therapists offering CBT, EMDR, and evidence-based approaches for anxiety, depression, trauma, and personal growth. 5 locations + telehealth.',
  keywords: 'individual therapy, one-on-one counseling, CBT, therapist Long Island, anxiety therapy, depression treatment, personal growth',
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app/services/individual-therapy',
  },
  openGraph: {
    title: 'Individual Therapy | Pathways Within Therapy',
    description: 'Personalized one-on-one therapy on Long Island. Licensed therapists offering CBT, EMDR, and evidence-based approaches.',
    url: 'https://pathways-therapy.vercel.app/services/individual-therapy',
    type: 'website',
    images: [{ url: '/og-individual-therapy.jpg', width: 1200, height: 630, alt: 'Individual Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Individual Therapy | Long Island | Pathways Within',
    description: 'One-on-one therapy for anxiety, depression, trauma, and personal growth.',
  },
}

// ============================================
// SCHEMA.ORG STRUCTURED DATA
// ============================================
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Individual Therapy',
  description: 'Professional one-on-one counseling with licensed therapists. Evidence-based approaches including CBT, EMDR, and talk therapy for anxiety, depression, trauma, relationship issues, and personal growth.',
  url: 'https://pathways-therapy.vercel.app/services/individual-therapy',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathways-therapy.vercel.app',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Long Island',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  },
  medicalSpecialty: 'Psychiatry',
  relevantSpecialty: ['Anxiety Treatment', 'Depression Treatment', 'Cognitive Behavioral Therapy'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why would I talk to a therapist instead of a friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapists bring specialized training and clinical expertise. Therapy is unbiased—your therapist doesn\'t have a personal stake in your decisions. It\'s your space entirely, completely confidential, and you never have to worry about burdening your therapist.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to be in therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As long as it\'s helpful, which you get to decide. Some people come for a few months to work through a specific issue. Others stay for years as they work on deeper patterns. You can see us weekly, transition to less frequent sessions, or take breaks as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How confidential is therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We adhere to strict HIPAA guidelines. We cannot share what you discuss in sessions. The only exceptions are if there\'s credible risk of harm to yourself or others, or suspected child/elder abuse, which we\'re legally required to report.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens in a therapy session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First sessions involve getting to know you and your goals. Ongoing sessions typically include check-ins, main therapeutic work, and wrap-up with any between-session practice. You guide what we discuss, and we meet you where you are.',
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
    { '@type': 'ListItem', position: 3, name: 'Individual Therapy', item: 'https://pathways-therapy.vercel.app/services/individual-therapy' },
  ],
}

export default function IndividualTherapyPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
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
      <IndividualTherapyContent />
    </>
  )
}
