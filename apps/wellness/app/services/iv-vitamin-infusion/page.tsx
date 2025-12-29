import { Metadata } from 'next'
import IVVitaminInfusionContent from './content'

export const metadata: Metadata = {
  title: 'IV Vitamin Infusion | Pathways Within Wellness',
  description: 'IV vitamin therapy on Long Island. Myers Cocktail, immune boost, beauty drip, athletic recovery. 100% absorption. Massapequa & Garden City. Call (516) 336-9209.',
  alternates: { canonical: 'https://wellness-lac.vercel.app/services/iv-vitamin-infusion' },
  openGraph: {
    title: 'IV Vitamin Infusion | Long Island | Pathways Within Wellness',
    description: 'IV vitamin therapy for energy, immunity, beauty, and recovery. 100% nutrient absorption.',
    url: 'https://wellness-lac.vercel.app/services/iv-vitamin-infusion',
    type: 'website',
    images: [{ url: '/og-iv-therapy.jpg', width: 1200, height: 630, alt: 'IV Vitamin Infusion at Pathways Within Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'IV Vitamin Infusion | Pathways Within Wellness', description: 'IV vitamin therapy for energy, immunity, and wellness.' },
}

const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'IV Vitamin Therapy', name: 'IV Vitamin Infusion', description: 'IV vitamin infusion therapy delivering nutrients directly to the bloodstream for 100% absorption. Services include Myers Cocktail, immune boost, beauty drip, and athletic recovery formulas administered by registered nurses.', url: 'https://wellness-lac.vercel.app/services/iv-vitamin-infusion', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Pathways Within Wellness', telephone: '+1-516-336-9209', url: 'https://wellness-lac.vercel.app' } }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Why choose IV vitamin therapy over oral supplements?', acceptedAnswer: { '@type': 'Answer', text: 'IV therapy delivers nutrients directly to your bloodstream, bypassing the digestive system for 100% absorption. This means faster, more effective results compared to oral supplements which may only absorb 20-50%.' }}, { '@type': 'Question', name: 'What IV formulas do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer Myers Cocktail for overall wellness, Immune Boost with high-dose Vitamin C and zinc, Beauty Drip with biotin and glutathione, and Athletic Recovery with amino acids and electrolytes.' }}]}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wellness-lac.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://wellness-lac.vercel.app/services' }, { '@type': 'ListItem', position: 3, name: 'IV Vitamin Infusion', item: 'https://wellness-lac.vercel.app/services/iv-vitamin-infusion' }]}

export default function IVVitaminInfusionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IVVitaminInfusionContent />
    </>
  )
}
