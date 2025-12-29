# SEO, Accessibility & UX Audit Report

**Generated:** December 2025  
**Sites:** Pathways Within Therapy, Pathways Within Wellness

---

## ✅ COMPLETED IMPROVEMENTS

### 1. Global SEO (Both Sites)
- [x] Site-wide metadata in `layout.tsx` (title, description, OG, Twitter)
- [x] Organization Schema.org (`MedicalBusiness` / `HealthAndBeautyBusiness`)
- [x] FAQ Schema in layout for common questions
- [x] Canonical URLs
- [x] Robot directives (index, follow)
- [x] Social media links in schema

### 2. Accessibility (Both Sites)
- [x] Skip links on all pages (`Skip to main content`)
- [x] `lang="en"` on HTML element
- [x] Crisis banner with proper `role="banner"`
- [x] Navigation with `aria-label="Main navigation"`
- [x] Footer with `role="contentinfo"`
- [x] Ownership disclosure in footer

### 3. Sample Complete Page: `/services/trauma-therapy`
- [x] Page-specific metadata (title, description, keywords, canonical, OG, Twitter)
- [x] Service Schema.org (`MedicalTherapy`)
- [x] FAQ Schema for page-specific FAQs
- [x] Breadcrumb Schema
- [x] Proper heading hierarchy (single H1, H2s for sections, H3s for subsections)
- [x] ARIA labels on all interactive elements
- [x] Semantic HTML (`<article>`, `<section>`, `<nav>`, `<main>`)
- [x] Breadcrumb navigation with `aria-label`
- [x] Mobile sticky CTA for frictionless contact
- [x] Multiple contact CTAs (hero, mid-page, bottom)
- [x] Related services for internal linking

---

## 📋 PAGE-BY-PAGE CHECKLIST

Apply this checklist to each service page:

### SEO Requirements
```
□ Page-specific metadata export
  - title (50-60 chars)
  - description (150-160 chars)
  - keywords (5-10 relevant terms)
  - canonical URL
  - Open Graph (title, description, image, url)
  - Twitter card

□ Schema.org Structured Data
  - Service/MedicalTherapy schema (therapy) OR Service schema (wellness)
  - FAQ schema (if page has FAQ section)
  - Breadcrumb schema

□ Internal Linking
  - Related services section
  - Links to contact/booking
  - Breadcrumb navigation
```

### Accessibility Requirements (WCAG 2.1 AA)
```
□ Skip link: <a href="#main" className="skip-link">Skip to main content</a>
□ Single H1 per page (page title)
□ Proper heading hierarchy (H1 → H2 → H3, no skipping)
□ main element with id="main" and role="main"
□ All sections have aria-labelledby pointing to their heading
□ Images have alt text (or aria-hidden if decorative)
□ All buttons/links have accessible names (aria-label if icon-only)
□ Focus indicators visible (handled in CSS)
□ Color contrast 4.5:1 minimum
□ Lists use proper <ul>/<ol> with <li>
□ Forms have <label> for every input
```

### UX/UI Requirements
```
□ Crisis banner (therapy site required, wellness recommended)
□ Clear primary CTA above the fold
□ Multiple contact touchpoints:
  - Hero section CTA
  - Mid-page CTA (after key content)
  - Bottom CTA section
  - Sticky mobile CTA (appears on scroll)
□ Phone number clickable (tel: link)
□ Booking button visible
□ Breadcrumb navigation
□ Related services for exploration
□ FAQ section (4-6 questions)
```

### Contact Friction Reduction
```
□ Phone number in header/nav
□ "Book Consultation" button prominently placed
□ Phone number in footer
□ Sticky CTA on mobile (after 400px scroll)
□ Contact page linked in nav
□ Multiple CTA buttons (not just one)
```

---

## 🔧 IMPLEMENTATION TEMPLATES

