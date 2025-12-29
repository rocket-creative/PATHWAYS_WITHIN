# PATHWAYS WITHIN: COMPREHENSIVE CURSOR BUILD OUTLINE
## Complete Content Inventory, Gap Analysis & Implementation Guide

**Document Purpose:** Organize all existing content into a cohesive build structure for Cursor without losing any content or inventing anything new.

**Date:** December 27, 2025

---

## ⚠️ DOCUMENT HIERARCHY OF INSTRUCTIONS

**CRITICAL: Cursor must follow this hierarchy when instructions conflict.**

```
┌─────────────────────────────────────────────────────────────────┐
│  LEVEL 1: HIPAA/HEALTHCARE COMPLIANCE (ABSOLUTE OVERRIDE)       │
│  Source: pathways-compliance-audit.md                           │
│          pathways-wellness-cursor-rules.md                      │
│          system-requirements.md (compliance sections)           │
│                                                                 │
│  These rules CANNOT be overridden by any other document.        │
│  If any instruction conflicts with HIPAA/compliance, the        │
│  compliance rule wins. Always.                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  LEVEL 2: PATHWAYS CURSOR BUILD OUTLINE (This Document)         │
│  Source: pathways-cursor-build-outline.md                       │
│                                                                 │
│  Project-specific requirements including:                       │
│  • Content inventory and source mapping                         │
│  • Site architecture and page structure                         │
│  • Jane integration specifications                              │
│  • Cross-sales strategy (compliant)                             │
│  • Implementation phases                                        │
│  • Backend architecture                                         │
│                                                                 │
│  Overrides instructions.md for Pathways-specific decisions.     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  LEVEL 3: INSTRUCTIONS.MD (UX/UI/SEO Master Guide)              │
│  Source: instructions.md                                        │
│                                                                 │
│  General web development standards including:                   │
│  • Industry discovery protocol (healthcare/wellness)            │
│  • |UXUIDC| component naming conventions                        │
│  • SEO best practices (meta tags, schema, etc.)                 │
│  • Accessibility requirements (WCAG 2.1 AA)                     │
│  • Performance optimization (Core Web Vitals)                   │
│  • Animation standards (GSAP)                                   │
│  • Legal page templates                                         │
│  • Design system (colors, typography, layout)                   │
│                                                                 │
│  Use for all UX/UI/SEO decisions not specified in Level 1-2.    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  LEVEL 4: CURSOR'S BEST JUDGMENT                                │
│                                                                 │
│  For implementation details not covered in Levels 1-3:          │
│  • Use industry best practices                                  │
│  • Follow Next.js/React conventions                             │
│  • Prioritize accessibility and performance                     │
│  • When in doubt, ask                                           │
└─────────────────────────────────────────────────────────────────┘
```

### Conflict Resolution Examples

| Scenario | Resolution |
|----------|------------|
| instructions.md says to collect DOB for personalization | **HIPAA wins** → Never collect DOB on public site |
| instructions.md has a legal page template | **Build outline wins** → Use Pathways-specific compliance language |
| Build outline doesn't specify button style | **instructions.md wins** → Follow |UXUIDC| design system |
| Neither doc specifies image format | **Cursor judgment** → Use WebP with Next.js Image |
| instructions.md says use chat widget | **Build outline wins** → No chat widget for Phase 1 |
| Form wants pre-checked consent boxes | **HIPAA wins** → All consent boxes must be unchecked |

### Quick Reference: What Each Document Controls

| Document | Controls |
|----------|----------|
| **HIPAA/Compliance Docs** | Data collection rules, PHI boundaries, consent language, crisis resources, disclaimers, cross-promotion restrictions |
| **This Build Outline** | Site structure, content sources, Jane integration, phases, backend architecture, page-to-file mapping |
| **instructions.md** | Component naming, SEO tags, animations, typography, colors, accessibility standards, performance targets |

### Before Starting Any Task

1. **Check HIPAA/Compliance** → Does this task involve data, forms, health claims, or cross-promotion?
2. **Check Build Outline** → Is there a Pathways-specific requirement for this?
3. **Check instructions.md** → What are the UX/UI/SEO standards?
4. **Apply judgment** → Fill gaps with best practices

---

## TABLE OF CONTENTS

