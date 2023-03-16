<script>
    import { onMount } from "svelte";
    import TomSelect from 'tom-select';
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    /** 
     * Extra classes for the wrapper element, or `mb-3`.
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
     * The select id and the associated label.
     * @type {string?} 
     */
    export let id = null;

    /**
     * The placeholder option.
     * https://svelte.dev/repl/e1c7d9b804414f2d888b96b3e812a5c7?version=3.43.0
     * @type {string}
     */
    export let placeholder = '';

    /**
     * Disable the autocomplete.
	 * @type {'off'|'on'|null}
	 */
    export let autocomplete = null;

    /**
     * Whether the select box is disabled.
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * Whether a value is required. It outputs a * on label.
     * @type {boolean}
     */
    export let required = false;

    /** 
     * The input border. If non provided then it uses default.
     * @type {'rounded'|'none'|null} 
     */
    export let border = null;

    /**
     * Whether the label is floating.
     * @type {boolean}
     */
    export let floatingLabel = false;

    /**
     * The control size.
     * @type {''|'small'|'large'}
     */
    export let size = '';

    /**
     * The bound value.
	 * @type {string|number|Array.<string|number>}
	 */
    export let value;
    
    /**
     * Specify the select box options and groups.
     * Expects an array of objects, where the first key is always the value and the second the text
     * https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
	 * @type {Array.<{v: any, t: any, disabled?: boolean, group?: string, data?: string}> | 
     *  {[group: string]: Array.<{v: any, t: any, disabled?: boolean}>}}
	 */
    export let options = [] || {};

    /**
     * Whether it allows a multiple selection.
     * Multiple options cannot be dynamic.
     * https://github.com/sveltejs/svelte/issues/1270
     * @type {boolean}
     */
    export let multiple = false;

    /**
     * Whether to display a red/green border if valid/invalid.
     * @type {boolean}
     */
    export let validationLite = false;

    /**
     * Whether the user has changed the field.
     * Exported in case the parent wants to check upon.
     * @type {boolean}
     */
    export let isTouched = false;

    /**
     * Check that the field is valid, only if touched and required.
     * Validation classes not added to control because it changes all text to green/red.
	 * @type {boolean?}
	 */
    export let isValid = null;
    $: isValid = !isTouched || !required? null: !!value;

    // https://github.com/orchidjs/tom-select/discussions/161
    // https://tom-select.js.org/examples/remote/

    /**
     * Whether to construct a tom select box.
     * @type {boolean}
     */
    export let tom = false;

    /**
     * The tom select settings.
     * @type {{}}
     */
    export let settings = {};

    /**
     * The select element on which to construct the to select box.
	 * @type {import("tom-select/dist/types/types").TomInput | HTMLSelectElement}
	 */
    let selectElement;

    onMount(async () => {
        if (tom) new TomSelect(selectElement, settings);
    });
</script>

<!-- 
@component
Select box component.

https://svelte.dev/tutorial/select-bindings

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}{floatingLabel? ' form-floating': ''}>
    {#if ($$slots.default || $$slots.description) && !floatingLabel}
        <Label {required}>
            <slot /><slot name="description" />
        </Label>
    {/if}
    {#if !multiple}
        <select
            {id} 
            name={id}
            class="form-select"
            class:form-control-sm={size === 'small'}
            class:form-control-lg={size === 'large'}
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:is-valid={isValid}
            class:is-valid-lite={isValid && validationLite}
            class:is-invalid={isValid === false}
            class:is-invalid-lite={isValid === false && validationLite}
            {autocomplete}
            {disabled}
            on:blur|once={() => isTouched = true}
            bind:this={selectElement}
            bind:value>
            {#if placeholder}
                <option value disabled selected>{placeholder}</option>
            {/if}

            <!-- Check if it is an array and group by `group` key -->
            <!-- https://stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key -->
            <!-- https://stackoverflow.com/questions/64909382/how-to-print-both-object-key-and-value-with-each-block-in-svelte -->
            {#each Object.entries(!Array.isArray(options)? options: options.reduce((r, a) => {
                    r[a.group ?? ''] = r[a.group ?? ''] || [];
                    r[a.group ?? ''].push(a);
                    return r;
                }, Object.create(null))) as [group, groupOptions]}

                <!-- Display an optgroup if a group is defined -->
                <Wrapper element={group? 'optgroup': null} label={group}>
                    {#each groupOptions as option}
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
            class:is-valid={isValid}
            class:is-valid-lite={isValid && validationLite}
            class:is-invalid={isValid === false}
            class:is-invalid-lite={isValid === false && validationLite}
            {autocomplete}
            {disabled}
            multiple
            on:blur|once={() => isTouched = true}
            bind:this={selectElement}
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
    {#if $$slots.default && floatingLabel}
        <label for={id} class="form-label"><slot /></label>
    {/if}
    {#if $$slots.feedback && isValid === false}
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
