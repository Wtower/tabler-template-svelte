<script>
    // https://betterprogramming.pub/create-a-popover-in-svelte-fe7dd2eeebb1
    import { fade } from 'svelte/transition';

    let visible = false;
    let extra_style = '';
    export { extra_style as style };
</script>

<div class="popover-wrapper">
    <span class="popover-trigger form-help" 
        on:click|stopPropagation={() => (visible = !visible)}
        on:keypress={() => (visible = !visible)}>
        {#if !visible}
            <slot />
        {:else if $$slots.close_text}
            <slot name="close_text" />
        {/if}
    </span>

    {#if visible}
        <div class="popover bs-popover-auto fade show"
            style={extra_style}
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
