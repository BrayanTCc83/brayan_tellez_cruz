import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react({
            experimentalReactChildren: true,
            include: ['**/react/*']
        })
    ],
    publicDir: "public",
    server: {
      fs: {
        allow: ['../'], // Permite importar archivos fuera de src/
      },
    },
});
