**English** | [日本語](./README.ja.md)

<div align="center">
  <h1>Phong Nguyen — Portfolio</h1>
  <p><strong>Personal portfolio and interactive engineering showcase of Phong Nguyen (EPAUENGI).</strong></p>
  <p>
    An animation-engineered digital portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, integrating a unified motion pipeline powered by Locomotive Scroll, GSAP ScrollTrigger, and custom 3D parametric vector physics.
  </p>
  <p>
    <a href="https://epauengi.github.io"><strong>Live Website</strong></a> ·
    <a href="https://github.com/epauengi"><strong>GitHub Profile</strong></a> ·
    <a href="mailto:ndphong0602@gmail.com"><strong>Contact</strong></a>
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19.2-149eca?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP 3" />
</p>

---

## Overview

This repository houses the source code for the personal portfolio of **Phong Nguyen**, an Information Technology student at the **University of Information Technology (UIT, VNU-HCM)** aspiring to become a Full Stack Engineer.

Designed with an editorial aesthetic and an Awwwards-inspired motion language, the application serves both as a live presentation of delivered software systems and as an interactive case study demonstrating advanced front-end engineering, declarative animation orchestration, and mathematical UI modeling.

### Core Value Proposition

- **Production-Grade Project Showcase**: Interactive catalog featuring 5 verified products spanning full-stack web platforms, language learning tools, community portals, and browser extensions.
- **Bilingual Architecture (EN / JP)**: Instantaneous, zero-reload language switching tailored for international engineering teams and Japanese tech recruiters.
- **Mathematical 3D Modeling**: Custom-built, shear-free parametric orbital system rendering tech stack satellites orbiting a wireframe globe in real time.
- **Unified Motion Pipeline**: Complete integration between virtual inertia scrolling (Locomotive Scroll) and timeline-based scroll triggers (GSAP).

---

## Featured Engineering Projects

The portfolio showcases real-world projects developed across full-stack web, browser extensions, and graphics engineering:

