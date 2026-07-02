// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// User site → served at the domain root.
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://yasntrk.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Dark, terminal-ish code blocks that match the site theme.
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
