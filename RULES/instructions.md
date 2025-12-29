Web Development Master Guide (UXUI Design Corp Edition)

---
⚠️ **PATHWAYS WITHIN PROJECT NOTE:**
For this project, the design system (colors, fonts, spacing) is defined in `design-system.md`.
The Biotech/Healthcare colors and typography in Section 0 (blues, Inter/Roboto) are **NOT USED**.
See `MASTER-RULES.md` for hierarchy and `design-system.md` for actual specifications.
---

Document Purpose & Usage
This master document serves as the comprehensive reference for all web development projects by UXUI Design Corp. It combines best practices, technical specifications, design principles, and industry-specific adaptations to ensure consistent, high-quality deliverables across all builds.
Usage in Cursor:

AI should first ask what industry the project is for
AI should then search and apply industry-specific design best practices
Reference this document at project start
Update with project-specific requirements
Use as checklist during development
Verify compliance before deployment


0. Industry Discovery & Adaptation Protocol
CRITICAL: Start Every Project With Industry Context
Before beginning ANY design work, the AI must:

Ask the Industry Question:

"What industry is this project for? (e.g., biotech, healthcare, luxury services, financial, legal, hospitality, etc.)"


Search Industry Best Practices:

Web search for: "[industry] website design best practices 2025"
Web search for: "[industry] color palette typography standards"
Web search for: "[industry] web design trends examples"
Web search for: "[industry] privacy policy requirements 2025"
Web search for: "[industry] terms of service best practices"
Web search for: "[industry] legal compliance regulations"


Apply Industry-Specific Standards:

After identifying the industry, the AI must:
- Search for industry-specific legal requirements and compliance standards
- Update Terms of Service and Privacy Policy pages with industry-appropriate best practices
- Include industry-specific clauses (e.g., HIPAA for healthcare, financial regulations for fintech, GDPR considerations)
- Ensure legal pages reflect the industry context and regulatory requirements

Biotech/Healthcare Industry
⚠️ NOTE: For Pathways Within, use `design-system.md` instead of these generic healthcare colors.

Search Resources:

"biotech website design best practices 2025"
"healthcare web design color typography accessibility"
"life sciences digital marketing standards"

Design Standards:

Colors:

