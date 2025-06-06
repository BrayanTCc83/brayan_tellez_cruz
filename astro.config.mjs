import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

export default defineConfig({
  output: import.meta.env.DEV ? 'hybrid' : 'server',
  integrations: [
    react({
      experimentalReactChildren: true,
      include: ['**/react/*']
    })
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  publicDir: "public",
  server: {
    fs: {
      allow: ['../'],
    },
  },
});