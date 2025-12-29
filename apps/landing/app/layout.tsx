import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pathwayswithin.com'),
  title: {
    default: 'Pathways Within | Mental Health Therapy & Wellness Services | Long Island NY',
    template: '%s | Pathways Within'
  },
  description: 'Choose your path to healing. Pathways Within offers comprehensive mental health therapy (individual, couples, EMDR, trauma) and wellness spa services (massage, acupuncture, IV therapy) across 5 Long Island locations. Take our free Path Finder quiz.',
  keywords: ['mental health therapy Long Island', 'wellness spa NY', 'EMDR therapy', 'couples therapy', 'massage therapy', 'acupuncture Long Island', 'holistic healing'],
  authors: [{ name: 'Pathways Within' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pathwayswithin.com',
    siteName: 'Pathways Within',
    title: 'Choose Your Path | Therapy & Wellness Services',
    description: 'Take our free Path Finder quiz to discover if therapy, wellness, or both is right for you. 5 Long Island locations + telehealth.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pathways Within - Choose Your Path to Healing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choose Your Path | Pathways Within',
    description: 'Mental health therapy & wellness spa services. Take our Path Finder quiz. Long Island NY.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pathwayswithin.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pathways Within",
              "url": "https://pathwayswithin.com",
              "logo": "https://pathwayswithin.com/logo.png",
              "description": "Comprehensive mental health therapy and wellness spa services across Long Island offering a 360º approach to healing and transformation.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Long Island",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-631-371-3825",
                  "contactType": "Therapy Appointments",
                  "areaServed": "US",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-516-336-9209",
                  "contactType": "Wellness Appointments",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://instagram.com/pathwayswithin",
                "https://facebook.com/pathwayswithin"
              ]
            })
          }}
        />
        {/* MedicalBusiness Schema for Therapy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Pathways Within Therapy",
              "description": "Licensed mental health therapy services including individual, couples, family therapy, EMDR, trauma treatment, and child/teen therapy.",
              "url": "https://pathwayswithin.com/therapy",
              "telephone": "+1-631-371-3825",
              "priceRange": "$$",
              "areaServed": {
                "@type": "State",
                "name": "New York"
              },
              "medicalSpecialty": [
                "Psychiatry",
                "Psychology"
              ],
              "availableService": [
                { "@type": "MedicalTherapy", "name": "Individual Therapy" },
                { "@type": "MedicalTherapy", "name": "Couples Therapy" },
                { "@type": "MedicalTherapy", "name": "Family Therapy" },
                { "@type": "MedicalTherapy", "name": "EMDR Therapy" },
                { "@type": "MedicalTherapy", "name": "Trauma Therapy" },
                { "@type": "MedicalTherapy", "name": "Child & Teen Therapy" }
              ]
            })
          }}
        />
        {/* HealthAndBeautyBusiness Schema for Wellness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Pathways Within Wellness",
              "description": "Holistic wellness and spa services including massage therapy, acupuncture, IV vitamin infusion, and aesthetic treatments.",
              "url": "https://pathwayswithin.com/wellness",
              "telephone": "+1-516-336-9209",
              "priceRange": "$$",
              "areaServed": {
                "@type": "State",
                "name": "New York"
              }
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
                  "name": "How do I know if I need therapy or wellness services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you're dealing with emotional challenges, relationship issues, anxiety, depression, or trauma, our therapy services can help. If you're looking for physical relaxation, stress relief, pain management, or aesthetic treatments, our wellness services are ideal. Many clients benefit from both."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you accept insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our therapy practice accepts most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and United Healthcare. Wellness services are typically self-pay."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between Pathways Within Therapy and Wellness?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathways Within Therapy offers licensed mental health services including individual, couples, family therapy, EMDR, and trauma treatment. Pathways Within Wellness provides spa and holistic services like massage, acupuncture, IV therapy, and aesthetic treatments. Both operate under common ownership with a shared philosophy of whole-person care."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I book appointments online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Therapy appointments can be booked through our online portal or by calling (631) 371-3825. Wellness appointments can be scheduled by calling (516) 336-9209."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer virtual/telehealth sessions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer telehealth therapy sessions for clients throughout New York State. This allows you to receive quality mental health care from the comfort of your home."
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
