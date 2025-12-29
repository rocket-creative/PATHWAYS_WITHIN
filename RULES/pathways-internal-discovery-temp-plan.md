# PATHWAYS WITHIN: INTERNAL DISCOVERY & TEMPORARY INTEGRATION PLAN
## For George / Rocket Creative LLC - NOT FOR CLIENT

---

## PART 1: DISCOVERY (What We Need to Learn)

### 1.1 Current System Inventory

**Confirmed:**
- Jane App (therapy) - booking, EHR, insurance billing
- TrustDrivenCare - communication layer (slow, clunky per observation)

**Unknown - Need to Discover:**

| Question | Why It Matters |
|----------|----------------|
| What does spa currently use for booking? | Determines if we're replacing or building new |
| What does spa use for payments? | Square? Stripe? Cash only? In-person terminal? |
| How many staff need system access? | Affects licensing costs for any platform |
| What's their monthly volume? (appointments, transactions) | Sizing for any solution |
| What automations does TrustDrivenCare actually run? | Need to replicate or improve |
| Who manages TrustDrivenCare? How often? | Adoption indicator |
| What's the TrustDrivenCare monthly cost? | ROI comparison |
| Do they use Jane's built-in communication features? | Or only TrustDrivenCare? |
| What review platforms matter? (Google, Yelp, etc.) | For replacement feature parity |
| Is there a shared front desk or separate staff? | Workflow design |
| Do therapy and wellness share ANY clients currently? | Cross-practice data needs |

### 1.2 Pain Points to Validate

**Hypotheses (confirm with client):**
- [ ] Staff switches between too many systems
- [ ] Leads fall through cracks between systems
- [ ] No unified view of client across both practices
- [ ] Manual data entry / double entry
- [ ] Reporting requires pulling from multiple sources
- [ ] TrustDrivenCare is underutilized (paying for features not used)
- [ ] Spa booking is manual or phone-only

### 1.3 Jane API Reality Check

**Jane's API Limitations (known):**
- No public API for third-party booking integrations
- TrustDrivenCare has "exclusive" sync (their marketing claim)
- Webhooks may be available for some events
- Data export is possible but not real-time

**Implication:**
Jane stays as therapy system of record. We don't try to replace it. We work around its limitations or live with linking to it.

---

## PART 2: TEMPORARY FRONTEND PLAN

### 2.1 Philosophy

**For this week's build:**
- Frontend is 100% static/decoupled from backend decisions
- All "integrations" are just links or simple forms
- No dependencies on TrustDrivenCare, Jane embeds, or any third-party
- Everything can be swapped later without rebuilding pages

**The frontend should work perfectly with:**
- Zero integrations (just phone numbers and email)
- Future booking system (placeholder ready)
- Future CRM (forms structured for easy connection)
- Future payment processor (links only, no processing)

### 2.2 Temporary Solutions by Function

#### BOOKING (Therapy)

**This Week:**
```jsx
// Simple link to Jane - no embed, no dependency
<BookingCTA 
  title="Schedule Your Appointment"
  description="Book online through our secure patient portal"
  buttonText="Book Now"
  buttonHref="https://pathwayswithintherapy.janeapp.com/"
  phone="(631) 371-3825"
  external={true}
/>
```

**Why:** Jane's portal works. No need to embed. Link opens in new tab. Done.

**Future State:** Same link, or embed if client wants, or custom booking if we build it.

---

#### BOOKING (Wellness/Spa)

**This Week:**
```jsx
// Phone-first CTA with inquiry form fallback
<BookingCTA 
  title="Book Your Service"
  description="Call to schedule or request an appointment online"
  phone="(516) 336-9209"
  showInquiryForm={true}
/>
```

**Inquiry Form Fields:**
```
- First Name (required)
- Last Name (required)  
- Email (required)
- Phone (required)
- Service Interest (dropdown - required)
- Preferred Location (Massapequa / Garden City - required)
- Preferred Timing (dropdown - optional)
- Message (textarea - optional)
```

**Form Submission - This Week:**
```javascript
// Option A: Simple email via Formspree, Netlify Forms, or similar
// No backend required, works immediately

// Formspree example:
<form action="https://formspree.io/f/{form_id}" method="POST">

// Netlify Forms example:
<form name="spa-inquiry" method="POST" data-netlify="true">

// Vercel: Use API route that sends email via Resend/SendGrid
```

**Why:** Gets inquiries to staff immediately. No system dependency. Can redirect to any CRM later.

