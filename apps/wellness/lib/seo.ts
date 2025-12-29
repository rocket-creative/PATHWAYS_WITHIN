import { Metadata } from 'next'

/**
 * SEO & Metadata Utilities for Pathways Within Wellness
 * 
 * Use these helpers to ensure consistent, compliant SEO across all pages.
 */

const BASE_URL = 'https://pathwayswithinwellness.com'
const SITE_NAME = 'Pathways Within Wellness'
const DEFAULT_IMAGE = '/og-image.jpg'
const PHONE = '(516) 336-9209'

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
 * Service Schema generator for wellness services
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceType || 'HealthAndBeautyBusiness',
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.url}`,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: SITE_NAME,
      telephone: '+1-516-336-9209',
      url: BASE_URL,
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
    '@type': 'HealthAndBeautyBusiness',
    name: `${SITE_NAME} - ${location.name}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: 'US',
    },
    telephone: '+1-516-336-9209',
    url: BASE_URL,
  }
}

// Pre-defined service metadata for quick use
export const SERVICE_METADATA = {
  'massage': {
    title: 'Massage Therapy',
    description: 'Professional massage therapy on Long Island. Swedish, deep tissue, sports, hot stone, and pregnancy massage. Certified therapists in Massapequa & Garden City.',
    keywords: ['massage therapy', 'deep tissue massage', 'Swedish massage', 'sports massage', 'Long Island massage'],
  },
  'acupuncture': {
    title: 'Acupuncture',
    description: 'Licensed acupuncture on Long Island for pain relief, stress, anxiety, sleep, and wellness. Traditional Chinese medicine in Massapequa & Garden City.',
    keywords: ['acupuncture', 'pain relief', 'stress relief', 'TCM', 'Long Island acupuncture'],
  },
  'hydrafacial': {
    title: 'HydraFacial',
    description: 'HydraFacial treatments on Long Island. Deep cleansing, exfoliation, extraction, and hydration for glowing skin. No downtime.',
    keywords: ['HydraFacial', 'facial treatment', 'skin hydration', 'Long Island spa'],
  },
  'iv-vitamin-infusion': {
    title: 'IV Vitamin Infusion',
    description: 'IV vitamin infusion therapy on Long Island. Boost energy, immunity, and hydration with direct nutrient delivery.',
    keywords: ['IV therapy', 'vitamin infusion', 'Myers cocktail', 'hydration therapy', 'Long Island IV'],
  },
  'facials-skincare': {
    title: 'Facials & Skincare',
    description: 'Professional facials and skincare treatments on Long Island. Customized solutions for all skin types and concerns.',
    keywords: ['facials', 'skincare', 'anti-aging', 'acne treatment', 'Long Island esthetician'],
  },
  'body-sculpting': {
    title: 'Body Sculpting',
    description: 'Non-invasive body sculpting on Long Island. Fat reduction, skin tightening, and body contouring without surgery.',
    keywords: ['body sculpting', 'body contouring', 'fat reduction', 'skin tightening', 'Long Island'],
  },
  'chemical-peels': {
    title: 'Chemical Peels',
    description: 'Professional chemical peels on Long Island. Exfoliate and renew skin for a smoother, brighter complexion.',
    keywords: ['chemical peel', 'skin exfoliation', 'skin renewal', 'Long Island spa'],
  },
  'energy-work': {
    title: 'Energy Work & Reiki',
    description: 'Reiki and energy work on Long Island. Holistic healing for stress reduction, emotional balance, and spiritual well-being.',
    keywords: ['Reiki', 'energy healing', 'holistic wellness', 'chakra balancing', 'Long Island'],
  },
  'rf-microneedling': {
    title: 'RF Microneedling',
    description: 'RF Microneedling on Long Island. Advanced skin tightening and rejuvenation with radiofrequency technology.',
    keywords: ['RF microneedling', 'skin tightening', 'collagen induction', 'Long Island aesthetic'],
  },
  'prp-vampire-facial': {
    title: 'PRP Vampire Facial',
    description: 'PRP Vampire Facial on Long Island. Natural skin rejuvenation using your own platelet-rich plasma.',
    keywords: ['PRP facial', 'vampire facial', 'platelet rich plasma', 'skin rejuvenation', 'Long Island'],
  },
  'laser-hair-removal': {
    title: 'Laser Hair Removal',
    description: 'Laser hair removal on Long Island. Permanent hair reduction for smooth, hair-free skin.',
    keywords: ['laser hair removal', 'permanent hair reduction', 'Long Island laser'],
  },
  'hair-restoration': {
    title: 'Hair Restoration',
    description: 'Hair restoration treatments on Long Island. PRP and microneedling for natural hair growth.',
    keywords: ['hair restoration', 'PRP hair', 'hair loss treatment', 'Long Island'],
  },
  'permanent-makeup': {
    title: 'Permanent Makeup',
    description: 'Permanent makeup services on Long Island. Microblading, lip blushing, and eyeliner for effortless beauty.',
    keywords: ['permanent makeup', 'microblading', 'lip blushing', 'Long Island PMU'],
  },
  'pain-management': {
    title: 'Pain Management',
    description: 'Holistic pain management on Long Island. Acupuncture, massage, and energy work for chronic pain relief.',
    keywords: ['pain management', 'chronic pain', 'holistic pain relief', 'Long Island'],
  },
}

