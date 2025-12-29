import { Metadata } from 'next'
import ServicesContent from './content'

export const metadata: Metadata = {
  title: 'Therapy Services | Pathways Within Therapy',
  description: 'Explore our therapy services: individual, couples, child, teen, trauma, EMDR, somatic therapy, hypnotherapy, and specialized care for veterans. Long Island + telehealth.',
  alternates: { canonical: 'https://pathways-therapy.vercel.app/services' },
  openGraph: {
    title: 'Therapy Services | Pathways Within Therapy',
    description: 'Individual, couples, trauma, EMDR, child & teen therapy and more. Find the right therapist for your needs.',
    url: 'https://pathways-therapy.vercel.app/services',
    type: 'website',
    images: [{ url: '/og-services.jpg', width: 1200, height: 630, alt: 'Pathways Within Therapy Services' }],
  },
  twitter: { card: 'summary_large_image', title: 'Therapy Services | Pathways Within', description: 'Explore our full range of therapy services on Long Island.' },
}

const servicesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pathways Within Therapy Services',
  description: 'Complete list of mental health therapy services offered by Pathways Within Therapy on Long Island and via telehealth.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Individual Therapy', url: 'https://pathways-therapy.vercel.app/services/individual-therapy' },
    { '@type': 'ListItem', position: 2, name: 'Child Therapy', url: 'https://pathways-therapy.vercel.app/services/child-therapy' },
    { '@type': 'ListItem', position: 3, name: 'Teen Therapy', url: 'https://pathways-therapy.vercel.app/services/teen-therapy' },
    { '@type': 'ListItem', position: 4, name: 'Couples Therapy', url: 'https://pathways-therapy.vercel.app/services/couples-therapy' },
    { '@type': 'ListItem', position: 5, name: 'Trauma Therapy', url: 'https://pathways-therapy.vercel.app/services/trauma-therapy' },
    { '@type': 'ListItem', position: 6, name: 'EMDR Therapy', url: 'https://pathways-therapy.vercel.app/services/emdr-therapy' },
    { '@type': 'ListItem', position: 7, name: 'Somatic Therapy', url: 'https://pathways-therapy.vercel.app/services/somatic-therapy' },
    { '@type': 'ListItem', position: 8, name: 'Hypnotherapy', url: 'https://pathways-therapy.vercel.app/services/hypnotherapy' },
    { '@type': 'ListItem', position: 9, name: 'Veterans & First Responders', url: 'https://pathways-therapy.vercel.app/services/veterans-first-responders' },
    { '@type': 'ListItem', position: 10, name: 'Weight Loss Surgery Support', url: 'https://pathways-therapy.vercel.app/services/weight-loss-surgery-support' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathways-therapy.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://pathways-therapy.vercel.app/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCollectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesContent />
    </>
  )
}
