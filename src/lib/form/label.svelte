<script>
    export let id = null;
    export let required = false;
    export let show = false; // Some other condition for which to display; see `range.svelte`
</script>

<svelte:element 
    this={$$slots.default || $$slots.description || show? id? 'label': 'span': null}
    for={id}
    class="form-label"
    class:required>
    <slot />
    {#if $$slots.description}
        &nbsp;<span class="form-label-description"><slot name="description" /></span>
    {/if}
</svelte:element>
