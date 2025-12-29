# PATHWAYS WITHIN: MASTER RULES
## Unified Guidelines — All Conflicts Resolved

**Version:** 2.0  
**Date:** December 27, 2025  
**Purpose:** Single source of truth resolving all document conflicts

---

## HIERARCHY OF INSTRUCTIONS (FINAL)

```
LEVEL 1: HIPAA/HEALTHCARE COMPLIANCE (ABSOLUTE - CANNOT OVERRIDE)
├── No PHI collection on public website
├── Consent checkboxes must be UNCHECKED by default
├── 988 crisis banner REQUIRED: Therapy + Wellness sites (NY State)
├── 988 crisis banner RECOMMENDED: Landing page
├── Ownership disclosure on all cross-promotional content
├── No health outcome claims without evidence
└── No diagnosis-suggestive language

LEVEL 2: PROJECT-SPECIFIC (Pathways Within)
├── design-system.md (colors, typography)
├── pathways-cursor-build-outline.md (site structure, content)
├── pathways-wellness-cursor-rules.md (wellness compliance)
└── pathways-compliant-cross-promotion.md (sister practice rules)

LEVEL 3: UX/UI/SEO STANDARDS
├── instructions.md (SEO, accessibility, performance)
├── 1440px max-width
├── WCAG 2.1 AA accessibility
├── Core Web Vitals targets
└── Schema.org structured data

LEVEL 4: IMPLEMENTATION JUDGMENT
└── Best practices for gaps not covered above
```

---

## 🚀 DEPLOYMENT ARCHITECTURE (RESOLVED)

### Decision: Vercel Deployment with Separate Sites

**Platform:** Vercel (serverless functions)

**Why Vercel:**
- Handles API routes without dedicated server
- Serverless functions for form submission
- Free tier sufficient for initial launch
- Easy preview deployments
- Edge caching for performance

### Site Deployment Strategy

**Decision:** Three SEPARATE deployments (not monorepo path-based routing)

```
┌─────────────────────────────────────────────────────────────────┐
│  LANDING PAGE                                                    │
│  Domain: pathwayswithin.com                                      │
│  Repository: pathways-within-landing                             │
│  Purpose: Entry point, pathway selection, quiz                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
        ┌─────────────────────┴─────────────────────┐
        ↓                                           ↓
┌───────────────────────────┐     ┌───────────────────────────┐
│  THERAPY SITE             │     │  WELLNESS SITE            │
│  Domain: TBD              │     │  Domain: TBD              │
│  Options:                 │     │  Options:                 │
│  - pathwaystherapy.com    │     │  - pathwayswellness.com   │
│  - therapy.pathways...    │     │  - wellness.pathways...   │
│  Repository: separate     │     │  Repository: separate     │
└───────────────────────────┘     └───────────────────────────┘
```

**Domain Options (Client Decision Needed):**
- Option A: `pathwaystherapy.com` / `pathwayswellness.com` (separate brands)
- Option B: `therapy.pathwayswithin.com` / `wellness.pathwayswithin.com` (subdomains)

### Shared Code Strategy

```
packages/
├── shared-ui/           # Button, Card, Input components
├── shared-layout/       # Header variants, Footer, Crisis Banner
├── shared-lib/          # Form submission, constants, types
└── shared-styles/       # CSS variables, Tailwind config
```

**Implementation:** npm workspaces or publish as private packages

---

## 🆘 CRISIS BANNER (RESOLVED)

### Decision: Required on Therapy + Wellness (NY State)

| Site | Requirement | Placement |
|------|-------------|-----------|
| **Therapy Site** | **REQUIRED** (NY State) | Top of every page |
| **Wellness Site** | **REQUIRED** (NY State) | Top of every page |
| **Landing Page** | Recommended | Top of page (current build has it) |

**Rationale:**
- NY State requires mental health resources on healthcare sites
- Therapy + Wellness are healthcare-adjacent
- Landing page is entry point, recommended but not mandated

**Implementation:**

```jsx
// Crisis Banner - use --crisis-bg from design system
<div className="bg-[#5B7B8A] text-white text-center text-sm py-2">
  <div className="max-w-[1440px] mx-auto px-4">
    Crisis support 24/7: 
    <a href="tel:988" className="underline ml-1">Call or text 988</a> | 
    <a href="https://988lifeline.org/chat" className="underline">Chat</a> | 
    <a href="sms:741741" className="underline">Text HOME to 741741</a>
  </div>
</div>
```

