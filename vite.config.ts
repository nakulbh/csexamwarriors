import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  // The PORT and HOST from .env file
  const PORT = parseInt(env.PORT || '3000', 10);
  const HOST = env.HOST || 'localhost';

  console.log(`Server will start on http://${HOST}:${PORT}`);
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      port: PORT,
      host: HOST,
      // Setting this to true enables listening on all addresses including LAN and public addresses
      strictPort: true, // Throw error if port is already in use
    },
  };
});
