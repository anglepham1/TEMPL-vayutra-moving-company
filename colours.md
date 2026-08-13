# Colour Palette — Vayutra Logistics Website

## Colour System Overview

The website uses the **OKLCH** colour space (via CSS custom properties) paired with Tailwind CSS utility classes. Colours automatically adapt between light and dark modes through CSS variable swaps on the `.dark` class.

---

## Brand Colours

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--brand` | `oklch(0.295 0.085 250)` — Deep navy blue | `oklch(0.65 0.16 250)` — Medium bright blue | Logo, brand identity elements |
| `--brand-foreground` | `oklch(0.985 0.002 250)` — Near-white | `oklch(0.985 0.002 250)` — Near-white | Text on brand backgrounds |
| `--brand-accent` | `oklch(0.75 0.18 75)` — Warm amber/orange | `oklch(0.78 0.16 75)` — Lighter warm amber | CTAs, highlights, icons, interactive accents |
| `--brand-accent-foreground` | `oklch(0.18 0.06 75)` — Dark brown | `oklch(0.14 0.05 75)` — Darker brown | Text on brand-accent backgrounds |

**Tailwind usage:** `bg-brand`, `text-brand-foreground`, `bg-brand-accent`, `text-brand-accent`

---

## Core UI Colours

### Backgrounds & Surfaces

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | `oklch(0.985 0.002 250)` — Off-white with blue tint | `oklch(0.14 0.02 250)` — Very dark navy | Page background |
| `--card` | `oklch(1 0 0)` — Pure white | `oklch(0.19 0.03 250)` — Dark blue-grey | Card surfaces, elevated containers |
| `--popover` | `oklch(1 0 0)` — Pure white | `oklch(0.19 0.03 250)` — Dark blue-grey | Dropdowns, tooltips, floating elements |

### Text & Foreground

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--foreground` | `oklch(0.165 0.025 250)` — Near-black navy | `oklch(0.955 0.012 250)` — Near-white | Primary body text |
| `--muted-foreground` | `oklch(0.505 0.025 250)` — Medium grey-blue | `oklch(0.65 0.03 250)` — Light grey | Secondary text, descriptions, placeholders |

### Interactive / Semantic

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `oklch(0.295 0.085 250)` — Deep navy | `oklch(0.65 0.16 250)` — Bright blue | Primary buttons, links, active states |
| `--primary-foreground` | `oklch(0.985 0.002 250)` — Near-white | `oklch(0.985 0.002 250)` — Near-white | Text on primary backgrounds |
| `--secondary` | `oklch(0.955 0.012 250)` — Very light blue-grey | `oklch(0.24 0.04 250)` — Dark blue-grey | Secondary buttons, subtle backgrounds |
| `--secondary-foreground` | `oklch(0.235 0.055 250)` — Dark navy | `oklch(0.955 0.012 250)` — Near-white | Text on secondary backgrounds |
| `--accent` | `oklch(0.935 0.015 250)` — Light blue-grey | `oklch(0.28 0.05 250)` — Medium-dark blue-grey | Hover states, active row backgrounds |
| `--accent-foreground` | `oklch(0.235 0.055 250)` — Dark navy | `oklch(0.955 0.012 250)` — Near-white | Text on accent backgrounds |
| `--destructive` | `oklch(0.577 0.245 27.325)` — Red | `oklch(0.704 0.191 22.216)` — Lighter red | Error states, destructive actions |
| `--muted` | `oklch(0.955 0.012 250)` — Very light blue-grey | `oklch(0.24 0.04 250)` — Dark blue-grey | Disabled states, subtle backgrounds |

### Borders & Inputs

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--border` | `oklch(0.905 0.015 250)` — Light grey-blue | `oklch(0.28 0.04 250)` — Dark grey-blue | Card borders, dividers, separators |
| `--input` | `oklch(0.905 0.015 250)` — Light grey-blue | `oklch(0.28 0.04 250)` — Dark grey-blue | Form input borders |
| `--ring` | `oklch(0.295 0.085 250)` — Deep navy | `oklch(0.65 0.16 250)` — Bright blue | Focus rings |

---

## Chart Colours

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--chart-1` | `oklch(0.295 0.085 250)` — Navy | `oklch(0.65 0.16 250)` — Blue | Primary data series |
| `--chart-2` | `oklch(0.75 0.18 75)` — Amber | `oklch(0.78 0.16 75)` — Light amber | Secondary data series |
| `--chart-3` | `oklch(0.6 0.12 250)` — Medium blue | `oklch(0.5 0.1 250)` — Darker blue | Tertiary data series |
| `--chart-4` | `oklch(0.82 0.15 75)` — Light gold | `oklch(0.85 0.14 75)` — Lighter gold | Fourth data series |
| `--chart-5` | `oklch(0.45 0.07 250)` — Slate blue | `oklch(0.4 0.06 250)` — Dark slate | Fifth data series |

