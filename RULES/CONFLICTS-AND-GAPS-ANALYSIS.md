# PATHWAYS WITHIN: CONFLICTS & GAPS ANALYSIS
## Forward-Looking Issues for Full 3-Website Build + Backend

**Document Purpose:** Identify all conflicts and gaps across RULES documents that will cause problems as we build out the complete therapy site, wellness site, and future backend.

**Date:** December 27, 2025

---

## ⚠️ CRITICAL CONFLICTS (Must Resolve Before Proceeding)

---

### CONFLICT #1: DOCUMENT HIERARCHY CONTRADICTION

**The Problem:** Four different documents define different hierarchies:

| Document | Says "PRIMARY" Is |
|----------|-------------------|
| `system-requirements.md` | `instructions.md` |
| `overview.md` | `instructions.md` |
| `pathways-wellness-cursor-rules.md` | `instructions.md` |
| `pathways-cursor-build-outline.md` | HIPAA/Compliance docs |

**Why This Matters:**
- `instructions.md` says use Inter/Roboto fonts and blue colors
- `design-system.md` says use Cormorant Garamond/Raleway and beige colors
- If `instructions.md` is PRIMARY, current landing page is wrong
- If `pathways-cursor-build-outline.md` is PRIMARY, it's correct

**RESOLUTION NEEDED:**
```
□ Confirm: pathways-cursor-build-outline.md hierarchy is authoritative
□ Update: system-requirements.md, overview.md to align
□ Clarify: instructions.md is for GENERIC projects, this project has SPECIFIC rules
```

---

### CONFLICT #2: DESIGN SYSTEM MISMATCH ✅ RESOLVED

**Resolution (December 2025):**
- `design-system.md` updated with 2025 best practices for therapy/wellness
- `instructions.md` has note that generic healthcare colors are NOT used for this project
- `MASTER-RULES.md` points to `design-system.md` as the single source

