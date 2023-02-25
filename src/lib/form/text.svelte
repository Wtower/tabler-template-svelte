<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    /** 
     * Extra classes for the wrapper element, or `mb-3`.
     * @type {string?} 
     */
    let extra_class = null;
    export { extra_class as class };

    /**
     * The wrapper element or null.
     * @type {string?}
     */
    export let wrapper = 'div';

    /** 
     * The input id and the associated label.
     * @type {string} 
     */
    export let id;

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
    export let floating_label = false;

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
     * The bound value.
	 * @type {string}
	 */
    export let value;

    /**
	 * A regular expression for validation.
	 * @type {RegExp?}
	 */
    export let validation_regex = null;

    /**
     * Whether to display a red/green border if valid/invalid.
     * @type {boolean}
     */
    export let validation_lite = false;

    /**
     * Whether the user has changed the field.
     * Exported in case the parent wants to check upon.
     * @type {boolean}
     */
    export let is_touched = false;

    /**
     * Check that the field is valid, only if touched and required.
     * If not touched, always get null, or get array of conditions.
     * Then get each element and if all is null, then null, else AND conditions.
	 * @type {boolean?}
	 */
    export let is_valid = null;
    $: is_valid = !is_touched? null: [
        required? !!value.length: null,
        validation_regex instanceof RegExp? validation_regex.test(value): null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- 
@component
Input text/email field component with regex validation.

If icon_before or icon_after slot is provided, and no label is defined, output an icon.
Otherwise a label and icon at the same time breaks the layout.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- icon_before: Present an icon before the input box.
- icon_after: Present an icon after the input box.
- hint: An extra description below the field.
- feedback: Text to display if validation error.
-->
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