---

## Sidebar Colours

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--sidebar` | `oklch(0.97 0.005 250)` — Subtle off-white | `oklch(0.17 0.025 250)` — Darker than page bg |
| `--sidebar-primary` | `oklch(0.295 0.085 250)` — Navy | `oklch(0.65 0.16 250)` — Blue |
| `--sidebar-accent` | `oklch(0.935 0.015 250)` — Light grey | `oklch(0.24 0.04 250)` — Dark grey |
| `--sidebar-border` | `oklch(0.905 0.015 250)` — Light border | `oklch(0.28 0.04 250)` — Dark border |

---

## Gradient Patterns Used

| Location | Gradient | Purpose |
|----------|----------|---------|
| Page hero banners | `from-blue-600 via-blue-500 to-cyan-500` | Section headers (Services, Coverage, About) |
| Hero overlay | `from-black/70 to-black/50` | Text readability over carousel images |
| CTA sections | `from-primary to-brand-accent` | Bottom call-to-action banners on homepage |
| Dark CTA banners | `from-slate-900 to-slate-800` | Services page bottom CTA |
| About CTA | `from-blue-600 to-blue-700` | About page CTA section |

---

## Contextual Colour Usage

### Navigation & Header
- Background: `bg-background/95` with backdrop blur
- Text: `text-foreground`
- Active link: `text-brand-accent`

### Cards & Containers
- Background: `bg-card`
- Border: `border` (uses `--border` token)
- Shadow on hover: `hover:shadow-lg`

### Buttons
- Primary CTA: `bg-brand-accent hover:bg-brand-accent/90 text-white`
- Primary variant: `bg-primary text-primary-foreground`
- Outline: `border-white text-white hover:bg-white/10` (on dark backgrounds)
- Ghost: default shadcn ghost styling

### Icons
- Accent icons: `text-brand-accent` (amber/orange)
- Informational: `text-blue-600`
- On dark backgrounds: `text-white`

### Text Hierarchy
1. **Headings:** `text-foreground` (near-black in light, near-white in dark)
2. **Body copy:** `text-foreground`
3. **Descriptions/secondary:** `text-muted-foreground`
4. **On coloured backgrounds:** `text-white`, `text-blue-50`, `text-gray-200`

---

## Colour Philosophy

The palette centres on a **navy blue** (hue 250 in OKLCH) as the primary brand colour, paired with a **warm amber/orange** accent (hue 75 in OKLCH) for interactive elements and calls to action. This blue-amber pairing creates:

- **Trust and professionalism** (navy) appropriate for logistics
- **Energy and urgency** (amber) to drive user actions
- **High contrast** between the two brand colours for visual hierarchy

The hue 250 blue tint is carried subtly through all neutral shades (backgrounds, borders, muted text), giving the entire interface a cohesive cool-toned feel rather than using pure neutral greys.

---

## Design Token Reference (Tailwind Classes)

```
bg-background      text-foreground
bg-card            text-card-foreground
bg-primary         text-primary-foreground
bg-secondary       text-secondary-foreground
bg-muted           text-muted-foreground
bg-accent          text-accent-foreground
bg-destructive     text-destructive-foreground
bg-brand           text-brand-foreground
bg-brand-accent    text-brand-accent-foreground
border-border      ring-ring
```

---

## Border Radius

Base radius: `0.625rem` (10px)

| Token | Value |
|-------|-------|
| `--radius-sm` | `0.375rem` (6px) |
| `--radius-md` | `0.5rem` (8px) |
| `--radius-lg` | `0.625rem` (10px) |
| `--radius-xl` | `1.0625rem` (14px) |
