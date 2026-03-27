# Design System: Forest Monolith & Emerald Editorial

## Creative North Star: "The Technical Curator"

This design system is built for high-performance environments where precision meets organic depth. It balances the "aggressive coding" vibe of cyberpunk with a sophisticated, minimalist editorial structure.

---

## Color Palettes

### Dark Mode (Forest Monolith) — Default

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0a1f14` | Deep Forest Green — main background |
| `--bg-secondary` | `#000000` | Pure Black — structural contrast (footer, nav) |
| `--bg-card` | `#0d2318` | Cards, elevated surfaces |
| `--bg-elevated` | `#122b1e` | Hovered/active card backgrounds |
| `--bg-hover` | `#163524` | Hover states |
| `--bg-active` | `#1a3f2a` | Active/pressed states |
| `--text-primary` | `#f5f5dc` | Light Beige/Cream — main text |
| `--text-secondary` | `#c8c8b0` | Muted Beige — metadata, labels |
| `--text-tertiary` | `#8a8a72` | Placeholder, de-emphasised |
| `--accent` | `#10b981` | Vibrant Emerald — used sparingly for status/CTAs |
| `--accent-bright` | `#059669` | Deeper emerald |
| `--accent-light` | `#34d399` | Light emerald for highlights |
| `--accent-dim` | `rgba(16, 185, 129, 0.08)` | Tag backgrounds |
| `--accent-glow` | `rgba(16, 185, 129, 0.15)` | Focus/glow states |
| `--border-subtle` | `rgba(245, 245, 220, 0.1)` | Subtle Beige borders |

### Light Mode (Light Beige)

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#f5f5dc` | Warm Light Beige — main background |
| `--bg-secondary` | `#ffffff` | Pure White — subtle layering |
| `--bg-card` | `#ffffff` | Card surfaces |
| `--bg-elevated` | `#eeeed8` | Elevated states |
| `--bg-hover` | `#e8e8cc` | Hover backgrounds |
| `--bg-active` | `#e0e0c0` | Active/pressed states |
| `--text-primary` | `#0a1f14` | Deep Forest Green — main text |
| `--text-secondary` | `#3c4a42` | Muted Green — metadata, labels |
| `--text-tertiary` | `#6a7a70` | De-emphasised |
| `--accent` | `#0a1f14` | Solid Green — primary structural accents |
| `--accent-bright` | `#0a1f14` | Same solid green |
| `--accent-light` | `#1a3f2a` | Slightly lighter green |
| `--accent-dim` | `rgba(10, 31, 20, 0.06)` | Tag backgrounds |
| `--accent-glow` | `rgba(10, 31, 20, 0.1)` | Focus states |
| `--border-subtle` | `rgba(10, 31, 20, 0.1)` | Subtle Forest Green borders |

---

## Typography

### Font Stack

| Role | Font | CSS Variable |
|---|---|---|
| Primary Heading | Space Grotesk | `--font-heading` |
| Body & Secondary | Inter | `--font-sans` |
| Technical / Accent | Space Mono | `--font-mono` |

### Usage Rules

- **Space Grotesk** — Bold/Black, tight tracking (`-0.05em`). Used for: main headlines, brand logo, section titles.
- **Inter** — Regular/Medium. Used for: body copy, descriptions, metadata.
- **Space Mono** — Regular, Uppercase, high tracking (`0.2em`). Used for: status indicators, nav links, labels, tags, code elements.

---

## Visual Language & Components

### Grid System
- Strict 12-column grid
- Subtle 1px grid lines (dashed or solid)
- Container max-width: 1080px

### Borders
- Always **1px**. No heavy shadows or thick borders.
- Dark: `rgba(245, 245, 220, 0.1)` — subtle beige
- Light: `rgba(10, 31, 20, 0.1)` — subtle forest green

### Corners (Brutalist)
- `--radius-sm: 0px` — sharp edges
- `--radius-md: 4px` — minimal roundness
- `--radius-lg: 4px`
- `--radius-xl: 4px`

### Buttons
- **Primary**: Solid fill (`--accent`), high contrast text, sharp corners
- **Secondary**: Ghost style — transparent background, `1px` border
- **Active state**: `scale(0.98)` transform for snappy tactile feedback

### Icons
- Minimalist, linear, 24px, consistent stroke weight.

---

## Layout Principles

- **Editorial Spacing**: Large margins and intentional whitespace — sections breathe.
- **Density**: High-density data (tech stacks, project lists) in clear, scannable rows/columns.
- **Interaction**: Micro-interactions are fast and snappy:
  - Click: `scale(0.98)` with quick transition (~0.1s)
  - Hover color/opacity fades: ~0.15-0.2s ease

---

## Syntax Highlighting (Code Blocks)

| Token | Dark Mode | Light Mode |
|---|---|---|
| Keyword | `#34d399` (emerald light) | `#059669` |
| String | `#86efac` (green) | `#16a34a` |
| Number | `#fbbf24` (amber) | `#d97706` |
| Function | `#7dd3fc` (sky blue) | `#2563eb` |
| Comment | `#5a6e62` (muted green) | `#7a9080` |
| Property | `#f9a8d4` (pink) | `#db2777` |
