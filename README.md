# Arquiforma Construções

Premium residential construction company website built with cutting-edge web technologies.

## 🚀 Tech Stack

- **React 19** — Modern React with latest features
- **Vite** — Lightning-fast build tool with HMR
- **TypeScript** — Strict mode for type safety
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth, production-ready animations
- **Three.js** — Pure 3D graphics (no wrappers)
- **Lenis** — Smooth scrolling experience

## 📁 Project Structure

```
src/
├── components/       # Navbar, Footer, reusable UI
├── sections/         # Hero, Servicos, Portfolio, Contacto
├── scenes/           # Three.js scenes (HeroScene.ts)
├── hooks/            # useLenis, useScrollProgress
├── styles/           # Design tokens, global CSS
└── assets/           # Images, icons (SVG only)
```

## 🎨 Design System

**Colors:**
- `--color-bg`: #F4F2EC (Warm beige)
- `--color-accent`: #C8A96A (Gold highlight)
- `--color-text`: #1C1A14 (Near-black)
- `--color-muted`: #6B6456 (Secondary text)

**Typography:**
- Serif: Instrument Serif (headlines)
- Sans: Inter (body text)
- Mono: IBM Plex Mono (code/data)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Type Check

```bash
npx tsc --noEmit
```

## ✨ Features

- **Glassmorphism Navbar** — Elegant navigation with backdrop blur
- **Smooth Scrolling** — Lenis smooth scroll implementation
- **Animated Sections** — Framer Motion entrance animations
- **3D Scene** — Three.js integration in hero section
- **Responsive Design** — Mobile-first, 375px–1440px
- **Accessibility** — WCAG AA compliant, keyboard navigation
- **Performance** — Code splitting, lazy loading, optimized assets

## 📱 Components

- **Navbar** — Fixed glassmorphic navigation with CTA button
- **Hero** — Full-height section with 3D scene
- **Servicos** — Service cards with animations
- **Portfolio** — Project showcase grid
- **Contacto** — Contact form section
- **Footer** — Multi-column footer layout

© 2024 Arquiforma Construções. Built with React 19 + Vite + Tailwind CSS.
```