1. [Complete Content Inventory](#1-complete-content-inventory)
2. [Gap Analysis: What's Missing](#2-gap-analysis-whats-missing)
3. [Suggested Improvements (Using Existing Content)](#3-suggested-improvements)
4. [Cohesive Cursor Build Outline](#4-cohesive-cursor-build-outline)
5. [File Organization Structure](#5-file-organization-structure)
6. [Implementation Phases](#6-implementation-phases)
7. [Cross-Sales Strategy (Compliant)](#7-cross-sales-strategy-compliant)
8. [Jane Integration (Where Applicable)](#8-jane-integration-where-applicable)
9. [Future Backend Implementation](#9-future-backend-implementation)

---

## 1. COMPLETE CONTENT INVENTORY

### 1A. THERAPY SITE CONTENT (Pathways Within Therapy)

#### Service Pages - COMPLETE ✅

| # | Page | Source File | Status | Word Count |
|---|------|-------------|--------|------------|
| 01 | Individual Therapy | `01-individual-therapy.md` | Complete | ~4,500 |
| 02 | Child Therapy | `02-child-therapy.md` | Complete | ~3,500 |
| 03 | Teen Therapy | `03-teen-therapy.md` | Complete | ~3,200 |
| 04 | Couples Therapy | `04-couples-therapy.md` | Complete | ~4,000 |
| 05 | Trauma Therapy | `05-trauma-therapy-FULL.md` | Complete | ~4,200 |
| 06 | Weight Loss Surgery Support | `06-weight-loss-surgery-support.md` | Complete | ~2,800 |
| 07 | Veterans & First Responders | `07-veterans-first-responders.md` | Complete | ~3,500 |
| 08 | Somatic Therapy | `08-somatic-therapy.md` | Complete | ~3,200 |
| 09 | EMDR Therapy | `09-emdr-therapy.md` | Complete | ~3,000 |
| 10 | Hypnotherapy | `10-hypnotherapy.md` | Complete | ~2,800 |

#### Core Pages - COMPLETE ✅

| # | Page | Source File | Status |
|---|------|-------------|--------|
| 11 | Clinicians/Team | `11-clinicians.md` | Complete (30+ bios) |
| 12 | Locations | `12-15-final-therapy-pages.md` | Complete (5 locations) |
| 13 | FAQ | `12-15-final-therapy-pages.md` | Complete |
| 14 | Contact | `12-15-final-therapy-pages.md` | Complete |
| 15 | News/Updates | `12-15-final-therapy-pages.md` | Complete |

#### Supporting Elements - AVAILABLE ✅

- Hero quotes for each service page
- Contact information (phone, email)
- Location addresses with full details
- Insurance list
- Cancellation policy
- Session details (length, frequency)
- Telehealth availability (NY, NJ, NC, FL)
- Crisis resources (988, Veterans Crisis Line)

---

### 1B. WELLNESS SITE CONTENT (Pathways Within Wellness)

#### Service Pages - COMPLETE ✅

| # | Page | Source File | Status |
|---|------|-------------|--------|
| 01 | Wellness Home | `01-wellness-home.md` | Complete |
| 02 | About | `02-about.md` | Complete |
| 03 | Massage Services | `03-massage.md` | Complete |
| 04 | Acupuncture | `04-acupuncture.md` | Complete |
| 05 | Energy Work (Reiki/IET) | `05-energy-work.md` | Complete |
| 06 | IV Vitamin Infusion | `06-iv-vitamin-infusion.md` | Complete |
| 07 | Pain Management | `07-10-wellness-batch2.md` | Complete |
| 08 | KeraLase Hair Restoration | `07-10-wellness-batch2.md` | Complete |
| 09 | Laser Hair Removal | `07-10-wellness-batch2.md` | Complete |
| 10 | PRP Vampire Facial | `07-10-wellness-batch2.md` | Complete |
| 11 | Facials & Skincare | `11-15-wellness-batch3.md` | Complete |
| 12 | Genius RF Microneedling | `11-15-wellness-batch3.md` | Complete |
| 13 | Lutronic Accufit | `11-15-wellness-batch3.md` | Complete |
| 14 | Teeth Whitening | `11-15-wellness-batch3.md` | Complete |
| 15 | Permanent Makeup | `11-15-wellness-batch3.md` | Complete |
| 16 | HydraFacial (Detailed) | `16-20-final-wellness.md` | Complete |
| 17 | Body Sculpting | `16-20-final-wellness.md` | Complete |
| 18 | Chemical Peels | `16-20-final-wellness.md` | Complete |
| 19 | General FAQ | `16-20-final-wellness.md` | Complete |
| 20 | Payment Plans (Cherry) | `16-20-final-wellness.md` | Complete |

#### Wellness Locations - DEFINED ✅

- **Massapequa:** 4160 Merrick Rd, Massapequa, NY 11758
- **Garden City:** 647 Franklin Ave, Lower Level, Garden City, NY 11530
- **Phone:** (516) 336-9209
- **Email:** info@pathwayswithinwellness.com

---

### 1C. PLANNING & COMPLIANCE DOCUMENTS

| Document | File | Purpose |
|----------|------|---------|
| **instructions.md** | `instructions.md` | **MASTER UX/UI/SEO GUIDE** - Component naming, SEO, accessibility, performance, animations, design system |
| System Requirements | `system-requirements.md` | Technical architecture, Jane integration, database schema |
| Overview | `overview.md` | Core principles, phases, compliance requirements |
| Internal Discovery | `pathways-internal-discovery-temp-plan.md` | Project structure, temporary integrations |
| Compliance Audit | `pathways-compliance-audit.md` | HIPAA/FTC compliance issues and solutions |
| Compliant Cross-Promotion | `pathways-compliant-cross-promotion.md` | Sister practice cross-referral guidelines |
| Wellness Cursor Rules | `pathways-wellness-cursor-rules.md` | Content compliance, form rules, claim restrictions |
| Interactive Enhancement | `interactive-enhancement-specification.md` | Quizzes, glossary, comparison tools, first-visit guides |

---

## 2. GAP ANALYSIS: WHAT'S MISSING

### 2A. THERAPY SITE GAPS

| Missing Element | Priority | Notes |
|-----------------|----------|-------|
| **Home Page** | HIGH | Hero, services overview, CTAs - structure defined but no dedicated content file |
| **About Page** | HIGH | Mission, values, Rachel's story - no dedicated content file |
| **Services Overview** | MEDIUM | Landing page listing all therapy types - needs to pull from service pages |
| **Privacy Policy** | HIGH | Required legal page - needs creation following compliance docs |
| **Terms of Service** | HIGH | Required legal page - needs creation following compliance docs |
| **Accessibility Statement** | HIGH | Required for WCAG compliance - needs creation |
| **Individual Location Pages** | MEDIUM | Have addresses but no individual page content |
| **IFS/Parts Therapy Page** | LOW | Referenced in interactive spec but no content file |
| **Family Therapy Page** | LOW | Referenced in quizzes but no dedicated content |
| **Group Therapy Page** | LOW | Not mentioned in current content |

### 2B. WELLNESS SITE GAPS

| Missing Element | Priority | Notes |
|-----------------|----------|-------|
| **Contact Page** | HIGH | Have info but no dedicated page content |
| **Locations Page** | HIGH | Have addresses but no detailed page |
| **Privacy Policy** | HIGH | Required legal page |
| **Terms of Service** | HIGH | Required legal page |
| **Accessibility Statement** | HIGH | Required for compliance |
| **Team/Practitioners Page** | MEDIUM | No wellness practitioner bios exist |
| **Consultation Page** | LOW | For booking consultations |

### 2C. CROSS-SITE GAPS

| Missing Element | Priority | Notes |
|-----------------|----------|-------|
| **Sister Practice Module** | HIGH | Compliant cross-promotion component (content exists in compliance docs) |
| **Shared Header/Footer** | MEDIUM | Consistent branding elements |
| **404 Page** | MEDIUM | Error handling |
| **Maintenance Page** | LOW | For planned downtime |

### 2D. INTERACTIVE ELEMENTS GAPS

| Element | Spec Location | Build Status |
|---------|---------------|--------------|
| Therapy Finder Quiz | `interactive-enhancement-specification.md` | Spec complete, needs build |
| Wellness Experience Finder | `interactive-enhancement-specification.md` | Spec complete, needs build |
| Glossary Pages | `interactive-enhancement-specification.md` | Definitions exist, needs build |
| Comparison Tables | `interactive-enhancement-specification.md` | Spec complete, needs build |
| First Visit Guides | `interactive-enhancement-specification.md` | Content complete, needs build |
| Good Fit Indicators | `interactive-enhancement-specification.md` | Spec complete, needs build |

---

## 3. SUGGESTED IMPROVEMENTS (Using Existing Content)

### 3A. CONTENT ORGANIZATION IMPROVEMENTS

**DO NOT INVENT - These use existing content:**

1. **Create Therapy Home Page** by combining:
   - Hero from service pages pattern
   - Services overview (pull intros from each service page)
   - CTAs from contact page
   - Locations summary from locations page

2. **Create Therapy About Page** by combining:
   - Rachel's bio from clinicians page
   - Practice philosophy from existing service intros
   - Mission statements scattered through content

3. **Create Services Overview Pages** by:
   - Extracting first paragraphs from each service page
   - Using "This might resonate if you..." sections from interactive spec
   - Adding navigation cards to individual service pages

4. **Build Glossary Pages** using:
   - Definitions already written in `interactive-enhancement-specification.md`
   - FAQ content from service pages

### 3B. STRUCTURAL IMPROVEMENTS

1. **Standardize Service Page Structure:**
   ```
   - Hero (Quote + Title + Subtitle)
   - Opening Section (What it is)
   - How It Works
   - Benefits
   - Good Fit Indicators (from interactive spec)
   - FAQ Section
   - Crisis Resources (therapy only)
   - CTA Section
   - Sister Practice Module
   - Contact Information
   ```

2. **Add Missing Required Elements to All Pages:**
   - Service disclaimer (wellness)
   - Crisis resources (therapy)
   - Ownership disclosure (cross-promotional content)
   - Accessibility features

3. **Implement Interactive Spec Features:**
   - Service finder quizzes (logic already defined)
   - Comparison tables (content exists)
   - First-visit guides (written in spec)

### 3C. COMPLIANCE IMPROVEMENTS

1. **Add to Every Page:**
   - Crisis banner (988) - therapy site
   - Service disclaimer - wellness site
   - Ownership disclosure - cross-promotional content

2. **Forms Must Include:**
   - Unchecked consent boxes
   - TCPA-compliant SMS opt-in language
   - Link to Privacy Policy/Terms

3. **Legal Pages Needed (create following compliance docs):**
   - Privacy Policy
   - Terms of Service
   - Accessibility Statement

---

## 4. COHESIVE CURSOR BUILD OUTLINE

### 4A. PROJECT STRUCTURE

```
pathways-within/
├── apps/
│   ├── therapy/                    # Pathways Within Therapy (wisdom site)
│   │   ├── app/
│   │   │   ├── page.tsx            # Home
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   │   ├── page.tsx        # Services overview
│   │   │   │   ├── individual-therapy/
│   │   │   │   ├── child-therapy/
│   │   │   │   ├── teen-therapy/
│   │   │   │   ├── couples-therapy/
│   │   │   │   ├── trauma-therapy/
│   │   │   │   ├── weight-loss-surgery-support/
│   │   │   │   ├── veterans-first-responders/
│   │   │   │   ├── somatic-therapy/
│   │   │   │   ├── emdr-therapy/
│   │   │   │   └── hypnotherapy/
│   │   │   ├── team/
│   │   │   ├── locations/
│   │   │   │   ├── page.tsx        # All locations
│   │   │   │   ├── garden-city/
│   │   │   │   ├── port-jefferson/
│   │   │   │   ├── massapequa/
│   │   │   │   ├── smithtown/
│   │   │   │   └── rockville-centre/
│   │   │   ├── faq/
│   │   │   ├── contact/
│   │   │   ├── find-your-therapy/  # Quiz
│   │   │   ├── glossary/
│   │   │   ├── first-visit/
│   │   │   ├── news/
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-of-service/
│   │   │   └── accessibility/
│   │   └── content/                # Markdown content files
│   │
│   └── wellness/                   # Pathways Within Wellness (spa site)
│       ├── app/
│       │   ├── page.tsx            # Home
│       │   ├── about/
│       │   ├── services/
│       │   │   ├── page.tsx        # Services overview
│       │   │   ├── massage/
│       │   │   ├── acupuncture/
│       │   │   ├── energy-work/
│       │   │   ├── iv-vitamin-infusion/
│       │   │   ├── pain-management/
│       │   │   ├── hair-restoration/
│       │   │   ├── laser-hair-removal/
│       │   │   ├── prp-vampire-facial/
│       │   │   ├── facials-skincare/
│       │   │   ├── rf-microneedling/
│       │   │   ├── body-sculpting/
│       │   │   ├── teeth-whitening/
│       │   │   ├── permanent-makeup/
│       │   │   ├── hydrafacial/
│       │   │   └── chemical-peels/
│       │   ├── locations/
│       │   │   ├── massapequa/
│       │   │   └── garden-city/
│       │   ├── faq/
│       │   ├── contact/
│       │   ├── find-your-service/  # Quiz
│       │   ├── glossary/
│       │   ├── first-visit/
│       │   ├── payment-plans/
│       │   ├── privacy-policy/
│       │   ├── terms-of-service/
│       │   └── accessibility/
│       └── content/
│
├── packages/
│   └── shared/                     # Shared components
│       ├── components/
│       │   ├── booking/
│       │   │   ├── WellnessBookingCTA.tsx
│       │   │   └── TherapyBookingCTA.tsx
│       │   ├── forms/
│       │   │   ├── InquiryForm.tsx
│       │   │   └── ContactForm.tsx
│       │   ├── layout/
│       │   │   ├── CrisisBanner.tsx
│       │   │   ├── ServiceDisclaimer.tsx
│       │   │   ├── SisterPractice.tsx
│       │   │   └── OwnershipDisclosure.tsx
│       │   ├── interactive/
│       │   │   ├── ServiceFinderQuiz.tsx
│       │   │   ├── ComparisonTable.tsx
│       │   │   └── GoodFitIndicators.tsx
│       │   └── content/
│       │       ├── HeroSection.tsx
│       │       ├── FAQAccordion.tsx
│       │       └── TeamCard.tsx
│       └── lib/
│           ├── submitForm.ts
│           └── constants.ts
│
└── docs/
    ├── content/                    # Source content files
    │   ├── therapy/
    │   └── wellness/
    └── compliance/                 # Compliance documentation
```

### 4B. CONTENT SOURCE MAPPING

```yaml
# THERAPY SITE CONTENT MAPPING

pages:
  home:
    sources:
      - hero: "Create from service page pattern"
      - services_overview: "Extract from service pages"
      - cta: "12-15-final-therapy-pages.md (contact section)"
    
  about:
    sources:
      - rachel_bio: "11-clinicians.md"
      - philosophy: "Extract from service page intros"
    
  services/individual-therapy:
    source: "01-individual-therapy.md"
    
  services/child-therapy:
    source: "02-child-therapy.md"
    
  services/teen-therapy:
    source: "03-teen-therapy.md"
    
  services/couples-therapy:
    source: "04-couples-therapy.md"
    
  services/trauma-therapy:
    source: "05-trauma-therapy-FULL.md"
    
  services/weight-loss-surgery-support:
    source: "06-weight-loss-surgery-support.md"
    
  services/veterans-first-responders:
    source: "07-veterans-first-responders.md"
    
  services/somatic-therapy:
    source: "08-somatic-therapy.md"
    
  services/emdr-therapy:
    source: "09-emdr-therapy.md"
    
  services/hypnotherapy:
    source: "10-hypnotherapy.md"
    
  team:
    source: "11-clinicians.md"
    
  locations:
    source: "12-15-final-therapy-pages.md (locations section)"
    
  faq:
    source: "12-15-final-therapy-pages.md (FAQ section)"
    
  contact:
    source: "12-15-final-therapy-pages.md (contact section)"
    
  news:
    source: "12-15-final-therapy-pages.md (news section)"
    
  find-your-therapy:
    source: "interactive-enhancement-specification.md (Section 2A)"
    
  glossary:
    source: "interactive-enhancement-specification.md (Section 3A)"
    
  first-visit:
    source: "interactive-enhancement-specification.md (Section 7A)"

# WELLNESS SITE CONTENT MAPPING

pages:
  home:
    source: "01-wellness-home.md"
    
  about:
    source: "02-about.md"
    
  services/massage:
    source: "03-massage.md"
    
  services/acupuncture:
    source: "04-acupuncture.md"
    
  services/energy-work:
    source: "05-energy-work.md"
    
  services/iv-vitamin-infusion:
    source: "06-iv-vitamin-infusion.md"
    
  services/pain-management:
    source: "07-10-wellness-batch2.md (Page 7)"
    
  services/hair-restoration:
    source: "07-10-wellness-batch2.md (Page 8)"
    
  services/laser-hair-removal:
    source: "07-10-wellness-batch2.md (Page 9)"
    
  services/prp-vampire-facial:
    source: "07-10-wellness-batch2.md (Page 10)"
    
  services/facials-skincare:
    source: "11-15-wellness-batch3.md (Page 11)"
    
  services/rf-microneedling:
    source: "11-15-wellness-batch3.md (Page 12)"
    
  services/body-sculpting:
    source: "11-15-wellness-batch3.md (Page 13)"
    
  services/teeth-whitening:
    source: "11-15-wellness-batch3.md (Page 14)"
    
  services/permanent-makeup:
    source: "11-15-wellness-batch3.md (Page 15)"
    
  services/hydrafacial:
    source: "16-20-final-wellness.md (Page 16)"
    
  services/chemical-peels:
    source: "16-20-final-wellness.md (Page 18)"
    
  faq:
    source: "16-20-final-wellness.md (Page 19)"
    
  payment-plans:
    source: "16-20-final-wellness.md (Page 20)"
    
  find-your-service:
    source: "interactive-enhancement-specification.md (Section 2B)"
    
  glossary:
    source: "interactive-enhancement-specification.md (Section 3B)"
    
  first-visit:
    source: "interactive-enhancement-specification.md (Section 7B)"
```

---

## 5. FILE ORGANIZATION STRUCTURE

### 5A. CONTENT FILES TO CREATE

Copy uploaded markdown files to project structure:

```
docs/content/therapy/
├── services/
│   ├── 01-individual-therapy.md
│   ├── 02-child-therapy.md
│   ├── 03-teen-therapy.md
│   ├── 04-couples-therapy.md
│   ├── 05-trauma-therapy.md
│   ├── 06-weight-loss-surgery-support.md
│   ├── 07-veterans-first-responders.md
│   ├── 08-somatic-therapy.md
│   ├── 09-emdr-therapy.md
│   └── 10-hypnotherapy.md
├── team/
│   └── clinicians.md
├── pages/
│   ├── locations.md
│   ├── faq.md
│   ├── contact.md
│   └── news.md
└── interactive/
    ├── quiz-logic.md (from interactive spec)
    ├── glossary.md (from interactive spec)
    └── first-visit.md (from interactive spec)

docs/content/wellness/
├── services/
│   ├── 01-massage.md
│   ├── 02-acupuncture.md
│   ├── 03-energy-work.md
│   ├── 04-iv-vitamin-infusion.md
│   ├── 05-pain-management.md
│   ├── 06-hair-restoration.md
│   ├── 07-laser-hair-removal.md
│   ├── 08-prp-vampire-facial.md
│   ├── 09-facials-skincare.md
│   ├── 10-rf-microneedling.md
│   ├── 11-body-sculpting.md
│   ├── 12-teeth-whitening.md
│   ├── 13-permanent-makeup.md
│   ├── 14-hydrafacial.md
│   └── 15-chemical-peels.md
├── pages/
│   ├── home.md
│   ├── about.md
│   ├── faq.md
│   └── payment-plans.md
└── interactive/
    ├── quiz-logic.md
    ├── glossary.md
    └── first-visit.md

docs/compliance/
├── system-requirements.md
├── overview.md
├── compliance-audit.md
├── compliant-cross-promotion.md
├── wellness-cursor-rules.md
└── interactive-enhancement-specification.md
```

---

## 6. IMPLEMENTATION PHASES

### PHASE 1A: Foundation (Week 1)

**Goal:** Project setup and core static pages

| Task | Priority | Source Files |
|------|----------|--------------|
| Set up Next.js project structure | HIGH | - |
| Create design system (colors, typography) | HIGH | - |
| Build shared components (Header, Footer, CTA) | HIGH | - |
| Implement Crisis Banner component | HIGH | compliance docs |
| Build Therapy Home page | HIGH | synthesize from services |
| Build Wellness Home page | HIGH | `01-wellness-home.md` |
| Build About pages (both sites) | HIGH | `02-about.md`, `11-clinicians.md` |
| Build Contact pages | HIGH | `12-15-final-therapy-pages.md` |

### PHASE 1B: Service Pages (Week 2)

**Goal:** All service pages for both sites

| Task | Source File |
|------|-------------|
| **THERAPY SERVICES** | |
| Individual Therapy | `01-individual-therapy.md` |
| Child Therapy | `02-child-therapy.md` |
| Teen Therapy | `03-teen-therapy.md` |
| Couples Therapy | `04-couples-therapy.md` |
| Trauma Therapy | `05-trauma-therapy-FULL.md` |
| Weight Loss Surgery Support | `06-weight-loss-surgery-support.md` |
| Veterans & First Responders | `07-veterans-first-responders.md` |
| Somatic Therapy | `08-somatic-therapy.md` |
| EMDR Therapy | `09-emdr-therapy.md` |
| Hypnotherapy | `10-hypnotherapy.md` |
| **WELLNESS SERVICES** | |
| Massage | `03-massage.md` |
| Acupuncture | `04-acupuncture.md` |
| Energy Work | `05-energy-work.md` |
| IV Vitamin Infusion | `06-iv-vitamin-infusion.md` |
| Pain Management | `07-10-wellness-batch2.md` |
| Hair Restoration | `07-10-wellness-batch2.md` |
| Laser Hair Removal | `07-10-wellness-batch2.md` |
| PRP Vampire Facial | `07-10-wellness-batch2.md` |
| Facials & Skincare | `11-15-wellness-batch3.md` |
| RF Microneedling | `11-15-wellness-batch3.md` |
| Body Sculpting | `11-15-wellness-batch3.md` |
| Teeth Whitening | `11-15-wellness-batch3.md` |
| Permanent Makeup | `11-15-wellness-batch3.md` |
| HydraFacial | `16-20-final-wellness.md` |
| Chemical Peels | `16-20-final-wellness.md` |

### PHASE 1C: Supporting Pages (Week 3)

| Task | Source File |
|------|-------------|
| Team/Clinicians page | `11-clinicians.md` |
| Locations pages (Therapy) | `12-15-final-therapy-pages.md` |
| Locations pages (Wellness) | `16-20-final-wellness.md` |
| FAQ pages (both sites) | `12-15-final-therapy-pages.md`, `16-20-final-wellness.md` |
| News page | `12-15-final-therapy-pages.md` |
| Payment Plans page | `16-20-final-wellness.md` |

### PHASE 1D: Legal & Compliance (Week 3)

| Task | Source |
|------|--------|
| Privacy Policy | Create following `system-requirements.md` |
| Terms of Service | Create following `system-requirements.md` |
| Accessibility Statement | Create following `overview.md` |
| Service Disclaimer component | `pathways-wellness-cursor-rules.md` |
| Ownership Disclosure component | `pathways-compliant-cross-promotion.md` |
| Sister Practice modules | `pathways-compliant-cross-promotion.md` |

### PHASE 2A: Interactive Features (Week 4)

| Task | Source File |
|------|-------------|
| Service Finder Quiz (Therapy) | `interactive-enhancement-specification.md` Section 2A |
| Service Finder Quiz (Wellness) | `interactive-enhancement-specification.md` Section 2B |
| Quiz result mapping logic | `interactive-enhancement-specification.md` |
| Good Fit Indicators | `interactive-enhancement-specification.md` Section 9 |

### PHASE 2B: Glossary & Guides (Week 4)

| Task | Source File |
|------|-------------|
| Therapy Glossary page | `interactive-enhancement-specification.md` Section 3A |
| Wellness Glossary page | `interactive-enhancement-specification.md` Section 3B |
| First Visit Guide (Therapy) | `interactive-enhancement-specification.md` Section 7A |
| First Visit Guide (Wellness) | `interactive-enhancement-specification.md` Section 7B |
| Comparison Tables | `interactive-enhancement-specification.md` Section 6 |

### PHASE 2C: Forms & CTAs (Week 5)

| Task | Source File |
|------|-------------|
| Inquiry Form (Wellness) | `pathways-wellness-cursor-rules.md` Section 0.2 |
| Contact Form (General) | `pathways-wellness-cursor-rules.md` Section 0.2 |
| Form submission handler | `pathways-wellness-cursor-rules.md` Section 0.3 |
| Therapy Booking CTA (Jane link) | `pathways-wellness-cursor-rules.md` Section 0.1 |
| Wellness Booking CTA (Phone/Form) | `pathways-wellness-cursor-rules.md` Section 0.1 |
| Contextual CTAs | `interactive-enhancement-specification.md` Section 8 |

### PHASE 3: Testing & Refinement (Week 5-6)

| Task | Reference |
|------|-----------|
| WCAG 2.1 AA accessibility audit | `overview.md` |
| Mobile responsiveness testing | `overview.md` |
| Form validation testing | `system-requirements.md` |
| Quiz logic testing (all paths) | `interactive-enhancement-specification.md` |
| Content review for compliance | `pathways-wellness-cursor-rules.md` |
| Cross-promotional content audit | `pathways-compliance-audit.md` |

---

---

## 7. CROSS-SALES STRATEGY (Compliant)

### 7A. OVERVIEW

**Source:** `pathways-compliant-cross-promotion.md`, `pathways-compliance-audit.md`

The two practices operate under common ownership and can cross-promote, but with strict compliance requirements.

### 7B. WHAT WE CAN BUILD

| Element | Placement | Source |
|---------|-----------|--------|
| Sister Practice Module (Therapy→Wellness) | Footer/sidebar of therapy pages | `pathways-compliant-cross-promotion.md` Module A |
| Sister Practice Module (Wellness→Therapy) | Footer/sidebar of wellness pages | `pathways-compliant-cross-promotion.md` Module B |
| "Two Practices, One Philosophy" section | About pages (both sites) | `pathways-compliant-cross-promotion.md` Module C |
| Ownership Disclosure | All cross-promotional content | Required text provided |
| Opt-In Marketing Authorization | Intake forms (both sites) | `pathways-compliant-cross-promotion.md` Part 3 |
| FAQ about integration | FAQ pages | `12-15-final-therapy-pages.md` |

### 7C. COMPLIANT CROSS-PROMOTION COMPONENTS

```
/components/cross-promotion/
├── SisterPracticeModule.tsx    # Configurable for either direction
├── OwnershipDisclosure.tsx     # Required disclaimer text
├── TwoPracticesSection.tsx     # "One Philosophy" about content
└── MarketingOptIn.tsx          # HIPAA-compliant authorization checkbox
```

**Sister Practice Module (Therapy Site):**
```markdown
## Pathways Within Wellness

Our sister practice offers massage, acupuncture, facials, and other 
wellness services at our Massapequa and Garden City locations.

📞 (516) 336-9209 | pathwayswellness.com

*Pathways Within Therapy and Pathways Within Wellness operate under 
common ownership. Wellness services are separate from and do not 
substitute for mental health treatment.*
```

**Sister Practice Module (Wellness Site):**
```markdown
## Pathways Within Therapy

Our sister practice offers individual, couples, family, and specialized 
therapy services at five Long Island locations plus telehealth.

📞 (631) 371-3825 | pathwaystherapy.com

*Pathways Within Wellness and Pathways Within Therapy operate under 
common ownership. Wellness services are separate from and do not 
substitute for mental health treatment.*
```

### 7D. WHAT WE CANNOT BUILD

❌ Automated marketing based on visit history
❌ Cross-practice "packages" bundling services
❌ Claims that services "enhance" or "accelerate" each other
❌ Diagnosis-suggestive content ("if your tension keeps coming back...")
❌ Shared client lists without explicit opt-in authorization
❌ Outcome claims from combining services

### 7E. OPT-IN MARKETING AUTHORIZATION (For Forms)

**Therapy Intake Addition:**
```markdown
☐ I authorize Pathways Within to send me informational materials about 
  wellness services available at Pathways Within Wellness.
  
I understand this is completely voluntary and will not affect my care.
```

**Wellness Intake Addition:**
```markdown
☐ I authorize Pathways Within to send me informational materials about 
  therapy services available at Pathways Within Therapy.
  
I understand this is completely voluntary and will not affect my services.
```

### 7F. CROSS-SALES IMPLEMENTATION PHASE

| Phase | Task | Priority |
|-------|------|----------|
| Phase 1A | Build SisterPractice component | HIGH |
| Phase 1A | Add ownership disclosure to footer | HIGH |
| Phase 1C | Add "Two Practices" section to About pages | MEDIUM |
| Phase 1D | Add marketing opt-in to intake forms | MEDIUM |
| Phase 2 | Build FAQ about integration | LOW |

---

## 8. JANE INTEGRATION (Where Applicable)

### 8A. JANE INTEGRATION OVERVIEW

**Source:** `system-requirements.md`, `pathways-internal-discovery-temp-plan.md`

Jane App is the EHR and booking system for **Pathways Within Therapy only**. Wellness does NOT use Jane.

```
┌─────────────────────────────────────────────────────────────────┐
│                         JANE APP                                │
│                    (Therapy Practice Only)                      │
├─────────────────────────────────────────────────────────────────┤
│  Functions:                                                     │
│  • Patient scheduling and booking                               │
│  • Electronic Health Records (EHR)                              │
│  • Insurance billing                                            │
│  • Good Faith Estimates                                         │
│  • Secure patient portal                                        │
│  • Online forms and intake                                      │
│  • Telehealth video sessions                                    │
│  • Wait list management                                         │
│  • Mailchimp sync                                               │
└─────────────────────────────────────────────────────────────────┘
```

### 9B. JANE INTEGRATION LIMITATIONS

**CRITICAL: Jane has NO public API for third-party integrations.**

| What We CAN Do | What We CANNOT Do |
|----------------|-------------------|
| ✅ Embed booking widgets | ❌ Create appointments programmatically |
| ✅ Link to Jane portal | ❌ Access patient medical records |
| ✅ Import iCal feeds (one-way) | ❌ Modify appointments from our system |
| ✅ Track widget clicks (GA4) | ❌ Real-time appointment sync |
| ✅ Display provider schedules | ❌ Access billing information |
| ✅ Use Mailchimp sync | ❌ Build custom booking flow |

### 9C. JANE WIDGET INTEGRATION (Phase 1A)

**Booking Button Component:**

```tsx
// /components/booking/JaneBookingButton.tsx

interface JaneBookingButtonProps {
  practitionerId?: string;      // Optional: specific provider
  serviceId?: string;           // Optional: specific service
  locationId?: string;          // Optional: specific location
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function JaneBookingButton({
  practitionerId,
  serviceId,
  locationId,
  buttonText = "Book Your Appointment",
  variant = "primary",
  fullWidth = false
}: JaneBookingButtonProps) {
  
  // Build Jane URL with optional parameters
  const baseUrl = "https://pathwayswithintherapy.janeapp.com";
  const params = new URLSearchParams();
  
  if (practitionerId) params.append('practitioner', practitionerId);
  if (serviceId) params.append('service', serviceId);
  if (locationId) params.append('location', locationId);
  
  const bookingUrl = params.toString() 
    ? `${baseUrl}?${params.toString()}`
    : baseUrl;
  
  // Track click in GA4
  const handleClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'jane_booking_click', {
        practitioner_id: practitionerId,
        service_id: serviceId,
        location_id: locationId
      });
    }
  };
  
  return (
    <a 
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`jane-booking-btn ${variant} ${fullWidth ? 'full-width' : ''}`}
    >
      {buttonText}
      <ExternalLinkIcon />
    </a>
  );
}
```

**Usage on Service Pages:**

```tsx
// Individual Therapy page
<JaneBookingButton 
  serviceId="individual-therapy"
  buttonText="Schedule Individual Therapy"
/>

// Provider profile page
<JaneBookingButton 
  practitionerId="rachel-lessard"
  buttonText="Book with Rachel"
/>

// Location page
<JaneBookingButton 
  locationId="garden-city"
  buttonText="Book at Garden City"
/>
```

### 9D. JANE BOOKING CTA COMPONENT (Phase 1A)

**Full CTA Block with Phone Fallback:**

```tsx
// /components/booking/TherapyBookingCTA.tsx

interface TherapyBookingCTAProps {
  title?: string;
  description?: string;
  practitionerId?: string;
  serviceId?: string;
  locationId?: string;
  showPhone?: boolean;
}

export function TherapyBookingCTA({
  title = "Ready to Begin?",
  description = "Schedule your first appointment through our secure patient portal.",
  practitionerId,
  serviceId,
  locationId,
  showPhone = true
}: TherapyBookingCTAProps) {
  
  return (
    <section className="therapy-booking-cta">
      <h2>{title}</h2>
      <p>{description}</p>
      
      <div className="cta-actions">
        <JaneBookingButton 
          practitionerId={practitionerId}
          serviceId={serviceId}
          locationId={locationId}
          variant="primary"
        />
        
        {showPhone && (
          <div className="phone-fallback">
            <p>Prefer to call?</p>
            <a href="tel:6313713825" className="phone-link">
              (631) 371-3825
            </a>
          </div>
        )}
      </div>
      
      <p className="cta-note">
        <small>
          Online booking opens in a new window. Your information is 
          protected by Jane's HIPAA-compliant platform.
        </small>
      </p>
    </section>
  );
}
```

### 9E. JANE iCAL INTEGRATION (Phase 2A)

**Purpose:** Display appointment calendar in admin dashboard (read-only)

**iCal Feed Configuration:**

```typescript
// /lib/jane/icalSync.ts

interface JaneCalendarConfig {
  feedUrl: string;           // Jane iCal URL (from Jane settings)
  refreshInterval: number;   // Milliseconds between syncs
  includeNotes: boolean;     // FALSE - notes may contain PHI
}

const config: JaneCalendarConfig = {
  feedUrl: process.env.JANE_ICAL_URL!,
  refreshInterval: 3600000,  // 1 hour
  includeNotes: false        // CRITICAL: Never sync notes (PHI risk)
};
```

**iCal Sync Service:**

```typescript
// /services/jane/calendarSync.ts

import ICAL from 'ical.js';

interface AppointmentDisplay {
  id: string;
  start: Date;
  end: Date;
  providerName: string;
  locationName: string;
  serviceType: string;
  // NO patient info, NO notes
}

export async function syncJaneCalendar(): Promise<AppointmentDisplay[]> {
  const response = await fetch(process.env.JANE_ICAL_URL!);
  const icalData = await response.text();
  
  const jcal = ICAL.parse(icalData);
  const vcalendar = new ICAL.Component(jcal);
  const events = vcalendar.getAllSubcomponents('vevent');
  
  return events.map(event => {
    const vevent = new ICAL.Event(event);
    
    return {
      id: vevent.uid,
      start: vevent.startDate.toJSDate(),
      end: vevent.endDate.toJSDate(),
      providerName: extractProvider(vevent.summary),
      locationName: extractLocation(vevent.location),
      serviceType: extractService(vevent.summary),
      // DO NOT include: description, attendees, notes
    };
  });
}

// Cron job: Run every hour
// Store in database for dashboard display
// Link each appointment to Jane for full details
```

**Dashboard Calendar View:**

```tsx
// Admin dashboard - appointments are READ-ONLY

<CalendarView 
  appointments={appointments}
  onAppointmentClick={(apt) => {
    // Open Jane directly for details/modifications
    window.open(
      `https://pathwayswithintherapy.janeapp.com/appointments/${apt.id}`,
      '_blank'
    );
  }}
/>

<p className="calendar-note">
  Calendar syncs hourly from Jane. Click any appointment to view 
  details or make changes in Jane.
</p>
```

### 9F. JANE PAGES/PLACEMENTS

**Where Jane Integration Appears:**

| Page | Integration Type | Notes |
|------|-----------------|-------|
| **Home (Therapy)** | Booking CTA | Primary CTA in hero section |
| **Services Overview** | Booking CTA | Bottom of page |
| **Individual Service Pages** | Booking Button | Service-specific booking |
| **Provider Profiles** | Booking Button | Provider-specific booking |
| **Location Pages** | Booking Button | Location-specific booking |
| **Contact Page** | Booking CTA | Alternative to contact form |
| **FAQ Page** | Link | "How do I book?" answer |
| **Admin Dashboard** | iCal Display | Read-only calendar (Phase 2) |

### 9G. JANE WIDGET TRACKING (GA4)

```typescript
// Track all Jane booking interactions

// Widget click
gtag('event', 'jane_booking_click', {
  page_location: window.location.pathname,
  practitioner_id: practitionerId || 'any',
  service_id: serviceId || 'any',
  location_id: locationId || 'any'
});

// CTA impression (for conversion rate)
gtag('event', 'jane_cta_view', {
  page_location: window.location.pathname,
  cta_position: 'hero' | 'footer' | 'inline'
});
```

### 9H. JANE RESOURCES

| Resource | URL |
|----------|-----|
| Jane Features | https://jane.app/features |
| Jane Integrations | https://jane.app/integrations |
| Online Booking Guide | https://jane.app/guide/category/online-booking |
| Wait List Management | https://jane.app/guide/category/wait-list-management |
| Good Faith Estimates | https://jane.app/guide/creating-managing-good-faith-estimates-in-jane |
| iCal Export | Available in Jane Settings → Integrations |

### 9I. JANE IMPLEMENTATION CHECKLIST

**Phase 1A (Launch):**
- [ ] JaneBookingButton component built
- [ ] TherapyBookingCTA component built
- [ ] Booking buttons on all therapy service pages
- [ ] Booking buttons on all provider profiles
- [ ] Booking buttons on all location pages
- [ ] GA4 tracking implemented
- [ ] HIPAA compliance badge displayed
- [ ] External link icon indicates new window

**Phase 2A (Backend):**
- [ ] iCal feed URL obtained from Jane
- [ ] Calendar sync service built
- [ ] Appointment display in dashboard (read-only)
- [ ] Click-through to Jane for details
- [ ] Hourly sync cron job configured
- [ ] PHI exclusion verified (no notes synced)

### 8J. JANE VS WELLNESS BOOKING COMPARISON

| Feature | Therapy (Jane) | Wellness (Temporary) |
|---------|---------------|---------------------|
| Booking Method | Jane widget link | Phone + inquiry form |
| Calendar View | iCal sync (Phase 2) | Manual |
| Automation | Jane handles | Email only |
| Patient Portal | Jane built-in | None |
| Future State | Keep Jane | Add spa platform (Boulevard/Mangomint) |

---

## 9. FUTURE BACKEND IMPLEMENTATION

### 9A. THREE-LAYER ARCHITECTURE

**Source:** `system-requirements.md`, `overview.md`, `pathways-internal-discovery-temp-plan.md`

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 1: CUSTOMER-FACING                     │
│                    (Build Now - Phase 1)                        │
├─────────────────────────────────────────────────────────────────┤
│  • React + Next.js static pages                                 │
│  • Service pages, team, locations, contact                      │
│  • Forms → Email (temporary)                                    │
│  • Jane booking links (therapy)                                 │
│  • Phone CTAs + inquiry forms (wellness)                        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 2: ADMIN BACKEND                       │
│                    (Build Later - Phase 2-3)                    │
├─────────────────────────────────────────────────────────────────┤
│  • React SPA dashboard                                          │
│  • Node.js/Next.js API                                          │
│  • PostgreSQL (NON-PHI only)                                    │
│                                                                 │
│  MODULES:                                                       │
│  ├── Leads & Contacts (form submissions, status tracking)       │
│  ├── Appointments (read-only from Jane iCal)                    │
│  ├── Marketing & Campaigns (email/SMS builder)                  │
│  ├── Analytics & Reporting (traffic, conversions, ROI)          │
│  └── Content Management (edit pages, bios, blog)                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 3: JANE EHR                            │
│                    (DO NOT BUILD - External)                    │
├─────────────────────────────────────────────────────────────────┤
│  • All PHI stays here                                           │
│  • Booking widgets (embed only)                                 │
│  • iCal feed (one-way sync to Layer 2)                          │
│  • Mailchimp integration                                        │
│  • NO API access for third-party booking                        │
└─────────────────────────────────────────────────────────────────┘
```

### 9B. TEMPORARY VS FUTURE STATE

| Function | This Week (Temporary) | Future State |
|----------|----------------------|--------------|
| **Therapy Booking** | Link to Jane portal | Same (or embed widget) |
| **Wellness Booking** | Phone + inquiry form → email | Spa platform (Boulevard/Mangomint) or custom |
| **Contact Forms** | Submit via Resend/SendGrid email | Post to CRM + email |
| **Lead Tracking** | Manual (check email) | Dashboard with status, assignment, notes |
| **Appointments View** | Go to Jane directly | Read-only calendar in dashboard (iCal import) |
| **Marketing** | Manual email | Campaign builder with templates, A/B testing |
| **Analytics** | Google Analytics only | Custom dashboard with conversion funnels |
| **Chat** | None (or simple free option) | Evaluate need post-launch |

### 9C. BACKEND MODULES (Phase 2-3)

**Source:** `system-requirements.md` Layer 2 section

#### Module 1: Leads & Contacts
```
Features:
- View all form submissions (therapy + wellness)
- Filter by: date, service, location, status, practice
- Assign leads to staff members
- Add notes and follow-up reminders
- Status tracking: new → contacted → converted → lost
- Quick actions: Call, Email, SMS
- Export to CSV/PDF

Database (non-PHI):
- first_name, last_name
- email, phone
- service_interest, preferred_location
- status, assigned_to
- notes[], follow_ups[]
- marketing_attribution
- timestamps
```

#### Module 2: Appointments (Read-Only)
```
Features:
- Daily/weekly/monthly calendar view
- Color-coded by provider and service type
- Filter by location, practitioner
- Synced from Jane via iCal (hourly refresh)
- Click → opens in Jane for full details
- NO editing (must use Jane directly)

Note: 24-hour delay typical for iCal sync
```

#### Module 3: Marketing & Campaigns
```
Features:
- Email campaign builder (drag-and-drop)
- SMS campaign builder (TCPA compliant)
- Promo code generator
- Campaign performance tracking
- A/B testing (future)
- TCPA opt-out management (10-day processing)
- Consent record retention (4 years)
```

#### Module 4: Analytics & Reporting
```
Features:
- Traffic sources
- Conversion funnels (visit → form → appointment)
- Service popularity
- Location performance
- Marketing campaign ROI
- Patient satisfaction scores
- Export: PDF, CSV

Integration: Google Analytics 4, custom events
```

#### Module 5: Content Management
```
Features:
- Edit website text (non-code)
- Upload images
- Manage team bios
- Publish blog posts
- Update service descriptions
- Preview before publish
```

### 9D. USER ROLES (Backend)

| Role | Access Level |
|------|--------------|
| **Super Admin** | Full access to everything |
| **Marketing** | Campaigns, analytics, content |
| **Front Desk** | View appointments, contact leads |
| **Read-Only** | View-only for stakeholders |

### 9E. DATABASE SCHEMA (Non-PHI Only)

**Source:** `system-requirements.md`

```sql
-- Leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
  practice VARCHAR(20), -- 'therapy' or 'wellness'
  service_interest VARCHAR(100),
  preferred_location VARCHAR(100),
  preferred_format VARCHAR(50),
  availability JSONB,
  additional_notes TEXT,
  marketing_source VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new',
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Consent records (4-year TCPA retention)
CREATE TABLE consent_records (
  id UUID PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  consent_type VARCHAR(50),
  consent_given BOOLEAN,
  consent_text TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Opt-out records
CREATE TABLE optout_records (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  phone VARCHAR(20),
  optout_type VARCHAR(50),
  optout_method VARCHAR(100),
  processed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- NEVER store: DOB, SSN, medical history, diagnoses, insurance IDs
```

### 9F. JANE INTEGRATION SPECS

**Source:** `system-requirements.md`

```
JANE HAS NO PUBLIC API

Integration methods available:
1. Widget embedding (booking buttons)
2. iCal feeds (one-way appointment sync)
3. Mailchimp sync (patient lists)

What we CAN do:
✓ Display provider schedules (from iCal)
✓ Show appointment times and provider names
✓ Track booking widget clicks (GA4)
✓ Link to Jane for modifications

What we CANNOT do:
✗ Create appointments programmatically
✗ Access patient medical records
✗ Modify appointments from dashboard
✗ Real-time appointment updates
✗ Access billing information

iCal Sync Characteristics:
- One-way only (Jane → external)
- Refresh rate: typically hourly (not real-time)
- Includes appointments and shifts
- Can include/exclude notes (PHI risk)
- Store only non-PHI metadata
```

### 9G. FUTURE PLATFORM OPTIONS

**Source:** `pathways-internal-discovery-temp-plan.md`

**Option A: Custom Build**
```
Pros: Total control, exactly what needed, no per-seat licensing
Cons: Development time, maintenance responsibility
Timeline: 3-6 months for full dashboard
```

**Option B: GoHighLevel / HubSpot**
```
Pros: Fast implementation, lots of features, proven
Cons: Monthly cost, less customization, another platform
Timeline: 2-4 weeks to configure
```

**Option C: Spa-Specific Platform + Keep Jane**
```
Boulevard / Mangomint / Vagaro for wellness
Jane unchanged for therapy
Pros: Purpose-built for spa, includes payments
Cons: Two separate systems, limited cross-practice visibility
Timeline: 2-4 weeks to implement
```

**Recommendation:** Start with Option C (spa platform + Jane), evaluate need for unified CRM layer in Phase 3.

### 9H. BACKEND IMPLEMENTATION PHASES

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| **Phase 2A** | Week 7-8 | Dashboard framework, authentication, user roles |
| **Phase 2A** | Week 7-8 | Leads module (form submissions, status tracking) |
| **Phase 2A** | Week 7-8 | PostgreSQL setup, API routes |
| **Phase 2B** | Week 9-10 | Jane iCal import, appointment display |
| **Phase 2B** | Week 9-10 | Basic analytics (traffic, conversions) |
| **Phase 2C** | Week 11-12 | Marketing campaign builder |
| **Phase 2C** | Week 11-12 | Content management interface |
| **Phase 3** | TBD | Spa booking platform integration |
| **Phase 3** | TBD | Advanced analytics, A/B testing |
| **Phase 3** | TBD | Evaluate unified CRM need |

### 9I. ENVIRONMENT VARIABLES (Future-Ready)

```env
# === CURRENT (Phase 1) ===
RESEND_API_KEY=
THERAPY_CONTACT_EMAIL=welcome@pathwayswithin.com
WELLNESS_CONTACT_EMAIL=info@pathwayswithinwellness.com
NEXT_PUBLIC_JANE_BOOKING_URL=https://pathwayswithintherapy.janeapp.com/

# === FUTURE (Phase 2-3) ===
# Database
DATABASE_URL=
POSTGRES_HOST=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# CRM (placeholder)
CRM_API_ENDPOINT=
CRM_API_KEY=

# Spa Booking (placeholder)
SPA_BOOKING_URL=
SPA_BOOKING_WIDGET_ID=
SPA_PLATFORM_API_KEY=

# Jane iCal
JANE_ICAL_URL=
JANE_ICAL_REFRESH_INTERVAL=3600

# SMS (TCPA compliant)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Analytics
NEXT_PUBLIC_GA_ID=
```

---

---

## APPENDIX A: INSTRUCTIONS.MD KEY RULES FOR THIS PROJECT

**Source:** `instructions.md` (Level 3 in hierarchy)

These rules from the master UX/UI/SEO guide apply to Pathways Within unless overridden by HIPAA compliance or this build outline.

### Component Naming Convention

All custom components must use the |UXUIDC| prefix:

```
components/
  |UXUIDC|/
    Navigation.tsx
    Footer.tsx
    HeroSection.tsx
    CrisisBanner.tsx        # Pathways-specific
    SisterPractice.tsx      # Pathways-specific
    JaneBookingButton.tsx   # Pathways-specific
```

### Industry Context: Healthcare/Wellness

**This project falls under:** Biotech/Healthcare Industry

**Design Standards (from instructions.md):**
- **Colors:** Blues (#1C2541, #2563EB) for trust, whites/light grays for clean aesthetic
- **Accents:** Purple (#6B46C1) for innovation, muted greens for wellness
- **Avoid:** Bright reds, yellows (associated with warnings)
- **Typography:** Sans-serif primary (Inter, Roboto), 16px minimum body text
- **Layout:** Clean, modern, progressive disclosure, team credentials prominent

### SEO Requirements

```html
<!-- Required Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[155-160 characters max]">
<!-- NO meta keywords tag (obsolete) -->
<meta name="robots" content="index, follow">
<link rel="canonical" href="[primary URL]">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[60 characters max]">
<meta property="og:description" content="[155-160 characters]">
<meta property="og:image" content="[1200x630px image]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### Accessibility (WCAG 2.1 AA)

- Color contrast: 4.5:1 minimum for normal text
- Keyboard navigation for all interactive elements
- Skip navigation links
- Proper heading hierarchy (H1→H2→H3)
- Alt text for all images (describe emotional context)
- ARIA landmarks for major sections
- Reduced motion support (`prefers-reduced-motion`)
- Focus indicators visible

### Performance Targets (Core Web Vitals)

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FCP (First Contentful Paint) | < 1.8s |
| TTFB (Time to First Byte) | < 600ms |

### Layout Constraints

- **Max-width:** 1440px for all content
- **Test on:** 1920px+ displays (content should center)
- **Mobile-first:** Design for mobile, scale up
- **No colored drop shadows**

### Animation Standards (GSAP)

```typescript
// Standard easing
gsap.to(element, {
  duration: 0.6,
  ease: "power2.out",
  opacity: 1
});

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Skip or simplify animations
}
```

### Legal Pages Required

| Page | Route | Notes |
|------|-------|-------|
| Privacy Policy | /privacy | Healthcare-specific (HIPAA language) |
| Terms of Service | /terms | Healthcare-specific clauses |
| Accessibility Statement | /accessibility | WCAG 2.1 AA compliance |
| Cookie Policy | /cookies | If using analytics cookies |

**Note:** Legal page templates in instructions.md must be updated with Pathways-specific compliance language from the HIPAA/compliance documents.

---

## APPENDIX B: CRITICAL COMPLIANCE CHECKLIST

Before launching ANY page, verify:

### All Pages

- [ ] No health outcome claims (wellness)
- [ ] Crisis banner visible (therapy)
- [ ] Service disclaimer included (wellness)
- [ ] Contact information present
- [ ] Mobile responsive
- [ ] WCAG 2.1 AA compliant

### Cross-Promotional Content

- [ ] Ownership disclosure included
- [ ] No outcome claims from combining services
- [ ] No diagnosis implications
- [ ] Sister practice info in sidebar/footer (not integrated into clinical content)

### Forms

- [ ] Consent checkboxes NOT pre-checked
- [ ] TCPA-compliant SMS opt-in language
- [ ] Link to Privacy Policy
- [ ] No PHI collection
- [ ] Only collect: name, email, phone, service interest, location preference

### Service Pages

- [ ] Practitioner credentials noted (where applicable)
- [ ] "Results vary" qualifier present (wellness)
- [ ] No "signs you need [service]" framing
- [ ] No comparison to medical treatment (wellness)

---

## APPENDIX C: CONTENT VERIFICATION NOTES

**The following content has been verified as complete and ready for implementation:**

✅ All 10 therapy service pages (strengthened content)
✅ All 15+ wellness service pages (strengthened content)
✅ Clinicians page with 30+ bios
✅ Locations, FAQ, Contact, News pages (therapy)
✅ FAQ, Payment Plans pages (wellness)
✅ Interactive quiz specifications with complete logic
✅ Glossary definitions for all services
✅ First-visit guides for both practices
✅ Good Fit indicators for all services
✅ Comparison table content
✅ Compliance rules and restrictions
✅ Cross-promotion guidelines
✅ Form specifications and code examples
✅ Crisis resources

**NO content needs to be invented. All pages can be built from existing source files.**

---

*Document Version: 1.0*
*Created: December 27, 2025*
*Status: Ready for Cursor implementation*
