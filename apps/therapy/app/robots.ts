import { MetadataRoute } from 'next'

/**
 * Robots.txt Generation
 * 
 * Controls how search engine crawlers access your site.
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pathwayswithintherapy.com'
  
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

