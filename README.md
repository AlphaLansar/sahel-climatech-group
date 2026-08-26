# Sahel ClimaTech Group — Website

[![CI](https://github.com/AlphaLansar/sahel-climatech-group/actions/workflows/ci.yml/badge.svg)](https://github.com/AlphaLansar/sahel-climatech-group/actions/workflows/ci.yml)
[![Deploy](https://github.com/AlphaLansar/sahel-climatech-group/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlphaLansar/sahel-climatech-group/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-0e7a42.svg)](LICENSE)

Official bilingual (FR/EN) marketing website for **Sahel ClimaTech Group**, a
Malian innovation, applied research and technology organization for climate,
environmental and agricultural resilience in the Sahel — Bamako, Mali.

**Live site:** _to be added once deployed — see [Deployment](#deployment)_

---

## Stack

| Layer       | Choice                                                    | Why                                                                                                  |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Framework   | [Astro 7](https://astro.build) (static output)            | Ships near-zero JS for a content site; excellent Lighthouse scores; first-class GitHub Pages support |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com)                | Utility-first, CSS-native `@theme` tokens, no config file needed                                     |
| Language    | TypeScript (strict)                                       | Type-safe props/content across ~20 pages and shared components                                       |
| Images      | `astro:assets` + `sharp`                                  | Automatic responsive/optimized images at build time                                                  |
| Icons       | Hand-authored inline SVG (`src/components/Icon.astro`)    | Zero external icon-font/JS dependency                                                                |
| Lint/format | ESLint (flat config) + Prettier + `prettier-plugin-astro` | Consistent code style, enforced in CI                                                                |
| CI/CD       | GitHub Actions → GitHub Pages                             | Free hosting to start; migrates cleanly to a custom domain/VPS later                                 |

## Project structure

```
src/
  components/     Shared UI (Header, Footer, Button, Icon, cards, ...)
  layouts/         BaseLayout.astro (SEO, hreflang, header/footer wiring)
  pages/           French routes at the root, e.g. /a-propos/
  pages/en/        English routes, e.g. /en/about/
  assets/photos/   Real photography (optimized via astro:assets)
  consts.ts        Site identity + FR⇄EN route map (nav, language switcher)
public/
  assets/brand/    Logo, favicons, PWA icons, OG image (generated from the
                   official logo, see git history for the extraction script)
```

Every page exists in **both languages** as a pair of files (e.g.
`src/pages/projets/forosun-tech.astro` ⇄
`src/pages/en/projects/forosun-tech.astro`), registered in
`src/consts.ts` → `ROUTE_ALTERNATES` so the header's language switcher and
the `hreflang` tags stay correct automatically.

## Local development

```bash
nvm use            # Node >= 22.12 (see .nvmrc)
npm ci
npm run dev         # http://localhost:4321
```

Other scripts:

```bash
npm run build        # astro check (typecheck) + astro build → dist/
npm run preview       # serve the production build locally
npm run lint           # ESLint
npm run format         # Prettier --write
```

## Deployment

The site deploys automatically to **GitHub Pages** on every push to `main`
via `.github/workflows/deploy.yml`. `astro.config.mjs` detects the repository
name at build time (`GITHUB_REPOSITORY`) and sets the correct `base` path
automatically — no manual config needed for a standard project page
(`https://<user>.github.io/<repo>/`).

### First-time setup (do this once, in the GitHub repo settings)

1. Push this repository to GitHub.
2. **Settings → Pages → Source** → select **GitHub Actions**.
3. Push to `main` (or run the _Deploy_ workflow manually) — the site goes
   live at `https://<your-github-username>.github.io/<repo-name>/`.

### Moving to a custom domain / paid server later

- **Custom domain on GitHub Pages:** add a `public/CNAME` file containing the
  domain (e.g. `sahelclimatech.com`), point the domain's DNS at GitHub Pages,
  and re-run the deploy workflow — `SITE_URL` and `base: '/'` are computed
  automatically once `CNAME` is present.
- **Paid VPS/server later:** `npm run build` produces a fully static `dist/`
  folder — deployable as-is to any static host (Nginx, Vercel, Netlify,
  Cloudflare Pages) with zero code changes. Set `SITE_URL` at build time to
  the new domain.

## Content accuracy — please read before editing

This site represents a real, early-stage company. A few facts are
intentionally phrased precisely and should **not** be "rounded up":

- **Legal status:** Sahel ClimaTech Group (SASU) is _currently being
  incorporated_ with API-Mali — not yet registered at the RCCM at time of
  writing. See `mentions-legales` / `legal-notice`.
- **ForoSun-Tech funding:** _selected for funding_ by the WASCAL WISE Grant
  program; contracting/disbursement is still in progress. Never state the
  grant as "received" or "secured" until it is.
- **Team:** the people listed under the ForoSun-Tech project reflect the
  signed project documentation (MoU, WISE application). Don't add names
  without a source.

## Next steps (tracked outside this repo)

- [ ] Register a domain (e.g. `sahelclimatech.com`) and add `public/CNAME`
- [ ] Replace the placeholder contact email in `src/consts.ts` with a
      branded address once the domain has email hosting
- [ ] Add real analytics (privacy-respecting, e.g. Plausible/Umami) once a
      hosting decision is made — none is wired in by default
- [ ] Update `.github/CODEOWNERS` and the badge URLs above once the GitHub
      org/repo name is final

## License

Code: [MIT](LICENSE). Brand, content and photography: see [NOTICE.md](NOTICE.md).
