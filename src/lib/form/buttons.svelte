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
     * The name of the radio button group.
	 * @type {string}
	 */
    export let name;

    /**
     * Whether a value is required. It outputs a * on label and executes validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Whether to align vertically.
     * @type {boolean}
     */
    export let vertical = false;

    /**
     * The bound value.
	 * @type {Array.<Object>|number|string}
	 */
    export let value;

    /**
     * Define the buttons.
	 * @type {Array.<{v: any, t: any, disabled?: boolean, html?: string, on?: function}>}
	 */
    export let buttons;

    /**
     * Whether the user has changed the field.
     * Exported in case the parent wants to check upon.
     * @type {boolean}
     */
    export let isTouched = false;

    /**
     * Check that the field is valid, only if touched and required.
	 * @type {boolean?}
	 */
     export let isValid = null;
    $: isValid = !isTouched || !required? null: !!value;

    /**
     * Handle button click.
	 * @param {{ [s: string]: any; }} button
	 */
    function handleClick(button) {
        if (typeof button.on === 'function') button.on();
        else value = Object.values(button)[0];
    }
</script>

<!-- 
@component
A Buttons component that execute a specified `on` function.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- prepend: Extra html before the buttons.
- append: Extra html after the buttons.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class="w-100"
        class:btn-group={!vertical}
        class:btn-group-vertical={vertical}
        role="group">
        <div class="btn-group" role="group"><slot name="prepend" /></div>
        {#each buttons as button}
            <input type="radio" 
                class="btn-check"
                {name}
                autocomplete="off"
                on:blur|once={() => isTouched = true}
                bind:group={value}
                value={Object.values(button)[0]}
                checked={value == Object.values(button)[0]}
                disabled={button.disabled}>
            <span class="btn"
                class:btn-icon={!!button.html}
                on:click={() => {handleClick(button)}}
                on:keypress={() => {handleClick(button)}}>
                {#if button.html}
                    {@html button.html}
                {/if}
                {Object.values(button)[1]}
            </span>
        {/each}
        <div class="btn-group" role="group"><slot name="append" /></div>
    </div>
    {#if $$slots.feedback && isValid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
