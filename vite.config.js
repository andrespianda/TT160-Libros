import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true, // permite que el servidor sea accesible desde la red local
    port: 5175, // define el puerto que deseas usar
    // open: true, // opcional: abre el navegador automáticamente
  }
})
