import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number.parseInt(process.env.PORT) || 3000,
  },
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
      cache: false,
      include: '**/*.+(vue|js|jsx|ts|tsx)',
    }),
    tsconfigPaths(),
  ],
});
