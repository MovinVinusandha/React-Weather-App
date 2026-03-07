import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // This ensures Vite loads variables from the system environment (GitHub/Vercel)
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // No need for 'define' if using import.meta.env.VITE_WEATHER_API_KEY
  }
})