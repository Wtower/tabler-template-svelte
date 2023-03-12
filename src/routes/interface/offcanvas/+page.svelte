<script>
    import { base } from "$app/paths";
    import Card from "$lib/interface/card.svelte";
    import Empty from "$lib/interface/empty.svelte";
	import Offcanvas from "$lib/interface/offcanvas.svelte";
    import { config } from "$stores/config";

    const placements = ['start', 'end', 'top', 'bottom'];
    /** @type {'start'|'end'|'top'|'bottom'|any} */
    let show;
</script>

<Empty path="{base}/interface/offcanvas" {...$config}>
    <span slot="h2">Offcanvas</span>
    <div class="container-xl">
        <Card>
            <div class="btn-list">
                {#each placements as placement}
                    <a href="#offcanvas-{placement}"
                        class="btn"
                        on:click={() => show = placement}
                        aria-controls="offcanvas-{placement}">
                        Toggle {placement} offcanvas
                    </a>
                {/each}
            </div>
        </Card>
    </div>
</Empty>

{#each placements as placement}
    <Offcanvas label="{placement} offcanvas" bind:show placement={show ?? 'bottom'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda ea est, 
        eum exercitationem fugiat illum itaque laboriosam magni necessitatibus, 
        nemo nisi numquam quae reiciendis repellat sit soluta unde. Aut!
    </Offcanvas>
{/each}

<style>
    :global(.offcanvas-title) {
        text-transform: capitalize;
    }
</style>
