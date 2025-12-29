import { MetadataRoute } from 'next'

/**
 * Robots.txt Generation - Wellness Site
 * 
 * Controls how search engine crawlers access your site.
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pathwayswithinwellness.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