| Project | Domain / Category | Stack | Core Engineering Highlights |
| :--- | :--- | :--- | :--- |
| **[FuuCine](https://fuucine.vercel.app)** | Streaming & Cinema Discovery | React, TypeScript, Vite, Tailwind, Framer Motion, WebGL / GLSL, SWR | Procedural WebGL GLSL fragment shader simulating volumetric projector light beams; dual-source asynchronous IMDb rating resolution engine; shared layout match-cut transitions. |
| **[YomuJi](https://yomuji.vercel.app)** | Japanese–Vietnamese Dictionary | Next.js, React, TypeScript, Tailwind, Supabase, PostgreSQL, IndexedDB | Multi-format unified search (kanji, kana, romaji, Vietnamese); animated stroke-order SVG visualization; client-side IndexedDB caching layer. |
| **[Giáo Xứ Hội An](https://giaoxuhoian.vercel.app)** | Community & Pastoral Portal | Next.js App Router, Server Components, Tailwind, MongoDB, NextAuth, MDX | Editorial layout for official diocese announcements; secure admin content management; MDX-based pastoral publications with automated sitemap and OpenGraph metadata. |
| **[FuuManga](https://github.com/epauengi/FuuManga)** | Privacy-First Web Reader | React, Vite, Vanilla CSS, JS, LocalStorage API, Node.js Test Runner | Multi-source API aggregation (MangaDex & OTruyen) with in-memory caching; diacritic-insensitive search supporting decomposed Unicode (`NFD`); `IntersectionObserver` vertical continuous reader. |
| **[DocUnchain](https://github.com/epauengi/DocUnchain)** | Chrome Browser Extension | Chrome Manifest V3, JavaScript, jsPDF, PptxGenJS, Canvas, Service Workers | Client-side document parser converting academic slides into clean PDFs and PPTX archives without external server uploads; targeted cookie clearing for academic portals. |

---

## Tech Stack

### Application & Architecture

| Category | Technology | Usage & Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3 (App Router)** | Static export architecture (`output: 'export'` compatible), zero-runtime API overhead, instant page loads via pre-rendered HTML. |
| **Core Library** | **React 19.2** | Concurrent rendering, modern hooks architecture (`useRef`, `useLayoutEffect`, `useCallback`), optimized SVG component structures. |
| **Language** | **TypeScript 5** | Strict type safety across bilingual content schemas, satellite geometry parameters, and animation event interfaces. |
| **Styling** | **Tailwind CSS v4** | Next-generation engine with `@tailwindcss/postcss`, composable utility classes, and customized design system tokens. |
| **Scroll Engine** | **Locomotive Scroll 4.1** | Virtual inertia scrolling delivering consistent, physics-based momentum across desktop viewports. |
| **Animation Engine** | **GSAP 3.15 + ScrollTrigger** | High-performance timeline triggers, marquee text rolling, element skewing, and viewport enter animations. |
| **Component Primitives** | **@base-ui/react + Lucide** | Accessible unstyled primitives paired with consistent iconography. |

---

## Technical Highlights & Engineering Decisions

### 1. Shear-Free 3D Parametric Orbital Satellite Trajectory

#### The Challenge
Traditional CSS orbit implementations rely on chained transforms (e.g. `rotate()`, `scaleY()`, `rotate(-angle)`). In 3D space with an inclined orbital plane (e.g. $-24^\circ$), this creates severe **affine shear distortion**, causing circular icons to flatten into skewed ovals and wobble unnaturally. Furthermore, CSS clip-path masks cause harsh edge clipping when icons orbit behind the globe.

#### The Implementation
Implemented a continuous 2D mathematical projection of an inclined orbital ellipse running inside a `requestAnimationFrame` loop in [`src/components/portfolio/home/PortfolioOrb.tsx`](./src/components/portfolio/home/PortfolioOrb.tsx):

1. **Unrotated Ellipse**: Defined with semi-major axis $a = 0.56$ and semi-minor axis $b = 0.2408$ relative to container size $D$:
   $$\begin{cases} x_0(t) = a \cos(t) \\ y_0(t) = b \sin(t) \end{cases}$$
2. **Inclination Rotation**: Rotated by orbital tilt $\alpha = -24^\circ$ ($-\frac{2\pi}{15}\text{ rad}$):
   $$\begin{cases} X(t) = x_0 \cos\alpha - y_0 \sin\alpha \\ Y(t) = x_0 \sin\alpha + y_0 \cos\alpha \end{cases}$$
3. **Pure Translation Positioning**: Satellites are placed via:
   ```css
   transform: translate(-50%, -50%) translate3d(posX, posY, 0) scale(depthScale);
   ```
   Because scale factors are isotropic, circular geometry is preserved with **zero affine shear**.
4. **Natural 3D Depth Occlusion**:
   - **Front hemisphere** ($\sin t > 0$): `zIndex = 3`, `scale = 1.0 + 0.12 * sin(t)`, `opacity = 1.0`.
   - **Back hemisphere** ($\sin t \le 0$): `zIndex = 0`, `scale = 1.0 + 0.10 * sin(t)`, `opacity = 0.75 - 1.0`.
   The sphere core sits at `zIndex = 1` and the front orbital ring at `zIndex = 2`, naturally occluding satellites as they pass behind the globe without requiring artificial clipping masks.
5. **Interactive Controls & Accessibility**:
   - Hovering decelerates orbital velocity by 80% (from $1.0\times$ to $0.2\times$) for effortless user inspection.
   - Respects `prefers-reduced-motion` by freezing orbits at fixed, balanced equidistant positions.
   - Verified through automated geometry assertion in [`scripts/check-orb.mjs`](./scripts/check-orb.mjs).

---

### 2. Dual-Engine Synchronization: Locomotive Scroll & GSAP ScrollTrigger

#### The Challenge
Locomotive Scroll intercepts native browser scrolling and virtualizes position via CSS 3D translation transforms (`translate3d(0, -y, 0)`). Consequently, native `window.scrollY` remains 0, which normally breaks GSAP ScrollTrigger's element intersection observers.

#### The Implementation
In [`src/components/portfolio/shared/SiteEngine.tsx`](./src/components/portfolio/shared/SiteEngine.tsx), a bidirectional bridge is established using `ScrollTrigger.scrollerProxy`:

```typescript
ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (!scroll) return 0;
    if (arguments.length) {
      scroll.scrollTo(value as number, { duration: 0, disableLerp: true });
      return value as number;
    }
    return scroll.scroll?.instance?.scroll?.y ?? 0;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: container.style.transform ? "transform" : "fixed",
});

scroll.on("scroll", () => ScrollTrigger.update());
```

- **Lifecycle Management**: Every tween, proxy listener, and Locomotive instance is tracked in a cleanups array. On route transitions, all active GSAP timelines are killed (`gsap.killTweensOf("*")`), and Locomotive is destroyed before the new page mounts, completely preventing memory leaks and orphaned RAF loops.

---

### 3. Client-Side Bilingual Localization Engine

#### The Challenge
Portfolios targeting multinational recruiters often suffer from page flickering or layout state loss when switching languages via hard route redirects (e.g. `/en` to `/ja`).

#### The Implementation
In [`src/components/portfolio/shared/PortfolioLanguage.tsx`](./src/components/portfolio/shared/PortfolioLanguage.tsx), a lightweight, strictly-typed React Context provider maintains the active language (`en` vs `jp`):
- **Synchronous Content Updates**: Switching languages swaps typography and string dictionaries in memory instantly without unmounting layout frames.
- **Scroll & Position Persistence**: Because the page does not reload, virtual scroll offsets and active navigation states remain intact.
- **Type-Safe Content Schema**: All bilingual dictionaries in [`data.ts`](./src/components/portfolio/shared/data.ts) enforce full structural parity across English and Japanese texts at compile time.

---

### 4. Micro-Interactions & Physics-Based Trailing

- **Magnetic Navigation Elements**: Magnetic buttons compute distance vectors from cursor coordinates to the button center. Displacements are interpolated using GSAP's `elastic.out` easing to deliver tactile, spring-like magnetic pull.
- **Floating Hover Image Preview**: On the `/work` page, hovering project entries translates a floating image container with inertia (`(mouseX - currentX) / 7`), giving instant visual context before clicking.

---

## Performance & Accessibility

- **Static Generation**: Pre-rendered static HTML for all 4 primary routes (`/`, `/work`, `/about`, `/contact`), verified through Next.js Turbopack compiler.
- **Zero Layout Thrashing in RAF Loops**: Container dimensions are cached and updated strictly via a passive `window.resize` listener, avoiding forced reflows during 60 FPS animation frames.
- **Keyboard Navigation**: Slide-out navigation drawer supports `Escape` key capture to automatically dismiss the overlay and re-enable scroll locks.
- **Reduced Motion Support**: Orbiting satellites and entrance transitions automatically disable continuous animation when `prefers-reduced-motion: reduce` is detected in media queries.

---

## Project Structure

```text
src/
├── app/                              # Next.js App Router static pages
│   ├── layout.tsx                    # Global root layout & language context wrapper
│   ├── page.tsx                      # Home page route (/)
│   ├── work/page.tsx                 # Projects catalog route (/work/)
│   ├── about/page.tsx                # Biography & skills route (/about/)
│   └── contact/page.tsx              # Contact details route (/contact/)
├── components/
│   └── portfolio/
│       ├── home/                     # Hero, PortfolioOrb, WorkTiles, MoreWork
│       ├── work/                     # WorkHeader, WorkRows, WorkFilters, MouseFollow
│       ├── about/                    # AboutHeader, AboutServices, Certificates
│       ├── contact/                  # ContactHeader, ContactDetails, ContactFooter
│       └── shared/                   # SiteEngine, NavBar, Footer, TechIcons, Language
├── styles/
│   └── portfolio.css                 # Custom portfolio layout, orb lighting & keyframes
└── scripts/
    └── check-orb.mjs                 # Pure node mathematical verification for 3D orbit
```

---

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm (or pnpm / yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/epauengi/epauengi.github.io.git
   cd epauengi.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification & Build Commands

- **Run orbital geometry self-check**:
  ```bash
  node scripts/check-orb.mjs
  ```
- **Lint source code**:
  ```bash
  npm run lint
  ```
- **Compile production build**:
  ```bash
  npm run build
  ```

---

## Author

**Phong Nguyen (Nguyễn Đình Phong)**
- University: University of Information Technology, VNU-HCM (UIT)
- Email: [ndphong0602@gmail.com](mailto:ndphong0602@gmail.com)
- GitHub: [@epauengi](https://github.com/epauengi)

---

## License

This project is licensed under the [MIT License](./LICENSE).
