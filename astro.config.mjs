import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: import.meta.env.DEV ? 'hybrid' : 'server',
  site: import.meta.env.API??'https://www.brayantellez.com/',
  integrations: [
    react({
      experimentalReactChildren: true,
      include: ['**/react/*']
    }),
    sitemap({
      changefreq: 'weekly',
      filter: (page) =>
        page !== 'https://stargazers.club/api/' &&
        page !== 'https://stargazers.club/assets/',
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES', // The `defaultLocale` value must present in `locales` keys
          en: 'en-US',
          fr: 'ch-CH',
        },
      }
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