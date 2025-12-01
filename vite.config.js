import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    allowedHosts: ['rollingnerdy.onrender.com']  // https://rollingnerdy.onrender.com/
  }
})

// resolve: {
//   alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
// }
