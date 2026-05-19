# Handoff: NeoSIM Mobile UI Kit

## Overview

This handoff documents a complete **mobile UI kit for NeoSIM** — a global eSIM app that lets travelers connect in 150+ countries without SIM swaps or roaming bills. The kit provides every primitive needed to build screens for iOS and Android: colors, typography, buttons, form inputs, cards, lists, navigation, modals, icons, spacing, shadows, plus three live example screens (Home, Explore, Install eSIM).

## About the Design Files

The files in this bundle are **design references created in HTML** — interactive prototypes showing intended look and behavior, **not production code to copy directly**.

**Target stack: Next.js** (App Router assumed, but Pages Router works too).

Your task is to **recreate these designs as React components in Next.js**, using the project's existing conventions. Treat the HTML purely as a visual spec — the tokens, layouts, and interactions described in this README are the source of truth.

### Recommended Next.js stack

- **Styling:** Tailwind CSS v4 (matches the existing marketing site) with all tokens below mapped to CSS variables in `globals.css`. Or CSS Modules if Tailwind isn't already in use.
- **Fonts:** `next/font/google` — `Manrope` (weights 300–800) and `JetBrains_Mono` (weights 400/500). Bind to CSS variables `--font-sans` and `--font-mono`.
- **Icons:** `lucide-react` (already matches the icon set used here, stroke width 1.8).
- **Animation:** `framer-motion` for sheets, modals, toasts; plain CSS transitions are enough for buttons and toggles.
- **Forms:** `react-hook-form` + `zod` if there's no existing form lib; otherwise stick with the project's.
- **Toasts:** `sonner` works out of the box with the dark/glass aesthetic; style via the props.

### Suggested folder structure

```
app/
  (mobile)/                       # route group for mobile-app screens
    home/page.tsx
    explore/page.tsx
    install/page.tsx
    layout.tsx                    # bottom-tab shell
components/
  ui/                             # primitives — match this README 1:1
    button.tsx
    field.tsx                     # text input
    toggle.tsx
    checkbox.tsx
    segmented.tsx
    badge.tsx
    pill.tsx
    card.tsx
    list-row.tsx
    alert-card.tsx
    sheet.tsx
    dialog.tsx
    toast.tsx
    icon-chip.tsx
  app/                            # composed mobile-app components
    top-bar.tsx
    bottom-tabs.tsx
    plan-card.tsx
    wallet-card.tsx
    destination-card.tsx
styles/
  globals.css                     # CSS vars + Tailwind layers
  tokens.ts                       # JS-accessible mirror of design tokens
```

### Token wiring — globals.css

Define every token below as a CSS custom property at `:root`, then expose them to Tailwind via `@theme inline` (v4) so you can write `bg-bg-card`, `text-text-2`, `rounded-r-20`, `shadow-glow-blue`, etc.

## Fidelity

**High-fidelity (hifi)**. Every color, font size, weight, spacing value, radius, and shadow is final. The prototype reflects pixel-perfect intended UI. Recreate it pixel-perfectly in the target stack, using the codebase's existing libraries and patterns where they map (e.g. if there's an existing `<Button>` primitive, extend it; don't reinvent).

---

## Design Tokens

All values are final. Mirror these as constants/tokens in the target stack (e.g. `tokens.ts`, `Colors.swift`, `Theme.kt`).

### Colors

```
// Backgrounds
bg-deep        #000a17    // App background, root surface
bg-1           #050f20    // Section background
bg-card        #0a1424    // Card surface
bg-card-2      #0f1c33    // Elevated card / hover
bg-card-3      #142240    // Higher elevation

// Brand — Sky Blue (CTAs, links, active states, icons)
electric       #007fff    // Primary brand
electric-light #1a90ff    // Hover / pressed
electric-soft  rgba(0,127,255,0.12)   // Tinted backgrounds
electric-glow  rgba(0,127,255,0.35)   // Drop-shadow glow

// Semantic
mint           #3ee0a2    // Success, positive deltas, "Active"
amber          #f59e0b    // Warning
red            #ef4444    // Error, destructive, "Expired"

// Text on dark
text-1         #ffffff                // Headings, primary
text-2         rgba(255,255,255,0.72) // Body
text-3         rgba(255,255,255,0.50) // Secondary, meta
text-4         rgba(255,255,255,0.32) // Muted, disabled

// Borders
border-1       rgba(255,255,255,0.08) // Default
border-2       rgba(255,255,255,0.14) // Hover / focus
```

