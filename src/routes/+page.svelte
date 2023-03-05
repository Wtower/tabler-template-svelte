<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/" {...$config}>
    <span slot="h2">
        <h1>Welcome to tabler-template-svelte project</h1>
    </span>
    <main slot="main">
        <p>
            Svelte library for the 
            <a href="https://github.com/tabler/tabler" 
                target="_blank" 
                rel="noreferrer">
                Tabler
            </a> 
            dashboard template.
        </p>

        <p><code>
            npm i -D tabler-template-svelte
        </code></p>

        <p><a href="https://www.npmjs.com/package/tabler-template-svelte" 
            target="_blank" 
            rel="noreferrer">
            NPM package
        </a></p>
        
        <p><a href="http://magnum.9-dev.com/tabler" 
            target="_blank" 
            rel="noreferrer">
            Demo
        </a></p>
    </main>
</Empty>
