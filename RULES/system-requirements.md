# WELLNESS WITHIN / PATHWAYS WITHIN
## Comprehensive System Requirements for Cursor Development

---

## HIERARCHY OF INSTRUCTIONS

| Priority | Source | Notes |
|----------|--------|-------|
| **PRIMARY** | `instructions.md` | Always takes precedence over everything |
| **SECONDARY** | This document (`system-requirements.md`) | Follow unless instructions.md conflicts |
| **TERTIARY** | Cursor's best judgment | For implementation details not covered |

---

## CRITICAL: CURSOR vs JANE RESPONSIBILITIES

> **Jane has NO public API.** All integration must use approved methods: widget embedding, iCal feeds, and Mailchimp sync.

### What Cursor Builds

| Function | Cursor's Responsibility |
|----------|------------------------|
| **Contact/Lead Forms** | Build multi-step form; store in admin backend |
| **Marketing Consent** | Build SMS/email opt-in with TCPA compliance |
| **Calendar Display** | Import Jane iCal feed; display read-only schedule |
| **Lead Management** | View submissions, filter, assign, track status |
| **Marketing Campaigns** | Email/SMS builder, promo codes, analytics |
| **Website Content** | All public pages, blog, provider bios |
| **Analytics** | Traffic, conversions, marketing ROI |
| **Accessibility** | WCAG 2.1 AA, language toggle, reduced motion |
| **Crisis Resources** | 988 banner on every page |

### What Jane Handles (DO NOT BUILD)

| Function | Jane's Responsibility | Cursor Action |
|----------|----------------------|---------------|
| **Appointment Booking** | Full booking system, availability, confirmations | Embed Jane widget only |
| **Clinical Intake Forms** | HIPAA-compliant intake, health history | Link to Jane, never replicate |
| **Treatment Consent** | Informed consent, telehealth consent | Jane handles in-app |
| **Waitlist** | Auto-notifications, management (Thrive plan) | Link to Jane waitlist |
| **Telehealth** | HIPAA-compliant video (1:1 and groups) | Never build competing system |
| **Insurance Verification** | Eligibility checks via Claim.MD | Display accepted insurers only |
| **Billing/Payments** | Jane Payments, invoicing, claims | Never handle payment |
| **Chart Notes/Records** | Full EHR, SOAP notes, 10,000+ templates | Never store PHI |
| **Patient Portal** | Secure portal, records access | Link to Jane portal |
| **Appointment Reminders** | Email and SMS reminders (built-in) | Marketing campaigns only |
| **Good Faith Estimates** | GFE template, signature collection | Display notice on website |

---

## JANE INTEGRATION SPECIFICATIONS

### Booking Widget Embedding

```html
<!-- Jane provides embed codes like this -->
<a href="https://[clinic].janeapp.com" class="jane-booking-button">Book Online</a>
```

- Jane provides HTML embed codes for "Book Online" buttons
- Buttons link directly to Jane's hosted booking page (NOT iframed)
- Available per-clinic, per-location, and per-practitioner
- Track clicks via Google Analytics 4 (Jane supports GA4)
- **Jane does NOT support Google Tag Manager or Meta Pixel** (privacy reasons)

### iCal Calendar Sync

```
# Jane provides private iCal URLs like:
https://[clinic].janeapp.com/calendar/[staff-id]/ical/[private-token].ics
```

**Sync Characteristics:**
- ONE-WAY only (Jane → external calendar)
- Changes in external calendar NOT reflected back in Jane
- Includes appointments and shifts
- Option to include/exclude appointment notes (may contain PHI)
- Refresh rate: typically every few hours (not real-time)

**What Cursor Should Build:**
- Backend service to fetch iCal feeds on schedule (recommend hourly)
- Parse iCal data into admin dashboard calendar view
- Display appointments as read-only with provider color-coding
- Add "View in Jane" links for each appointment
- Implement fallback handling if Jane feed fails
- Store only non-PHI metadata (time, provider name, service type)

### Mailchimp Integration

- Jane syncs patient contact lists to Mailchimp
- Can be manually triggered from Jane admin
- **Cursor option:** Build campaign tools with Mailchimp API, OR build independent email system using SendGrid

---

## THREE-LAYER ARCHITECTURE

### Layer 1: Customer-Facing Website (CURSOR BUILDS)

**Technology Stack:**
- React + Next.js
- Static HTML for marketing pages
- React Hook Form for validation

