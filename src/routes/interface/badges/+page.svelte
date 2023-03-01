<script>
	import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="/interface/empty" {...$config}>
    <span slot="h2">Empty page</span>
</Empty>
