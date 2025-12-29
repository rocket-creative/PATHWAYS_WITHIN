import { MetadataRoute } from 'next'

/**
 * Dynamic Sitemap Generation
 * 
 * This file automatically generates sitemap.xml for search engines.
 * Add new pages here as they are created.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Update to custom domain when available: pathwayswithintherapy.com
  const baseUrl = 'https://pathways-therapy.vercel.app'
  const currentDate = new Date().toISOString()

  // Core pages
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/team', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/first-visit', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/find-your-therapy', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/glossary', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/news', priority: 0.6, changeFrequency: 'weekly' as const },
  ]

  // Service pages - high priority for SEO
  const servicePages = [
    '/services/individual-therapy',
    '/services/couples-therapy',
    '/services/child-therapy',
    '/services/teen-therapy',
    '/services/trauma-therapy',
    '/services/emdr-therapy',
    '/services/somatic-therapy',
    '/services/hypnotherapy',
    '/services/veterans-first-responders',
    '/services/weight-loss-surgery-support',
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