**New Design System:**
- Fonts: Cormorant Garamond (hero), DM Serif Display (headings), DM Sans (body)
- Background: Warm cream (#FAF8F5)
- Text: Soft charcoal (#3D3D3D)
- Therapy: Slate blue (#5B7B8A)
- Wellness: Sage green (#7A9B8A)

---

### CONFLICT #3: COMPONENT NAMING - |UXUIDC| PREFIX

**The Problem:** 
- `instructions.md` (lines 177-215) REQUIRES `|UXUIDC|` prefix on all components
- `pathways-cursor-build-outline.md` defines components WITHOUT prefix
- Current landing page has NO prefix (inline components)

| Source | Says |
|--------|------|
| `instructions.md` | `\|UXUIDC\|Navigation`, `\|UXUIDC\|Footer`, etc. |
| `pathways-cursor-build-outline.md` | `CrisisBanner.tsx`, `WellnessBookingCTA.tsx` |
| Current Build | Inline in `page.tsx` |

**Why This Matters:**
- When we build shared components in `packages/shared/`, which naming to use?
- Pipe characters in filenames can cause OS issues
- React doesn't like special characters in component names

**RESOLUTION NEEDED:**
```
□ Decide: Skip |UXUIDC| prefix for this project (recommended)
□ Document: Standard PascalCase naming is acceptable
□ Update: instructions.md to note prefix is OPTIONAL for client projects
```

---

### CONFLICT #4: CRISIS BANNER SCOPE ✅ RESOLVED

**Resolution (December 2025):**
- **REQUIRED (NY State):** Therapy site + Wellness site (all pages)
- **RECOMMENDED:** Landing page (current build has it, but not mandated)

See `MASTER-RULES.md` for implementation details.

---

### CONFLICT #5: JANE INTEGRATION APPROACH

**The Problem:** Conflicting approaches to Jane booking:

| Document | Says |
|----------|------|
| `system-requirements.md` (line 56-66) | "Embed Jane booking widgets" |
| `pathways-wellness-cursor-rules.md` (line 23-28) | "NO embedded booking widgets" |
| `pathways-internal-discovery-temp-plan.md` | "Simple link to Jane - no embed" |
| `pathways-cursor-build-outline.md` (line 906-963) | Detailed JaneBookingButton component with link approach |

**Note:** The wellness rules say no widgets, but that's specifically for WELLNESS (which doesn't use Jane). But the general guidance is inconsistent.

**Why This Matters:**
- For therapy site: Should we embed Jane widget or link to Jane?
- Embedded widgets = better UX, but more complex
- Links = simpler, but takes user off-site

**RESOLUTION NEEDED:**
```
□ Clarify: Phase 1 = Direct links to Jane (simpler, compliant)
□ Clarify: Phase 2+ = Consider embed if client requests
□ Document: JaneBookingButton component uses LINKS, not embeds
```

---

### CONFLICT #6: STATIC VS DYNAMIC ARCHITECTURE

**The Problem:** Current build is static (`output: 'export'`), but requirements suggest dynamic features:

| Requirement | Static Export Works? |
|-------------|---------------------|
| Multi-step forms with session state | ❌ Limited (client-side only) |
| API routes for form submission | ❌ No (requires server) |
| Quiz state persistence | ⚠️ localStorage only |
| Future CRM integration | ❌ No server to proxy |
| Search functionality | ⚠️ Client-side only |
| Spanish language toggle | ✓ Yes (if pre-built) |

**Why This Matters:**
- Current landing page works as static
- But full therapy/wellness sites need forms that EMAIL submissions
- Static export can't run API routes
- Need server for email sending (Resend, SendGrid, etc.)

**RESOLUTION NEEDED:**
```
□ Decide: Keep static for LANDING page only
□ Decide: Therapy + Wellness sites need NODE server (not static export)
□ Update: next.config.js to REMOVE output: 'export' for therapy/wellness
□ Document: Which pages are static vs dynamic
```

---

## 🔶 SIGNIFICANT GAPS (Need Specification Before Building)

---

### GAP #1: ROUTING & DOMAIN STRATEGY

**What's Missing:** No specification for how the 3 sites relate:

**Questions:**
- Are these separate deployments or one monorepo?
- URL structure: `pathwayswithin.com/therapy/` or `therapy.pathwayswithin.com`?
- How does landing page link to therapy/wellness sites?
- If separate domains, how do shared components work?

**Options:**
```
Option A: Single deployment, path-based routing
  pathwayswithin.com/           → Landing
  pathwayswithin.com/therapy/   → Therapy site
  pathwayswithin.com/wellness/  → Wellness site

Option B: Separate deployments, separate domains
  pathwayswithin.com            → Landing
  pathwaystherapy.com           → Therapy
  pathwayswellness.com          → Wellness

Option C: Subdomains
  www.pathwayswithin.com        → Landing
  therapy.pathwayswithin.com    → Therapy
  wellness.pathwayswithin.com   → Wellness
```

**RECOMMENDATION:** Option A (single deployment) is simplest for shared components and SEO.

---

### GAP #2: SHARED NAVIGATION STRATEGY

**What's Missing:** How navigation works across 3 sites:

| Page | Current Nav | Should Show |
|------|-------------|-------------|
| Landing | Therapy, Wellness, About, Locations, Contact | ✓ All |
| Therapy Home | ? | Therapy services, Team, Locations, Contact, (Wellness link in footer) |
| Wellness Home | ? | Wellness services, About, Locations, Contact, (Therapy link in footer) |

**Questions:**
- Does each site have its own navigation?
- Should therapy site nav link back to landing?
- How prominent should cross-site links be?

**RECOMMENDATION:** Create 3 navigation configurations in shared package.

---

### GAP #3: FORM SUBMISSION ARCHITECTURE

**What's Missing:** Technical spec for form handling across sites:

| Form Type | Where Used | Current Solution | Future Solution |
|-----------|------------|------------------|-----------------|
| Contact | All sites | None built | API route → Email |
| Spa Inquiry | Wellness | None built | API route → Email |
| Therapy Inquiry | Therapy | None built | Link to Jane |
| Quiz Results | Landing, Both | Built (client-side) | May need API for email |
| Newsletter | All sites | None built | API → Mailchimp/CRM |

**Required Spec:**
```
1. API route at /api/contact for all form submissions
2. Route determines destination email based on form type
3. Store submissions temporarily for analytics
4. Integrate with future CRM via environment variable
```

---

### GAP #4: SEARCH FUNCTIONALITY SPEC

**What's Missing:** Technical spec for search:

| Current State | What's Needed |
|---------------|---------------|
| Mock search with hardcoded results | Real search across all content |
| No specification for what's searchable | Define: services, locations, team members, FAQs |
| No specification for search UX | Define: results format, filtering, no-results state |

**Options:**
```
Option A: Client-side search (Lunr.js, FlexSearch)
  - Build search index at build time
  - Fast, works with static export
  - Limited to pre-built content

Option B: Server-side search (API route)
  - Search database/CMS
  - Requires server
  - Can search dynamic content

Option C: Third-party (Algolia, Typesense)
  - Best search quality
  - Additional cost
  - Easy integration
```

**RECOMMENDATION:** Option A for Phase 1 (client-side), Option C for Phase 2+ if needed.

---

### GAP #5: INTERACTIVE QUIZ IMPLEMENTATION

**What's Missing:** Technical spec for quiz implementation:

`interactive-enhancement-specification.md` defines the quiz CONTENT but not:
- State management approach
- Results persistence
- Email capture integration
- Analytics tracking
- Accessibility requirements

**Required Spec:**
```typescript
// Quiz state management
interface QuizState {
  currentStep: number;
  answers: Record<string, string | string[]>;
  result: string | null;
  completedAt: Date | null;
}

// Events to track
- quiz_started
- quiz_step_completed
- quiz_completed
- quiz_abandoned
- quiz_result_clicked
```

---

### GAP #6: LOCATION DATA STRUCTURE

**What's Missing:** Single source of truth for locations:

**Current State:** Location data scattered across:
- `pathways-cursor-build-outline.md` (addresses)
- Content markdown files (partial)
- Landing page (hardcoded)

**Required Spec:**
```typescript
// /lib/constants/locations.ts

export const THERAPY_LOCATIONS = [
  {
    id: 'smithtown',
    name: 'Smithtown',
    address: '496 Smithtown Bypass, Suite 203',
    city: 'Smithtown',
    state: 'NY',
    zip: '11787',
    phone: '(631) 371-3825',
    coordinates: { lat: 40.855, lng: -73.200 },
    services: ['individual', 'couples', 'family', 'emdr', 'trauma'],
  },
  // ... etc
];

export const WELLNESS_LOCATIONS = [
  {
    id: 'massapequa',
    name: 'Massapequa',
    address: '4160 Merrick Rd, Suite 5 & 7',
    // ...
  },
  // ...
];
```

---

### GAP #7: SEO STRATEGY FOR MULTI-SITE

**What's Missing:** SEO specifications for 3 related sites:

**Questions:**
- Canonical URLs across sites?
- How to avoid duplicate content (shared locations page)?
- Schema.org markup for each site type?
- Sitemap strategy (one or three)?

**Required Spec:**
```
Landing Page: Organization schema
Therapy Site: MedicalBusiness + LocalBusiness schema
Wellness Site: HealthAndBeautyBusiness + LocalBusiness schema

Sitemap: One combined sitemap.xml with all URLs
Canonicals: Each page is its own canonical (no cross-site)
```

---

### GAP #8: SPANISH TRANSLATION PROCESS

**What's Missing:** `system-requirements.md` requires Spanish, but no spec:

| Question | Not Answered |
|----------|--------------|
| Who provides translations? | Unknown |
| What content is translated? | All pages? Just key pages? |
| How is translation structured? | i18n library? Duplicate pages? |
| How is it maintained? | CMS? Code? |

**Options:**
```
Option A: next-intl or react-i18next
  - Industry standard
  - Supports routing (/es/...)
  - Requires translation JSON files

Option B: Duplicate pages
  - /services/massage/
  - /es/servicios/masaje/
  - More work, better SEO

Option C: Phase 2+
  - Launch English-only
  - Add Spanish after validation
```

**RECOMMENDATION:** Option C - defer to Phase 2, launch English-only.

---

### GAP #9: ERROR HANDLING & EDGE CASES

**What's Missing:** No specification for:

| Scenario | Not Specified |
|----------|---------------|
| 404 Not Found | Page design, content, links |
| Form submission failure | Error messaging, retry UX |
| Jane booking unavailable | Fallback behavior |
| Maintenance mode | Page design |
| Slow connection | Loading states |

**Required:** Design and build 404 page, error states for all forms.

---

### GAP #10: BACKEND DATABASE SCHEMA GAPS

**What's Missing:** `system-requirements.md` defines leads table, but not:

| Missing Table | Purpose |
|---------------|---------|
| `users` | Admin dashboard users |
| `campaigns` | Marketing campaigns |
| `analytics_events` | Custom event tracking |
| `content` | CMS content |
| `services` | Service catalog |
| `locations` | Location data |
| `team_members` | Provider profiles |

**Note:** Some of this may be handled by CRM in Phase 2+, but need to plan structure.

---

## 📋 RESOLUTION ACTION ITEMS

### Immediate (Before Building More Pages)

| # | Action | Document to Update |
|---|--------|-------------------|
| 1 | Confirm hierarchy: Build Outline > Design System > instructions.md | MASTER-RULES.md |
| 2 | Clarify crisis banner scope by site | MASTER-RULES.md |
| 3 | Document component naming (no prefix) | MASTER-RULES.md |
| 4 | Decide static vs dynamic per site | next.config.js |
| 5 | Define routing/domain strategy | MASTER-RULES.md |
| 6 | Create shared location data file | /lib/constants/locations.ts |

### Before Therapy Site Build

| # | Action |
|---|--------|
| 7 | Create navigation config for therapy site |
| 8 | Build form submission API routes |
| 9 | Implement real search functionality |
| 10 | Build 404 page |

### Before Wellness Site Build

| # | Action |
|---|--------|
| 11 | Create navigation config for wellness site |
| 12 | Confirm wellness crisis banner approach |
| 13 | Build spa inquiry form |

### Before Backend Build

| # | Action |
|---|--------|
| 14 | Finalize database schema |
| 15 | Define API endpoints |
| 16 | Plan CRM integration approach |

---

## 🎯 RECOMMENDED RESOLUTION PRIORITY

```
HIGH PRIORITY (Block Progress):
1. Static vs Dynamic decision
2. Routing/domain strategy
3. Form submission architecture

MEDIUM PRIORITY (Need Before Deep Build):
4. Crisis banner scope
5. Navigation strategy
6. Location data structure

LOWER PRIORITY (Can Defer):
7. Spanish translation
8. Advanced search
9. Backend schema details
```

---

## DOCUMENT UPDATES REQUIRED

| Document | Update Needed |
|----------|---------------|
| `MASTER-RULES.md` | Add resolutions for all HIGH priority conflicts |
| `system-requirements.md` | Update hierarchy to align with build outline |
| `instructions.md` | Add note that it's a TEMPLATE, project-specific rules override |
| `pathways-cursor-build-outline.md` | Add technical specs for gaps identified |
| `design-system.md` | Add explicit "This overrides instructions.md for this project" |

---

*Document Version: 1.1*
*Created: December 27, 2025*
*Updated: December 27, 2025*
*Status: Key conflicts resolved - see MASTER-RULES.md*

