import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  // The PORT and HOST from .env file or environment variables
  const PORT = parseInt(process.env.PORT || env.PORT || '3000', 10);
  
  // Always use '0.0.0.0' for production/preview to work with Render and other hosting services
  // This makes the server listen on all available network interfaces
  const HOST = mode === 'production' ? '0.0.0.0' : (env.HOST || 'localhost');

  console.log(`Server will start on http://${HOST}:${PORT}`);
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      port: PORT,
      host: HOST,
      strictPort: true, // Throw error if port is already in use
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'csexamwarriors.onrender.com',
        'csexamwarriors.in',
        '.csexamwarriors.in' // Include all subdomains
      ],
    },
    preview: {
      port: PORT,
      host: '0.0.0.0', // Always use 0.0.0.0 for preview server (production builds)
      strictPort: true,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'csexamwarriors.onrender.com',
        'csexamwarriors.in',
        '.csexamwarriors.in' // Include all subdomains
      ],
    },
  };
});
