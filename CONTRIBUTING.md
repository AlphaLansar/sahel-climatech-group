# Contributing

This repository powers the public website of **Sahel ClimaTech Group**
(`sahel-climatech-group-website`). It is maintained internally; external
contributions are welcome for typo fixes and accessibility/performance
improvements.

## Local setup

```bash
nvm use          # or ensure Node >= 20
npm ci
npm run dev      # http://localhost:4321
```

## Before opening a PR

```bash
npm run format   # Prettier
npm run lint     # ESLint (Astro + TS)
npm run build    # astro check + astro build
```

All three must pass — CI enforces the same checks on every pull request.

## Content changes

- Every page exists in **two languages**: French at the site root, English
  under `/en/`. Update both when changing copy — see `src/consts.ts` →
  `ROUTE_ALTERNATES` for the FR ⇄ EN mapping.
- Do not state a fact (funding secured, partnership signed, legal status)
  that is not yet true. See `src/pages/mentions-legales.astro` /
  `src/pages/en/legal-notice.astro` for the standard the rest of the site
  should match — status is described precisely ("selected for funding,
  contracting in progress", "SASU under incorporation").
- New icons go in `src/components/Icon.astro` as inline SVG — the project
  ships zero icon-font/JS dependency by design.

## Branching

- `main` is the production branch — every push to `main` deploys via
  `.github/workflows/deploy.yml`.
- Open feature branches as `content/...`, `fix/...` or `feat/...` and merge
  via pull request.
