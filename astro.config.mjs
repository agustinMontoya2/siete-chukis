import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [react(), keystatic()],
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        '@keystatic/core',
        '@keystatic/astro',
      ],
    },
  },
});