Primary: Blues (#1C2541, #2563EB) for trust and professionalism
Secondary: Whites, light grays for clean medical aesthetic
Accents: Purple (#6B46C1) for innovation, muted greens for life sciences
Avoid: Bright reds, yellows (associated with warnings/hazards)


Typography:

Sans-serif primary: Inter, Roboto, Source Sans Pro for readability
Serif accents: Playfair Display for headlines (sparingly)
Font sizes: 16px minimum body text for accessibility


Layout Principles:

Scientific credibility through clean, modern design
High-quality imagery: lab visuals, microscopy, research facilities
Interactive infographics for complex data
Clear audience pathways (investors, researchers, patients)
Team bios with credentials prominently displayed
Third-party validation: partnerships, grants, publications
Compliance mentions (FDA, regulatory approvals)


Content Approach:

Translate complex science into accessible language
Avoid jargon in primary messaging
Progressive disclosure: simple overview → detailed science
Video explanations for mechanisms of action
Data visualization over dense text



Luxury Services/Hospitality Industry
Search Resources:

"luxury brand website design 2025"
"high-end hospitality web design trends"
"luxury typography color palettes"

Design Standards:

Colors:

Foundation: Black (#000000) and white (#FFFFFF) contrast
Metallics: Gold (#D4AF37, #C9B037), rose gold, champagne
Jewel tones: Deep navy (#1C2541), burgundy, emerald
Warm neutrals: Mocha, taupe, cream (Pantone 2025: Mocha Mousse)
Signature brand colors for recognition (e.g., Tiffany blue, Hermès orange)
Limit palette to 2-3 colors maximum


Typography:

Serif dominates: Didot, Bodoni, Garamond, Playfair Display
Custom brand typefaces for exclusivity
Light font weights with generous letter-spacing
Sans-serif for supporting copy: Avenir, Lato (refined options)


Layout Principles:

Generous white space (60%+ of page)
Minimalist, uncluttered layouts
Visual hierarchy: "subtle balance" and golden ratio
High-resolution photography (minimum 2000px)
Cinematic video backgrounds (slow pacing, focus on details)
Smooth parallax effects, subtle hover states
Intentional animations (never decorative)


Content Approach:

Elegance over information density
Every element serves a purpose
Restraint signals confidence
Visual storytelling through lifestyle imagery
Immersive experiences, not sales pitches
Products on clean backgrounds
78% of luxury sites use neutral main themes



Financial Services Industry
Search Resources:

"financial services web design trust security"
"banking website design best practices 2025"

Design Standards:

Colors: Navy blue, dark green, grays for trust and stability
Typography: Serif fonts for tradition, clean sans-serif for modern fintech
Layout: Clear data presentation, security badges, compliance information
Content: Transparent pricing, certifications, encryption details

Legal Industry
Search Resources:

"law firm website design professional standards"
"legal services web design credibility"

Design Standards:

Colors: Navy, burgundy, gold accents for authority
Typography: Traditional serif fonts for credibility
Layout: Attorney profiles, case results, credentials
Content: Clear practice areas, credentials, testimonials

Industry Research Checklist
Before starting design:

 Industry identified
 Web search completed for design standards
 Color palette research done
 Typography standards identified
 Competitor analysis completed
 Industry-specific compliance requirements noted
 Target audience personas defined
 Legal page requirements researched (Terms, Privacy Policy)
 Industry-specific legal clauses identified


1. Component & Script Naming Convention
⚠️ NOTE: For Pathways Within, skip the |UXUIDC| prefix per `MASTER-RULES.md`.

UXUI Design Corp Identifier: |UXUIDC|
All custom components, animations, and scripts created by UXUI Design Corp should be prefixed with the identifier |UXUIDC| for easy recognition and brand consistency.
Naming Pattern:
```typescript
// Components
|UXUIDC|ComponentName

// Example usage:
|UXUIDC|Navigation
|UXUIDC|Footer
|UXUIDC|HeroSection
|UXUIDC|AnnouncementBar
|UXUIDC|ImagePlaceholder
|UXUIDC|CookieConsent

// Animations/Scripts
|UXUIDC|FadeInScroll
|UXUIDC|ParallaxEffect
|UXUIDC|StaggerAnimation
|UXUIDC|VerticalImageScroll
```

**File Structure:**
```
components/
  |UXUIDC|/
    Navigation.tsx
    Footer.tsx
    HeroSection.tsx
    AnnouncementBar.tsx
    
lib/
  |UXUIDC|/
    animations.ts
    gsap-utils.ts
    
styles/
  |UXUIDC|/
    custom-components.css
```

Component Documentation:
```typescript
/**
 * |UXUIDC| Navigation Component
 * @version 1.0.0
 * @created 2025
 * @description Fluid navigation with mobile hamburger menu and search
 * @features 
 * - Scroll-triggered background change
 * - GSAP animations
 * - Keyboard accessible
 * - Mobile responsive
 */
```

2. SEO & Discoverability
Meta Tags & Headers
CRITICAL UPDATE: Meta Keywords Tag is OBSOLETE
The meta keywords tag is NOT used by Google, Bing, or most major search engines anymore. It was deprecated because it was easily manipulated. Including it won't hurt you, but it won't help either. For SEO, you can safely ignore it.

```html
<!-- Essential Meta Tags (REMOVE meta keywords) -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[155-160 characters max]">
<!-- DO NOT INCLUDE: <meta name="keywords" content="..."> -->
<meta name="author" content="UXUI Design Corp">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[primary URL]">

<!-- Open Graph Protocol (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="[page URL]">
<meta property="og:title" content="[60 characters max]">
<meta property="og:description" content="[155-160 characters]">
<meta property="og:image" content="[1200x630px image URL]">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="[Site Name]">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="[page URL]">
<meta name="twitter:title" content="[60 characters max]">
<meta name="twitter:description" content="[155-160 characters]">
<meta name="twitter:image" content="[1200x675px image URL]">
<meta name="twitter:creator" content="[@handle]">
```

Current SEO Best Practices (2025)
Title tags and meta descriptions are still critically important. The title tag defines your page's title in search results and browser tabs, serving as the primary clickable element. Meta descriptions provide concise summaries appearing beneath the title, though they don't directly affect rankings, they significantly influence click-through rates.

What Actually Matters for SEO:

Title Tags (60 characters max, keyword at beginning)
Meta Descriptions (155-160 characters, compelling CTAs)
Meta Robots Tag (control indexing)
Structured Data (Schema.org markup)
Alt Text for Images (descriptive, keyword-relevant)
Header Hierarchy (H1-H6, proper structure)
Internal Linking (3-5 relevant links per page)
Content Quality (EEAT - Experience, Expertise, Authority, Trust)
Core Web Vitals (LCP, FID, CLS)
Mobile-First Design (responsive, fast-loading)

Schema.org Structured Data
Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Company Name]",
  "url": "[Website URL]",
  "logo": "[Logo URL]",
  "description": "[Company description]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone]",
    "contactType": "customer service",
    "email": "[Email]"
  },
  "sameAs": [
    "[Social media URLs]"
  ]
}
```

WebPage Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[Page Title]",
  "description": "[Page Description]",
  "url": "[Page URL]",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": []
  }
}
```

RSS Feed Implementation
Create /feed.xml for blog/news sections:
Next.js RSS Generation:
```typescript
// app/feed.xml/route.ts
export async function GET() {
  const posts = await getPosts();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Your Site</title>
        <link>https://yoursite.com</link>
        ${posts.map(post => `
          <item>
            <title>${post.title}</title>
            <link>${post.url}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `).join('')}
      </channel>
    </rss>`;
  
  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
```

3. Maximum Width Constraint (1440px)
Design Philosophy
Desktop pages constrained to 1440px maximum width for optimal readability on large monitors (32"+). Content should be centered on larger displays, never stretched full-width.

Implementation
Global Container System:
```css
/* Base container with 1440px hard cap */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem; /* 16px mobile */
  max-width: 1440px; /* ABSOLUTE MAXIMUM */
}

/* Responsive padding */
@media (min-width: 640px) {
  .container { padding: 0 1.5rem; } /* 24px */
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; } /* 32px */
}

