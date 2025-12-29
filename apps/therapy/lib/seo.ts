import { Metadata } from 'next'

/**
 * SEO & Metadata Utilities for Pathways Within Therapy
 * 
 * Use these helpers to ensure consistent, compliant SEO across all pages.
 */

const BASE_URL = 'https://pathwayswithintherapy.com'
const SITE_NAME = 'Pathways Within Therapy'
const DEFAULT_IMAGE = '/og-image.jpg'
const PHONE = '(631) 371-3825'

interface PageSEOConfig {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}

/**
 * Generate page metadata for Next.js
 */
export function generatePageMetadata(config: PageSEOConfig): Metadata {
  const { title, description, path, image = DEFAULT_IMAGE, keywords = [] } = config
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  }
}

/**
 * Service Schema generator for therapy services
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.url}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: SITE_NAME,
      telephone: '+1-631-371-3825',
      url: BASE_URL,
    },
    medicalSpecialty: service.category || 'Psychiatry',
    availableService: {
      '@type': 'MedicalTherapy',
      name: service.name,
    },
  }
}

/**
 * FAQ Schema generator
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Breadcrumb Schema generator
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

/**
 * LocalBusiness Schema for location pages
 */
export function generateLocationSchema(location: {
  name: string
  address: string
  city: string
  state: string
  zip: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${SITE_NAME} - ${location.name}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: 'US',
    },
    telephone: '+1-631-371-3825',
    url: BASE_URL,
  }
}

// Pre-defined service metadata for quick use
export const SERVICE_METADATA = {
  'individual-therapy': {
    title: 'Individual Therapy',
    description: 'Personalized one-on-one therapy on Long Island. Our licensed therapists offer CBT, EMDR, Somatic Therapy, and more to help you achieve your mental health goals.',
    keywords: ['individual therapy', 'one-on-one counseling', 'CBT', 'Long Island therapist', 'mental health therapy'],
  },
  'couples-therapy': {
    title: 'Couples Therapy',
    description: 'Rebuild connection and strengthen your relationship with couples therapy on Long Island. Gottman Method trained therapists. In-person and telehealth available.',
    keywords: ['couples therapy', 'marriage counseling', 'Gottman Method', 'relationship therapy', 'Long Island couples therapist'],
  },
  'trauma-therapy': {
    title: 'Trauma Therapy',
    description: 'Specialized trauma therapy on Long Island. EMDR, CPT, Somatic Therapy, and evidence-based approaches to help you heal from PTSD and past trauma.',
    keywords: ['trauma therapy', 'PTSD treatment', 'EMDR', 'trauma counseling', 'Long Island trauma therapist'],
  },
  'emdr-therapy': {
    title: 'EMDR Therapy',
    description: 'EMDR (Eye Movement Desensitization and Reprocessing) therapy on Long Island. Effective, evidence-based treatment for trauma, anxiety, and PTSD.',
    keywords: ['EMDR therapy', 'EMDR treatment', 'trauma processing', 'Long Island EMDR', 'eye movement therapy'],
  },
  'child-therapy': {
    title: 'Child Therapy',
    description: 'Specialized therapy for children ages 5-12 on Long Island. Play therapy, behavioral support, and family involvement to help your child thrive.',
    keywords: ['child therapy', 'kids counseling', 'play therapy', 'child psychologist Long Island', 'pediatric mental health'],
  },
  'teen-therapy': {
    title: 'Teen Therapy',
    description: 'Adolescent therapy for ages 13-18 on Long Island. Address anxiety, depression, academic stress, and identity issues with age-appropriate support.',
    keywords: ['teen therapy', 'adolescent counseling', 'teenage mental health', 'teen therapist Long Island', 'high school counseling'],
  },
  'somatic-therapy': {
    title: 'Somatic Therapy',
    description: 'Body-centered somatic therapy on Long Island. Release trauma stored in the body, regulate your nervous system, and reconnect with yourself.',
    keywords: ['somatic therapy', 'body-based therapy', 'somatic experiencing', 'nervous system regulation', 'embodiment therapy'],
  },
  'hypnotherapy': {
    title: 'Hypnotherapy',
    description: 'Clinical hypnotherapy on Long Island. Access your subconscious mind to address habits, anxiety, trauma, and personal growth goals.',
    keywords: ['hypnotherapy', 'clinical hypnosis', 'hypnotherapy Long Island', 'subconscious therapy', 'therapeutic hypnosis'],
  },
  'veterans-first-responders': {
    title: 'Veterans & First Responders Therapy',
    description: 'Specialized mental health support for veterans and first responders on Long Island. PTSD, trauma, transition support, and peer-informed care.',
    keywords: ['veteran therapy', 'first responder counseling', 'PTSD veterans', 'military mental health', 'first responder mental health'],
  },
  'weight-loss-surgery-support': {
    title: 'Weight Loss Surgery Support',
    description: 'Pre and post-operative psychological support for bariatric surgery patients on Long Island. Required evaluations and ongoing emotional support.',
    keywords: ['bariatric psychology', 'weight loss surgery counseling', 'gastric bypass therapy', 'pre-surgery evaluation', 'bariatric mental health'],
  },
}

