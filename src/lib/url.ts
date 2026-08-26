/**
 * Prefixes a root-relative internal path (e.g. "/a-propos/") with Astro's
 * configured `base` (e.g. "/sahel-climatech-group/" on a GitHub Pages
 * project site, or "/" at a domain root).
 *
 * Astro's `base` config only rewrites asset/image helpers automatically —
 * it does NOT rewrite plain `href="/x"` strings in markup. Every internal
 * link in this project must go through this helper (or a component that
 * already does, like <Button>) or it will 404 whenever the site is hosted
 * under a subpath.
 *
 * External URLs, `mailto:`, `tel:` and in-page anchors (`#...`) are
 * returned unchanged since they never start with a single `/`.
 */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${path}`;
}
