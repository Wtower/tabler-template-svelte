<script>
    import { fade } from 'svelte/transition';

    /**
     * Control if visible.
     * @type {boolean}
     */
    let visible = false;

    /**
     * Extra styling.
     * @type{string}
     */
    let extraStyle = '';
    export { extraStyle as style };
</script>

<!-- 
@component
Popover component.
https://betterprogramming.pub/create-a-popover-in-svelte-fe7dd2eeebb1

Slots
- default
- content
- closeText
-->
<div class="popover-wrapper">
    <span class="popover-trigger form-help" 
        on:click|stopPropagation={() => (visible = !visible)}
        on:keypress={() => (visible = !visible)}>
        {#if !visible}
            <slot />
        {:else if $$slots.closeText}
            <slot name="closeText" />
        {/if}
    </span>

    {#if visible}
        <div class="popover bs-popover-auto fade show"
            style={extraStyle}
            role="tooltip"
            transition:fade>
            <div class="popover-arrow"></div>
            <div class="popover-body"><slot name="content" /></div>
        </div>
    {/if}
</div>

<style>
    .popover-wrapper {
        position: relative;
    }
    .popover {
        position: absolute;
    }
</style>