### Typography

Font family: **Manrope** (weights 300, 400, 500, 600, 700, 800). Mono: **JetBrains Mono** (400, 500). On native iOS/Android, ship Manrope as bundled fonts.

| Style    | Size | Weight | Letter-spacing | Use case                              |
|----------|-----:|-------:|---------------:|---------------------------------------|
| Display  | 32   | 800    | -0.8px         | Brand mark, splash                    |
| H1       | 28   | 700    | -0.6px         | Screen title                          |
| H2       | 22   | 700    | -0.4px         | Section title                         |
| H3       | 18   | 700    | -0.2px         | Card title                            |
| H4       | 15   | 700    | -0.1px         | List item bold                        |
| Body LG  | 16   | 400    | 0              | Reading body                          |
| Body     | 14   | 400    | 0              | Default body                          |
| Body SM  | 13   | 400    | 0              | Sub-content                           |
| Caption  | 11   | 600    | 0.06em UPPER   | Eyebrows, step indicators             |
| Mono     | 12   | 400    | 0              | Codes, identifiers (JetBrains Mono)   |

Line-heights: headings 1.2; body 1.55; caption 1.3.

### Spacing scale

`4, 8, 12, 16, 20, 24, 32, 40, 48` — use these only. No arbitrary values.

### Border radius

| Token   | px    | Use                       |
|---------|-------|---------------------------|
| r-4     | 4     | Chips inside chips        |
| r-8     | 8     | Badges, small icons       |
| r-12    | 12    | Input inset, tags         |
| r-16    | 16    | Small cards, fields       |
| r-18    | 18    | Cards (default)           |
| r-20    | 20    | Standard cards            |
| r-22    | 22    | Plan cards                |
| r-26    | 26    | Modal/sheet               |
| r-38    | 38    | Phone screen inner        |
| r-full  | 9999  | Pills, buttons, toggles   |

### Shadows / elevation

```
shadow-sm     0 1px 2px rgba(0,0,0,0.4)           // Resting badges
shadow-card   0 4px 12px rgba(0,0,0,0.3)          // Cards
shadow-lg     0 8px 24px rgba(0,0,0,0.5)          // Modals
glow-blue     0 0 32px rgba(0,127,255,0.3)        // Primary CTA glow
glow-mint     0 0 24px rgba(62,224,162,0.2)       // Success states
```

### Glass morphism (3 variants)

```
glass         background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); border: 1px solid border-1
glass-strong  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); backdrop-filter: blur(24px); border: 1px solid border-1
glass-accent  background: linear-gradient(135deg, rgba(0,127,255,0.15), rgba(0,127,255,0.05)); backdrop-filter: blur(20px); border: 1px solid rgba(0,127,255,0.2)
```

In React Native, use `expo-blur` or `@react-native-community/blur` for the equivalent.

---

## Components

For each, the **size, layout, colors, typography, and interaction** are documented below. Match the HTML prototype pixel-perfectly.

### 1. Buttons

Three sizes, all `border-radius: 9999` (full pill).

| Size   | Height | Padding-X | Font size | Font weight |
|--------|-------:|----------:|----------:|------------:|
| Large  | 52     | 24        | 15        | 700         |
| Medium | 44     | 20        | 14        | 700         |
| Small  | 36     | 16        | 13        | 700         |
| Icon   | 52×52  | —         | —         | —           |

Variants:
- **Primary white** — `bg: #ffffff`, `color: bg-deep` — for top-level CTAs ("Get free eSIM", "Top up")
- **Primary blue** — `bg: electric`, `color: #fff`, with `glow-blue` shadow — for in-context CTAs
- **Secondary ghost** — `bg: bg-card`, `border: 1px solid border-1`, `color: text-1`
- **Destructive** — `bg: rgba(239,68,68,0.1)`, `border: 1px solid rgba(239,68,68,0.3)`, `color: red`

States:
- **Pressed** — `transform: scale(0.97)` (durations 180ms)
- **Disabled** — `opacity: 0.4`, no pointer events
- **Focused** — outer shadow `0 0 0 3px rgba(0,127,255,0.35)`
- **Loading** — `opacity: 0.65`, 14×14 spinner inside (2px stroke, white, 0.7s spin)

