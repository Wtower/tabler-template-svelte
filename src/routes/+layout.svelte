<script>
    // Import CSS as necessary for SSR, npm dev and npm build.
    import '$tabler_dist/css/tabler.css';
    import '$tabler_dist/css/tabler-flags.css';
    import '$tabler_dist/css/tabler-payments.css';
    import '$tabler_dist/css/tabler-vendors.css';
    import '$tabler_dist/css/demo.css';

    // In adapter-static with base path, it seems that css cannot be imported as above,
    // The js method below will be used for css as well.
    import cssTablerUrl from '$tabler_dist/css/tabler.css?url';
    import cssTablerFlagsUrl from '$tabler_dist/css/tabler-flags.css?url';
    import cssTablerPaymentsUrl from '$tabler_dist/css/tabler-payments.css?url';
    import cssTablerDistUrl from '$tabler_dist/css/tabler-vendors.css?url';
    import cssDemoUrl from '$tabler_dist/css/demo.css?url';

    // The Tabler scripts are legacy and cannot be imported anymore
    // Include them in Vite with `?url`
    // https://stackoverflow.com/questions/56839098/import-javascript-file-in-svelte
    // https://stackoverflow.com/questions/75003997/how-to-copy-files-from-node-modules-with-vite-sveltekit
    import jsDemoThemeUrl from '$tabler_dist/js/demo-theme?url';
    import jsTablerUrl from '$tabler_dist/js/tabler?url';
    import jsDemoUrl from '$tabler_dist/js/demo?url';

    import { onMount } from 'svelte';

    onMount(() => {
        [
            cssTablerUrl, cssTablerFlagsUrl, cssTablerPaymentsUrl, cssTablerDistUrl, cssDemoUrl
        ].forEach((href) => {
            const link = document.createElement('link');
            link.href = href;
            link.rel = 'stylesheet';
            document.body.appendChild(link);
        });
        [jsDemoThemeUrl, jsTablerUrl, jsDemoUrl].forEach((src) => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    });
</script>

<slot />

<style>
    @import url('https://rsms.me/inter/inter.css');
    :root {
        --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    }
    :global(body) {
        font-feature-settings: "cv03", "cv04", "cv11";
    }
</style>
