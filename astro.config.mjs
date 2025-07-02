import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import baseUrl from './src/router/_base';

import { GetLearnLessonsPaths, GetLearnPaths } from './src/router/learn';
import { GetBlogsPaths } from './src/router/blogs';
import { GetProjectsPaths } from './src/router/projects';

console.log(GetLearnLessonsPaths());

export default defineConfig({
  output: import.meta.env.DEV ? 'hybrid' : 'server',
  site: import.meta.env.DEV ? 'http://localhost:3000' : 'https://www.brayantellez.com',
  integrations: [
    react({
      experimentalReactChildren: true,
      include: ['**/react/*']
    }),
    sitemap({
      changefreq: 'weekly',
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES', // The `defaultLocale` value must present in `locales` keys
          en: 'en-US',
          fr: 'ch-CH',
        },
      },
      customPages: [
        `${baseUrl}/`,
        `${baseUrl}/es`,
        `${baseUrl}/en`,
        `${baseUrl}/ch`,
        ...GetLearnPaths(),
        ...GetLearnLessonsPaths(),
        ...GetBlogsPaths(),
        ...GetProjectsPaths()
      ]
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