### 2. Form Inputs

**Text field** — height `54`, radius `16`, padding-x `18`, gap `12`. Background `rgba(255,255,255,0.03)`, border `1px solid border-1`. Leading icon `18px` in `text-3`. Input font: Manrope 15/400, color `#fff`.

- Focus: border `rgba(0,127,255,0.5)`, outer shadow `0 0 0 3px rgba(0,127,255,0.1)`.
- Error: bg `rgba(239,68,68,0.05)`, border `rgba(239,68,68,0.35)`, icon and text both `red`.

**Toggle** — `46×26`, radius `13`. Off: `bg: bg-card-2`, `border: 1px solid border-1`. On: `bg: electric`. Thumb `20×20`, radius `10`, white, with `0 2px 5px rgba(0,0,0,0.3)` shadow. Slide animation 200ms.

**Checkbox** — `22×22`, radius `6`. Off: `border: 1.5px solid border-2`, transparent fill. On: `bg: electric`, white check (2px stroke).

**Segmented control** — pill wrapper, padding `4`, `bg: bg-card`, `border: 1px solid border-1`. Buttons height `38–40`, padding-x `14–18`, font 13/700. Selected: `bg: #fff`, `color: bg-deep`. Unselected: transparent, `color: text-3`.

### 3. Badges & Tags

**Status badges** — height `~22`, radius `9999`, padding `5/12`, font 12/700.
- Active — `mint` / `rgba(62,224,162,0.12)` bg / `rgba(62,224,162,0.3)` border + 6px round dot in mint
- Expired — `red` / `rgba(239,68,68,0.10)` / `rgba(239,68,68,0.3)` + red dot
- Pending — `amber` / `rgba(245,158,11,0.12)` / `rgba(245,158,11,0.3)` + amber dot
- Recommended — `mint` text on `rgba(62,224,162,0.15)`, no border, no dot
- New — `#fff` on `electric`
- Free — `bg-deep` on `#fff`

**Feature pills** — padding `8/14`, radius `9999`, `bg: bg-card`, `border: 1px solid border-1`, font 13/500 `text-2`, with leading 14px icon in `electric`.

**Country chips** — padding `6/14`, radius `9999`, font 13/600 `text-1`. Flag emoji + name with 8px gap.

**Data amount chips** — same as country chips. Selected: `bg: electric`, white text, no border.

### 4. Cards

**eSIM plan card** — padding `18`, radius `22`. Background `linear-gradient(160deg, bg-card-2, bg-card)`. Border `1px solid border-1`. Decorative `radial-gradient` overlay top-right (90×90, `electric-soft`, blur 70%).
Layout: flag (20px) + name (13/700) + plan ("3 GB · 15 days", 11px/text-3) + status badge on right. Progress bar 3px high, radius 2, with `linear-gradient(90deg, electric, electric-light)` fill (or `red` if 100%). Bottom row: "Expires {date}" (text-3) left / price (15/800 text-1) right.

**Wallet card** — padding `22`, radius `26`. Background `linear-gradient(135deg, #0a1c3e, #051226)`. Two decorative radial blobs (top-right blue, bottom-left mint). Eyebrow "AVAILABLE BALANCE" (11/700 uppercase 0.08em text-3) + balance (34/800 text-1) + cashback note (12 mint). Bottom: two pill buttons in row (height 42, "Top up" white / "History" ghost).

**Destination card** — padding `16/14`, radius `18`, `bg: bg-card`, `border: 1px solid border-1`. Layout: flag emoji 26px → name (13/700) → plans (11 text-3) → "From $X" row (text-3 / 14/800).

**Alert card** — padding `12/14`, radius `14`, with semantic color background/border tints. Leading 18px icon, title (13/700 text-1), sub (12 text-2).

### 5. List Items

**Settings row** — height ~48, padding `14/18`. Leading icon chip `34×34` radius `10` (`electric-soft` bg, `electric-light` icon). Label (14/500 text-1) → value (13 text-3) → 16px chevron. Rows separated by `1px solid border-1`, wrapped in a card with radius 18.

**Transaction row** — same height/padding. Icon chip in muted `bg-card-2` with `text-3` icon. Two-line label + date. Right: amount (13/700) in `text-1` for debit, `mint` for credit.

