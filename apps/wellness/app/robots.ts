import { MetadataRoute } from 'next'

/**
 * Robots.txt Generation - Wellness Site
 * 
 * Controls how search engine crawlers access your site.
 */

export default function robots(): MetadataRoute.Robots {
  // TODO: Update to custom domain when available: pathwayswithinwellness.com
  const baseUrl = 'https://wellness-lac.vercel.app'
  
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

