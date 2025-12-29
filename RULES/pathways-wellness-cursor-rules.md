# PATHWAYS WITHIN WELLNESS: CURSOR RULES
## Compliance, Content & Integration Guidelines for Spa Website Development

**Document Version:** 1.1  
**Last Updated:** December 2024  
**Authority:** This document supplements the main system-requirements.md and takes precedence for wellness-specific content and temporary integrations.

---

## HIERARCHY OF INSTRUCTIONS

1. **PRIMARY:** instructions.md (always takes precedence)
2. **SECONDARY:** system-requirements.md (technical architecture)
3. **TERTIARY:** This document (wellness content compliance + integration rules)
4. **QUATERNARY:** Cursor's best judgment for implementation details

---

## CRITICAL: TEMPORARY INTEGRATION APPROACH

**The frontend is decoupled from all backend systems.**

Until backend decisions are finalized:
- NO dependencies on TrustDrivenCare
- NO embedded booking widgets
- NO payment processing
- ALL forms submit via simple email (Resend/SendGrid/Formspree)
- ALL booking CTAs are phone numbers + inquiry forms

**This means:**
- Build everything as if there is no backend
- Structure data cleanly for future CRM connection
- Use environment variables for any URLs/endpoints
- Components must work with zero integrations

---

## SECTION 0: TEMPORARY INTEGRATION SPECIFICATIONS

### 0.1 Booking Components

**Wellness Booking CTA (Use This Pattern):**
```jsx
// components/booking/WellnessBookingCTA.jsx

export function WellnessBookingCTA({ 
  serviceName = null,
  location = null 
}) {
  return (
    <section className="booking-cta">
      <h2>Book Your {serviceName || 'Appointment'}</h2>
      <p className="booking-phone">
        Call to schedule: <a href="tel:5163369209">(516) 336-9209</a>
      </p>
      <p className="booking-alt">Or request an appointment online:</p>
      <InquiryForm 
        preselectedService={serviceName}
        preselectedLocation={location}
      />
    </section>
  );
}
```

**Therapy Booking CTA (Use This Pattern):**
```jsx
// components/booking/TherapyBookingCTA.jsx

const JANE_URL = process.env.NEXT_PUBLIC_JANE_BOOKING_URL 
  || 'https://pathwayswithintherapy.janeapp.com/';

export function TherapyBookingCTA() {
  return (
    <section className="booking-cta">
      <h2>Schedule Your Appointment</h2>
      <a 
        href={JANE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Book Online
      </a>
      <p className="booking-phone">
        Or call: <a href="tel:6313713825">(631) 371-3825</a>
      </p>
    </section>
  );
}
```

### 0.2 Form Components

**Inquiry Form (Wellness):**
```jsx
// components/forms/InquiryForm.jsx

const SERVICES = [
  'Massage',
  'Acupuncture', 
  'Facials',
  'IV Therapy',
  'RF Microneedling',
  'Laser Services',
  'Energy Work',
  'Body Sculpting',
  'Pain Management',
  'Other'
];

const LOCATIONS = ['Massapequa', 'Garden City'];

const TIMING_OPTIONS = [
  'Weekday Morning',
  'Weekday Afternoon', 
  'Weekday Evening',
  'Weekend'
];

export function InquiryForm({ 
  preselectedService = null,
  preselectedLocation = null 
}) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    service_interest: preselectedService || '',
    preferred_location: preselectedLocation || '',
    preferred_timing: '',
    message: '',
    marketing_opt_in: false,
    // Meta fields (auto-populated)
    practice: 'wellness',
    source: 'website',
    form_type: 'spa_inquiry'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitForm(formData);
    // Handle success/error
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

**Contact Form (General):**
```jsx
// components/forms/ContactForm.jsx

export function ContactForm({ practice = 'wellness' }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    preferred_contact: 'email',
    message: '',
    marketing_opt_in: false,
    // Meta
    practice: practice,
    source: 'website',
    form_type: 'contact'
  });

  // ... form implementation
}
```

### 0.3 Form Submission Handler

**Temporary Email-Based Submission:**
```javascript
// lib/submitForm.js

export async function submitForm(formData) {
  const endpoint = '/api/contact';
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        submitted_at: new Date().toISOString(),
        page_url: typeof window !== 'undefined' ? window.location.href : ''
      })
    });
    
    if (!response.ok) throw new Error('Submission failed');
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error };
  }
}
```

**API Route:**
```javascript
// app/api/contact/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAILS = {
  therapy: process.env.THERAPY_CONTACT_EMAIL || 'welcome@pathwayswithin.com',
  wellness: process.env.WELLNESS_CONTACT_EMAIL || 'info@pathwayswithinwellness.com'
};

