import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luxurymodules.co.uk', // confirm after domain consolidation decision
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
