<script>
    import Wrapper from "../interface/wrapper.svelte";

    /** 
     * Extra classes for the wrapper element, or margin bottom `mb-3`.
     * @type {string?} 
     */
    let extraClass = null;
    export { extraClass as class };

    /**
     * The wrapper element or null.
     * @type {string?}
     */
    export let wrapper = 'div';

    /** 
     * The id for the associated label.
     * @type {string?} 
     */
    let forId = null;
    export { forId as for };

    /**
     * Whether a value is required. It outputs a * on label.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Extra flat class for the input group.
     * @type {boolean}
     */
    export let flat = false;
</script>

<!-- 
@component
Input group Tabler component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- static: Display a static text/value.
- controls: Display additonal grouped controls.
-->
<!-- Field wrapper with `extra_class` -->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <!-- If a default slot or a description slot is defined (right-align), output a label -->
    {#if $$slots.default || $$slots.description}
        <label for={forId} 
            class="form-label"
            class:required={required && !$$slots.static}>
            <!-- Main label text -->
            <slot />
            <!-- Right-aligned text -->
            {#if $$slots.description}
                <span class="form-label-description"><slot name="description" /></span>
            {/if}
        </label>
    {/if}
    <!-- If `static` slot, output a single static value with no group or imput box -->
    {#if $$slots.static}
        <div class="form-control-plaintext"><slot name="static" /></div>
    {/if}
    <!-- The main slot with the input group controls -->
    {#if $$slots.controls}
        <div class="input-group" 
            class:input-group-flat={flat}>
            <slot name="controls" />
        </div>
    {/if}
</Wrapper>
