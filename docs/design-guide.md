# UI Design Guide

This document defines the visual language for the Muhammad Osimi website. All new pages and components must follow these rules to maintain consistency.

All design tokens are defined as CSS custom properties in `app/globals.css`.

---

## Color Palette

| Token           | Hex       | Role                                         |
|-----------------|-----------|----------------------------------------------|
| `--burgundy`    | `#6b1f2a` | Primary accent. Buttons, active states, links |
| `--burgundy-d`  | `#4e1620` | Darker burgundy. Hover/pressed states         |
| `--ivory`       | `#f5f0e8` | Primary background (parchment)                |
| `--ivory-d`     | `#ede6d6` | Secondary background, cards, subtle contrast  |
| `--charcoal`    | `#2c2c2c` | Primary text color                            |
| `--charcoal-l`  | `#4a4a4a` | Secondary/body text                           |
| `--gold`        | `#c9a84c` | Accents: dividers, labels, borders            |
| `--gold-l`      | `#dbbf6e` | Lighter gold for subtle accents               |
| `--white`       | `#ffffff` | White                                         |
| `--footer-bg`   | `#1a1212` | Footer background (dark brown)                |

### Usage rules

- **Backgrounds**: Use `--ivory` for page backgrounds. Use `--ivory-d` for cards or sections that need subtle contrast. Use `--burgundy` for dark accent sections (e.g., quote bands).
- **Text**: Use `--charcoal` for headings and primary text. Use `--charcoal-l` for body paragraphs and secondary text. On dark backgrounds, use `--ivory` for body text and `--gold` for labels.
- **Interactive elements**: Burgundy is the primary action color. Gold is decorative only — never use it as a primary button color except in the specific `.btn--gold` variant.
- **Borders and dividers**: Use `--gold` for decorative dividers. Use `rgba(44, 44, 44, 0.13)` for subtle structural borders.

---

## Typography

### Font families

| Token      | Font              | Fallbacks                                    | Use for                          |
|------------|-------------------|----------------------------------------------|----------------------------------|
| `--serif`  | Playfair Display  | Georgia, Times New Roman, serif              | Headings, quotes, titles         |
| `--sans`   | Geist             | Segoe UI, system-ui, -apple-system, sans-serif | Body text, UI elements, labels  |

Fonts are loaded via `next/font/google` in `app/[locale]/layout.tsx` and mapped to CSS variables `--font-playfair` and `--font-geist`.

### Base text

```
font-family: var(--sans)
font-size:   17px
line-height: 1.72
color:       var(--charcoal)
```

### Typographic scale

All heading sizes use `clamp()` for fluid scaling — no manual breakpoint overrides needed.

| Element              | Family   | Size                          | Weight | Line height | Style   |
|----------------------|----------|-------------------------------|--------|-------------|---------|
| Hero name            | `--serif`| `clamp(44px, 6vw, 76px)`     | 400    | 1.06        | normal  |
| Page hero title      | `--serif`| `clamp(42px, 5vw, 64px)`     | 400    | 1.04        | normal  |
| Section title        | `--serif`| `clamp(26px, 3vw, 38px)`     | 400    | 1.25        | normal  |
| Quote band text      | `--serif`| `clamp(22px, 3.2vw, 34px)`   | 400    | 1.5         | italic  |
| Bio closing title    | `--serif`| `clamp(22px, 2.5vw, 32px)`   | 700    | —           | normal  |
| Works entry title    | `--serif`| `31px`                        | 400    | 1.18        | normal  |
| Page hero subtitle   | `--serif`| `clamp(20px, 2.2vw, 24px)`   | 400    | 1.55        | italic  |
| Bio section title    | `--serif`| `clamp(19px, 2vw, 24px)`     | 700    | —           | normal  |
| Quote entry text     | `--serif`| `21px`                        | 400    | 1.6         | normal  |
| Hero tagline         | `--serif`| `clamp(16px, 2vw, 20px)`     | 400    | 1.4         | italic  |
| Body / section body  | `--sans` | `17px`                        | 400    | 1.8         | normal  |
| Button               | `--sans` | `14px`                        | 600    | —           | normal  |
| Secondary link       | `--sans` | `13px`                        | 600    | —           | uppercase |
| Label / eyebrow      | `--sans` | `11px`                        | 700    | —           | uppercase |
| Attribution          | `--sans` | `12px`                        | 700    | —           | uppercase |

