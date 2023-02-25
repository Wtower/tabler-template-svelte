<script>
    /** 
     * The id for the associated label.
     * @type {string?} 
     */
    export let id = null;

    /**
     * Whether a value is required. It outputs a * on label.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Some other condition for which to display
     * @see range.svelte
     * @type {boolean}
     */
    export let show = false;
</script>

<!-- 
@component
Label component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
-->
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
