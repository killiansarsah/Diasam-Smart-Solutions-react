import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use relative paths in production to support subfolders and custom domains easily
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
