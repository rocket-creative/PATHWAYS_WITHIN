PATHWAYS WITHIN - ORGANIZED SYSTEM REQUIREMENTS FOR CURSOR

HIERARCHY OF INSTRUCTIONS

PRIMARY: instructions.md (always takes precedence)
SECONDARY: All rules below
TERTIARY: Cursor's best judgment for implementation details


CORE PRINCIPLES
Frontend Philosophy

Calm, easy navigation
Clear visual hierarchy
Minimal cognitive load
Progressive disclosure (don't overwhelm)
Accessible to all users (WCAG 2.1 AA minimum)
Mobile-first responsive design

Backend Philosophy

Super easy to use (staff training should take minutes, not hours)
Intuitive workflows
Clear labeling and instructions
Minimal clicks to complete tasks
Forgiving (hard to make mistakes)
Dashboard should answer questions at a glance

Competitive Benchmark

Primary competitor to research: Northwell Health
Before building any customer-facing feature, research Northwell Health's approach
Search for healthcare industry best practices
Aim to meet or exceed Northwell's user experience standards


ABSOLUTE RULES - FRONTEND DATA COLLECTION
NEVER Collect on Public Website:
❌ Social Security Numbers
❌ Medical history
❌ Health conditions
❌ Diagnoses
❌ Treatment information
❌ Medications
❌ Insurance information
❌ Date of birth
❌ Any Protected Health Information (PHI)
ONLY Collect on Public Website:
✅ First name
✅ Last name
✅ Email address
✅ Phone number
✅ Preferred contact method
✅ Service interest (which therapy/wellness service)
✅ Preferred location
✅ Preferred appointment timing
✅ How they heard about you (marketing attribution)
✅ General questions/concerns (text field)

LEGAL & COMPLIANCE REQUIREMENTS
Mandatory Compliance Checks
Before creating ANY customer-facing content, Cursor must:
1. Web search for current best practices:

Search query format: "[content type] best practices New York 2025"
Examples: "healthcare website consent forms New York 2025"
"medical website privacy policy requirements 2025"

2. Research Northwell Health implementation:

How does Northwell handle this feature?
What is the industry standard?
What are competing healthcare systems doing?

3. Verify compliance with:

New York State laws (primary jurisdiction)
Local laws (if specific to practice locations)
Federal requirements (ADA, HIPAA boundaries, CAN-SPAM, TCPA)
Industry best practices for healthcare/wellness

4. Content types requiring pre-creation research:

Forms (contact, intake, survey)
Consent checkboxes and agreements
Privacy policies
Terms of service
Cookie policies
Email/SMS opt-in language
Accessibility statements
Non-discrimination notices
Patient rights disclosures

Consent & Agreement Display Requirements
Format:

Plain language (8th grade reading level max)
Clearly visible (not hidden in walls of text)
Checkbox must be actively checked (not pre-checked)
User must be able to expand/collapse full text
Link to full policy documents

Required Consents:

Privacy Policy acknowledgment
Terms of Service agreement
Marketing communications opt-in (separate from required communications)
SMS opt-in with TCPA compliance language
Cookie consent (if applicable)

Example Implementation:
☐ I agree to the [Privacy Policy] and [Terms of Service]*

☐ I consent to receive appointment reminders via SMS 
   (Message and data rates may apply. Reply STOP to opt out.)

☐ I'd like to receive wellness tips and special offers via email 
   (You can unsubscribe anytime)

THREE-LAYER ARCHITECTURE
LAYER 1: Customer-Facing Website
Technology Stack:

React (interactive components)
Static HTML (marketing content pages)
Form library: TBD (suggest React Hook Form for validation)

Key Pages:

Home
Services (individual service pages)
Locations (individual location pages)
Team (practitioner bios)
About
Blog/Resources
Contact
FAQ

Interactive Components:

Multi-step contact/intake form
Service finder tool (quiz-style)
Location finder
Embedded Jane booking widget (for actual appointments)
Live chat (optional)
Survey system (post-visit feedback)

Data Collection Boundaries:

Name + contact info only
Service preferences
Marketing attribution
→ All data routes to Layer 2 (admin backend)
→ No PHI ever collected


LAYER 2: Admin Backend Dashboard
Technology Stack:

React admin dashboard
Node.js/Next.js backend
PostgreSQL database (non-PHI only)

User Experience:

Single-page application (SPA)
Minimal page refreshes
Real-time updates where possible
Clear visual feedback for all actions
Undo capability where appropriate
Mobile-responsive (tablet minimum)

Core Modules:
1. Leads & Contacts

View all form submissions
Filter by date, service, location, status
Assign leads to staff members
Add notes and follow-up reminders
Mark as contacted/converted/lost
Quick actions: Call, Email, SMS

2. Appointments (Read-Only from Jane)

Daily/weekly/monthly calendar view
Filter by location, practitioner, service
Color-coded by service type
Synced from Jane via iCal (24-hour delay)
Click appointment → Opens in Jane for details
No editing in dashboard (must use Jane directly)

3. Marketing & Campaigns

Email campaign builder (drag-and-drop)
SMS campaign builder
Promo code generator
Track campaign performance
A/B testing tools (future phase)

4. Analytics & Reporting

Traffic sources
Conversion funnels
Service popularity
Location performance
Revenue by service/location
Patient satisfaction scores
Export reports (PDF, CSV)

5. Content Management

Edit website text (non-code changes)
Upload images
Manage team bios
Publish blog posts
Update service descriptions

User Roles:

Super Admin: Full access to everything
Marketing: Campaigns, analytics, content
Front Desk: View appointments, contact leads
Read-Only: View-only access for partners/stakeholders

Design Requirements:

Clean dashboard layout (think: Notion, Linear, Stripe)
Left sidebar navigation
Consistent action buttons (primary blue, secondary gray, danger red)
Empty states with helpful guidance
Tooltips for any unclear features
Keyboard shortcuts for power users


LAYER 3: Jane EHR Connection (HIPAA Boundary)
Integration Method:

Embed Jane booking widgets on Layer 1
Daily iCal import to Layer 2 (appointment visibility)
Direct links to Jane for full appointment details
All PHI stays in Jane (never crosses to Layers 1 or 2)

What We Can Do:

Display provider schedules (synced from iCal)
Show appointment times and provider names
Track booking widget clicks
Link to Jane for modifications

What We Cannot Do:

Create appointments programmatically
Access patient medical records
Modify appointments from dashboard
Real-time appointment updates
Access billing information

Security Boundary:

Layer 1 & 2: Non-PHI data only
Layer 3 (Jane): All PHI
No PHI crosses this boundary
Minimizes HIPAA compliance burden


DEVELOPMENT WORKFLOW FOR CURSOR
Before Creating Any Customer-Facing Content:
Step 1: Research
1. Identify content type (form, policy, consent, etc.)
2. Web search: "Northwell Health [content type]" (see how they handle it)
3. Web search: "[content type] best practices New York healthcare 2025"
4. Review top 3-5 results from authoritative sources
5. Note specific legal requirements
6. Check against federal requirements (ADA, HIPAA, CAN-SPAM, TCPA)
Step 2: Draft
1. Create content following best practices
2. Use plain language
3. Include all required legal disclosures
4. Format for readability
5. Add clear consent checkboxes where needed
Step 3: Review
1. Check against instructions.md (primary authority)
2. Verify no PHI collection on frontend
3. Confirm compliance notes documented
4. Test user experience (is it easy to understand?)
Step 4: Document
1. Add comments noting which requirements were followed
2. Link to sources researched
3. Note any assumptions made
4. Flag areas that may need legal review

SUGGESTED ADDITIONS TO CONSIDER
For Frontend:

Accessibility widget (font size, contrast, screen reader optimization)
Language toggle (English/Spanish) - common in NY healthcare
Virtual tour of locations (360° photos or video)
Insurance verification tool (check if accepted before booking)
Waitlist signup (if Jane supports it via iCal or webhooks)
Patient portal (view upcoming appointments, receive updates) - future phase

For Backend:

Automated lead scoring (prioritize high-intent leads)
Email/SMS templates (quick responses to common questions)
Appointment reminder system (automated via Twilio + SendGrid)
Review request automation (send 24hrs after appointment)
Abandoned form recovery (email people who started but didn't submit)
Team scheduling (who's working when, vacation mode)
Referral tracking (which practitioners refer to which services)

For Compliance:

HIPAA training tracker (ensure staff complete required training)
Consent audit log (track all consents given)
Data retention policy (auto-delete old non-PHI data)
Breach notification system (if security incident occurs)
Cookie consent manager (GDPR-style, though not required in NY)

For Jane Integration:

iCal import frequency settings (hourly vs daily)
Fallback handling (what if Jane iCal feed fails?)
Duplicate detection (prevent double-booking confusion)
Provider mapping (match Jane provider IDs to your database)
Service code mapping (standardize service names across systems)


QUESTIONS FOR YOU TO CLARIFY
Frontend:

How many services total? (affects navigation structure)
How many locations? (affects location finder complexity)
Do you want Spanish language support?
Should blog/resources be included in Phase 1?
Any specific design inspiration? (websites you like the feel of)

Backend:

How many staff users? (affects role complexity)
Do you need multi-location permissions? (e.g., Location A staff can't see Location B data)
Should analytics be real-time or daily batch updates are fine?
Do you want mobile app for staff (React Native) or mobile-web is enough?
Export formats needed? (PDF, CSV, Excel, Google Sheets integration?)

Compliance:

Any specific NY regulations you're aware of we should prioritize?
Do you need WCAG 2.1 AA or AAA accessibility compliance?
Should we plan for future telehealth (video appointments)?
Any existing policies/agreements to migrate, or start from scratch?

Integration:

Do you have Jane account already? (need credentials for testing)
Are there other tools to integrate? (Mailchimp, Google Analytics, etc.)
Do you want single sign-on (SSO) or separate logins for dashboard?


NEXT STEPS
Phase 1A: Foundation

Set up React + Next.js project structure
Create design system (colors, typography, components)
Build 5 core static pages (Home, About, Services overview, Locations, Contact)
Implement basic contact form (name, email, phone, service interest)
Research and implement all required consent checkboxes
Deploy to staging environment

Phase 1B: Interactivity

Build multi-step intake form
Create service finder quiz
Embed Jane booking widgets
Add location finder
Implement form validation and error handling
Test accessibility compliance

Phase 2A: Backend Foundation

Build admin dashboard framework
Implement authentication and user roles
Create leads management module
Set up PostgreSQL database
Build basic Jane iCal import system

Phase 2B: Backend Features

Complete appointment display from Jane
Build marketing campaign tools
Implement basic analytics
Create content management interface
Staff training and UAT