### 6. Navigation

**Top app bar** — height `58`, padding-x `18`, radius `18`. Layout: logo chip (30×30 gradient blue, with `glow-blue` shadow) + wordmark "NeoSIM" (17/800 text-1) + bell icon button (34×34) + avatar chip (34×34 gradient blue with initials 12/700 white).

**Bottom tab bar** — 5 tabs (Home, Plans, Explore, Wallet, Profile). Wrapper radius `26`, `bg: rgba(10,20,36,0.96)`, border `1px solid border-1`, padding `6/6`. Each tab: 22px icon + 10/700 label, vertical. Active: `electric` color + 28×2 indicator bar at the top (radius 1). Inactive: `text-3` icon / `text-4` label.

**Back / title bar** — height `52`, radius `14`. Back button left (34×34 ghost) + centered title (15/700 text-1) + action button right.

### 7. Modals & Sheets

**Confirm dialog** — radius `26`, padding `24`. Background `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`, `border: 1px solid border-1`, `backdrop-filter: blur(24px)`. Top: 48×48 icon chip in semantic color. Title 17/700 text-1, body 13 text-2/1.55, two buttons in row at bottom.

**Bottom sheet** — radius `26` (top corners only when affixed to bottom), bg `bg-card`, border `1px solid border-1`. Top: 36×4 drag handle in `border-2`, centered, padding-top `10`. Content padded `18/22/24`.

**Toast** — same shape as alert card, but typically fixed-positioned in app. Width up to `340`. Optional dismiss "X" button on right.

### 8. Icons

System: **Lucide** (`lucide-react`, `lucide-react-native`, or SVG export). Stroke width **1.8px**, `stroke-linecap: round`, `stroke-linejoin: round`.

Icon chip sizes (chip is a square with rounded corners holding the icon):

| Chip | Icon | Radius |
|-----:|-----:|-------:|
| 32   | 16   | 8      |
| 40   | 18   | 11     |
| 48   | 20   | 13     |
| 56   | 24   | 16     |

Used icon set (48+): Globe, Smartphone, Wifi, Zap, Shield, Bell, CreditCard, Wallet, User, Settings, Search, Home, Layers, BarChart2, TrendingUp, Gift, Share2, ArrowRight, ArrowLeft, Check, CheckCircle, AlertCircle, AlertTriangle, Info, Plus, Minus, X, QrCode, Download, Upload, Lock, Mail, Phone, Map, Navigation, RefreshCcw, RotateCcw, Clock, Calendar, Star, Heart, Bookmark, HelpCircle, ChevronRight, ChevronDown, Plane, Globe2, MapPin, Headphones.

---

## Screens

Three reference screens are mocked in `screens-reference.html`. Treat them as compositional examples of how the primitives combine.

### Screen A — Home

**Purpose:** Daily landing for an active user.

**Layout** (top to bottom, all padding `10/14`):
1. **Top row** — left: "Good morning," (10 text-3) + "Alex S. 👋" (14/800 text-1). Right: 28×28 bell icon button + 28×28 avatar (initials).
2. **Balance card** (Wallet card, scaled down) — eyebrow "BALANCE" / 24/800 "$24.50" / mint "+$2.50 cashback" / row of two height-32 buttons (Top up white, History ghost).
3. **Caption "ACTIVE PLAN"** (10/700 uppercase 0.07em text-3).
4. **Active plan row** — plan card with flag 🇯🇵 + "Japan" + "3 GB · Expires Jun 12" + Active badge, progress bar 3px (68% blue gradient), "2.04 GB of 3 GB remaining" (10 text-4).
5. **Caption "QUICK ACTIONS"**.
6. **4-up grid of quick action chips** — each 28×28 icon chip in `electric-soft` + 9/600 text-2 label. Icons: Globe→Explore, Plus→Add eSIM, Zap→Top up, Share2→Refer.

### Screen B — Explore

**Purpose:** Browse and filter eSIM plans by country.

