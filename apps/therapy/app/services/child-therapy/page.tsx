import { Metadata } from 'next'
import ChildTherapyContent from './content'

export const metadata: Metadata = {
  title: 'Child Therapy | Pathways Within Therapy',
  description: 'Specialized play therapy for children ages 3-12 on Long Island. Help your child process emotions, overcome challenges, and build resilience. Call (631) 371-3825.',
  alternates: {
    canonical: 'https://pathwayswithintherapy.com/services/child-therapy',
  },
  openGraph: {
    title: 'Child Therapy & Play Therapy | Pathways Within',
    description: 'Specialized therapy for children using play-based approaches. Help your child through big feelings.',
    url: 'https://pathwayswithintherapy.com/services/child-therapy',
    type: 'website',
    images: [{ url: '/og-child-therapy.jpg', width: 1200, height: 630, alt: 'Child Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Therapy | Long Island | Pathways Within',
    description: 'Specialized play therapy for children ages 3-12.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Child Therapy',
  alternateName: 'Play Therapy',
  description: 'Specialized therapeutic support for children ages 3-12 using play therapy and age-appropriate techniques to help process emotions, overcome behavioral challenges, and build resilience.',
  url: 'https://pathwayswithintherapy.com/services/child-therapy',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathwayswithintherapy.com',
  },
  medicalSpecialty: 'Psychiatry',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What age children do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with children ages 3-12 using play therapy approaches. For teens (13-18), we offer teen-specific therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is play therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Play therapy uses play as the primary therapeutic tool. Children naturally process the world through play, so it's their language for exploring emotions and working through experiences.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my child needs therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common signs include behavioral challenges (aggression, withdrawal), emotional struggles (anxiety, outbursts), academic concerns, difficulty with life transitions, or trauma. If your child seems to be struggling, therapy can help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you involve parents in child therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, parent involvement is crucial. We provide regular updates and guidance on supporting your child at home while maintaining the therapeutic relationship.',
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
    { '@type': 'ListItem', position: 3, name: 'Child Therapy', item: 'https://pathwayswithintherapy.com/services/child-therapy' },
  ],
}

export default function ChildTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ChildTherapyContent />
    </>
  )
}
