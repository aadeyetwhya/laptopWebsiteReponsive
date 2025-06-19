import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0',   // ← This is what allows access from other devices
    port: 5173,        // ← Optional: customize port
  }
})