export async function POST(request) {
  const data = await request.json();
  
  const toEmail = EMAILS[data.practice] || EMAILS.wellness;
  
  const emailHtml = formatSubmissionEmail(data);
  
  try {
    await resend.emails.send({
      from: 'Pathways Within Website <website@pathwayswithin.com>',
      to: toEmail,
      subject: `New ${data.form_type} - ${data.first_name} ${data.last_name}`,
      html: emailHtml
    });
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false }, { status: 500 });
  }
}

function formatSubmissionEmail(data) {
  return `
    <h2>New ${data.form_type === 'spa_inquiry' ? 'Appointment Inquiry' : 'Contact Form'}</h2>
    
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    ${data.preferred_contact ? `<p><strong>Prefers:</strong> ${data.preferred_contact}</p>` : ''}
    
    ${data.service_interest ? `
    <h3>Service Request</h3>
    <p><strong>Service:</strong> ${data.service_interest}</p>
    <p><strong>Location:</strong> ${data.preferred_location || 'Not specified'}</p>
    <p><strong>Timing:</strong> ${data.preferred_timing || 'Not specified'}</p>
    ` : ''}
    
    ${data.message ? `
    <h3>Message</h3>
    <p>${data.message}</p>
    ` : ''}
    
    <hr>
    <p><small>
      Submitted: ${data.submitted_at}<br>
      Source: ${data.source}<br>
      Page: ${data.page_url}<br>
      Marketing opt-in: ${data.marketing_opt_in ? 'Yes' : 'No'}
    </small></p>
  `;
}
```

### 0.4 Environment Variables

```env
# Required for form submission
RESEND_API_KEY=re_xxxxxxxxxxxx

# Destination emails
THERAPY_CONTACT_EMAIL=welcome@pathwayswithin.com
WELLNESS_CONTACT_EMAIL=info@pathwayswithinwellness.com

# External links
NEXT_PUBLIC_JANE_BOOKING_URL=https://pathwayswithintherapy.janeapp.com/

# Placeholder for future integrations
CRM_ENDPOINT=
CRM_API_KEY=
SPA_BOOKING_WIDGET_ID=
```

### 0.5 What NOT to Build

```
❌ DO NOT build or embed:
   - TrustDrivenCare chat widget
   - TrustDrivenCare forms
   - Any booking calendar/widget
   - Payment processing
   - Client portal
   - Appointment management
   
✅ DO build:
   - Static pages with content
   - Simple inquiry forms (email submission)
   - Phone number CTAs
   - Links to Jane (therapy only)
   - Contact forms (email submission)
```

---

## SECTION 1: COMPLIANCE FRAMEWORK

### 1.1 Regulatory Context

Pathways Within Wellness operates in a regulated environment:

- **FTC Act:** Prohibits unfair/deceptive practices in advertising
- **FTC Health Products Guidance:** Requires substantiation for health claims
- **NYS Consumer Protection Laws:** State-level advertising regulations
- **Professional Licensing:** Some services require licensed practitioners

**NOTE:** While wellness/spa services are generally NOT covered by HIPAA directly, the cross-promotion with our sister therapy practice (which IS covered) creates compliance obligations. All content must be written assuming HIPAA-adjacent scrutiny.

### 1.2 The Sister Practice Relationship

Pathways Within Wellness and Pathways Within Therapy:
- Operate under common ownership
- Share two physical locations (Massapequa, Garden City)
- Must disclose this relationship in cross-promotional content
- Cannot share client information for marketing without authorization

---

## SECTION 2: ABSOLUTE CONTENT RULES

### 2.1 NEVER Make These Claims

Cursor must NEVER generate content that:

#### Health Outcome Claims
```
❌ "Massage will reduce your anxiety"
❌ "Acupuncture cures [any condition]"
❌ "IV therapy will boost your immune system"
❌ "This treatment will [specific health outcome]"
```

#### Diagnosis or Diagnosis-Adjacent Language
```
❌ "If you're experiencing [symptom], you may have [condition]"
❌ "Your body is telling you something"
❌ "This tension could be from unresolved [trauma/stress/emotions]"
❌ "Signs you need [any service]"
```

#### Superlatives Without Substantiation
```
❌ "Best massage on Long Island"
❌ "Most effective treatment for..."
❌ "Guaranteed results"
❌ "100% success rate"
```

#### Cross-Practice Clinical Claims
```
❌ "Massage enhances therapy outcomes"
❌ "Complements your mental health treatment"
❌ "Releases what therapy surfaces"
❌ "Accelerates healing when combined with therapy"
```

#### Implied Medical Advice
```
❌ "You should try [treatment] for your [condition]"
❌ "If [symptom], consider [our service]"
❌ "Talk to us about your [health concern]"
```

### 2.2 ALWAYS Include These Elements

#### Ownership Disclosure (Required on Cross-Promotional Content)
```
✅ "Pathways Within Wellness and Pathways Within Therapy operate 
   under common ownership."
