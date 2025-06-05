import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
      react({
          experimentalReactChildren: true,
          include: ['**/react/*']
      })
  ],
  adapter: node({
    mode: 'standalone',
  }),
  publicDir: "public",
  server: {
    fs: {
      allow: ['../'], // Permite importar archivos fuera de src/
    },
  },
});
