import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'
import sitemap from 'vite-plugin-sitemap'
import { readFileSync } from 'fs'

const posts = JSON.parse(readFileSync('./src/data/posts.json', 'utf-8'))
const blogRoutes = posts.map((p) => `/${p.slug}`)

export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes: ['/', ...blogRoutes],
      delay: 1000,
      puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    }),
    sitemap({
      hostname: 'https://blog.piwi.ai',
      dynamicRoutes: blogRoutes,
      exclude: ['/404'],
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.md'],
})
