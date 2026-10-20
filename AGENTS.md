# AGENTS.md

Single-page developer portfolio. Next.js 16 (App Router, `src/app`), React 19, TypeScript (strict), Tailwind CSS v4. No monorepo, no tests, no CI.

## Commands

- `npm run dev` — dev server (Next 16 defaults to Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`); bare `eslint` lints the whole project
- No typecheck script exists — run `npx tsc --noEmit` to verify types

Verify with `npm run lint && npx tsc --noEmit` before considering a change done. `next build` is the only other meaningful check.

## Architecture

- `src/app/page.tsx` is the entire site: it composes `Navbar`, `Hero`, `About`, `Education`, `Projects`, `Skills`, `Contact`, `Footer`. There are no other routes; `loading.tsx` and `not-found.tsx` are the only extras.
- Sections live in `src/components/sections/`, chrome (Navbar, BrandMark) in `src/components/layout/`.
- Path alias: `@/*` → `src/*` (use it; it's the convention everywhere).
- Metadata/SEO lives entirely in `src/app/layout.tsx` (Inter font via `next/font`, exposed as `--font-inter`).

## Anchor-link contract

Navigation is in-page anchors, not routes. Each section component sets an `id` (`#home` on Hero, `#about`, `#education`, `#projects`, `#skills`, `#contact`) that Navbar/Footer links target via `href="#..."`. If you add or rename a section, keep the `id`, Navbar link, and any in-section CTA links in sync or the nav silently breaks. `globals.css` sets `scroll-padding-top: 90px` to clear the fixed Navbar — don't remove it.

## Tailwind v4 quirks

- CSS-first config: no `tailwind.config.*` exists. Theme tokens are CSS custom properties plus `@theme inline` in `src/app/globals.css`.
- Tailwind is wired as a Turbopack loader rule in `next.config.ts` (`*.css` → `@tailwindcss/turbopack`). Don't add PostCSS config or expect webpack builds to style correctly.

## Environment

- `.env` (gitignored) provides `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, read client-side in `src/components/sections/Contact.tsx` to submit the contact form to `https://api.web3forms.com/submit`. With the key missing, the form renders fine but throws an error toast on submit — that's expected locally.
- `next.config.ts` enables `experimental.agentFeedback`; leave it alone unless you know why it's there.

## Conventions

- Commit messages use Conventional Commits (`feat: ...`, `fix: ...`).
- No Prettier; formatting follows ESLint/eslint-config-next rules. Match the existing component style (arrow-function components, 4-space indent in some section files — copy the file you're editing).
