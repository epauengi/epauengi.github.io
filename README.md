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

## Author

**Phong Nguyen (Nguyễn Đình Phong)**
- University: University of Information Technology, VNU-HCM (UIT)
- Email: [ndphong0602@gmail.com](mailto:ndphong0602@gmail.com)
- GitHub: [@epauengi](https://github.com/epauengi)

---

## License

This project is licensed under the [MIT License](./LICENSE).
