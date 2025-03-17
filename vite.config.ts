import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';
import path from 'path';
const mode = process.env.NODE_ENV || 'development';
const envFile = path.resolve(__dirname, `front-submodule/.env.${mode}`);
dotenv.config({ path: envFile });
import svgr from 'vite-plugin-svgr';
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), mkcert()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            const module = id.split('node_modules/').pop()?.split('/')[0];
            return `vendor/${module}`;
          }
        },
      },
    },
  }
});
