import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pathwayswellness.com'),
  title: {
    default: 'Pathways Within Wellness | Spa & Holistic Services | Long Island NY',
    template: '%s | Pathways Within Wellness'
  },
  description: 'Premium spa and wellness services on Long Island. Massage, acupuncture, facials, IV therapy, body sculpting, and more. Massapequa & Garden City. Call (516) 336-9209.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pathwayswellness.com',
    siteName: 'Pathways Within Wellness',
    title: 'Spa & Wellness Services | Long Island NY | Pathways Within',
    description: 'Premium massage, acupuncture, facials, IV therapy, body sculpting, and holistic wellness. Massapequa & Garden City locations.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pathways Within Wellness' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathways Within Wellness | Long Island Spa & Wellness',
    description: 'Premium spa services: massage, acupuncture, facials, IV therapy, body sculpting.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pathwayswellness.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Organization Schema - HealthAndBeautyBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Pathways Within Wellness",
              "url": "https://pathwayswellness.com",
              "logo": "https://pathwayswellness.com/logo.png",
              "description": "Premium spa and wellness services including massage, acupuncture, facials, IV vitamin infusion, body sculpting, and holistic wellness treatments.",
              "telephone": "+1-516-336-9209",
              "email": "info@pathwayswithinwellness.com",
              "priceRange": "$$-$$$",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "4160 Merrick Rd",
                  "addressLocality": "Massapequa",
                  "addressRegion": "NY",
                  "postalCode": "11758",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "647 Franklin Ave, Lower Level",
                  "addressLocality": "Garden City",
                  "addressRegion": "NY",
                  "postalCode": "11530",
                  "addressCountry": "US"
                }
              ],
              "areaServed": {
                "@type": "State",
                "name": "New York"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wellness Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Massage Therapy" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Acupuncture" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "HydraFacial" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "IV Vitamin Infusion" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Genius RF Microneedling" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Body Sculpting" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Energy Work & Reiki" }
                  }
                ]
              },
              "sameAs": [
                "https://instagram.com/pathwayswithin",
                "https://facebook.com/pathwayswithin"
              ]
            })
          }}
        />
        
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What wellness services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer massage therapy, acupuncture, facials (HydraFacial, PRP, RF microneedling), IV vitamin infusion, body sculpting, hair restoration, teeth whitening, energy work, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where are your wellness locations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have two Long Island locations: Massapequa (4160 Merrick Rd) and Garden City (647 Franklin Ave, Lower Level). Call (516) 336-9209 to book."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you accept insurance for wellness services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wellness services are typically self-pay. We offer flexible payment options through Cherry financing. Contact us for specific pricing and payment plans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the connection between Pathways Within Therapy and Wellness?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathways Within Therapy and Pathways Within Wellness operate under common ownership with a shared philosophy of whole-person care. Wellness services are separate from and do not substitute for mental health treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I book a wellness appointment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Call us at (516) 336-9209 to schedule your appointment. We recommend booking in advance for popular services like massage and facials."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

