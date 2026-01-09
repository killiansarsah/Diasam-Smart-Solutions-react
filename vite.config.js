import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages deployment uses a subdirectory path
  base: '/Diasam-Smart-Solutions-react/',
  plugins: [react()],
})
