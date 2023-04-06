<script>
    // https://date-picker-svelte.kasper.space/docs
    import { DateInput, DatePicker } from "date-picker-svelte";
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
     * The input id.
     * @type {string?} 
     */
    export let id = null;

    /**
     * Whether to display the datepicker without pop-up.
     * @type {boolean}
     */
    export let inline = false;

    /**
     * Whether a value is required. It outputs a * on label and executes validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * The input placeholder.
     * @type {string}
     */
    export let placeholder = '';

    /**
     * The input date format.
     * @type {string}
     */
    export let format = 'dd/MM/yyyy';

    /**
     * Whether the input box is disabled.
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * Whether to close the pop-up when date is selected.
     * @type {boolean}
     */
    export let closeOnSelection = false;

    /**
     * When changing the month/year, if the value is changed too or needs selecting.
     * @type {boolean}
     */
    export let browseWithoutSelecting = false;

    /**
     * Where to display a date icon, if any.
	 * @type {'left'|'right'|boolean|null}
	 */
    export let icon = null;

    /**
     * The minimum date value allowed for validation.
	 * @type {Date?}
	 */
    export let min = null;

    /**
     * The maximum date value allowed for validation.
	 * @type {Date?}
	 */
    export let max = null;

    /**
     * Bound value.
	 * @type {Date}
	 */
    export let value;

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
    $: isValid = !isTouched? null: [
        required? !!value: null,
        min && max? min < value && value < max: null,
        min? min < value: null,
        max? value < max: null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- 
@component
Date Input with date picker component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class="{extraClass ?? 'mb-3'}">
    {#if $$slots.default || $$slots.description}
        <Label {required}>
            <slot /><slot name="description" />
        </Label>
    {/if}
    <div class="date-input" 
        class:input-icon={icon} 
        class:input-icon-left={icon === 'left'}
        class:input-icon-right={icon !== 'left'}
        class:inline>
        {#if icon === 'left'}
            <span class="input-icon-addon input-icon-addon-left">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M11 15l1 0" /><path d="M12 15l0 3" /></svg>
            </span>
        {/if}
        <svelte:component
            this={inline? DatePicker: DateInput}
            {placeholder} 
            {format} 
            {disabled} 
            {closeOnSelection} 
            {browseWithoutSelecting} 
            on:blur|once={() => isTouched = true}
            bind:value />
        {#if icon && icon !== 'left'}
            <span class="input-icon-addon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M11 15l1 0" /><path d="M12 15l0 3" /></svg>
            </span>
        {/if}
        <input type="hidden" {id} name={id} {value} />
    </div>
    {#if $$slots.feedback && isValid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>

<style>
    /* https://stackoverflow.com/questions/67049219/class-styling-on-a-custom-component-in-svelte-does-not-register */
    .date-input :global(input) {
        width: 100%;
        padding: .4375rem .75rem;
    }
    .date-input.input-icon-left :global(input) {
        padding-left: 2.5rem;
    }
    .date-input.input-icon-right :global(input) {
        padding-right: 2.5rem;
    }
    .date-input .input-icon-addon-left {
        z-index: 1;
    }
    .date-input.inline :global(div) {
        box-shadow: none;
    }
</style>
