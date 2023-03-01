<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface" {...$config}>
    <span slot="h2">Interface components</span>
</Empty>
