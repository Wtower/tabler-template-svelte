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
     * The number of rows.
     * If auto-resize, the starting rows.
     * @type {number}
     */
    export let rows = 2;

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
     * The input border. If non provided then it uses default.
     * @type {'rounded'|'none'|null} 
     */
    export let border = null; // 'rounded'|'none'

    /**
     * The maximum text length.
     * @type {number?}
     */
    export let maxlength = null;

    /**
     * The maximum soft-limit text length.
     * If provided it shows a counter.
     * @type {number?}
     */
    export let maxlength_counter = null;
    
    /**
     * The maximum number of rows for auto-resize.
     * @type {number}
     */
    export let max_rows = 20;

    /**
     * The line height in px to calculate the auto-resize.
     * @type {number}
     */
    export let line_height = 20;

    /**
     * Whether to enable auto-resize.
     * @type {boolean}
     */
    export let auto_resize = false;
    
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
	 * @type {boolean?}
	 */
    export let is_valid = null;
    $: is_valid = !is_touched? null: [
        required? !!value.length: null,
        validation_regex instanceof RegExp? validation_regex.test(value): null,
        // maxlength_counter? value.length <= maxlength_counter: null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- 
@component
Textarea field component with regex validation, auto-resize and a counter.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <Label {id} {required}>
        <slot />
        {#if $$slots.description || maxlength_counter}
            &nbsp;
            <span class="form-label-description">
                <slot name="description" />
                {#if maxlength_counter}
                    <span class:text-red={value.length >= maxlength_counter}>
                        {value.length}/{maxlength_counter}
                    </span>
                {/if}
            </span>
        {/if}
    </Label>
    <Wrapper element={auto_resize? 'div': ''} class="textarea-wrapper">
        {#if auto_resize}
            <!-- Present the value so browser calculates height -->
            <!-- https://svelte.dev/repl/40f4c7846e6f4052927ff5f9c5271b66?version=3.6.8 -->
            <pre aria-hidden="true" 
                style:min-height={`${rows * line_height}px`}
                style:max-height={max_rows? `${max_rows * line_height}px`: `auto`}>
                {value}
            </pre>
        {/if}
        <textarea 
            {id} 
            class="form-control"
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            class:auto-resize={auto_resize}
            class:is-valid={is_valid}
            class:is-valid-lite={is_valid && validation_lite}
            class:is-invalid={is_valid === false}
            class:is-invalid-lite={is_valid === false && validation_lite}
            style:line-height={line_height}{'px'}
            name={id}
            {rows}
            {placeholder}
            {autocomplete}
            {disabled}
            {readonly}
            {maxlength}
            on:input|once={() => {is_touched = true}}
            bind:value />
    </Wrapper>
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>

<style>
    /* https://github.com/sveltejs/svelte/issues/1594 */
    :global(.textarea-wrapper) {
        position: relative;
    }
    pre {
        overflow: hidden;
        /* https://stackoverflow.com/questions/248011/how-do-i-wrap-text-in-a-pre-tag */
        white-space: pre-wrap;
    }
    textarea.auto-resize {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        resize: none;
    }
</style>
