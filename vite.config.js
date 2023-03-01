import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// https://vitejs.dev/config/server-options.html#server-fs-allow
	server: {
		fs: {
			allow: ['..'],
		}
	}
});
