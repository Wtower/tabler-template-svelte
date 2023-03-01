<script>
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="/interface" {...$config}>
    <span slot="h2">Interface components</span>
</Empty>
