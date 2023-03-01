<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/empty" {...$config}>
    <span slot="h2">Empty page</span>
</Empty>
