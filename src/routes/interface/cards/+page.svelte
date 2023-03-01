<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/cards" {...$config}>
    <span slot="h2">Cards</span>
</Empty>
