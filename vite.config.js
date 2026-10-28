
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCloudflare = process.env.CLOUDFLARE_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isCloudflare ? '/' : '/Portfolio_EvansKofiFosu/',
})
