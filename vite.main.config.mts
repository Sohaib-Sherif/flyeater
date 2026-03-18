import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' loads all variables regardless of prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.MAIN_VITE_FLY_API_TOKEN': JSON.stringify(env.MAIN_VITE_FLY_API_TOKEN),
      'process.env.MAIN_VITE_FLY_API_HOSTNAME': JSON.stringify(env.MAIN_VITE_FLY_API_HOSTNAME),
    },
    // ... rest of your config
  };
});
