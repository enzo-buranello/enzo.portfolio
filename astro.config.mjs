// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://enzo-buranello.github.io/enzo.portfolio/',
  base: '/enzo.portfolio/', // Ajoutez cette ligne
  integrations: [mdx(), sitemap(), react(), tailwind()],
});