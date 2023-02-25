<script>
    /** 
     * Extra classes for the wrapper element, or `mb-3`.
     * @type {string|null} 
     */
    let extra_class = null;
    export { extra_class as class };

    /**
     * The optional element to wrap.
     * @type {string|null}
     */
    export let element = 'div';

    /**
     * Label in case of `optgroup`.
     * @type {string}
     */
    export let label = '';
</script>

<!-- 
@component
Optional element wrapper.
-->
{#if element === 'optgroup'}
    <!-- Requires special check because Svelte compains about label attribute in `:element` -->
    <optgroup {label}><slot /></optgroup>
{:else if element}
    <svelte:element this={element} class={extra_class}><slot /></svelte:element>
{:else}
    <slot />
{/if}
