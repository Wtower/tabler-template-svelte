<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let id;

    export let placeholder = '';
    export let autocomplete = null;
    export let disabled = false;
    export let readonly = false;
    export let required = false;
    export let maxlength = null;
    export let border = null; // 'rounded'|'none'
    export let padding = ''; // 'none text-end'
    export let floating_label = false;
    export let list = null;
    export let type = 'text';
    export let value;

    export let validation_regex = null;
    export let validation_lite = false;
    export let is_touched = false;
    export let is_valid = null;
    // If not touched, always get null, or get array of conditions.
    // Then get each element and if all is null, then null, else AND conditions
    $: is_valid = !is_touched? null: [
        required? !!value.length: null,
        validation_regex instanceof RegExp? validation_regex.test(value): null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- If icon_before or icon_after slot is provided, and no label is defined, output an icon -->
<!-- Otherwise a label and icon at the same time breaks the layout -->
<Wrapper
    element={wrapper}
    class={
        extra_class ?? 'mb-3'}{
        !$$slots.default && !$$slots.description && ($$slots.icon_before || $$slots.icon_after)? ' input-icon': ''}{
        floating_label? ' form-floating': ''
    }>
    {#if ($$slots.default || $$slots.description) && !floating_label}
        <Label {id} {required}>
            <slot /><slot name="description" />
        </Label>
    {/if}
    {#if !$$slots.default && !$$slots.description && $$slots.icon_before}
        <span class="input-icon-addon">
            <slot name="icon_before" />
        </span>
    {/if}
    {#if type === 'email'}
        <input 
            {id}
            type="email" 
            class="form-control"
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:ps-0={padding.includes('none')}
            class:pe-0={padding.includes('none')}
            class:text-end={padding.includes('text-end')}
            class:is-valid={is_valid}
            class:is-valid-lite={is_valid && validation_lite}
            class:is-invalid={is_valid === false}
            class:is-invalid-lite={is_valid === false && validation_lite}
            name={id}
            placeholder={floating_label? null: placeholder}
            {autocomplete}
            {disabled}
            {readonly}
            {list}
            on:input|once={() => {is_touched = true}}
            bind:value>
    {:else}
        <input 
            {id}
            type="text" 
            class="form-control"
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:ps-0={padding.includes('none')}
            class:pe-0={padding.includes('none')}
            class:text-end={padding.includes('text-end')}
            class:is-valid={is_valid}
            class:is-valid-lite={is_valid && validation_lite}
            class:is-invalid={is_valid === false}
            class:is-invalid-lite={is_valid === false && validation_lite}
            name={id}
            placeholder={floating_label? null: placeholder}
            {autocomplete}
            {disabled}
            {readonly}
            {maxlength}
            {list}
            on:input|once={() => {is_touched = true}}
            bind:value>
    {/if}
    {#if !$$slots.default && !$$slots.description && $$slots.icon_after}
        <span class="input-icon-addon">
            <slot name="icon_after" />
        </span>
    {/if}
    {#if $$slots.default && floating_label}
        <label for={id} class="form-label"><slot /></label>
    {/if}
    {#if $$slots.hint}
        <small class="form-hint"><slot name="hint" /></small>
    {/if}
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