**Future State:** Form posts to CRM/booking system. Or booking widget replaces form entirely.

---

#### CONTACT FORMS (Both Sites)

**This Week:**
```jsx
// Generic contact form component
<ContactForm 
  practice="therapy" // or "wellness"
  submitTo="email" // temporary
  successMessage="Thank you! We'll be in touch within 24 hours."
/>
```

**Form Structure (store as JSON for future CRM mapping):**
```javascript
const formData = {
  // Contact info
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  preferred_contact: "", // phone | email | text
  
  // Practice-specific
  practice: "therapy", // or "wellness"
  location_preference: "",
  service_interest: "", // wellness only
  
  // Meta
  source: "website",
  page_url: window.location.href,
  submitted_at: new Date().toISOString(),
  
  // Message
  message: "",
  
  // Marketing consent (for cross-promotion)
  marketing_opt_in: false
};
```

**Why:** Structured data makes future CRM integration trivial. Just change the endpoint.

---

#### CHAT WIDGET

**This Week:**
```jsx
// Don't include any chat widget
// Or use a free/simple option that doesn't require TrustDrivenCare

// Option A: No chat (cleanest)
// Phone and email are sufficient for now

// Option B: Tawk.to (free, can remove later)
// Option C: Crisp (free tier, clean UI)

// DO NOT: Embed TrustDrivenCare widget
```

**Why:** Chat adds complexity and another system to manage. Phone/email/forms are enough for launch. Add chat post-launch if actually needed.

---

#### PAYMENT PROCESSING

**This Week:**
```
No payment processing on website.

Therapy: Handled in Jane
Wellness: Handled in-person or via phone

If client insists on deposits/prepayment:
→ Square Online Checkout link (no integration, just link to hosted page)
→ Or Stripe Payment Links (same concept)
```

**Why:** Payment processing requires PCI compliance considerations. Not worth the risk for initial launch. Handle offline until proper system selected.

---

### 2.3 Component Architecture

**Build these reusable components:**

```
/components
  /booking
    BookingCTA.jsx          // Flexible CTA with link or form
    InquiryForm.jsx         // Spa booking inquiry
    TherapyBookingLink.jsx  // Direct Jane link
    
  /forms
    ContactForm.jsx         // General contact
    FormField.jsx           // Reusable input wrapper
    FormSuccess.jsx         // Success state
    FormError.jsx           // Error state
    
  /cta
    PhoneCTA.jsx           // Click-to-call
    LocationCTA.jsx        // Address + directions
    
  /cross-promotion
    SisterPractice.jsx     // Compliant cross-promo module
    DisclaimerBlock.jsx    // Required disclaimers
```

**Form Submission Handler (temporary):**
```javascript
// /lib/submitForm.js

export async function submitForm(formData, formType) {
  // TEMPORARY: Send via email service
  // FUTURE: Replace with CRM endpoint
  
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact';
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      form_type: formType,
      timestamp: new Date().toISOString()
    })
  });
  
  return response.ok;
}
```

**API Route (if using Vercel/Next.js):**
```javascript
// /app/api/contact/route.js

import { Resend } from 'resend'; // or SendGrid, etc.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const data = await request.json();
  
  // Format email
  const emailContent = formatFormSubmission(data);
  
  // Send to appropriate staff email based on practice
  const toEmail = data.practice === 'therapy' 
    ? 'welcome@pathwayswithin.com'
    : 'info@pathwayswithinwellness.com';
  
  await resend.emails.send({
    from: 'website@pathwayswithin.com',
    to: toEmail,
    subject: `New ${data.form_type} Inquiry - ${data.first_name} ${data.last_name}`,
    html: emailContent
  });
  
  // FUTURE: Also post to CRM here
  // await postToCRM(data);
  
  return Response.json({ success: true });
}
```

---

### 2.4 Environment Variables

**Set up now (even if not all used immediately):**

```env
# Email Service (pick one)
RESEND_API_KEY=
SENDGRID_API_KEY=

# Form destination emails
THERAPY_CONTACT_EMAIL=welcome@pathwayswithin.com
WELLNESS_CONTACT_EMAIL=info@pathwayswithinwellness.com

# External booking (links only for now)
JANE_BOOKING_URL=https://pathwayswithintherapy.janeapp.com/

# Future CRM (placeholder)
CRM_API_ENDPOINT=
CRM_API_KEY=

# Future booking system (placeholder)
SPA_BOOKING_URL=
SPA_BOOKING_WIDGET_ID=
```

---

