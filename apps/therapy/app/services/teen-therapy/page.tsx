import { Metadata } from 'next'
import TeenTherapyContent from './content'

export const metadata: Metadata = {
  title: 'Teen Therapy | Pathways Within Therapy',
  description: 'Confidential therapy for teenagers on Long Island. Expert support for anxiety, depression, school stress, family issues, and identity. 5 locations + telehealth. Call (631) 371-3825.',
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app/services/teen-therapy',
  },
  openGraph: {
    title: 'Teen Therapy | Adolescent Counseling | Pathways Within',
    description: 'Confidential therapy for teens. Expert support for anxiety, depression, and life challenges.',
    url: 'https://pathways-therapy.vercel.app/services/teen-therapy',
    type: 'website',
    images: [{ url: '/og-teen-therapy.jpg', width: 1200, height: 630, alt: 'Teen Therapy at Pathways Within' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Therapy | Long Island | Pathways Within',
    description: 'Confidential adolescent therapy for teens ages 13-18.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Teen Therapy',
  alternateName: 'Adolescent Therapy',
  description: 'Confidential therapeutic support for teenagers ages 13-18, addressing anxiety, depression, school stress, family dynamics, identity questions, and other adolescent challenges.',
  url: 'https://pathways-therapy.vercel.app/services/teen-therapy',
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
      name: 'Is teen therapy confidential from parents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with important exceptions. What teens share in therapy stays confidential unless there\'s a safety concern (self-harm, harm to others, abuse). This gives teens a safe space to be honest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What issues do you help teens with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We help teens with anxiety, depression, school stress, family dynamics, social challenges, identity questions, trauma, self-harm, and other adolescent challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my teen needs therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs include persistent sadness or anxiety, withdrawal from activities, changes in eating or sleeping, risky behaviors, self-harm, or just seeming "off" in ways you can\'t name.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my teen actually talk to a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our therapists are skilled at connecting with teens. Therapy is their space—they decide what to talk about. Most teens open up once they realize they won\'t be judged or lectured.',
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
    { '@type': 'ListItem', position: 3, name: 'Teen Therapy', item: 'https://pathways-therapy.vercel.app/services/teen-therapy' },
  ],
}

export default function TeenTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TeenTherapyContent />
    </>
  )
}