**Placement:** Fixed at TOP of page, above navigation

---

## 🌐 SPANISH TRANSLATION (RESOLVED)

### Decision: Phase 2 (Launch English-Only First)

**Phase 1 (Current):**
- English only
- Launch faster
- Validate content/UX with English users

**Phase 2 (Post-Launch):**
- Add Spanish translation
- Use `next-intl` or similar i18n library
- URL structure: `/es/servicios/...`
- Full translation (not partial pages)

**Rationale:**
- Faster time to market
- Translation requires content finalization first
- Can launch with "Español coming soon" notice if needed

---

## 🎨 DESIGN SYSTEM (RESOLVED)

**⚠️ SINGLE SOURCE: See `design-system.md` for all colors, fonts, and spacing.**

### Quick Reference

| Element | Value |
|---------|-------|
| **Hero Font** | Cormorant Garamond Italic |
| **Heading Font** | DM Serif Display |
| **Body Font** | DM Sans |
| **Background** | Warm cream (#FAF8F5) |
| **Text** | Soft charcoal (#3D3D3D) |
| **Therapy Accent** | Slate blue (#5B7B8A) |
| **Wellness Accent** | Sage green (#7A9B8A) |
| **Max-width** | 1440px |

**Rationale (2025 Best Practices):**
- Warm neutrals reduce anxiety, build trust
- Muted nature tones (slate blue, sage green) are calming
- Modern serifs + clean sans-serif = professional yet approachable
- Avoids clinical stark whites and overwhelming saturated colors

**⚠️ DO NOT use `instructions.md` healthcare colors (blues/purples) for this project.**

---

## 📝 FORM SUBMISSION (RESOLVED)

### Architecture: Vercel Serverless Functions

```
User submits form
       ↓
Vercel API Route (/api/contact)
       ↓
├── Validate data (no PHI)
├── Format email
├── Send via Resend/SendGrid
└── Return success/error

Future Phase 2:
       ↓
├── Also post to CRM
└── Store in database
```

### API Route Structure

```typescript
// /app/api/contact/route.ts

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate - no PHI
  if (containsPHI(data)) {
    return Response.json({ error: 'Invalid data' }, { status: 400 });
  }
  
  // Route to correct email
  const toEmail = data.practice === 'therapy' 
    ? 'welcome@pathwayswithin.com'
    : 'info@pathwayswithinwellness.com';
  
  // Send via email service
  await sendEmail({ to: toEmail, data });
  
  return Response.json({ success: true });
}
```

### Environment Variables

```env
# Email Service
RESEND_API_KEY=re_xxxx

# Destination Emails
THERAPY_CONTACT_EMAIL=welcome@pathwayswithin.com
WELLNESS_CONTACT_EMAIL=info@pathwayswithinwellness.com

# External Links
NEXT_PUBLIC_JANE_BOOKING_URL=https://pathwayswithintherapy.janeapp.com/
```

---

## 🧩 COMPONENT NAMING (RESOLVED)

**Decision:** Skip |UXUIDC| prefix for this project.

**Rationale:** 
- Build outline examples don't use it
- Adds unnecessary complexity
- Project-specific code, not reusable library

**File Structure:**
```
components/
├── ui/           # Button, Card, Input components
├── layout/       # Header, Footer, Navigation, CrisisBanner
├── forms/        # ContactForm, InquiryForm
├── booking/      # TherapyBookingCTA, WellnessBookingCTA
└── interactive/  # Quiz, Search
```

---

## 🔗 JANE INTEGRATION (RESOLVED)

**Decision:** Link to Jane portal (not embed widget) for Phase 1.

**Rationale:**
- pathways-wellness-cursor-rules.md says "NO embedded widgets" temporarily
- Simpler implementation
- Fewer dependencies
- Can add widget embed in Phase 2

**Therapy CTA:**
```jsx
<a 
  href={process.env.NEXT_PUBLIC_JANE_BOOKING_URL} 
  target="_blank"
  rel="noopener noreferrer"
>
  Book Online
</a>
```

**Wellness CTA:**
```jsx
<a href="tel:5163369209">(516) 336-9209</a>
// Plus inquiry form
```

---

## 📋 DATA COLLECTION (HIPAA Compliant)

### ALLOWED

- First name, Last name
- Email, Phone
- Service interest
- Preferred location
- Preferred timing
- How did you hear about us
- General message

### NEVER COLLECT

- ❌ Date of birth
- ❌ SSN
- ❌ Medical history
- ❌ Diagnoses
- ❌ Insurance details
- ❌ Any PHI

### Consent Checkboxes

**MUST be unchecked by default:**
```jsx
☐ I agree to the Privacy Policy and Terms of Service *
☐ I consent to receive appointment reminders via SMS
☐ I'd like to receive wellness tips and offers via email
```

---

## 🎬 ANIMATIONS (RESOLVED)

**Decision:** Use CSS animations for Phase 1, evaluate GSAP for Phase 2.

**Rationale:**
- CSS animations are performant, no JS dependency
- GSAP adds bundle size
- Current animations are simple (fade, slide)
- Can upgrade to GSAP later if complex animations needed

**Required animations:**
- Fade in on scroll (sections)
- Hover lift (cards)
- Smooth transitions (buttons, links)
- Progress bar (quiz)

---

## 🔍 SEO REQUIREMENTS

### Meta Tags (Required)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[155-160 chars]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[URL]">
```

### Open Graph (Required)
```html
<meta property="og:type" content="website">
<meta property="og:title" content="[60 chars max]">
<meta property="og:description" content="[155-160 chars]">
<meta property="og:image" content="[1200x630 image]">
```

### Schema.org (Required)
- Organization schema on homepage
- LocalBusiness schema for locations
- MedicalBusiness schema for therapy
- HealthAndBeautyBusiness schema for wellness

### NO meta keywords tag (obsolete)

---

## ♿ ACCESSIBILITY (WCAG 2.1 AA)

**Required:**
- 4.5:1 color contrast for text
- Keyboard navigation for all interactive elements
- Skip link to main content
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- ARIA labels for icons/buttons
- Focus indicators visible
- Reduced motion support (`prefers-reduced-motion`)

---

## 🔄 CROSS-PROMOTION (HIPAA Compliant)

**Allowed:**
- Ownership disclosure on all cross-promotional content
- Sister practice mention in footer/sidebar
- "Two Practices, One Philosophy" section on About pages
- Opt-in checkbox for cross-practice marketing

**Not Allowed:**
- ❌ Using visit data for cross-marketing
- ❌ Implying therapy + wellness "accelerates healing"
- ❌ Diagnosis-suggestive content
- ❌ Automated post-visit marketing sequences

**Required Disclosure:**
> "Pathways Within Therapy and Pathways Within Wellness operate under common ownership. Wellness services are separate from and do not substitute for mental health treatment."

---

## 🚨 MANDATORY PAGE BUILD CHECKLIST

**⚠️ FOLLOW THIS CHECKLIST WHEN BUILDING EVERY PAGE. NOT AFTER - DURING.**

### Quick Reference: What Each Page Type Needs

| Page Type | Crisis Banner | FAQ | Schema | Special Requirements |
|-----------|---------------|-----|--------|---------------------|
| **Landing** | Recommended | ✅ 5-6 | Organization, FAQ | Path finder quiz, both CTAs |
| **Therapy Home** | **Required** | ✅ 4-6 | MedicalBusiness, FAQ | Service overview, insurance info |
| **Therapy Service** | **Required** | ✅ 4-6 | Service, MedicalProcedure | What to expect, booking CTA |
| **Wellness Home** | **Required** | ✅ 4-6 | HealthAndBeautyBusiness, FAQ | Service menu, pricing info |
| **Wellness Service** | **Required** | ✅ 4-6 | Service, Product | Benefits, duration, price range |
| **Location** | **Required** | ✅ 3-4 | LocalBusiness, Place | Map, directions, hours, services at location |
| **Team/About** | **Required** | ✅ 3-4 | Person, Organization | Credentials, photos, specialties |
| **Contact** | **Required** | ✅ 2-3 | ContactPage | Form, phone, email, hours |
| **Legal** | Recommended | ❌ | WebPage | Plain language, last updated date |

### 1️⃣ LAYOUT STRUCTURE (Build First)
```
□ Crisis banner (REQUIRED: therapy/wellness, RECOMMENDED: landing)
□ Navigation with search icon
□ Skip link for accessibility
□ Footer with contact, links, disclosure
□ Max-width 1440px container
□ Alternating section backgrounds (cream → warm → stone → repeat)
□ Respect the fold (hero fills viewport with clear CTAs)
```

### 2️⃣ SEO & METADATA (In layout.tsx or page metadata)
```
□ Title tag (60 chars max, keyword-first)
□ Meta description (155-160 chars, include CTA)
□ Canonical URL
□ Open Graph: og:title, og:description, og:image (1200x630)
□ Twitter Card: summary_large_image
□ NO meta keywords tag (obsolete)
```

**Title & Description Patterns by Page Type:**

| Page Type | Title Pattern | Description Pattern |
|-----------|---------------|---------------------|
| **Homepage** | `Brand | Tagline` | What you offer + locations + CTA |
| **Therapy Service** | `[Service] Therapy | Long Island | Brand` | What it is + who it helps + book CTA |
| **Wellness Service** | `[Service] | [Location] | Brand` | Benefits + what to expect + book CTA |
| **Location** | `[City] [Service Type] | Brand` | Address + services offered + contact |
| **Team** | `Our Therapists & Providers | Brand` | Team overview + credentials + specialties |
| **Individual Provider** | `[Name], [Credentials] | Brand` | Bio summary + specialties + book CTA |
| **About** | `About Us | Brand` | Mission + differentiators + why choose us |
| **Contact** | `Contact Us | Brand` | How to reach + hours + response time |

**Examples:**
- ✅ `EMDR Therapy | Trauma Treatment Long Island | Pathways Within`
- ✅ `Massage Therapy Massapequa NY | Relaxation & Pain Relief | Pathways Wellness`
- ❌ `Welcome to Our Website` (too generic)
- ❌ `Services` (no keywords)

### 3️⃣ SCHEMA.ORG STRUCTURED DATA (In <head>)
```
□ Organization schema (on all pages)
□ Page-specific schema - SEE TABLE BELOW
```

**Schema by Page Type:**

| Page Type | Required Schema | Key Properties |
|-----------|-----------------|----------------|
| **Homepage** | Organization, FAQPage | name, url, contactPoint, mainEntity |
| **Service (Therapy)** | MedicalBusiness, Service, FAQPage | medicalSpecialty, availableService, provider |
| **Service (Wellness)** | HealthAndBeautyBusiness, Service, FAQPage | availableService, priceRange |
| **Location** | LocalBusiness, Place | address, geo (lat/lng), openingHours, telephone |
| **Team/Clinicians** | Person, MedicalBusiness | name, jobTitle, credential, worksFor |
| **About** | Organization, AboutPage | foundingDate, founder, description |
| **Contact** | ContactPage, Organization | contactPoint, email, telephone |
| **Blog/Article** | Article, BlogPosting | author, datePublished, headline |
| **Legal (Privacy/Terms)** | WebPage | name, description |

### 4️⃣ ACCESSIBILITY (WCAG 2.1 AA)
```
□ Skip link: <a href="#main" class="skip-link">Skip to main content</a>
□ Heading hierarchy: Only ONE h1, then h2 → h3 → h4
□ ARIA labels on all icon buttons
□ role attributes on interactive elements (listbox, radio, button)
□ aria-live regions for dynamic content (quiz results, search)
□ Focus indicators visible (:focus-visible)
□ Alt text on all images (or aria-label for decorative)
□ Color contrast 4.5:1 minimum
□ Reduced motion support (@media prefers-reduced-motion)
□ Keyboard navigable (Tab through all interactive elements)
```

### 5️⃣ CONTENT STRUCTURE
```
□ FAQ section with 4-6 relevant questions (use <dl>, <dt>, <dd>)
□ Clear CTAs above the fold
□ Service lists with semantic markup (<ul>, <li>)
□ Contact information with tel: and mailto: links
□ Location mentions with addresses
```

**FAQ Topics by Page Type:**

| Page Type | FAQ Questions Should Cover |
|-----------|---------------------------|
| **Homepage** | Service differences, insurance, booking process, telehealth |
| **Service Page** | What to expect, duration, who it's for, preparation, cost/insurance |
| **Location Page** | Parking, accessibility, nearby transit, office hours, walk-ins |
| **Team Page** | Credentials, specialties, how to request specific provider |
| **About Page** | Company history, philosophy, why choose us |
| **Contact Page** | Response time, emergency contact, appointment changes |

**CTA by Page Type:**

| Page Type | Primary CTA | Secondary CTA |
|-----------|-------------|---------------|
| **Homepage** | "Find Your Path" quiz | Explore Therapy / Explore Wellness |
| **Therapy Service** | "Book Consultation" (Jane link) | "Call (631) 371-3825" |
| **Wellness Service** | "Schedule Appointment" | "Call (516) 336-9209" |
| **Location** | "Get Directions" | "Book at This Location" |
| **Team** | "Book with [Name]" | "View All Providers" |
| **Contact** | "Send Message" form | Phone numbers |

### 6️⃣ INTERACTIVE ELEMENTS
```
□ Search functionality (or placeholder with modal)
□ Quiz/path finder (where applicable)
□ Form validation with clear error messages
□ Loading states for async actions
□ Success/error feedback (aria-live)
```

### 7️⃣ COMPLIANCE (HIPAA/FTC)
```
□ Crisis banner with 988 hotline
□ Ownership disclosure if cross-promotional
□ No PHI collection fields
□ Consent checkboxes UNCHECKED by default
□ No health outcome claims without evidence
□ No diagnosis-suggestive language
□ Privacy policy link in footer
```

### 8️⃣ DESIGN SYSTEM (per design-system.md)
```
□ Fonts loaded: Cormorant Garamond, DM Serif Display, DM Sans
□ Colors from palette (cream, warm, stone, therapy, wellness)
□ Consistent spacing (8px base scale)
□ Hover/focus states on interactive elements
□ Animations respect prefers-reduced-motion
```

### 9️⃣ AI/LLM READABILITY
```
□ Semantic HTML (article, section, nav, aside, main, footer)
□ Descriptive headings that summarize content
□ Structured data matches visible content
□ Clear content hierarchy (most important first)
□ FAQ content answers likely questions
```

---

## 📋 PAGE TEMPLATE STRUCTURE

**Every page should follow this structure:**

```tsx
// 1. Imports and metadata
export const metadata = { /* SEO metadata */ }

// 2. Schema.org JSON-LD in layout or page
<script type="application/ld+json">{/* schemas */}</script>

// 3. Page structure
<>
  {/* Skip link */}
  <a href="#main" className="skip-link">Skip to main content</a>
  
  {/* Crisis banner */}
  <CrisisBanner />
  
  {/* Navigation */}
  <Navigation />
  
  <main id="main">
    {/* Hero section - ABOVE THE FOLD */}
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">Page Title</h1>
      {/* Primary CTA visible without scrolling */}
    </section>
    
    {/* Content sections - ALTERNATING BACKGROUNDS */}
    <section className="bg-warm">...</section>
    <section className="bg-stone">...</section>
    <section className="bg-cream">...</section>
    
    {/* FAQ section - ALWAYS INCLUDE */}
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>
      <dl>...</dl>
    </section>
    
    {/* CTA section */}
    <section>...</section>
    
    {/* Disclosure */}
    <OwnershipDisclosure />
  </main>
  
  {/* Footer */}
  <Footer />
</>
```

---

## ✅ PRE-DEPLOY VERIFICATION

**Before deploying, verify:**

### Technical
- [ ] All checklist items above completed
- [ ] No console errors
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Mobile responsive (test 375px, 768px, 1440px)

### Content
- [ ] All placeholder text replaced
- [ ] All images have alt text
- [ ] Phone numbers correct and clickable
- [ ] Email addresses correct and clickable
- [ ] External links open in new tab with rel="noopener noreferrer"

### Legal
- [ ] Privacy Policy page exists and linked
- [ ] Terms of Service page exists and linked
- [ ] Crisis banner functional
- [ ] Ownership disclosure present

---

## 📊 IMPLEMENTATION PHASES

### Phase 1A: Foundation (Current)
- [x] Landing page
- [ ] Therapy site structure
- [ ] Wellness site structure
- [ ] Shared components

### Phase 1B: Content
- [ ] All therapy service pages
- [ ] All wellness service pages
- [ ] Location pages
- [ ] Team pages
- [ ] Legal pages

### Phase 2A: Interactivity
- [ ] Form submission API
- [ ] Search functionality
- [ ] Service finder quizzes
- [ ] Spanish translation

### Phase 2B: Backend
- [ ] Admin dashboard
- [ ] CRM integration
- [ ] Analytics
- [ ] Content management

---

*This document supersedes conflicting instructions in other files.*
*Version 2.0 - Updated December 27, 2025*
