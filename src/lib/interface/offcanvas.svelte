<script>
    import { fade } from "svelte/transition";

    /** 
     * The offcanvas label.
     * @type {string} 
     */
    export let label;

    /**
     * Displays close X button.
     * @type {boolean}
     */
    export let closable = true;

    /**
     * Bound value to control showing.
     * @type {boolean}
     */
    export let show = false;
</script>

<!-- 
@component
Offcanvas component.

Slots
- default
- buttons
-->
{#if show}
    <div class="offcanvas offcanvas-bottom show" 
        transition:fade
        tabindex="-1" 
        aria-labelledby={label}>
        <div class="offcanvas-header">
            <h2 class="offcanvas-title">{label}</h2>
            {#if closable}
                <button type="button"
                    class="btn-close text-reset"
                    aria-label="Close"
                    on:click={() => {show = false}}>
                </button>
            {/if}
        </div>
        <div class="offcanvas-body">
            <div><slot /></div>
            <div class="mt-3">
                <slot name="buttons">
                    <button class="btn btn-primary" type="button" on:click={() => {show = false}}>
                        Close
                    </button>
                </slot>
            </div>
        </div>
    </div>
    <div class="offcanvas-backdrop show" transition:fade></div>
{/if}