### Service Page Metadata (therapy)
```typescript
export const metadata: Metadata = {
  title: 'Service Name | Pathways Within Therapy',
  description: 'Brief description under 160 chars including location and key benefits.',
  keywords: 'keyword1, keyword2, Long Island, therapy',
  alternates: {
    canonical: 'https://pathwayswithintherapy.com/services/service-slug',
  },
  openGraph: {
    title: 'Service Name | Pathways Within Therapy',
    description: 'Same or similar to meta description',
    url: 'https://pathwayswithintherapy.com/services/service-slug',
    type: 'website',
    images: [{ url: '/og-service-name.jpg', width: 1200, height: 630, alt: 'Service Name' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Name | Long Island | Pathways Within',
    description: 'Short description for Twitter',
  },
}
```

### Service Schema
```typescript
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy', // or 'Service' for wellness
  name: 'Service Name',
  description: 'Full description of the service',
  url: 'https://pathwayswithintherapy.com/services/service-slug',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Pathways Within Therapy',
    telephone: '+1-631-371-3825',
    url: 'https://pathwayswithintherapy.com',
  },
  medicalSpecialty: 'Psychiatry',
}
```

### FAQ Schema
```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Question text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer text.',
      },
    },
    // ... more questions
  ],
}
```

### Sticky CTA Component (already created)
```typescript
import { StickyCTA } from '@/components/StickyCTA'
// Add at bottom of page: <StickyCTA />
```

---

## 📊 PAGES STATUS

### Therapy Site (`/apps/therapy`)

| Page | Metadata | Schema | A11y | CTAs | Status |
|------|----------|--------|------|------|--------|
| `/` (home) | ✅ | ✅ (layout) | ✅ | ✅ | Complete |
| `/services` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/individual-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/couples-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/trauma-therapy` | ✅ | ✅ | ✅ | ✅ | **Complete** |
| `/services/emdr-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/child-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/teen-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/somatic-therapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/hypnotherapy` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/veterans-first-responders` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/weight-loss-surgery-support` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/contact` | ⚠️ | ❌ | ✅ | ✅ | Partial |
| `/about` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/faq` | ⚠️ | ⚠️ | ⚠️ | ⚠️ | Needs update |
| `/locations` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |

### Wellness Site (`/apps/wellness`)

| Page | Metadata | Schema | A11y | CTAs | Status |
|------|----------|--------|------|------|--------|
| `/` (home) | ✅ | ✅ (layout) | ⚠️ | ⚠️ | Partial |
| `/services` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/massage` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/acupuncture` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/services/hydrafacial` | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| (... 12 more service pages ...) | ⚠️ | ❌ | ⚠️ | ⚠️ | Needs update |
| `/contact` | ✅ | ❌ | ✅ | ✅ | Partial |

---

## 🎯 PRIORITY ACTIONS

### High Priority (Do First)
1. Apply trauma-therapy template to: `individual-therapy`, `couples-therapy`, `emdr-therapy`
2. Add Service schema to all service pages
3. Add mobile sticky CTA to all service pages

### Medium Priority
4. Add FAQ schema to pages with FAQ sections
5. Improve heading hierarchy across all pages
6. Add breadcrumb schema to all service pages

### Lower Priority
7. Create custom OG images for each service
8. Add LocalBusiness schema to location pages
9. Add team member schema (Person) to team page

---

## 📝 NOTES

### AI Readability
- All pages use semantic HTML
- Content structured with clear headings
- Lists used for scannable content
- FAQ sections with question/answer format
- Schema.org markup helps AI understand content

### Google Search Optimization
- Unique titles and descriptions per page
- Local keywords (Long Island, NY)
- Service-specific keywords
- Internal linking between related services
- Breadcrumb navigation for site structure

### Frictionless Contact
The trauma-therapy page demonstrates best practices:
- CTA in hero section (above fold)
- Phone number prominently displayed
- Multiple "Book" and "Call" buttons
- Sticky mobile CTA appears after scroll
- Contact info in footer
- Related services for continued exploration

---

*This audit should be reviewed and updated as pages are improved.*

