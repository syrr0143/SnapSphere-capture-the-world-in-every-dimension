import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Allow external connections
    strictPort: true, // Ensure the specified port is used
    port: 8000,      // Specify the port for the development server
  },
  resolve: {
    // Other resolve options if needed
  }
});
