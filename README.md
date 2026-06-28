# Kenneth Clein Fernandez — Portfolio

Personal developer portfolio built with React, Tailwind CSS, and Framer Motion.

**Live:** [kxnn02-portfolio.vercel.app](https://kxnn02-portfolio.vercel.app/)

---

## Tech Stack

- **React** (functional components + hooks)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (scroll animations, staggered reveals, spring physics)
- **Lenis** (smooth scroll)
- **Vite** (build tool)

## Features

- Dark mode editorial design with Syne + Inter typography
- Preloader with counting animation
- Character-by-character hero text reveal with 3D mouse tilt
- Animated gradient text and periodic glitch effect
- Particle field background with cursor repulsion
- Animated terminal typing loop
- Custom cursor with context-aware state changes (desktop only)
- Horizontal marquee with pause-on-hover
- Floating image preview on project hover (desktop)
- Text scramble effect on project names
- Magnetic buttons with spring physics
- Parallax floating orbs and gradient cursor follow
- Film grain noise overlay
- Smooth section reveal transitions
- Fully responsive (mobile, tablet, desktop)
- Open Graph meta tags for rich link previews

## Sections

1. **Hero** — name, role, animated terminal
2. **Marquee** — scrolling keyword strip
3. **Values** — Efficiency, Curiosity, Craft, Persistence
4. **About** — bio, photo, tech stack pills
5. **Experience** — FlyRank AI, Philippine Coast Guard, JPCS
6. **Projects** — PasaBuy, Flappy Kiro, StraySafe
7. **Skills** — linked tech pills + three-column breakdown
8. **Contact** — CTA, GitHub, LinkedIn

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── AnimatedTerminal.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Experience.jsx
│   ├── FloatingOrbs.jsx
│   ├── GradientFollow.jsx
│   ├── Hero.jsx
│   ├── MagneticButton.jsx
│   ├── Marquee.jsx
│   ├── Navbar.jsx
│   ├── NoiseOverlay.jsx
│   ├── ParticleField.jsx
│   ├── Preloader.jsx
│   ├── Projects.jsx
│   ├── RevealSection.jsx
│   ├── ScrambleText.jsx
│   ├── Skills.jsx
│   ├── SmoothScroll.jsx
│   ├── StatusLine.jsx
│   └── Values.jsx
├── hooks/
│   └── useTextScramble.js
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

Deployed on [Vercel](https://vercel.com). Auto-deploys on push to `main`.

## License

MIT