**Pages to Build:**

| Page | Priority | Notes |
|------|----------|-------|
| Home | Phase 1A | Hero, services overview, CTAs |
| About | Phase 1A | Mission, values, approach |
| Contact | Phase 1A | Multi-step form, location info |
| FAQ | Phase 1A | Common questions |
| Services (Overview) | Phase 1A | All modalities listed |
| Services (Individual) | Phase 1A | One page per service type |
| Locations (Overview) | Phase 1A | All locations with map |
| Locations (Individual) | Phase 1A | One page per location |
| Team/Providers | Phase 1A | Bios, credentials, photos |
| Privacy Policy | Phase 1A | Required legal page |
| Terms of Service | Phase 1A | Required legal page |
| Accessibility Statement | Phase 1A | Required for compliance |
| Blog/Resources | Phase 2 | Optional for Phase 1 |

**Interactive Components:**

| Component | Priority | Specifications |
|-----------|----------|----------------|
| Multi-step contact form | Phase 1B | 5-7 steps, progress indicator, auto-save |
| Service finder quiz | Phase 1B | Match symptoms to services |
| Location finder | Phase 1B | Map integration, distance search |
| Jane booking buttons | Phase 1A | Embedded widgets, NOT iframes |
| Crisis banner | Phase 1A | 988 visible on EVERY page |
| Accessibility widget | Phase 1B | Font size, contrast, reduced motion |
| Language toggle | Phase 1B | English/Spanish (full translation) |

### Layer 2: Admin Backend Dashboard (CURSOR BUILDS)

**Technology Stack:**
- React SPA
- Node.js/Next.js backend
- PostgreSQL (non-PHI only)

**Core Modules:**

| Module | Features |
|--------|----------|
| **Leads & Contacts** | View form submissions, filter/sort, assign to staff, add notes, track status (new/contacted/converted/lost) |
| **Appointments (Read-Only)** | Daily/weekly/monthly view from iCal import, color-coded by provider, links to Jane for details |
| **Marketing & Campaigns** | Email builder, SMS campaigns, promo codes, A/B testing, TCPA-compliant opt-out management |
| **Analytics & Reporting** | Traffic sources, conversion funnels, service popularity, marketing ROI, exports (PDF, CSV) |
| **Content Management** | Edit website text, upload images, manage team bios, publish blog posts |

**User Roles:**

| Role | Access |
|------|--------|
| Super Admin | Full access to everything |
| Marketing | Campaigns, analytics, content |
| Front Desk | View appointments, contact leads |
| Read-Only | View-only for stakeholders |

**Design Principles:**
- Clean dashboard layout (inspiration: Notion, Linear, Stripe)
- Left sidebar navigation
- Consistent action buttons (primary blue, secondary gray, danger red)
- Empty states with helpful guidance
- Tooltips for unclear features
- Keyboard shortcuts for power users

### Layer 3: Jane EHR (DO NOT BUILD)

Jane handles all clinical functions. Cursor only connects via:
- Widget embedding
- iCal feeds
- Mailchimp sync

---

## DATA COLLECTION RULES

### NEVER Collect on Public Website

```
❌ Social Security Numbers
❌ Date of Birth
❌ Medical history
❌ Health conditions / Diagnoses
❌ Treatment information
❌ Medications
❌ Insurance policy details (ID numbers, group numbers)
❌ Any Protected Health Information (PHI)
```

### ALLOWED to Collect

```
✅ First name, Last name
✅ Email address
✅ Phone number
✅ Preferred contact method
✅ Service interest (which therapy/wellness service)
✅ Preferred location
✅ Preferred timing (general availability like "mornings" or "weekends")
✅ Marketing attribution (how they found you)
✅ General questions/concerns (freeform text - but remind users not to share medical details)
```

---

## NY LEGAL & COMPLIANCE REQUIREMENTS

### Compliance Deadlines

| Requirement | Deadline | Status |
|-------------|----------|--------|
| Separate Payment Consent (PHL § 18-c) | October 2024 | **IN EFFECT** |
| 30-Day Breach Notification | December 2024 | **IN EFFECT** |
| TCPA 10-Day Opt-Out Rule | April 11, 2025 | **APPROACHING** |
| WCAG 2.1 AA (Federal Funding) | May 2026 | Plan now |

### Consent Requirements (Cursor Must Build)

**All checkboxes must be UNCHECKED by default (never pre-checked).**

