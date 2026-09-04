/**
 * Single source of truth for site copy, identity, and links.
 * Update these values here — components read from this file.
 */

export const SITE = {
  name: 'BrendanPcs',
  handle: '@brendan_pcs',
  /** Change this in astro.config.mjs too — that value is what Astro builds URLs from. */
  url: 'https://brendanpcs.com',
  title: 'BrendanPcs — PC builds, hardware, and homelab notes',
  description:
    'Tech write-ups from Brendan: PC builds, hardware teardowns, homelab experiments, and the occasional benchmark that did not go to plan.',
  tagline: 'PC builds, hardware, and the notes I wish I had the first time.',
  email: 'brendancomputers@gmail.com',
  /** Used in the footer copyright line. */
  startYear: 2026,
  /** Used by the Person JSON-LD and the About page. */
  jobTitle: 'PC builder & tech creator',
  locale: 'en_US',
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export interface Social {
  /** Platform name, shown as the link label. */
  label: string;
  href: string;
  /** Short handle shown next to the label on the About page. */
  handle: string;
  /** Key into the icon set in src/components/SocialIcon.astro. */
  icon: 'youtube' | 'x' | 'instagram' | 'tiktok' | 'github' | 'rss' | 'email';
}

/**
 * Delete any row for a platform you are not actually on — these render
 * everywhere socials appear, and dead links are worse than missing ones.
 */
export const SOCIALS: Social[] = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@brendan_pcs',
    handle: '@brendan_pcs',
    icon: 'youtube',
  },
  { label: 'X', href: 'https://x.com/brendan_pcs', handle: '@brendan_pcs', icon: 'x' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/brendan_pcs',
    handle: '@brendan_pcs',
    icon: 'instagram',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@brendan_pcs',
    handle: '@brendan_pcs',
    icon: 'tiktok',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/brendanpcs',
    handle: '@brendanpcs',
    icon: 'github',
  },
];

/** Every URL that identifies this person, for the Person JSON-LD `sameAs`. */
export const SAME_AS: string[] = SOCIALS.map((social) => social.href);
