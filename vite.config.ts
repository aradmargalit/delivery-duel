import { sveltekit } from '@sveltejs/kit/vite';
// same as import from vite/config, but with vitest types
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
    globals: true,
    environment: 'jsdom',
  },
});