#### Contact Form Required Consents:

```
☐ I agree to the Privacy Policy and Terms of Service *
   [Privacy Policy and Terms of Service are clickable links]
```

#### SMS Opt-In (TCPA Compliant):

```
☐ I consent to receive appointment reminders and updates via automated 
   SMS to the phone number provided. Message and data rates may apply. 
   Message frequency varies. Reply STOP to opt out at any time. 
   Consent is not a condition of service.
```

#### Marketing Email Opt-In:

```
☐ I'd like to receive wellness tips, resources, and special offers 
   via email. You can unsubscribe anytime.
```

### TCPA Compliance (April 2025 Rules)

| Requirement | Implementation |
|-------------|----------------|
| Prior Express Written Consent (PEWC) | Required for all marketing SMS |
| Consent disclosure | Must state automated technology is used |
| Condition statement | Must state consent is not condition of purchase |
| **Opt-out timing** | **Honor within 10 days** (new rule) |
| Opt-out method | Accept in "any reasonable manner" (not just "STOP") |
| Post-revocation | Only ONE clarification message permitted |
| Record retention | Keep opt-out records for 4 years |
| Message frequency | Healthcare: max 1x/day and 3x/week for automated |

### Crisis Resource Requirements

**988 Suicide & Crisis Lifeline must be visible on EVERY page.**

```html
<!-- Persistent header or footer element -->
<div class="crisis-banner">
  <p>In crisis? Support is available 24/7</p>
  <a href="tel:988">Call or text 988</a> | 
  <a href="https://988lifeline.org/chat">Chat</a>
  <p>Veterans: Press 1 | Español: Presione 2</p>
</div>
```

**Additional crisis resources to include:**
- Crisis Text Line: Text HOME to 741741
- NYC Well: 1-888-NYC-WELL (for NYC locations)
- Trevor Project (LGBTQ+): 1-866-488-7386

### Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|----------------|
| Reduced motion | Support `prefers-reduced-motion` CSS media query |
| Default motion | Default to reduced motion for mental health audiences |
| Session timeout | 2-3 minute warnings before auto-logout |
| Navigation | Skip navigation links |
| Heading hierarchy | Proper H1→H2→H3 structure |
| Alt text | Describe emotional context of images, not just content |
| Language | Full Spanish translation (not partial pages) |
| Form validation | Support non-English character sets |
| Color contrast | Minimum 4.5:1 for normal text, 3:1 for large text |

### Good Faith Estimate Website Notice

**Display prominently on booking/pricing pages:**

```
YOUR RIGHT TO A GOOD FAITH ESTIMATE

You have the right to receive a "Good Faith Estimate" explaining how 
much your mental health care will cost.

Under federal law, health care providers must give patients who don't 
have insurance or who are not using insurance an estimate of the 
expected charges for medical services, including mental health services.

• You can ask any provider for a Good Faith Estimate before scheduling 
  a service, or at any time during treatment
• If you receive a bill that is at least $400 more than your Good Faith 
  Estimate, you can dispute the bill
• Make sure to save a copy of your Good Faith Estimate

For questions or more information about your right to a Good Faith 
Estimate, visit www.cms.gov/nosurprises or call [Practice Phone].
```

---

## MENTAL HEALTH vs WELLNESS SERVICE DIFFERENTIATION

| Aspect | Mental Health Services | Wellness Services |
|--------|----------------------|-------------------|
| **Services** | Psychotherapy, Counseling, Psychiatric Care | Acupuncture, Massage, Nutrition Counseling |
| **Regulating Body** | NY Office of Mental Health (OMH) | NY State Education Dept (NYSED) |
| **HIPAA Applies** | Always (electronic billing) | Only if billing insurance electronically |
| **Crisis Integration** | Required (988 on all pages) | Recommended (footer placement) |
| **Provider Credential Display** | License type, number, state | License type, number, CE status |
| **Intake Routing** | Route to OMH-compliant workflows | Route to NYSED-compliant workflows |

**Implementation:**
- Service finder should route users to appropriate provider types
- Provider profiles should display correct credential format based on service type
- Wellness-only cash-pay providers may have simplified consent requirements

---

## DEVELOPMENT PHASES

### Phase 1A: Foundation (Weeks 1-4)