### Rules

- **Serif for significance**: Use `--serif` for anything that carries weight — page titles, section headings, quotes, literary titles. Never use serif for UI elements (buttons, labels, navigation).
- **Sans for function**: Use `--sans` for body text, buttons, navigation, labels, and any interactive element.
- **Italic means voice**: Italic serif is reserved for quotes, taglines, and subtitles — text that carries the subject's voice. Do not italicize for general emphasis.
- **Uppercase is structural**: Uppercase + letterspacing (`0.12em`–`0.2em`) is used only for labels, eyebrows, and attributions. Never uppercase headings or body text.
- **Weight restraint**: Most headings are weight 400 (regular). Reserve 700 (bold) for bio section titles and labels. Do not use weights outside 400 and 700.

---

## Buttons

Three variants, all sharing the base `.btn` class:

| Class          | Background       | Text color     | Border            | Hover                    |
|----------------|------------------|----------------|-------------------|--------------------------|
| `.btn--primary`| `--burgundy`     | `--white`      | `--burgundy`      | `--burgundy-d`           |
| `.btn--outline`| transparent      | `--burgundy`   | `--burgundy`      | fills `--burgundy`       |
| `.btn--gold`   | `--gold`         | `--white`      | `--gold`          | darkens to `#b5933e`     |

Base button properties: `padding: 13px 32px`, `border-radius: 2px`, `font-size: 14px`, `font-weight: 600`, `letter-spacing: 0.05em`.

---

## Spacing and Layout

| Token           | Value    | Purpose                            |
|-----------------|----------|------------------------------------|
| `--max-w`       | `1140px` | Maximum content width              |
| `--section-py`  | `88px`   | Vertical padding for sections      |

### Container

The `.container` class provides horizontal padding and max-width:
- Desktop: `40px` inline padding
- Tablet (<=900px): `28px`
- Mobile (<=600px): `20px`

### Breakpoints

| Name    | Max-width | Typical changes                          |
|---------|-----------|------------------------------------------|
| Tablet  | `900px`   | Grids collapse to fewer columns          |
| Mobile  | `600px`   | Single column, reduced spacing/font size |

### Spacing conventions

- Use multiples of 4px for small spacing (8, 12, 16, 20, 24px).
- Use multiples of 8px for larger spacing (32, 40, 48, 56, 72, 80px).
- Section vertical padding: `88px` desktop, `56px` mobile.
- Heading bottom margin: `16px`–`28px` depending on hierarchy.
- Paragraph-to-paragraph spacing: `16px`–`18px`.

---

## Visual Details

### Border radius
- Most elements: `2px` (barely rounded, sharp and archival)
- Buttons and dropdowns: `6px`–`8px`
- Pills: `100px`

### Shadows
- Large/hero images: `0 24px 80px rgba(44, 44, 44, 0.18)`
- Cards: `0 14px 34px rgba(44, 44, 44, 0.05)`
- Subtle: `0 18px 46px rgba(44, 44, 44, 0.06)`

### Transitions
- Standard: `0.2s ease`
- Quick feedback: `0.15s`

### Dividers
Gold decorative line: `width: 56px; height: 2px; background: var(--gold)`.

---

## Do's and Don'ts

**Do:**
- Use the existing CSS custom properties for all colors and fonts — never hardcode hex values.
- Use `clamp()` for heading sizes to get fluid scaling without breakpoint overrides.
- Follow the serif/sans split: serif for content headings and quotes, sans for UI.
- Keep the overall tone quiet and spacious — generous whitespace, restrained motion.

**Don't:**
- Introduce new colors outside the defined palette.
- Use serif for buttons, navigation, or labels.
- Use bold (700) on large display headings — they should be regular weight (400).
- Add heavy animations or transitions beyond the existing 0.2s ease standard.
- Use border-radius larger than 2px on content elements (cards, images, sections).
