# Pathways Within — Design System (2025)

## Typography

**Only two fonts are used:**

| Purpose | Font | Fallbacks |
|---------|------|-----------|
| **Titles** | Raleway | Helvetica Neue, Arial, sans-serif |
| **Body** | Clarendon | Georgia, Times New Roman, serif |

### Usage

- **Raleway**: All headings (H1-H6), nav links, buttons, labels, card titles
- **Clarendon**: Body text, paragraphs, descriptions, footer text

### CSS Classes

```css
.font-title { font-family: 'Raleway', 'Helvetica Neue', Arial, sans-serif; }
.font-body { font-family: 'Clarendon', Georgia, 'Times New Roman', serif; }
```

> **Note**: Clarendon is loaded from local font file (`Clarendon-Regular.otf`) via `@font-face`.

---

## Color Palette

### Backgrounds (Ultra Light)

| Name | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Primary background, hero, nav |
| Ivory | `#FDFCFB` | Alternating sections |
| Pearl | `#FAF9F7` | Cards, inputs |
| Linen | `#F5F4F2` | Image placeholders |

### Dark Slate Grey Family

| Name | Hex | Usage |
|------|-----|-------|
| Chalkboard | `#2D2D2D` | Footer background |
| Slate 800 | `#293548` | Headings |
| Slate 700 | `#374151` | Body text |
| Slate 500 | `#64748B` | Muted text |
| Slate 400 | `#94A3B8` | Placeholder |
| Slate 200 | `#E2E8F0` | Borders |

### Therapy Accent — Ocean Blue

| Name | Hex | Usage |
|------|-----|-------|
| Therapy | `#5B7B9A` | Primary accent for therapy site |
| Therapy Light | `#7B9BB8` | Hover states |
| Therapy Dark | `#4A6A85` | Crisis banner, dark accents |

### Wellness Accent — Sage Green

| Name | Hex | Usage |
|------|-----|-------|
| Wellness | `#5A8A7A` | Primary accent for wellness site |
| Wellness Light | `#7BA898` | Hover states |

### Secondary Accent — Warm Copper

| Name | Hex | Usage |
|------|-----|-------|
| Copper | `#B8886A` | Labels, highlights |
| Copper Light | `#D4A888` | Hover states |

---

## Navigation

- **Background**: Pure white (`#FFFFFF`)
- **Style**: Sticky, minimal shadow (`shadow-sm`)
- **No border**

---

## Site-Specific Accents

| Site | Primary Accent | Font Usage |
|------|---------------|------------|
| Therapy | Ocean Blue (`#5B7B9A`) | Raleway titles, Clarendon body |
| Wellness | Sage Green (`#5A8A7A`) | Raleway titles, Clarendon body |
| Landing | Both | Raleway titles, Clarendon body |

---

## Section Background Pattern

1. **White** → Hero, nav
2. **Ivory** → Services, FAQ
3. **White** → Value prop, locations
4. **Pearl** → Accessible care, disclosure
5. **Accent** → CTA
6. **Chalkboard** → Footer

---

## Icons

- **Style**: Single-color flat stroke
- **Stroke Width**: 1.5px
- **Size**: `w-5 h-5` in containers, `w-4 h-4` inline