- [ ] Set up React + Next.js project structure
- [ ] Create design system (colors, typography, components)
- [ ] Build 5 core static pages (Home, About, Services, Locations, Contact)
- [ ] Implement basic contact form with consent checkboxes
- [ ] Add 988 crisis banner (persistent header/footer)
- [ ] Embed Jane booking widgets
- [ ] Create Privacy Policy, Terms of Service, Accessibility Statement pages
- [ ] Deploy to staging

### Phase 1B: Interactivity (Weeks 5-8)

- [ ] Build multi-step intake inquiry form (5-7 steps with progress indicator)
- [ ] Create service finder quiz
- [ ] Add location finder with map integration
- [ ] Implement accessibility widget (font size, contrast, motion)
- [ ] Add Spanish language toggle (full translation)
- [ ] WCAG 2.1 AA audit and fixes
- [ ] Form validation and error handling
- [ ] Auto-save for forms with resume capability

### Phase 2A: Backend Foundation (Weeks 9-12)

- [ ] Build admin dashboard framework (React SPA)
- [ ] Implement authentication and user roles
- [ ] Create leads management module
- [ ] Set up PostgreSQL database (non-PHI schema)
- [ ] Build Jane iCal import service (hourly sync)
- [ ] Implement consent audit logging (4-year retention for TCPA)

### Phase 2B: Backend Features (Weeks 13-16)

- [ ] Complete appointment display from Jane iCal
- [ ] Build marketing campaign tools (email/SMS)
- [ ] Implement TCPA-compliant opt-out management (10-day processing)
- [ ] Build analytics dashboard
- [ ] Create content management interface
- [ ] Export functionality (PDF, CSV)
- [ ] Staff training and UAT

---

## DESIGN PRINCIPLES

### Frontend Philosophy

```
✓ Calm, easy navigation (reduce cognitive load)
✓ Clear visual hierarchy
✓ Progressive disclosure (don't overwhelm)
✓ Trauma-informed design (no aggressive urgency, no time pressure)
✓ Mobile-first responsive
✓ Reduced motion as default for mental health contexts
✓ Warm, welcoming color palette
✓ Professional but approachable tone
```

### Backend Philosophy

```
✓ Super easy to use (staff training in minutes, not hours)
✓ Intuitive workflows with clear labeling
✓ Minimal clicks to complete tasks
✓ Forgiving (hard to make mistakes, undo capability)
✓ Dashboard answers questions at a glance
✓ Real-time updates where possible
✓ Mobile-responsive (tablet minimum)
```

**Design Inspiration:** Notion, Linear, Stripe

### Trust Signals to Include

- HIPAA compliance badge (for Jane integration)
- Professional license verification badges
- Association memberships displayed
- Real team photos (not stock images)
- Visible contact information
- Security badges (SSL)

---

## COMPETITIVE BENCHMARKS

### Research Before Building

Before creating any major feature, search for:
- `[feature] Northwell Health` (see how they implement it)
- `[feature] best practices New York healthcare 2025`
- `[feature] mental health website UX`

### Features to Match (Northwell Health)

| Feature | Implementation |
|---------|----------------|
| Forms-at-Home | Reminder cadence (5 days before, 1 day before) |
| Telehealth-first messaging | Position telehealth as primary modality |
| Provider profiles | Video introductions, first-person bios, specialty badges |
| Insurance display | Clear list of accepted insurers before booking |

### Features to Exceed

| Feature | How to Exceed |
|---------|---------------|
| Appointment availability | Show real available slots (Headway shows 48-hour availability) |
| Provider matching | Implement symptom-based matching algorithm |
| Fee transparency | Display session costs, sliding scale, superbill availability |
| Waitlist communication | Automated status updates every 2-4 weeks |

---

## PROVIDER PROFILE REQUIREMENTS

Each provider profile page should include:

| Element | Required | Notes |
|---------|----------|-------|
| Professional headshot | Yes | Eye contact, warm expression, recent |
| Full name with credentials | Yes | e.g., "Jane Smith, LCSW" |
| License type and number | Yes | "Licensed Clinical Social Worker, NY #123456" |
| Specialties | Yes | Plain-language explanations |
| Treatment approaches | Yes | e.g., "CBT, EMDR, Mindfulness-based" |
| Session formats | Yes | In-person, telehealth, group |
| Languages spoken | Yes | With fluency level |
| Bio (first-person) | Yes | "I believe..." not "Dr. Smith believes..." |
| Video introduction | Recommended | Growing industry standard |
| Fee information | Recommended | Session cost, insurance, sliding scale |
| Book Now button | Yes | Jane widget |

