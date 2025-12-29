import { MetadataRoute } from 'next'

/**
 * Robots.txt Generation
 * 
 * Controls how search engine crawlers access your site.
 */

export default function robots(): MetadataRoute.Robots {
  // TODO: Update to custom domain when available: pathwayswithintherapy.com
  const baseUrl = 'https://pathways-therapy.vercel.app'
  
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

