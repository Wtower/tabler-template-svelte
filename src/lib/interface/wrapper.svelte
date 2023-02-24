<script>
    // Optional element wrapper
    let extra_class = null;
    export { extra_class as class };
    export let element = 'div';
    export let label = '';
</script>

{#if element === 'optgroup'}
    <!-- Requires special check because Svelte compains about label attribute in `:element` -->
    <optgroup {label}><slot /></optgroup>
{:else if element}
    <svelte:element this={element} class={extra_class}><slot /></svelte:element>
{:else}
    <slot />
{/if}
