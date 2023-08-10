import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {port: 3000},
  plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_API_URL: "http://localhost:8000/api"
    }
  }
})
