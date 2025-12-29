import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pathways-therapy.vercel.app'),
  title: {
    default: 'Pathways Within Therapy | Mental Health Services | Long Island NY',
    template: '%s | Pathways Within Therapy'
  },
  description: 'Licensed mental health therapy services across Long Island. Individual, couples, family therapy, EMDR, trauma treatment, and more. 5 locations + telehealth. Call (631) 371-3825.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pathways-therapy.vercel.app',
    siteName: 'Pathways Within Therapy',
    title: 'Mental Health Therapy | Long Island NY | Pathways Within',
    description: 'Licensed therapists providing individual, couples, family therapy, EMDR, and trauma treatment. 5 Long Island locations + telehealth.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pathways Within Therapy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathways Within Therapy | Long Island Mental Health',
    description: 'Licensed mental health therapy services. Individual, couples, family, EMDR, trauma.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pathways-therapy.vercel.app',
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
              "@type": "MedicalBusiness",
              "name": "Pathways Within Therapy",
              "url": "https://pathways-therapy.vercel.app",
              "logo": "https://pathways-therapy.vercel.app/logo.png",
              "description": "Licensed mental health therapy services across Long Island offering individual, couples, family therapy, EMDR, trauma treatment, and specialized care.",
              "telephone": "+1-631-371-3825",
              "email": "Welcome@pathwayswithin.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Long Island",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "State", "name": "New York" },
                { "@type": "State", "name": "New Jersey" },
                { "@type": "State", "name": "North Carolina" },
                { "@type": "State", "name": "Florida" }
              ],
              "medicalSpecialty": [
                "Psychiatry",
                "Psychology",
                "CounselingService"
              ],
              "availableService": [
                { "@type": "MedicalTherapy", "name": "Individual Therapy" },
                { "@type": "MedicalTherapy", "name": "Couples Therapy" },
                { "@type": "MedicalTherapy", "name": "Family Therapy" },
                { "@type": "MedicalTherapy", "name": "EMDR Therapy" },
                { "@type": "MedicalTherapy", "name": "Trauma Therapy" },
                { "@type": "MedicalTherapy", "name": "Child Therapy" },
                { "@type": "MedicalTherapy", "name": "Teen Therapy" },
                { "@type": "MedicalTherapy", "name": "Somatic Therapy" },
                { "@type": "MedicalTherapy", "name": "Hypnotherapy" }
              ],
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
                  "name": "What types of therapy do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer individual therapy, couples therapy, family therapy, child & teen therapy, EMDR therapy, trauma therapy, somatic therapy, and hypnotherapy. Each service is tailored to your unique needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you accept insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We accept most major insurance plans including Aetna, Cigna, UHC, Oxford, Humana, Medicare, and many more. Contact us to verify your specific coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer telehealth therapy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer secure telehealth sessions for clients in New York, New Jersey, North Carolina, and Florida. Meet with your therapist from the comfort of your home."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I book an appointment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book online through our secure portal or call (631) 371-3825. We offer appointments up to 11 PM with select clinicians."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I expect in my first session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your first session focuses on getting to know you, understanding your concerns, and developing a personalized treatment plan. Sessions are typically one hour."
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