### 2.5 What to Tell the Client

**Positioning for this week:**

> "For launch, we're implementing a streamlined contact system that captures all inquiries and routes them to your team immediately. The forms are structured so we can connect them to your booking and CRM systems as those decisions are finalized.
>
> Therapy booking links directly to Jane as it does now.
> 
> Spa inquiries come to you via email with all the details needed to book the appointment.
>
> Phase 2 will integrate everything into a unified operations dashboard. For now, this gets you live with a professional frontend while we architect the backend properly."

---

## PART 3: FUTURE STATE VISION (For Our Planning)

### 3.1 Unified Operations Platform Options

**Option A: Custom Build**
```
Next.js Frontend (current build)
    ↓
Custom API Layer
    ↓
├── Jane App (therapy - keep as-is)
├── Spa Booking (Calendly? Cal.com? Custom?)
├── Unified CRM (HubSpot? Custom?)
├── Payment Processing (Stripe)
├── Communication (Twilio for SMS, Resend for email)
└── Analytics Dashboard
```

**Pros:** Total control, exactly what they need, no per-seat licensing
**Cons:** Development time, maintenance responsibility

---

**Option B: GoHighLevel / HubSpot as Hub**
```
Next.js Frontend
    ↓
GoHighLevel / HubSpot (CRM + Marketing + Some Booking)
    ↓
├── Jane App (therapy - linked, not integrated)
├── Spa Booking (built into GHL/HubSpot)
├── Communication (built-in)
├── Payment (Stripe via platform)
└── Reporting (built-in)
```

**Pros:** Fast to implement, lots of features, proven platform
**Cons:** Monthly cost per user, less customization, another platform to learn

---

**Option C: Spa-Specific Platform + Keep Jane**
```
Next.js Frontend
    ↓
├── Jane App (therapy - unchanged)
└── Boulevard / Mangomint / Vagaro (spa - full platform)
    ├── Booking
    ├── POS/Payments
    ├── Client management
    └── Marketing tools
```

**Pros:** Purpose-built for spa, fast implementation, includes payments
**Cons:** Two separate systems (therapy/wellness), limited cross-practice visibility

---

### 3.2 Recommendation (Preliminary)

**For Pathways Within specifically:**

Given:
- Two practices with different compliance needs
- Shared locations but separate operations
- Need for cross-practice visibility WITHOUT cross-practice data mixing
- Rachel likely wants simplicity, not more systems

**I'd lean toward:**

**Phase 1 (This Week):** Frontend with email-based forms
**Phase 2 (Next Month):** Add Boulevard or Mangomint for spa
**Phase 3 (Future):** Evaluate if custom CRM layer needed or if Jane + Spa Platform is sufficient

But this needs discovery conversations with Rachel to validate.

---

## PART 4: QUESTIONS TO ASK RACHEL

**Quick Wins (Can Ask Now):**

1. "What email addresses should website inquiries go to?"
2. "For spa, are you taking bookings by phone only right now?"
3. "Is there a spa booking system you've looked at or are considering?"

**Deeper Discovery (Schedule Separately):**

1. "Walk me through what happens when a new therapy client finds you online"
2. "Walk me through what happens when a new spa client calls"
3. "What's the most annoying part of your current workflow?"
4. "How do you track if someone uses both practices?"
5. "What reports do you need to run and how painful is that now?"

---

## PART 5: THIS WEEK'S CHECKLIST

### Frontend Build (No Backend Dependencies)

- [ ] Contact form component (structured data, email submission)
- [ ] Inquiry form component (spa booking requests)
- [ ] Booking CTA component (flexible: link or form)
- [ ] Phone CTA component (click-to-call)
- [ ] Sister practice module (compliant cross-promo)
- [ ] Disclaimer components (required legal text)
- [ ] Success/error states for forms
- [ ] Form submission API route (email-based)
- [ ] Environment variables configured

### Content (Using Compliance Rules)

- [ ] All service pages follow compliant structure
- [ ] No outcome claims in copy
- [ ] Disclaimers placed correctly
- [ ] Cross-promotion modules in footer/sidebar only
- [ ] Ownership disclosure present

### Integration Points (Placeholder Ready)

- [ ] Jane booking link works
- [ ] Spa inquiry form works (email delivery confirmed)
- [ ] Contact forms work (email delivery confirmed)
- [ ] No TrustDrivenCare dependencies
- [ ] No chat widget (or simple free option if needed)

---

*This document is for internal planning. Do not share with client.*
*Update as discovery progresses.*
