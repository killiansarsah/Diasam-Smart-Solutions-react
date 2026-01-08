import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Use the repository name as the base for production (GitHub Pages)
  base: command === 'build' ? '/Diasam-Smart-Solutions-react/' : '/',
  plugins: [react()],
}))
