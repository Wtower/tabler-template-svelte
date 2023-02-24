<script>
    import Wrapper from "../interface/wrapper.svelte";

    let extra_class = null; // An extra class to add to the field wrapper, or margin-bottom 3
    export { extra_class as class }; // Export it as a proper class
    export let wrapper = 'div'; // The wrapper element, if any
    let for_id = null; // The field id that will be used on the label `for`
    export { for_id as for }; // Export it as for
    export let required = false; // If the field is required it adds a class to the label
    export let flat = false; // extra class for the input group
</script>

<!-- Field wrapper with `extra_class` -->
<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <!-- If a default slot or a description slot is defined (right-align), output a label -->
    {#if $$slots.default || $$slots.description}
        <label for={for_id} 
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