```

#### Service Limitation Disclaimer (Required on All Service Pages)
```
✅ "Wellness services are not medical treatment and do not substitute 
   for professional medical or mental health care."
```

#### Practitioner Credentials (When Applicable)
```
✅ "Services provided by licensed [massage therapist/acupuncturist/etc.]"
```

### 2.3 Compliant Language Patterns

**Instead of outcome claims, use experience language:**

| ❌ Outcome Claim | ✅ Experience Language |
|-----------------|----------------------|
| "Reduces stress" | "Many people find massage relaxing" |
| "Cures headaches" | "Massage focuses on areas of tension" |
| "Boosts immunity" | "IV therapy delivers vitamins directly" |
| "Heals trauma" | "Energy work is a relaxation practice" |
| "Improves mood" | "A spa day can be a form of self-care" |

**Instead of diagnosis, use general information:**

| ❌ Diagnosis Language | ✅ General Information |
|----------------------|----------------------|
| "If tension keeps coming back, it might be emotional" | "Massage addresses muscle tension" |
| "Your body holds onto stress" | "Many people carry tension in their shoulders" |
| "Signs you need acupuncture" | "About acupuncture: how it works" |

---

## SECTION 3: SERVICE PAGE CONTENT RULES

### 3.1 Structure for Service Pages

Every service page should follow this structure:

```markdown
# [SERVICE NAME]

## What is [Service]?
[Factual description of what the service IS, not what it DOES to the body]

## What to Expect
[Description of the client experience during the service]

## Session Details
- Duration: [time]
- Pricing: [cost]
- Frequency: [typical recommendation without outcome promises]

## Frequently Asked Questions
[Compliant Q&A - see Section 3.3]

## Book Your Appointment
[CTA with contact info]

## Disclaimer
[Required service limitation disclaimer]
```

### 3.2 Writing Service Descriptions

**DO describe:**
- What the service involves (the process)
- What the client will experience (sensations, environment)
- How long it takes
- What preparation is needed
- What aftercare involves

**DO NOT describe:**
- What health conditions it treats
- What symptoms it alleviates
- What outcomes the client will achieve
- How it compares to medical treatment

**Example - Massage:**

```markdown
❌ WRONG:
"Swedish massage reduces stress, relieves muscle pain, improves 
circulation, and promotes better sleep. If you're struggling with 
tension headaches or chronic back pain, massage therapy can provide 
significant relief."

✅ CORRECT:
"Swedish massage uses long, flowing strokes applied with varying 
pressure. During your session, you'll lie on a comfortable table in 
a quiet room while your therapist works through a sequence of 
techniques. Many people find this a relaxing experience. Sessions 
are available in 30, 60, or 90-minute lengths."
```

**Example - Acupuncture:**

```markdown
❌ WRONG:
"Acupuncture treats anxiety, depression, chronic pain, migraines, 
digestive issues, and insomnia. By restoring the flow of Qi, 
acupuncture addresses the root cause of your symptoms."

✅ CORRECT:
"Acupuncture is a traditional practice involving the insertion of 
thin needles at specific points on the body. During your session, 
you'll rest comfortably while the needles remain in place for 
20-30 minutes. Our licensed acupuncturist will discuss your goals 
and customize the session to your preferences."
```

### 3.3 FAQ Compliance

**Compliant FAQ patterns:**

```markdown
### Is [service] safe?
"[Service] is generally considered safe when performed by a trained 
practitioner. We recommend consulting with your healthcare provider 
if you have specific health concerns or conditions."

### How often should I get [service]?
"Frequency varies based on individual preferences. Some clients 
come weekly, others monthly. Your practitioner can discuss options 
during your visit."

### What should I expect after [service]?
"After [service], you may feel [physical sensations like relaxed, 
tired, etc.]. We recommend [aftercare instructions]. Everyone's 
experience is different."
```

**Non-compliant FAQ patterns to avoid:**

```markdown
❌ "How many sessions until I see results?"
   [Implies guaranteed outcomes]

❌ "Can [service] help with my [condition]?"
   [Invites medical claims]

❌ "Is [service] better than [medical treatment]?"
   [Compares to medical care]
