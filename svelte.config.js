import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// https://kit.svelte.dev/docs/adapter-static
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		// https://kit.svelte.dev/docs/configuration#prerender
		prerender: {
			handleMissingId: 'warn',
		},
		// https://kit.svelte.dev/docs/adapter-static#github-pages
		paths: {
			base: '/tabler',
			relative: false,
		},
		alias: {
			$stores: 'src/stores',
			$tabler_dist: 'tabler/dist',
		},
	}
};

export default config;