**Layout:**
1. **Title** "Explore" (16/800 text-1).
2. **Search field** — height 40, full-pill radius, ghost background, "Search countries, regions…" placeholder with leading search icon.
3. **Filter chips row** — horizontally scrolling. Selected ("All"): `bg: electric`, white text. Others: ghost ("Asia", "Europe", "Americas", "Middle East").
4. **Destination list** — vertical stack of rows. Each row: padding 10/12, radius 14, `bg: bg-card`, border. Flag emoji 20px + country (12/700) + "X plans from $Y" (10 text-3) + optional badge ("Popular", "Best value") + chevron right.

### Screen C — Install eSIM (QR)

**Purpose:** Show QR + manual code to activate an eSIM on the device.

**Layout:**
1. **Header row** — back button (26×26 ghost) + centered title "Install eSIM" (13/700).
2. **Subtitle stack** — eyebrow "JAPAN 3 GB · 15 DAYS" (10 uppercase 0.07em text-3) + "Scan to activate" (14/700 text-1).
3. **QR code** — 150×150 square, radius 18, `bg: bg-card`, border. 8×8 grid of small rounded squares (some white, some transparent) representing QR modules. Center inset: 34×34 logo chip with mini blue gradient square.
4. **Manual code card** — padding 10/12, radius 12, `bg: bg-card`, border. "Or enter manually:" (9 text-3) + Mono code (9 mono `electric-light`).
5. **CTA button** — "Open Settings →" full-width white pill (height 44).

---

## Interactions & Behavior

- **Tap feedback** — every button uses `scale(0.97)` on press, 180ms transition.
- **Toggle slide** — thumb moves between left:3 and left:22 over 200ms ease.
- **Progress bar** — animated fill width with 400ms ease when value changes.
- **Pill switcher** — selected pill slides via background swap (no animation needed beyond color).
- **Sheets** — slide up from bottom, ease-out, ~320ms. Backdrop fade in `rgba(0,5,15,0.7)` with 8px blur.
- **Toasts** — slide in from top, 200ms; auto-dismiss after 4000ms.
- **Loading spinner** — 14×14, 2px white stroke on `rgba(255,255,255,0.3)` track, 0.7s linear infinite rotate.
- **Cards hover/focus (web only)** — `translateY(-4px)`, border lightens to `border-2`, 300ms ease.

## State / Data shape

Suggested data interfaces for plan & wallet:

```ts
type Plan = {
  id: string;
  countryCode: string;       // 'JP'
  countryFlag: string;       // '🇯🇵'  (or use a flag asset library)
  countryName: string;       // 'Japan'
  data: { totalMb: number; usedMb: number };
  validityDays: number;
  expiresAt: string;         // ISO date
  status: 'active' | 'expired' | 'pending';
  priceUsd: number;
};

type Wallet = {
  balanceUsd: number;
  pendingCashbackUsd: number;
  currency: 'USD' | 'EUR' | ...;
};

type Transaction = {
  id: string;
  type: 'plan_purchase' | 'topup' | 'cashback' | 'refund';
  amountUsd: number;         // signed: negative for debit
  description: string;
  date: string;              // ISO
};
```

## Assets

- **Fonts:** Manrope (Google Fonts — SIL Open Font License). Load via `next/font/google` for automatic optimization and zero CLS.
- **Icons:** `lucide-react` (ISC license). All icons listed above are direct named imports — e.g. `import { Globe, Zap } from 'lucide-react'`.
- **Flags:** Currently rendered as emoji. For consistent rendering across browsers/OSes consider an SVG flag library (e.g. `react-circle-flags` or `country-flag-icons`).
- No proprietary illustrations — visual identity is built from typography, color, geometry, and glow effects only.

## Files in this bundle

- `mobile-ui-kit.html` — the full interactive UI kit (all 13 component groups + 3 example screens). Open in a browser and pan/zoom the canvas to inspect.
- `design-canvas.jsx`, `tweaks-panel.jsx` — runtime scaffold for the prototype (you can ignore these — they only power the in-browser canvas).
- `colors_and_type.css` — the upstream design system file for reference (note: this contains a **light-theme** marketing variant; the **mobile app uses the dark variant** documented above).
- `README.md` — this document.

## Implementation suggestions (Next.js)

