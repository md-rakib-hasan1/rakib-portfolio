# Rakib Hasan — Developer Portfolio

**Live:** [https://rakib-portfolio-peach.vercel.app/](https://rakib-portfolio-peach.vercel.app/)

A distinctive, high-performance developer portfolio built with the **Midnight Aurora** design system. Showcases personal and academic projects, dedicated case study detail pages, genuine technical milestones, and learning trajectory as a Computer Science & Engineering student expanding toward full-stack engineering.

---

## ✨ Features

- **Midnight Aurora Aesthetic** — Deep charcoal background (`#090B12`), dark slate surfaces (`#111522`), electric violet (`#9B7BFF`) and bright cyan (`#55D6FF`) atmospheric lighting.
- **Hero Section** — Asymmetric composition featuring developer photo treatment, verified designation, quick resume download/view actions, and social channels.
- **About Me** — Authentic background narrative: C foundations, Java & Python academic projects at Dhaka International University (5th semester), completed Programming Hero frontend path, active backend learning, and cricket/football hobbies.
- **Learning Journey** — Structured milestone timeline highlighting growth from procedural C to modern full-stack web applications.
- **Education** — Prominent current university education (DIU 5th semester) alongside GPA 5.00 HSC and SSC credentials.
- **Technical Skills** — Categorized technical stack with visual distinction between *"Working With"* and *"Currently Learning"*, with zero fabricated rating bars.
- **Curated Projects Showcase** — Featured cards with genuine screenshots, tech badges, "View Live" links, and dedicated "View Details" buttons.
- **Dedicated Project Case Studies (`/projects/[slug]`)** — Full detail pages for:
  - **Bazar Dor** (`/projects/bazar-dor`) — Bengali grocery platform and real-time market tracker.
  - **FitLog** (`/projects/fitlog`) — Workout library and routine planner.
  - **Dev Stack Builder** (`/projects/dev-stack-builder`) — Interactive developer stack configurator.
  - Detailed breakdown: Overview, Problem Statement, Verified Stack, Features, Real Development Challenges & Solutions, and Future Roadmaps.
- **Contact & Functional Form** — Validated contact form connected to Web3Forms, toast notifications, direct email, phone, and international WhatsApp (`https://wa.me/8801753569884`).
- **SEO & Performance** — Statically generated at build time (SSG) with Next.js 16 Turbopack, dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata, and full `prefers-reduced-motion` compliance.

---

## 🛠 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Properties |
| **Icons** | Lucide React, React Icons (`react-icons/si`, `react-icons/fa`) |
| **Form Service** | Web3Forms API |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

```bash
git clone https://github.com/md-rakib-hasan1/rakib-portfolio.git
cd rakib-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Compile optimized production build (SSG) |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint across codebase |
| `npx tsc --noEmit` | Validate strict TypeScript types |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Midnight Aurora tokens, glass effects, animations
│   ├── layout.tsx            # Metadata, OpenGraph, Canonical, Font loading
│   ├── loading.tsx           # Aurora loading spinner
│   ├── not-found.tsx         # Custom 404 page
│   ├── page.tsx              # Single-page portfolio composition
│   ├── projects/[slug]/      # Dedicated dynamic project case study pages
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Dynamic sitemap generator
├── components/
│   ├── layout/               # Navbar (responsive + subpage routing) & BrandMark
│   └── sections/             # Hero, About, Journey, Education, Skills, Projects, Contact, Footer
├── data/
│   └── projects.ts           # Single-source-of-truth project data model
public/
├── assets/                   # Real project screenshots & profile portrait
└── resume.pdf                # Downloadable resume document
```

---

## ☁ Deployment

Configured for continuous deployment via **Vercel**. Every push to `main` triggers a production build.
Environment variable required for contact form:
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

---

## 📬 Contact

- **Email:** [rakibhasan98840@gmail.com](mailto:rakibhasan98840@gmail.com)
- **WhatsApp:** [+880 1753-569884](https://wa.me/8801753569884)
- **GitHub:** [md-rakib-hasan1](https://github.com/md-rakib-hasan1)
- **LinkedIn:** [md-rakib-hasan1](https://www.linkedin.com/in/md-rakib-hasan1)
