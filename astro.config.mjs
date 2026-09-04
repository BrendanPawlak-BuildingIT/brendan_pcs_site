import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this to the real domain before launch — it drives canonical URLs,
  // the RSS feed, Open Graph image URLs, and the sitemap.
  site: 'https://brendanpcs.com',

  integrations: [sitemap()],

  // Downloaded and self-hosted at build time; no runtime request to Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
      fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
    },
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: false,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
