<script>
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
     * The input id and the associated label.
     * @type {string?} 
     */
    export let id = null;

    /**
     * The input placeholder.
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
     * Whether the select box is read-only.
     * @type {boolean}
     */
    export let readonly = false;

    /**
     * Whether a value is required. It outputs a * on label and initiates validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * The maximum text length.
     * @type {number?}
     */
    export let maxlength = null;

    /** 
     * The input border. If non provided then it uses default.
     * @type {'rounded'|'none'|null} 
     */
    export let border = null; // 'rounded'|'none'

    /**
     * The text padding in the input box.
     * @type {''|'none'|'text-end'|'none text-end'}
     */
    export let padding = '';

    /**
     * Whether the label is floating.
     * @type {boolean}
     */
    export let floatingLabel = false;

    /**
     * Specify a datalist element id.
	 * @type {string?}
	 */
    export let list = null;

    /**
     * The input type.
     * @type {'text'|'email'}
     */
    export let type = 'text';

    /**
     * The control size.
     * @type {''|'small'|'large'}
     */
    export let size = '';

    /**
     * The bound value.
	 * @type {string}
	 */
    export let value;

    /**
	 * A regular expression for validation.
     * If type is email, the default regex checks for a valid email.
	 * @type {RegExp?}
	 */
    export let validationRegex = type === 'email'? 
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i:
         null;

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
     * If not touched, always get null, or get array of conditions.
     * Then get each element and if all is null, then null, else AND conditions.
     * When checking for length, check first that it is string to avoid exception.
	 * @type {boolean?}
	 */
    export let isValid = null;
    $: isValid = !isTouched? null: [
        required && typeof value === 'string'? !!value.length: null,
        validationRegex instanceof RegExp? validationRegex.test(value): null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- 
@component
Input text/email field component with regex validation.

If iconBefore or icon_after slot is provided, and no label is defined, output an icon.
Otherwise a label and icon at the same time breaks the layout.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- iconBefore: Present an icon before the input box.
- iconAfter: Present an icon after the input box.
- hint: An extra description below the field.
- feedback: Text to display if validation error.
-->
<Wrapper
    element={wrapper}
    class={
        extraClass ?? 'mb-3'}{
        !$$slots.default && !$$slots.description && ($$slots.iconBefore || $$slots.iconAfter)? ' input-icon': ''}{
        floatingLabel? ' form-floating': ''
    }>
    {#if ($$slots.default || $$slots.description) && !floatingLabel}
        <Label {id} {required}>
            <slot /><slot name="description" />
        </Label>
    {/if}
    {#if !$$slots.default && !$$slots.description && $$slots.iconBefore}
        <span class="input-icon-addon">
            <slot name="iconBefore" />
        </span>
    {/if}
    {#if type === 'email'}
        <input 
            {id}
            type="email" 
            class="form-control"
            class:form-control-sm={size === 'small'}
            class:form-control-lg={size === 'large'}
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:ps-0={padding.includes('none')}
            class:pe-0={padding.includes('none')}
            class:text-end={padding.includes('text-end')}
            class:is-valid={isValid}
            class:is-valid-lite={isValid && validationLite}
            class:is-invalid={isValid === false}
            class:is-invalid-lite={isValid === false && validationLite}
            name={id}
            placeholder={floatingLabel? null: placeholder}
            {autocomplete}
            {disabled}
            {readonly}
            {list}
            on:blur|once={() => isTouched = true}
            bind:value>
    {:else}
        <input 
            {id}
            type="text" 
            class="form-control"
            class:form-control-sm={size === 'small'}
            class:form-control-lg={size === 'large'}
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:ps-0={padding.includes('none')}
            class:pe-0={padding.includes('none')}
            class:text-end={padding.includes('text-end')}
            class:is-valid={isValid}
            class:is-valid-lite={isValid && validationLite}
            class:is-invalid={isValid === false}
            class:is-invalid-lite={isValid === false && validationLite}
            name={id}
            placeholder={floatingLabel? null: placeholder}
            {autocomplete}
            {disabled}
            {readonly}
            {maxlength}
            {list}
            on:blur|once={() => isTouched = true}
            bind:value>
    {/if}
    {#if !$$slots.default && !$$slots.description && $$slots.iconAfter}
        <span class="input-icon-addon">
            <slot name="iconAfter" />
        </span>
    {/if}
    {#if $$slots.default && floatingLabel}
        <label for={id} class="form-label"><slot /></label>
    {/if}
    {#if $$slots.hint}
        <small class="form-hint"><slot name="hint" /></small>
    {/if}
    {#if $$slots.feedback && isValid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
