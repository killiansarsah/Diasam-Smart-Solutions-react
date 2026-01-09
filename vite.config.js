import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use root path for Hostinger deployment
  base: '/',
  plugins: [react()],
})
