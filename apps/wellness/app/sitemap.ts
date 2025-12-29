import { MetadataRoute } from 'next'

/**
 * Dynamic Sitemap Generation - Wellness Site
 * 
 * This file automatically generates sitemap.xml for search engines.
 * Add new pages here as they are created.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pathwayswithinwellness.com'
  const currentDate = new Date().toISOString()

  // Core pages
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/first-visit', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/find-your-service', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/glossary', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/payment-plans', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Service pages - high priority for SEO
  const servicePages = [
    '/services/massage',
    '/services/acupuncture',
    '/services/energy-work',
    '/services/facials-skincare',
    '/services/hydrafacial',
    '/services/rf-microneedling',
    '/services/prp-vampire-facial',
    '/services/chemical-peels',
    '/services/iv-vitamin-infusion',
    '/services/body-sculpting',
    '/services/laser-hair-removal',
    '/services/teeth-whitening',
    '/services/permanent-makeup',
    '/services/hair-restoration',
    '/services/pain-management',
  ]

  // Legal pages
  const legalPages = [
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/accessibility', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return [
    // Core pages
    ...corePages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    
    // Service pages
    ...servicePages.map(url => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    
    // Legal pages
    ...legalPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}

