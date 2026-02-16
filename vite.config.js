import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'
import { readFileSync } from 'fs'

const posts = JSON.parse(readFileSync('./src/data/posts.json', 'utf-8'))
const blogRoutes = posts.map((p) => `/blog/${p.slug}`)

export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes: ['/', '/blog', ...blogRoutes],
      delay: 1000,
      puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.md'],
})
