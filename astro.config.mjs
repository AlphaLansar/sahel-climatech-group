// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// --- GitHub Pages awareness --------------------------------------------
// When built inside GitHub Actions, GITHUB_REPOSITORY is set automatically
// (e.g. "alphalansar/sahel-climatech-group"). Project pages are served at
// https://<user>.github.io/<repo>/, so `base` must match the repo name —
// unless the repo itself is a user/org page (<user>.github.io), which is
// served at the domain root. A custom domain (see public/CNAME) also serves
// from the root, so BASE_PATH=/ can be forced via that env var in CI.
const repoFullName = process.env.GITHUB_REPOSITORY;
const repoName = repoFullName?.split("/")[1];
const isUserOrOrgPage = repoName?.endsWith(".github.io") ?? false;
const inferredBase = repoName && !isUserOrOrgPage ? `/${repoName}` : "/";
const base = process.env.BASE_PATH ?? inferredBase;

const site = process.env.SITE_URL ?? "https://sahelclimatech.com";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  output: "static",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
