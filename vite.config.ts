import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';
import path from 'path';

const mode = process.env.NODE_ENV || 'development';
const envFile = path.resolve(__dirname, `front-submodule/.env.${mode}`);
dotenv.config({ path: envFile });

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': process.env,
  },
});
