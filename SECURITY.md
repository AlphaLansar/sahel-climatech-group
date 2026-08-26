# Security Policy

This repository hosts a static marketing website (Astro, no backend, no user
data collection). The attack surface is intentionally minimal, but we still
take reports seriously.

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security concerns.

Instead, email **[security contact — see `src/consts.ts` `SITE.contactEmail`]**
with:

- a description of the issue and its potential impact,
- steps to reproduce,
- any relevant proof-of-concept.

We aim to acknowledge reports within 5 business days.

## Scope

In scope: the website's build pipeline, dependencies, and deployed static
output. Out of scope: third-party services the site merely links to (e.g.
GitHub Pages itself, mail providers).
