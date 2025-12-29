import { Metadata } from 'next'
import TraumaTherapyContent from './content'

// ============================================
// PAGE-SPECIFIC SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Trauma Therapy | Pathways Within Therapy',
  description: 'Specialized trauma therapy on Long Island. EMDR, CPT, Somatic Therapy, and evidence-based approaches to help you heal from PTSD and past trauma. 5 locations + telehealth.',
  keywords: 'trauma therapy, PTSD treatment, EMDR, trauma counseling, Long Island trauma therapist, trauma recovery, CPT therapy',
  alternates: {
    canonical: 'https://pathwayswithintherapy.com/services/trauma-therapy',
  },
  openGraph: {
    title: 'Trauma Therapy | Pathways Within Therapy',
    description: 'Specialized trauma therapy on Long Island. EMDR, CPT, Somatic Therapy to help you heal from PTSD and past trauma.',
    url: 'https://pathwayswithintherapy.com/services/trauma-therapy',
    type: 'website',
    images: [{ url: '/og-trauma-therapy.jpg', width: 1200, height: 630, alt: 'Trauma Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trauma Therapy | Long Island | Pathways Within',
    description: 'Heal from PTSD and past trauma with specialized evidence-based therapy.',
  },
}

// ============================================
// SCHEMA.ORG STRUCTURED DATA
// ============================================
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Trauma Therapy',
  description: 'Specialized therapy for trauma recovery including PTSD, childhood trauma, complex trauma, and single-incident trauma. Evidence-based approaches including EMDR, CPT, and Somatic Therapy.',
  url: 'https://pathwayswithintherapy.com/services/trauma-therapy',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathwayswithintherapy.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Long Island',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  },
  medicalSpecialty: 'Psychiatry',
  relevantSpecialty: ['PTSD Treatment', 'Trauma Recovery', 'EMDR Therapy'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of trauma do you treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We treat all types of trauma including Big-T trauma (assault, accidents, combat, medical trauma), Little-t trauma (childhood neglect, bullying, emotional abuse), and Complex trauma (ongoing abuse, domestic violence). All trauma is valid and deserves professional support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What therapeutic approaches do you use for trauma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer evidence-based trauma therapies including EMDR (Eye Movement Desensitization and Reprocessing), CPT (Cognitive Processing Therapy), Somatic Therapy, and traditional talk therapy. Your therapist will recommend the approach best suited to your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to talk about my trauma in detail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Some therapies like EMDR and Somatic Therapy do not require detailed verbal processing of your trauma. You decide when and how much to share. We meet you where you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does trauma therapy take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Duration varies based on the type and complexity of trauma. EMDR often shows results in 6-12 sessions. Complex trauma may require longer treatment. Your therapist will discuss expected timelines during your initial consultation.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathwayswithintherapy.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathwayswithintherapy.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Trauma Therapy', item: 'https://pathwayswithintherapy.com/services/trauma-therapy' },
  ],
}

export default function TraumaTherapyPage() {
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
      <TraumaTherapyContent />
    </>
  )
}
