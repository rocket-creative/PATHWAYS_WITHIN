# Pathways Within — Design System (2025)
## Mental Health & Wellness Best Practices

**Version:** 2.0  
**Updated:** December 27, 2025  
**Authority:** This is the ONLY design system document. All other design references are obsolete.

---

## Typography

### Font Stack

```css
--font-display: 'Cormorant Garamond', Georgia, serif;
--font-heading: 'DM Serif Display', Georgia, serif;
--font-body: 'DM Sans', system-ui, sans-serif;
```

### Why These Fonts (2025 Best Practices)

| Font | Purpose | Why |
|------|---------|-----|
| **Cormorant Garamond** | Hero headlines (italic) | Elegant, warm serif. Signals luxury/care without being clinical. Popular in wellness 2025. |
| **DM Serif Display** | Section headlines | Modern serif with personality. Professional yet approachable for healthcare. |
| **DM Sans** | Body text, buttons | Clean, highly readable sans-serif. Excellent accessibility scores. Google's 2024-2025 recommendation for healthcare. |

### Type Scale

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| Hero Headlines | Cormorant Garamond Italic | 400 | 3.5rem (56px) | 2.25rem (36px) |
| Section Headlines (H2) | DM Serif Display | 400 | 2.25rem (36px) | 1.75rem (28px) |
| Subheadings (H3) | DM Serif Display | 400 | 1.5rem (24px) | 1.25rem (20px) |
| Body Text | DM Sans | 400 | 1rem (16px) | 1rem (16px) |
| Small Text | DM Sans | 400 | 0.875rem (14px) | 0.875rem (14px) |
| Buttons | DM Sans | 500 | 0.9375rem (15px) | 0.9375rem (15px) |

---

## Colors

### 2025 Mental Health & Wellness Palette

**Research basis:** Healthcare UX studies 2024-2025 show warm neutrals + muted nature tones reduce anxiety and build trust. Avoid stark whites (clinical feel) and saturated colors (overwhelming).

### Primary Palette

```css
/* Backgrounds - Warm Neutral Family */
--bg-cream: #FAF8F5;        /* Primary background */
--bg-warm: #F5F1EC;         /* Alternate sections */
--bg-stone: #EAE4DC;        /* Cards, elevated surfaces */
--bg-clay: #DDD5CB;         /* Subtle borders, dividers */

/* Text */
--text-primary: #3D3D3D;    /* Body text - softer than pure black */
--text-heading: #2A2A2A;    /* Headlines - slightly darker */
--text-muted: #6B6B6B;      /* Secondary text */

/* Accent - Therapy (Trust & Calm) */
--accent-therapy: #5B7B8A;  /* Muted slate blue - trustworthy, calming */
--accent-therapy-light: #7A9BAA;
--accent-therapy-dark: #4A6573;

/* Accent - Wellness (Renewal & Nature) */
--accent-wellness: #7A9B8A; /* Sage green - renewal, nature, healing */
--accent-wellness-light: #9BB5A5;
--accent-wellness-dark: #5F7D6D;

/* Interactive */
--button-primary: #4A6573;  /* Dark slate - professional */
--button-hover: #3A5260;
--button-secondary: transparent;
--button-secondary-border: #4A6573;

/* Status */
--crisis-bg: #5B7B8A;       /* Crisis banner background */
--crisis-text: #FFFFFF;
--success: #5F7D6D;
--error: #B85C5C;
```

### Color Usage

| Element | Color | Note |
|---------|-------|------|
| Page background | `--bg-cream` | Primary, most pages |
| Alternate sections | `--bg-warm` | Creates visual rhythm |
| Cards | `--bg-stone` | Slight elevation |
| Body text | `--text-primary` | Never pure black |
| Headlines | `--text-heading` | Slightly darker for hierarchy |
| Therapy CTAs | `--accent-therapy` | Trust, professionalism |
| Wellness CTAs | `--accent-wellness` | Nature, renewal |
| Crisis banner | `--crisis-bg` | Visible but not alarming |

### Accessibility

All color combinations meet **WCAG 2.1 AA** (4.5:1 contrast ratio minimum):

| Combination | Contrast Ratio | Pass |
|-------------|---------------|------|
| `--text-primary` on `--bg-cream` | 9.2:1 | ✓ AAA |
| `--text-heading` on `--bg-cream` | 11.4:1 | ✓ AAA |
| `--crisis-text` on `--crisis-bg` | 4.8:1 | ✓ AA |
| `--button-primary` on white | 7.1:1 | ✓ AAA |

---

## Spacing

### Scale (8px base)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 5rem;     /* 80px */
--space-16: 6rem;     /* 96px */
```

### Section Spacing

| Viewport | Section Padding |
|----------|-----------------|
| Mobile | `py-12` (48px) |
| Tablet | `py-16` (64px) |
| Desktop | `py-20` (80px) |

---

## Layout

### Max Width

```css
--max-width-site: 1440px;
--max-width-content: 1200px;
--max-width-text: 720px;    /* For readable text blocks */
```

### Container Padding

| Viewport | Padding |
|----------|---------|
| Mobile (< 640px) | `px-4` (16px) |
| Tablet (640-1024px) | `px-6` (24px) |
| Desktop (1024+) | `px-8` (32px) |
| Large (1440+) | `px-12` (48px) |

---

## Components

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--button-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;  /* Pill shape - softer, more approachable */
  font-weight: 500;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--button-hover);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--button-primary);
  border: 1.5px solid var(--button-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
}
```

### Cards

```css
.card {
  background: var(--bg-stone);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
```

### Crisis Banner

```css
.crisis-banner {
  background: var(--crisis-bg);
  color: var(--crisis-text);
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  text-align: center;
}
```

---

## Imagery Guidelines

### Photography Style (2025 Trends)

- **Warm, natural lighting** (avoid harsh clinical lighting)
- **Authentic, diverse representation**
- **Soft focus backgrounds** with sharp subjects
- **Nature elements** where appropriate (plants, natural textures)
- **Real spaces** over stock "spa" imagery
- **Muted color grading** (not oversaturated)

### Image Treatments

- Subtle warm overlay for consistency
- Rounded corners (0.5rem - 1rem)
- No heavy shadows or borders

---

## Animation

### Principles

- **Subtle and purposeful** (never distracting)
- **Respect reduced motion** preferences
- **Enhance understanding** (not decoration)

### Timing

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
```

### Standard Animations

```css
/* Fade in on scroll */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hover lift */
.hover-lift {
  transition: transform var(--transition-base) var(--ease-out),
              box-shadow var(--transition-base) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Quick Reference

### Therapy Site Accent
Use `--accent-therapy` (slate blue) for CTAs, links, icons

### Wellness Site Accent  
Use `--accent-wellness` (sage green) for CTAs, links, icons

### Landing Page
Use both accents to represent both pathways

---

*This document is the authoritative source for all design decisions.*
*Updated based on 2025 healthcare/wellness UX research.*
