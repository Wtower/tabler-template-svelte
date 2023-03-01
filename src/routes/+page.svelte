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
    </main>
</Empty>