@media (min-width: 1440px) {
  .container { 
    max-width: 1440px; /* Enforced */
    padding: 0 3rem; /* 48px breathing room */
  }
}

/* For 1920px+ displays: center content, maintain max-width */
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
}
```

Tailwind Configuration:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px', // Modified to match 1440px preference
    },
    extend: {
      maxWidth: {
        'site': '1440px', // Custom site max-width
      }
    }
  }
}
```

Testing Checklist:

 Test on 1920x1080 display (content centered, not stretched)
 Test on 2560x1440 display (content centered at 1440px)
 Test on 3840x2160 (4K) display (content centered)
 Verify all sections respect 1440px max-width
 Check padding is appropriate at all breakpoints
 Confirm full-width backgrounds work correctly


4. Mobile-First Responsive Breakpoints
Breakpoint System
```css
/* Mobile First Approach */

/* Base styles (Mobile) - 0-639px */
/* No media query needed */

/* Small tablets - 640px+ */
@media (min-width: 640px) { }

/* Tablets - 768px+ */
@media (min-width: 768px) { }

/* Small laptops - 1024px+ */
@media (min-width: 1024px) { }

/* Desktops - 1280px+ */
@media (min-width: 1280px) { }

/* Large desktops - 1440px MAX (CONSTRAINED) */
@media (min-width: 1440px) {
  /* Content maxes out, centers on larger screens */
}
```

Typography Scaling
```css
html {
  font-size: 16px;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.3;
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}
```

5. Accessibility (WCAG 2.1 AA)

Color Contrast: Minimum 4.5:1 for text, 3:1 for large text
Keyboard Navigation: All interactive elements focusable
Focus Indicators: Visible focus states
Alt Text: Descriptive alt text for all images
Heading Hierarchy: Logical H1-H6 structure
Form Labels: Associated labels for all inputs
Error Messages: Clear, specific error feedback
Skip Links: Skip to main content link
Reduced Motion: Respect prefers-reduced-motion

6. Update Instructions for Cursor
At the start of each new project:

ASK ABOUT INDUSTRY FIRST:
"What industry is this project for?"
Search industry-specific design standards
Apply color, typography, and layout best practices

Review Latest Best Practices:
Next.js documentation
WCAG guidelines
Schema.org updates
Industry-specific resources

Verify SEO Standards:
SKIP meta keywords tag (obsolete)
Focus on title tags and meta descriptions
Implement Schema.org markup
Check Core Web Vitals

Apply 1440px Constraint:
All layouts max-width: 1440px
Test on large displays (centered)
Verify padding at all breakpoints
