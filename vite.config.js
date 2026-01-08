import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Only use base path in production (for GitHub Pages)
  base: command === 'build' ? '/Diasam-Smart-Solutions-react/' : '/',
  plugins: [react()],
}))