---

## FORM DESIGN SPECIFICATIONS

### Multi-Step Contact Form Structure

**Step 1: Basic Info**
- First name (required)
- Last name (required)
- Email (required)
- Phone (required)

**Step 2: Service Interest**
- What brings you here today? (dropdown or cards)
- Have you worked with a therapist/wellness provider before? (yes/no)

**Step 3: Preferences**
- Preferred location (dropdown)
- Preferred format: In-person / Telehealth / No preference
- General availability (checkboxes: mornings, afternoons, evenings, weekends)

**Step 4: Additional Info**
- Anything else you'd like us to know? (textarea)
- ⚠️ Include note: "Please do not include sensitive medical information here"

**Step 5: Consents**
- Privacy Policy / Terms of Service (required)
- SMS opt-in (optional)
- Email marketing opt-in (optional)

**Form Behavior:**
- Progress indicator showing current step
- Auto-save after each step
- Send resume link if abandoned (valid 72 hours)
- Extended timeout (5+ minutes per step)
- Helpful, non-alarming error messages

---

## DATABASE SCHEMA (NON-PHI ONLY)

```sql
-- Leads table (form submissions)
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
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
  consent_type VARCHAR(50), -- 'privacy_policy', 'terms', 'sms', 'email_marketing'
  consent_given BOOLEAN,
  consent_text TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Opt-out records (4-year TCPA retention)
CREATE TABLE optout_records (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  phone VARCHAR(20),
  optout_type VARCHAR(50), -- 'sms', 'email'
  optout_method VARCHAR(100), -- 'STOP', 'unsubscribe link', 'manual request'
  processed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Note: NEVER store PHI. No DOB, SSN, medical history, diagnoses, etc.
```

---

## TESTING CHECKLIST

### Before Launch

- [ ] WCAG 2.1 AA compliance audit (use axe DevTools)
- [ ] Mobile responsiveness testing (iOS Safari, Android Chrome)
- [ ] Form validation testing (all error states)
- [ ] Crisis banner visible on all pages
- [ ] Jane booking widgets functional
- [ ] iCal import working correctly
- [ ] Consent checkboxes not pre-checked
- [ ] Privacy Policy and Terms of Service accessible
- [ ] Spanish translation complete and accurate
- [ ] Reduced motion preference respected
- [ ] 988 links clickable on mobile (tel: protocol)
- [ ] SSL certificate valid
- [ ] Load time under 3 seconds
- [ ] Analytics tracking functional

### Ongoing Compliance

- [ ] TCPA opt-outs processed within 10 days
- [ ] Consent records retained 4+ years
- [ ] Breach notification capability tested
- [ ] Accessibility widget functional
- [ ] Crisis resources up to date

---

## DOCUMENTATION REQUIREMENTS

When building features, include code comments noting:

```javascript
/**
 * Contact Form Component
 * 
 * Compliance Notes:
 * - TCPA: SMS consent uses required disclosure language per 47 CFR 64.1200
 * - NY: Consent checkboxes unchecked by default per consumer protection laws
 * - Retention: Consent records stored 4 years per TCPA requirements
 * 
 * Source: FCC TCPA Order April 2025, NY Gen. Bus. Law § 349
 * 
 * Legal Review: Flagged for attorney review before launch
 */
```

---

## RESOURCES

### Jane App Documentation
- Features: https://jane.app/features
- Integrations: https://jane.app/integrations
- Online Booking: https://jane.app/guide/category/online-booking
- Wait List: https://jane.app/guide/category/wait-list-management
- Good Faith Estimates: https://jane.app/guide/creating-managing-good-faith-estimates-in-jane

### Compliance Resources
- No Surprises Act: https://www.cms.gov/nosurprises
- 988 Lifeline: https://988lifeline.org
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- NY SHIELD Act: https://ag.ny.gov/resources/organizations/data-breach-reporting

### Competitive Research
- Northwell Health Behavioral Health: https://www.northwell.edu/behavioral-health
- Headway: https://headway.co
- Alma: https://helloalma.com
- Grow Therapy: https://growtherapy.com

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | December 2024 | Complete rewrite with Cursor vs Jane delineation, NY compliance updates, TCPA April 2025 rules |
| 1.0 | Initial | Original requirements document |

---

*Document maintained by: [Practice Name]*
*Last updated: December 2024*
*Next review: Before Phase 2 launch*