```

---

## SECTION 4: CROSS-PROMOTION RULES

### 4.1 Mentioning the Therapy Practice

**ALLOWED:**
- Stating that a sister therapy practice exists
- Providing contact information for the therapy practice
- Noting shared locations
- Including ownership disclosure

**NOT ALLOWED:**
- Claiming wellness services enhance therapy
- Suggesting clients "need" therapy based on wellness visit
- Implying coordinated treatment plans
- Using clinical language to describe the relationship

### 4.2 Compliant Cross-Promotion Module

Use this exact module (or minor variations) when mentioning therapy:

```markdown
---

## Pathways Within Therapy

Our sister practice offers mental health services at five Long Island 
locations plus telehealth.

📞 (631) 371-3825 | pathwaystherapy.com

*Pathways Within Wellness and Pathways Within Therapy operate under 
common ownership. Wellness services are separate from and do not 
substitute for mental health treatment.*

---
```

### 4.3 Placement Rules

- Cross-promotion module goes in footer or sidebar
- NOT integrated into service description content
- NOT positioned as a clinical recommendation
- NOT triggered by any user behavior or input

---

## SECTION 5: SPECIFIC SERVICE GUIDELINES

### 5.1 IV Vitamin Infusion

**Special Caution:** IV therapy is the most regulated wellness service.

**ALLOWED claims:**
- "IV therapy delivers vitamins directly into the bloodstream"
- "Bypasses the digestive system"
- "Sessions take 30-60 minutes"
- "Administered by trained medical staff"

**NOT ALLOWED claims:**
- "Boosts immune system"
- "Cures hangovers"
- "Increases energy"
- "Treats [any condition]"
- Any claim about what vitamins DO in the body

**Required elements:**
- Note that services are administered by licensed medical professionals
- Recommend consulting healthcare provider before treatment
- List contraindications (or note they'll be discussed at intake)

### 5.2 Energy Work (Reiki, IET)

**Special Caution:** Cannot make any claims about energy, chakras, or healing.

**ALLOWED language:**
- "Reiki is a relaxation practice"
- "You'll lie fully clothed while the practitioner places hands on or near your body"
- "Many people find it calming"
- "Sessions are [duration]"

**NOT ALLOWED language:**
- "Clears energy blocks"
- "Balances chakras"
- "Heals [anything]"
- "Releases trauma"
- "Works on the energetic level"

### 5.3 Acupuncture

**Special Caution:** Must note that practitioner is licensed.

**ALLOWED language:**
- "Traditional practice"
- "Thin needles at specific points"
- "Performed by licensed acupuncturist"
- Description of the experience

**NOT ALLOWED language:**
- "Treats [any condition]"
- "Restores Qi flow"
- "Addresses root cause"
- Any list of conditions it treats

### 5.4 Aesthetic Services (RF Microneedling, Laser, PRP)

**Special Caution:** Medical aesthetic services require careful language.

**ALLOWED language:**
- Description of the technology/process
- What the procedure involves
- Recovery time and aftercare
- "Results vary by individual"
- "Consultation required"

**NOT ALLOWED language:**
- "Reverses aging"
- "Eliminates wrinkles"
- Specific outcome percentages without citation
- Before/after promises

### 5.5 Pain Management Services

**Special Caution:** Highest risk for medical claims.

**ALLOWED language:**
- "Pain management consultation available"
- "Trigger point injections administered by [credential]"
- "Discuss your concerns with our specialist"

**NOT ALLOWED language:**
- "Cures chronic pain"
- "Eliminates [type of pain]"
- "Better than [medical treatment]"
- Any diagnostic language

---

## SECTION 6: FORM AND INTAKE RULES

### 6.1 What We CAN Collect (Public Website)

Per system-requirements.md, public forms may collect:
- First name, last name
- Email, phone
- Preferred contact method
- Service interest
- Preferred location
- Preferred timing
- How they heard about us
- General questions (text field)

### 6.2 What We CANNOT Collect (Public Website)

- Health conditions
- Symptoms
- Medical history
- Diagnoses
- Medications
- Insurance information
- Reasons for seeking treatment (beyond service interest)

### 6.3 Optional Marketing Authorization

If implementing cross-practice marketing opt-in, use this exact language:

```markdown
☐ I authorize Pathways Within to send me information about therapy 
  services at our sister practice, Pathways Within Therapy. I understand 
  this is optional and will not affect my services.
