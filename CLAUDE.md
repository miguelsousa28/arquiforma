# Arquiforma Construções — Project Guidelines

## Project Overview
Portuguese residential construction company website built with React 19, Vite, TypeScript, and Tailwind CSS v4. Premium design focused on elegance and professionalism.

---

## Integrated Skills

### 1. UI/UX Pro Max Skill
**Design System & Interface Quality Standards**

#### Design Principles
- **67 UI Styles Available**: Use appropriate styles from Minimalism, Glassmorphism, Neumorphism for this luxury construction brand
- **161 Color Palettes**: Industry-specific design aligned with residential/construction vertical
- **57 Google Font Pairings**: Typography must follow curated pairings (see Design Tokens below)

#### Pre-Delivery Checklist
- ✅ No emoji icons — use SVG alternatives only
- ✅ Cursor: pointer on all clickable elements
- ✅ Smooth transitions: 150-300ms for hover states
- ✅ Text contrast minimum 4.5:1 (WCAG AA)
- ✅ Visible keyboard navigation focus states
- ✅ Responsive design: 375px–1440px breakpoints
- ✅ Respect `prefers-reduced-motion` preferences

#### Anti-Patterns to Avoid
- Bright neon colors + harsh animations (inconsistent with luxury brand)
- Excessive decoration that distracts from content
- Poor contrast in dark mode scenarios
- Unresponsive font sizing on mobile

---

### 2. Andrej Karpathy Development Skills
**Four Core Principles for Clean Code**

#### 1. Think Before Coding
- State assumptions explicitly when requirements are unclear
- Present multiple interpretations if uncertain
- Ask for clarification before making assumptions
- Never guess at intent

#### 2. Simplicity First
- Avoid speculative features and premature abstractions
- Reject unnecessary error handling for impossible scenarios
- Principle: "If 200 lines could be 50, rewrite it"
- Remove code if a senior engineer would consider it overcomplicated

#### 3. Surgical Changes
- Only modify what's strictly necessary
- Don't improve adjacent code while fixing bugs
- Don't reformat unrelated sections
- Only delete dead code directly caused by your changes

#### 4. Goal-Driven Execution
- Transform tasks into verifiable success criteria
- Instead of "add component" → "component loads, renders correctly, passes tests"
- Instead of "fix bug" → "write test reproducing issue, make it pass"

---

## Design Tokens (index.css)

```css
:root {
  /* Colors */
  --color-bg: #F4F2EC;           /* Warm beige background */
  --color-surface: #EAE8E0;      /* Slightly darker surface */
  --color-text: #1C1A14;         /* Near-black text */
  --color-muted: #6B6456;        /* Muted text/secondary */
  --color-accent: #C8A96A;       /* Gold accent */
  --color-grid: rgba(154, 142, 114, 0.15); /* Subtle grid overlay */
  
  /* Typography */
  --font-serif: "Instrument Serif", serif;    /* Headlines */
  --font-sans: "Inter", sans-serif;           /* Body text */
  --font-mono: "IBM Plex Mono", monospace;    /* Code/data */
  
  /* Font Weights */
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
}
```

### Google Fonts to Import
- Instrument Serif (400, 400 italic)
- Inter (300, 400, 500)
- IBM Plex Mono (400)

---

## Project Structure

```
src/
├── components/      # Navbar, Footer, reusable UI components
├── scenes/          # HeroScene.ts (Three.js isolated, no React Three Fiber)
├── hooks/           # useScrollProgress.ts, useLenis.ts, custom logic
├── sections/        # Hero, Servicos, Portfolio, Contacto page sections
├── styles/          # tokens.ts, index.css, Tailwind configuration
└── assets/          # Images, icons (SVG only)
```

---

## Technology Stack

| Tool | Purpose | Version |
|------|---------|---------|
| React | UI framework | 19 |
| Vite | Build tool | latest |
| TypeScript | Type safety (strict mode) | latest |
| Tailwind CSS | Styling | v4 |
| Framer Motion | Animations (motion/react) | v12+ |
| Three.js | 3D graphics (pure, no React wrapper) | latest |
| Lenis | Smooth scroll | latest |

---

## Implementation Rules

1. **Strict TypeScript**: All files must pass `tsc --strict`
2. **No React Three Fiber**: Use plain Three.js in isolated scene modules
3. **Accessibility First**: Every interactive element must be keyboard accessible
4. **Mobile-First**: Design for 375px first, then scale up
5. **Performance**: Lazy-load Three.js scenes, optimize images (SVG preferred)
6. **CSS**: Tailwind utility classes + CSS variables for design tokens
7. **Animations**: Use Framer Motion for React components, Three.js for 3D

---

## Quick Reference

**Start Dev Server**: `npm run dev`
**Build for Production**: `npm run build`
**Type Check**: `npx tsc --noEmit`
