import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/-my-portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        atlas: fileURLToPath(new URL('./themes/systems-atlas/index.html', import.meta.url)),
        kinetic: fileURLToPath(new URL('./themes/kinetic/index.html', import.meta.url)),
      },
    },
  },
})