```

---

## SECTION 7: IMAGERY AND VISUAL RULES

### 7.1 Compliant Imagery

**DO use:**
- Photos of the spa environment (rooms, products, ambiance)
- Photos of practitioners (with consent)
- Stock photos of relaxation (without implied outcomes)
- Equipment and treatment room photos

**DO NOT use:**
- Before/after photos (unless with extensive disclaimers)
- Images implying medical treatment
- Images showing distress followed by relief (implies outcome)
- Clinical/medical imagery

### 7.2 Infographics and Diagrams

**DO NOT create:**
- "Benefits of [service]" infographics with health claims
- Diagrams showing how treatments affect the body
- Charts comparing wellness services to medical treatments
- "Symptoms that indicate you need [service]" graphics

---

## SECTION 8: TESTIMONIAL AND REVIEW RULES

### 8.1 General Rule

**Testimonials are HIGH RISK for wellness services.** The FTC requires that testimonials reflect typical results, and we cannot guarantee any results.

### 8.2 If Using Testimonials

- Must reflect typical experience, not exceptional results
- Cannot include health outcome claims
- Must have written permission
- Should focus on experience (service quality, environment, staff) not outcomes
- Include disclaimer: "Individual experiences vary"

### 8.3 Compliant Testimonial Examples

```markdown
✅ "The spa is beautiful and the staff made me feel comfortable."
✅ "I found my massage appointment relaxing."
✅ "The facilities are clean and professional."

❌ "My headaches went away after three sessions!"
❌ "This cured my anxiety!"
❌ "Best treatment for back pain I've ever tried."
```

---

## SECTION 9: BLOG AND EDUCATIONAL CONTENT

### 9.1 Allowed Topics

- What to expect at your first [service] appointment
- How to prepare for [service]
- Self-care tips (general wellness, not treatment)
- Behind the scenes at the spa
- Meet our team profiles
- Spa environment and products used

### 9.2 Topics Requiring Extreme Caution

- "Benefits of [service]" - must not make health claims
- "Who should try [service]" - must not suggest for conditions
- Anything comparing wellness to medical treatment

### 9.3 Topics to Avoid Entirely

- "[Service] for [health condition]"
- "How [service] treats [symptom]"
- "Signs you need [service]"
- Any content that could be construed as medical advice

---

## SECTION 10: TECHNICAL IMPLEMENTATION NOTES

### 10.1 Disclaimer Component

Create a reusable disclaimer component for service pages:

```jsx
<ServiceDisclaimer>
  Wellness services are not medical treatment and do not substitute 
  for professional medical or mental health care. Consult your 
  healthcare provider with any health concerns.
</ServiceDisclaimer>
```

### 10.2 Cross-Promotion Component

Create a reusable sister practice component:

```jsx
<SisterPractice 
  practice="therapy"
  phone="(631) 371-3825"
  website="pathwaystherapy.com"
/>
```

This component should always include the ownership disclosure.

### 10.3 Form Validation

Intake forms should NOT include fields that invite health disclosures:
- No "reason for visit" dropdown with conditions
- No "symptoms" text field
- No "health history" section
- "Service interest" should list services, not conditions

---

## SECTION 11: CONTENT REVIEW CHECKLIST

Before publishing ANY wellness content, verify:

☐ No health outcome claims
☐ No diagnosis or symptom language
☐ No comparison to medical treatment
☐ No superlatives without substantiation
☐ Service disclaimer included
☐ Ownership disclosure (if cross-promotional)
☐ Practitioner credentials noted (where applicable)
☐ No testimonials with outcome claims
☐ "Results vary" or similar qualifier present
☐ No "signs you need [service]" framing

---

## SECTION 12: ESCALATION AND EXCEPTIONS

### 12.1 When to Pause

If asked to create content that:
- Makes specific health claims
- Suggests treatments for conditions
- Compares wellness to medical care
- Uses client information for targeting

**STOP and flag for human review.**

### 12.2 Exception Process

Any exception to these rules requires:
1. Written approval from practice owner
2. Legal review (recommended)
3. Documentation of the exception and rationale

---

## QUICK REFERENCE CARD

### ✅ SAFE LANGUAGE
- "Many people find [service] relaxing"
- "Sessions are [duration]"
- "[Service] involves [description of process]"
- "Your practitioner will [what they do]"
- "Consultation available"

### ❌ UNSAFE LANGUAGE
- "[Service] treats/cures/heals [anything]"
- "Benefits include [health outcomes]"
- "If you're experiencing [symptom]"
- "Signs you need [service]"
- "Proven to [outcome]"

### 📋 REQUIRED ELEMENTS
- Service disclaimer on all service pages
- Ownership disclosure on cross-promotional content
- Credentials where applicable
- Contact information

---

*This document is effective immediately and applies to all wellness 
website content development.*

*Questions about compliance should be escalated to practice ownership 
or legal counsel.*
