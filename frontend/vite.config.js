import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from network/public IPs
    port: 4173,       // Dev server port
    strictPort: true, // If true, Vite will exit if this port is already in use
  },
  preview: {
    port: 4173, // Preview server port (e.g., for `vite preview`)
    strictPort: true,
    allowedHosts: ['www.themangomart.in', 'themangomart.in'],
  },
  plugins: [react()],
})
