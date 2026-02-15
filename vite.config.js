import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'

export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes: [
        '/',
        '/blog',
        '/blog/contract-automation-ai-mapping-vs-reading',
        '/blog/8-signs-ai-automation-for-business',
        '/blog/intelligent-document-processing-trends-2026',
        '/blog/ai-orchestration-strategy-2026',
        '/blog/document-intelligence-2026',
        '/blog/2026-reality-check-systems-architect',
        '/blog/2025-intelligent-document-processing',
        '/blog/death-of-data-entry-2025',
      ],
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
