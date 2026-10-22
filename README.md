# HealthNexus - Digital Health Companion

<p align="center">
  <img src="/globe.svg" alt="HealthNexus Logo" width="48" height="48" />
</p>

<p align="center">
  <strong>AI-powered symptom analysis and telemedicine platform</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.10-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.1-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide%20React-0.561-0EAA84" alt="Lucide React" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Linting and Type Checking](#linting-and-type-checking)
- [Component Guide](#component-guide)
- [Custom Hooks](#custom-hooks)
- [Utilities](#utilities)
- [Styling](#styling)
- [Known Considerations](#known-considerations)
- [Troubleshooting](#troubleshooting)

---

## Overview

HealthNexus is a frontend-first patient-facing health web application built as a final year computer science project at Federal Urdu University of Arts, Science and Technology. The platform provides three primary capabilities through a unified dashboard:

1. **AI-Powered Symptom Checker** - Users describe symptoms in natural language (text or voice) and receive preliminary condition analysis with confidence scores.
2. **Telemedicine Directory** - Browse verified doctors, filter by consultation mode (video, audio, chat), and view availability.
3. **Health Records Management** - View and manage stored medical records, prescriptions, and consultation history.

The application is designed as a static-first Next.js application with client-side interactivity for forms, voice input, and navigation. Backend integration is deferred; all data currently comes from static mock data with simulated API responses via `setTimeout`.

## Features

### Symptom Checker
- Free-text input with real-time typing support
- Voice-to-text input via Web Speech API (`SpeechRecognition`)
- Simulated AI analysis with confidence scoring (85%, 65%, 45% for three sample conditions)
- Responsive results display with color-coded confidence badges (green/yellow/red)
- Mobile-responsive layout

### Telemedicine
- Doctor directory with filtering capabilities
- Consultation mode indicators (Video, Audio, Chat)
- Doctor card with avatar, ratings, experience, languages
- Consultation type selection (Video, Audio, Chat)

### Health Dashboard
- Feature highlights with iconography
- Real-time stats display (user count, consultation metrics)
- Responsive layout

### Navigation
- Sticky header with desktop and mobile navigation
- Hydration-safe mount detection (skeleton loaders on first render)

## Architecture

### Next.js App Router

The project uses the Next.js 13+ App Router architecture with the following structure:

```
src/
├── app/                          # App Router (file-based routing)
│   ├── alerts/
│   │   └── page.tsx              # /alerts route
│   ├── community/
│   │   └── page.tsx              # /community route
│   ├── health-records/
│   │   └── page.tsx              # /health-records route
│   ├── telemedicine/
│   │   └── page.tsx              # /telemedicine route
│   ├── symptom-checker/
│   │   └── page.tsx              # /symptom-checker route
│   ├── globals.css               # Global CSS imports
│   ├── layout.tsx                # Root layout (shared across all routes)
│   └── page.tsx                  # Home page (/)
├── components/                   # Reusable React components
│   ├── Header.tsx                # Site-wide navigation header
│   ├── Footer.tsx                # Site-wide footer
│   ├── SymptomChecker.tsx        # Symptom input + analysis component
│   ├── VoiceInput.tsx            # Web Speech API voice input button
│   ├── DashboardStats.tsx        # Statistics display section
│   ├── DoctorCard.tsx            # Individual doctor listing card
│   ├── AlertCard.tsx             # Alert notification card (empty)
│   ├── HealthRecordCard.tsx      # Health record display card (empty)
│   └── QuestionCard.tsx          # Symptom question card (empty)
├── hooks/
│   └── useMounted.ts             # Hydration-safe mount detection hook
└── utils/
    ├── constants.ts              # Application constants (empty)
    └── data.ts                   # Mock data for doctors, symptoms, records
```

### Routing Map

| Route               | Component                  | Purpose                          |
|---------------------|----------------------------|----------------------------------|
| `/`                | `app/page.tsx`            | Home page with hero + features   |
| `/symptom-checker` | `app/symptom-checker/page.tsx` | Symptom checker interface    |
| `/telemedicine`    | `app/telemedicine/page.tsx`   | Doctor directory              |
| `/health-records`  | `app/health-records/page.tsx` | Medical records view           |
| `/community`       | `app/community/page.tsx`      | Community forum (stub)         |
| `/alerts`          | `app/alerts/page.tsx`         | Health alerts (stub)           |

### Data Flow

```
User Input (text/voice)
  → SymptomChecker component state
    → setTimeout (1.5s simulated API delay)
      → Mock results array
        → Map to result cards with confidence badges
```

## Tech Stack

| Category        | Technology         | Version  | Notes                                    |
|-----------------|--------------------|----------|------------------------------------------|
| Framework       | Next.js            | 16.0.10  | App Router, React Server Components      |
| Runtime         | React              | 19.2.1   | React Compiler enabled                   |
| Language        | TypeScript         | 5.x      | Strict mode enabled                      |
| Build Tool      | Next.js built-in   | -        | No separate bundler configured         |
| Styling         | Tailwind CSS       | 4.x      | Custom health-themed color palette       |
| CSS Engine      | PostCSS            | -        | `@tailwindcss/postcss` as plugin        |
| Icons           | Lucide React       | 0.561.0  | SVG icon library                         |
| Also available  | react-icons        | 5.5.0    | Not currently imported in components     |
| Utilities       | clsx, tailwind-merge| -       | Imported but not yet utilized            |
| Date handling   | date-fns           | 4.1.0    | Available for future date formatting     |
| Linting         | ESLint             | 9.x      | Next.js Core Web Vitals + TypeScript     |
| Type checking   | TypeScript Compiler| 5.x      | `tsc --noEmit` for type verification     |

### TypeScript Configuration

The project uses a strict TypeScript configuration (`tsconfig.json`):

- **Target**: `ES2017` - balances modern features with broad browser support
- **Module resolution**: `bundler` - compatible with Next.js build pipeline
- **JSX**: `react-jsx` (automatic runtime, no explicit React import needed)
- **Path aliases**: `@/*` maps to `./src/*`
- **Strict mode**: Enabled with all strict checks active
- **Incremental builds**: Enabled via `tsconfig.tsbuildinfo`

## Prerequisites

- Node.js 20.x or 22.x (required by Next.js 16)
- npm 10.x or 11.x
- No additional build tools required (Next.js bundles its own Babel/ESBuild pipeline)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd HealthNexus-web

# Install dependencies
npm install

# If peer dependency conflicts occur (known issue with some ESLint/React tooling):
npm install --legacy-peer-deps
```

### Dependency Notes

During initial setup, the project may experience peer dependency conflicts between:
- `eslint` (v9) and `eslint-config-next` (v16)
- `react` (v19) and type definition packages

If `npm install` fails, use `--legacy-peer-deps` as shown above. This is a common pattern with bleeding-edge Next.js releases.

The `npm_install.log` file at the project root is a transient artifact from the initial dependency installation and can be safely deleted.

## Development

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. The development server runs with:
- Hot Module Replacement (HMR) enabled
- React Strict Mode (double render detection)
- Source maps enabled

### Available Scripts

| Script           | Command           | Description                              |
|------------------|-------------------|------------------------------------------|
| `dev`           | `next dev`        | Start development server                 |
| `build`         | `next build`      | Build production bundle                  |
| `start`         | `next start`      | Start production server                  |
| `lint`          | `eslint`          | Run ESLint on all source files           |
| Type check      | `npx tsc --noEmit`| TypeScript type checking only           |

### Environment Variables

No environment variables are currently in use. The `.env*` files are ignored in `.gitignore`.

Future environment variables that may be needed:

| Variable             | Purpose                          | Required |
|----------------------|----------------------------------|----------|
| `NEXT_PUBLIC_API_URL`| Backend API endpoint             | When backend is added |
| `NEXT_PUBLIC_GA_ID`  | Google Analytics tracking ID     | For analytics |

## Build & Deployment

### Production Build

```bash
npm run build
```

This will:
1. Run TypeScript type checking
2. Bundle all JavaScript/CSS with Next.js' webpack pipeline
3. Optimize images and assets
4. Generate static pages at build time for all routes (static export)
5. Output to `.next/` directory

### React Compiler

The project has React Compiler enabled in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

This enables automatic memoization and optimization of React components using the Babel-based React Compiler. It eliminates manual `useMemo`, `useCallback`, and `memo` wrappers for most cases.

### Deployment Targets

- **Vercel**: Recommended - zero-config deployment. Create a new project from the GitHub repository.
- **Docker**: Not currently configured. Would require a Dockerfile and `next.config.js` adjustments for standalone builds.
- **Node.js server**: Run `npm run start` after building. Note: The app is configured for static generation, so no Node.js server is required for the current feature set.

## Linting and Type Checking

### ESLint Configuration

The project uses the ESLint Flat Config format (`eslint.config.mjs`):

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
```

**Active rule sets**:
- `eslint-config-next/core-web-vitals` - Performance, SEO, and best practices
- `eslint-config-next/typescript` - TypeScript-specific rules

**Ignored paths**: `.next/`, `out/`, `build/`, `next-env.d.ts`

**Key rules enforced**:
- `react/no-unescaped-entities` - Quotes in JSX must be escaped
- `@typescript-eslint/no-explicit-any` - No `any` types
- `@typescript-eslint/no-unused-vars` - No unused variables/imports
- `react-hooks/rules-of-hooks` - Hooks must be called at top level
- `react-hooks/set-state-in-effect` - Avoid setState in effects (except where documented with eslint-disable)

### Type Checking

TypeScript is run as part of the build process but can be invoked independently:

```bash
npx tsc --noEmit    # Type check without emitting files
```

The project uses strict mode with the following notable settings:
- `strict: true` - All strict type checks enabled
- `noEmit: true` - Compilation doesn't produce output files (Next.js handles this)
- `isolatedModules: true` - Ensures compatibility with bundlers

## Component Guide

### Layout Components

#### Header (`components/Header.tsx`)
- Client component (`'use client'`)
- Uses `useState` and `useEffect` for mount detection
- Displays skeleton loaders on initial render to prevent hydration mismatch
- Mobile-first responsive design with hamburger menu toggle
- **Known issue**: Calling `setMounted(true)` in `useEffect` triggers the `react-hooks/set-state-in-effect` ESLint rule; resolved with inline `eslint-disable-next-line` comment

#### Footer (`components/Footer.tsx`)
- Server component (no `'use client'` directive)
- Contains dynamic year using `new Date().getFullYear()`
- Includes quick links, contact info, and project attribution

### Feature Components

#### SymptomChecker (`components/SymptomChecker.tsx`)
- Client component with state for symptoms, loading state, and results
- Uses `setTimeout` to simulate API response (1.5s delay)
- Results are typed as `Array<{ condition: string; confidence: number; description: string }>`
- **Known issue**: Unescaped quotes in JSX text required escaping to `&quot;` to satisfy ESLint

#### VoiceInput (`components/VoiceInput.tsx`)
- Integrates Web Speech API via `SpeechRecognition` or `webkitSpeechRecognition`
- Properly typed interfaces for `SpeechRecognitionResultEvent` and `SpeechRecognitionErrorEvent`
- Uses refs to track mount status and recognition instance lifecycle
- Returns a disabled button with `MicOff` icon when speech recognition is not supported

#### DoctorCard (`components/DoctorCard.tsx`)
- Displays doctor information with avatar derived from name initials
- Dynamically renders consultation mode buttons based on `availableFor` array
- Typed doctor interface with 9 properties (name, specialty, rating, etc.)

#### DashboardStats (`components/DashboardStats.tsx`)
- Static statistics display with emoji icons
- Shows 4 metric cards (Active Users, Consultations, Success Rate, Countries)

### Empty Placeholder Components

The following component files exist but are empty (0 bytes):
- `AlertCard.tsx`
- `HealthRecordCard.tsx`
- `QuestionCard.tsx`

These are reserved for future implementation when the alerts, health records, and symptom question flows are built out.

### Utility Components

#### useMounted (`hooks/useMounted.ts`)
- Simple mount detection hook using `useState` and `useEffect`
- Returns boolean indicating whether the component has mounted on the client

## Custom Hooks

### `useMounted`

```ts
import { useState, useEffect, useRef } from 'react'

export function useMounted() {
  const [mounted, setMounted] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return mounted
}
```

**Purpose**: Prevents hydration mismatch errors by delaying render of client-only content until after the first mount.

**Usage pattern**:
```tsx
const mounted = useMounted()
if (!mounted) {
  return <SkeletonLoader />
}
return <RealComponent />
```

**Known limitation**: The `setMounted(true)` call in `useEffect` violates the `react-hooks/set-state-in-effect` ESLint rule. The `eslint-disable` comment is used as a documented exception since this is a well-established pattern for preventing hydration mismatches.

## Utilities

### `constants.ts`

Currently empty (0 bytes). Reserved for application-wide constants such as:
- API endpoint URLs
- Default pagination limits
- Icon size constants
- Color mapping helpers

### `data.ts`

Contains mock data arrays for development and static export:

```ts
export const mockSymptoms = [
  'Headache',
  'Fever',
  'Cough',
  'Fatigue',
  'Nausea',
  'Sore throat',
  'Body aches',
  'Shortness of breath',
]

export const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Physician',
    rating: 4.9,
    experience: '12 years',
    nextAvailable: 'Today, 2:30 PM',
    consultationFee: '$50',
    languages: ['English', 'Spanish'],
    availableFor: ['video', 'audio', 'chat']
  }
]

export const mockHealthRecords = [
  {
    id: 1,
    date: '2024-01-15',
    type: 'Consultation',
    doctor: 'Dr. Sarah Johnson',
    diagnosis: 'Upper Respiratory Infection',
    prescription: 'Amoxicillin 500mg',
    notes: 'Rest and hydrate'
  }
]
```

**Known limitation**: The `mockDoctors` and `mockHealthRecords` arrays contain only a single entry each, with a `// Add more mock data...` comment. In a production environment, these would be replaced with API-driven data.

## Styling

### Tailwind CSS Configuration

```ts
// tailwind.config.ts
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50, 100, 500, 600, 700 },
        health: { blue, teal, purple, green }
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    },
  },
  plugins: [],
}
```

### Custom Color Palette

The project defines a health-themed color palette in two places:

1. **Tailwind `theme.extend.colors.health`** (in `tailwind.config.ts`):
   - `blue: #2563eb` (blue-600)
   - `teal: #0d9488` (teal-600)
   - `purple: #7c3aed` (violet-600)
   - `green: #10b981` (emerald-600)

2. **CSS custom properties** (in `src/app/globals.css`):
   - `--color-health-blue: #2563eb`
   - `--color-health-teal: #0d9488`
   - `--color-health-purple: #7c3aed`
   - `--color-health-green: #10b981`

**Inconsistency note**: The Tailwind config also defines a `primary` color palette (`primary.500: #0ea5e9`) that overlaps with but differs from the `health.blue` value. Neither the `primary` keys nor the CSS custom properties are currently referenced together consistently across components. Some components use `text-health-blue` (Tailwind class) while others use `bg-health-blue/10` (CSS variable syntax).

### Global CSS

The `src/app/globals.css` file imports Google Fonts (Inter) and Tailwind CSS, and defines:
- Base body styles (`bg-gray-50 text-gray-900`)
- Component classes (`.btn-primary`, `.btn-secondary`, `.card`, `.input-field`)

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

**Note**: The project imports `Inter` from `next/font/google` in `layout.tsx` but does not use it. Instead, it falls back to a global CSS `@import` of the same font. This creates a double-loading pattern where the font may be requested twice. In a production environment, one approach should be chosen.

## Known Considerations

### 1. Client/Server Component Mix

Several components are marked with `'use client'` directive:
- `Header.tsx` - Required for `useState`/`useEffect` (mount detection)
- `SymptomChecker.tsx` - Required for interactive state management
- `VoiceInput.tsx` - Required for `useState`/`useEffect` and browser APIs
- `useMounted.ts` - Required for `useState`/`useEffect`

This creates a boundary between client-side and server-side rendered content. The React Compiler (enabled in `next.config.ts`) may optimize some of these boundaries, but the explicit `'use client'` directives ensure correct behavior.

### 2. Hydration Mismatch Prevention

The `Header.tsx` component uses a mount detection pattern to render skeleton loaders on the first render:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => {
  setMounted(true)
}, [])
if (!mounted) {
  return <SkeletonLoader />
}
```

The root layout (`app/layout.tsx`) also uses `suppressHydrationWarning` on `<html>` and `<body>` tags and includes an inline script to prevent browser extension interference with DOM during hydration.

### 3. Simulated Data Layer

All data in the application is mock data:
- `SymptomChecker` uses `setTimeout` with a 1500ms delay to simulate API calls
- `mockDoctors` and `mockHealthRecords` in `data.ts` contain only single entries
- `TelemedicinePage` and `HealthRecordsPage` have hardcoded arrays, not imported from `utils/data.ts`

**Risk**: Data duplication exists - `TelemedicinePage` defines its own `doctors` array that mirrors the structure in `utils/data.ts`. Changes to one may not be reflected in the other.

### 4. Empty Component Files

Three component files are empty (0 bytes):
- `AlertCard.tsx`
- `HealthRecordCard.tsx`
- `QuestionCard.tsx`

These will cause TypeScript import errors if referenced without content.

### 5. Browser API Dependencies

The `VoiceInput` component requires the Web Speech API, which is only available in Chromium-based browsers. The component gracefully degrades to a disabled button when the API is not available.

### 6. Unused Package Dependencies

The following packages are in `package.json` but not currently used in the source code:
- `clsx` - CSS class merging utility
- `date-fns` - Date formatting library
- `react-icons` - Alternative icon library
- `tailwind-merge` - Tailwind class conflict resolver

## Troubleshooting

### Issue: `Cannot find module 'next' or its corresponding type declarations`

**Cause**: Dependencies not installed.
**Solution**: Run `npm install` or `npm install --legacy-peer-deps` if peer dependency conflicts occur.

### Issue: ESLint config `ERR_MODULE_NOT_FOUND` for 'eslint'

**Cause**: ESLint version mismatch between locally installed and globally referenced config.
**Solution**: Ensure `eslint` and `eslint-config-next` versions are compatible. Both should be installed as devDependencies and invoked via `npx eslint`.

### Issue: `react-hooks/set-state-in-effect` warnings

**Cause**: Calling `setState` directly inside `useEffect`.
**Solution**: Add `// eslint-disable-next-line react-hooks/set-state-in-effect` comment. This pattern is acceptable for mount detection and hydration prevention.

### Issue: `react/no-unescaped-entities` errors in JSX

**Cause**: Using literal quotes (`"`) or apostrophes (`'`) in JSX text content.
**Solution**: Use HTML entities (`&quot;`, `&apos;`) or wrap expressions in template literals.

### Issue: `react-hooks/rules-of-hooks` errors

**Cause**: React Hooks called inside conditional logic or after early returns.
**Solution**: Ensure all `useState`, `useEffect`, `useRef`, etc. calls are at the top level of the component function, before any conditional returns.

### Issue: `Cannot access refs during render`

**Cause**: Accessing `ref.current` directly in the JSX conditional logic.
**Solution**: Use a state variable (`useState`) instead of a ref for render-time conditional checks. Initialize the ref in a `useEffect`.

### Issue: `@typescript-eslint/no-explicit-any` errors

**Cause**: Explicit `any` type used in TypeScript code.
**Solution**: Define proper interfaces for API responses and browser API types (e.g., `SpeechRecognitionInstance`, `SpeechRecognitionErrorEvent`).

---

## License

This is a final year project demonstration. For medical emergencies, please contact local emergency services.

## Contact

**Federal Urdu University of Arts, Science and Technology**

Developed by: Muhammad Sajid, Muhammad Owais Raza, Razaq Khalid Rao, Muhammad Raheel

---

*This project is part of an academic capstone project and is not intended for production use in healthcare settings.*