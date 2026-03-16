import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// other imports like react() if using a framework

export default defineConfig({
  plugins: [tailwindcss()],
});
