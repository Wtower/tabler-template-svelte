<script>
    import { onMount } from "svelte";
    import { element } from "svelte/internal";
    import TomSelect from 'tom-select';
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // Select field
    // https://svelte.dev/tutorial/select-bindings
    // 
    // Options:
    // Expects an array of objects, where the first key is always the value and the second the text
    // https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
    //
    // Multiple options cannot be dynamic
    // https://github.com/sveltejs/svelte/issues/1270
    //
    // For parameter definition see `input_group.svelte`
    //
    // Placeholder:
    // https://svelte.dev/repl/e1c7d9b804414f2d888b96b3e812a5c7?version=3.43.0

    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let id;
    export let placeholder = '';
    export let autocomplete = null;
    export let disabled = false;
    export let required = false;
    export let border = null; // 'rounded'|'none'
    export let floating_label = false;
    export let value;
    export let options = [] || {};
    export let multiple = false;

    export let validation_lite = false;
    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value;

    // https://github.com/orchidjs/tom-select/discussions/161
    // https://tom-select.js.org/examples/remote/
    export let tom = false;
    export let settings = {};
    let select_element;    
    onMount(async () => {
        if (tom) new TomSelect(select_element, settings);
    });
</script>

<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}{floating_label? ' form-floating': ''}>
    {#if ($$slots.default || $$slots.description) && !floating_label}
        <Label {required}>
            <slot /><slot name="description" />
        </Label>
    {/if}
    {#if !multiple}
        <select
            {id} 
            name={id}
            class="form-select"
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:is-valid={is_valid}
            class:is-valid-lite={is_valid && validation_lite}
            class:is-invalid={is_valid === false}
            class:is-invalid-lite={is_valid === false && validation_lite}
            {autocomplete}
            {disabled}
            on:input|once={() => {is_touched = true}}
            bind:this={select_element}
            bind:value>
            {#if placeholder}
                <option value disabled selected>{placeholder}</option>
            {/if}

            <!-- Check if it is an array and group by `group` key -->
            <!-- https://stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key -->
            <!-- https://stackoverflow.com/questions/64909382/how-to-print-both-object-key-and-value-with-each-block-in-svelte -->
            {#each Object.entries(!Array.isArray(options)? options: options.reduce((r, a) => {
                    r[a.group] = r[a.group] || [];
                    r[a.group].push(a);
                    return r;
                }, Object.create(null))) as [group, group_options]}

                <!-- Display an optgroup if a group is defined -->
                <Wrapper element={group == 'undefined'? null: 'optgroup'} label={group}>
                    {#each group_options as option}
                        <option value={Object.values(option)[0]}
                            data-custom-properties={option.data}>
                            {Object.values(option)[1]}
                        </option>
                    {/each}
                </Wrapper>
            {/each}
        </select>
    {:else}
        <select
            {id} 
            name={id}
            class="form-select"
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:is-valid={is_valid}
            class:is-valid-lite={is_valid && validation_lite}
            class:is-invalid={is_valid === false}
            class:is-invalid-lite={is_valid === false && validation_lite}
            {autocomplete}
            {disabled}
            multiple
            on:input|once={() => {is_touched = true}}
            bind:this={select_element}
            bind:value>
            {#if placeholder}
                <option value disabled selected>{placeholder}</option>
            {/if}
            <!-- Optgroups are not relevant in multiple selectbox, just check if an object is passed -->
            {#each Array.isArray(options)? options: Object.values(options) as option}
                <option value={Object.values(option)[0]}>{Object.values(option)[1]}</option>
            {/each}
        </select>
    {/if}
    {#if $$slots.default && floating_label}
        <label for={id} class="form-label"><slot /></label>
    {/if}
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>

<style>
    /* Apply validation styles for tom-select elements */
    :global(.form-select.is-valid + div.ts-wrapper.form-select) {
        --tblr-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232fb344' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20 6 9 17 4 12'%3e%3c/polyline%3e%3c/svg%3e");
        padding-right: 4.125rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23a5a9b1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232fb344' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20 6 9 17 4 12'%3e%3c/polyline%3e%3c/svg%3e");
        background-position: right .75rem center,center right 2.25rem;
        background-size: 16px 12px,calc(.7142857143em + .4375rem) calc(.7142857143em + .4375rem);
        background-repeat: no-repeat;
        --ts-pr-caret: 2.25rem;
        border-color: var(--tblr-success-text);
    }
    :global(.form-select.is-invalid + div.ts-wrapper.form-select) {
        --tblr-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d63939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cline x1='18' y1='6' x2='6' y2='18'%3e%3c/line%3e%3cline x1='6' y1='6' x2='18' y2='18'%3e%3c/line%3e%3c/svg%3e");
        padding-right: 4.125rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23a5a9b1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d63939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cline x1='18' y1='6' x2='6' y2='18'%3e%3c/line%3e%3cline x1='6' y1='6' x2='18' y2='18'%3e%3c/line%3e%3c/svg%3e");
        background-position: right .75rem center,center right 2.25rem;
        background-size: 16px 12px,calc(.7142857143em + .4375rem) calc(.7142857143em + .4375rem);
        background-repeat: no-repeat;
        --ts-pr-caret: 2.25rem;
        border-color: var(--tblr-danger-text);
    }
</style>