# Rakib Hasan — Developer Portfolio

**Live:** [https://rakib-portfolio-peach.vercel.app/](https://rakib-portfolio-peach.vercel.app/)

A modern, single-page developer portfolio showcasing my projects, skills, and academic journey as a Computer Science and Engineering student. Built with a dark, glowing design system, smooth animations, and fully responsive layouts.

## ✨ Features

- **Hero** — animated orbiting cards, gradient typography, and quick links
- **About** — background and growth mindset highlights
- **Education** — scroll-driven interactive timeline (university → HSC → SSC)
- **Projects** — featured project cards with live demo and source links
- **Skills** — categorized tech stack with branded icons
- **Contact** — working contact form (Web3Forms) plus email, GitHub, LinkedIn, and WhatsApp cards
- **Extras** — downloadable resume PDF, custom 404 page, loading state, SEO/OpenGraph metadata, `prefers-reduced-motion` support

## 🛠 Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| UI | React 19, Tailwind CSS v4, lucide-react, react-icons |
| Deployment | Vercel |

## 🚀 Getting Started

```bash
git clone https://github.com/md-rakib-hasan1/rakib-portfolio.git
cd rakib-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment variables

The contact form requires a [Web3Forms](https://web3forms.com/) access key:

```bash
# .env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Without it, the site works normally but form submissions will fail.

## 📁 Project Structure

```
src/
├── app/                  # Root layout, metadata, global styles, 404, loading
└── components/
    ├── layout/           # Navbar + BrandMark (shared logo)
    └── sections/         # Hero, About, Education, Projects, Skills, Contact, Footer
public/
├── assets/               # Project screenshots & portrait
└── resume.pdf            # Downloadable resume
resume/
└── resume.html           # Resume source (regenerate PDF with headless Chrome)
```

## ☁ Deployment

Deployed on [Vercel](https://rakib-portfolio-peach.vercel.app/). To deploy your own fork: import the repo on Vercel — the Next.js framework preset is auto-detected — add the environment variable above, and deploy.

## 📬 Contact

- **Email:** [rakibhasan98840@gmail.com](mailto:rakibhasan98840@gmail.com)
- **GitHub:** [md-rakib-hasan1](https://github.com/md-rakib-hasan1)
- **LinkedIn:** [md-rakib-hasan1](https://www.linkedin.com/in/md-rakib-hasan1)
- **WhatsApp:** [+880 1753-569884](https://wa.me/8801753569884)
