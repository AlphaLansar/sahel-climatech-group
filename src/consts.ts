/**
 * Site-wide constants: identity, navigation structure and the FR⇄EN route
 * map used by the language switcher and hreflang alternate links.
 */

export const SITE = {
  name: "Sahel ClimaTech Group",
  legalName: "SAHEL CLIMATECH GROUP",
  tagline: {
    fr: "Innovation • Recherche • Formation • Technologie • Climat",
    en: "Innovation • Research • Training • Technology • Climate",
  },
  city: "Bamako, Mali",
  contactEmail: "sahel.climatech.group@gmail.com",
  address: "EUTG — Baco Djicoroni ACI Golf, Rue 782, Porte 352, Bamako, République du Mali",
} as const;

export type Lang = "fr" | "en";

export interface NavItem {
  key: string;
  fr: { label: string; href: string };
  en: { label: string; href: string };
}

/** Every routed page pairs a French path (site root) with its English twin (/en/...). */
export const NAV: NavItem[] = [
  { key: "home", fr: { label: "Accueil", href: "/" }, en: { label: "Home", href: "/en/" } },
  {
    key: "about",
    fr: { label: "À propos", href: "/a-propos/" },
    en: { label: "About", href: "/en/about/" },
  },
  {
    key: "domains",
    fr: { label: "Domaines", href: "/domaines/" },
    en: { label: "Focus areas", href: "/en/focus-areas/" },
  },
  {
    key: "projects",
    fr: { label: "Projets", href: "/projets/" },
    en: { label: "Projects", href: "/en/projects/" },
  },
  {
    key: "team",
    fr: { label: "Équipe", href: "/equipe/" },
    en: { label: "Team", href: "/en/team/" },
  },
  {
    key: "partners",
    fr: { label: "Partenariats", href: "/partenaires/" },
    en: { label: "Partnerships", href: "/en/partners/" },
  },
  {
    key: "contact",
    fr: { label: "Contact", href: "/contact/" },
    en: { label: "Contact", href: "/en/contact/" },
  },
];

/** Maps every non-nav route too (project detail, legal notice) for the language switcher. */
export const ROUTE_ALTERNATES: Record<string, string> = {
  "/": "/en/",
  "/en/": "/",
  "/a-propos/": "/en/about/",
  "/en/about/": "/a-propos/",
  "/domaines/": "/en/focus-areas/",
  "/en/focus-areas/": "/domaines/",
  "/projets/": "/en/projects/",
  "/en/projects/": "/projets/",
  "/projets/forosun-tech/": "/en/projects/forosun-tech/",
  "/en/projects/forosun-tech/": "/projets/forosun-tech/",
  "/equipe/": "/en/team/",
  "/en/team/": "/equipe/",
  "/partenaires/": "/en/partners/",
  "/en/partners/": "/partenaires/",
  "/contact/": "/en/contact/",
  "/en/contact/": "/contact/",
  "/mentions-legales/": "/en/legal-notice/",
  "/en/legal-notice/": "/mentions-legales/",
};

export const FOOTER_LINKS = {
  fr: [
    { label: "Mentions légales", href: "/mentions-legales/" },
    { label: "Contact", href: "/contact/" },
  ],
  en: [
    { label: "Legal notice", href: "/en/legal-notice/" },
    { label: "Contact", href: "/en/contact/" },
  ],
} as const;
