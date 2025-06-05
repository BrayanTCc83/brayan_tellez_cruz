import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  integrations: [
    react({
      experimentalReactChildren: true,
      include: ['**/react/*']
    })
  ],
  adapter: vercel(),
  publicDir: "public",
  server: {
    fs: {
      allow: ['../'],
    },
  },
});