- Start with the **tokens** — paste the color/spacing/radius/shadow tables into `globals.css` as CSS variables. Mirror them in `tokens.ts` for any JS-side logic.
- Build primitives in this order: **Button → Field → Toggle → Badge → IconChip → Card**. Each subsequent component composes the previous.
- Use **CSS variables, not Tailwind arbitrary values**, for tokens. `bg-[#007fff]` will drift; `bg-electric` won't.
- Keep the **dark surface system** consistent — never use pure `#000`; the base is `#000a17`. Surfaces step up by lightening, not by adding shadow.
- Glow shadows on primary CTAs are part of the brand — keep them subtle and only on the main action of each screen.
- For **glass morphism**, use `backdrop-filter: blur(20px)` directly in CSS — Tailwind v4's `backdrop-blur-xl` (`24px`) is close enough for most cases.
- For **bottom sheets / modals**, use `framer-motion` with `AnimatePresence`. Slide-up sheet: `initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}` with `transition={{ type: 'spring', damping: 30, stiffness: 300 }}`.
- For the **bottom tab bar**, use Next.js `usePathname()` to determine the active tab; render the active state per the spec (electric color + 28×2 indicator).
- The mobile UI kit lives **under a route group** (e.g. `app/(mobile)/`) with its own `layout.tsx` that wraps children in the bottom-tab shell and applies the dark theme — keep the marketing site's light theme isolated.
- **Mobile-first responsive:** if the same Next.js app serves both desktop marketing and mobile app screens, scope these styles to a wrapper class (`.app-shell { ... }`) or to the route group's layout so they don't leak to the marketing pages.

## Example: tokens in globals.css

```css
@import "tailwindcss";

:root {
  --bg-deep: #000a17;
  --bg-card: #0a1424;
  --bg-card-2: #0f1c33;
  --electric: #007fff;
  --electric-light: #1a90ff;
  --electric-soft: rgb(0 127 255 / 0.12);
  --electric-glow: rgb(0 127 255 / 0.35);
  --mint: #3ee0a2;
  --amber: #f59e0b;
  --red: #ef4444;
  --text-1: #ffffff;
  --text-2: rgb(255 255 255 / 0.72);
  --text-3: rgb(255 255 255 / 0.50);
  --text-4: rgb(255 255 255 / 0.32);
  --border-1: rgb(255 255 255 / 0.08);
  --border-2: rgb(255 255 255 / 0.14);

  --shadow-card: 0 4px 12px rgb(0 0 0 / 0.3);
  --shadow-lg: 0 8px 24px rgb(0 0 0 / 0.5);
  --shadow-glow-blue: 0 0 32px rgb(0 127 255 / 0.3);
}

@theme inline {
  --color-bg-deep: var(--bg-deep);
  --color-bg-card: var(--bg-card);
  --color-electric: var(--electric);
  --color-mint: var(--mint);
  --color-text-1: var(--text-1);
  --color-text-2: var(--text-2);
  /* ... etc */
  --font-sans: var(--font-manrope);
  --font-mono: var(--font-jetbrains);
}
```

## Example: a primitive Button component

```tsx
// components/ui/button.tsx
import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

type Variant = 'primary-white' | 'primary-blue' | 'ghost' | 'destructive';
type Size = 'lg' | 'md' | 'sm';

const sizeMap: Record<Size, string> = {
  lg: 'h-[52px] px-6 text-[15px]',
  md: 'h-11 px-5 text-sm',
  sm: 'h-9 px-4 text-[13px]',
};
const variantMap: Record<Variant, string> = {
  'primary-white': 'bg-white text-bg-deep',
  'primary-blue':  'bg-electric text-white shadow-[0_8px_24px_rgb(0_127_255/0.35)]',
  'ghost':         'bg-bg-card border border-[var(--border-1)] text-text-1',
  'destructive':   'bg-[rgb(239_68_68/0.1)] border border-[rgb(239_68_68/0.3)] text-red',
};

export const Button = forwardRef<HTMLButtonElement, {
  variant?: Variant; size?: Size; loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ variant = 'primary-white', size = 'lg', loading, className, children, ...rest }, ref) => (
    <button ref={ref} className={cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-bold',
      'transition-transform duration-[180ms] active:scale-[0.97]',
      'disabled:opacity-40 disabled:pointer-events-none',
      sizeMap[size], variantMap[variant], className,
    )} {...rest}>
      {loading && <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
      {children}
    </button>
  ),
);
Button.displayName = 'Button';
```

Use the same pattern (variant + size maps, forwarded ref, Tailwind utility composition) for every primitive in `components/ui/`.
