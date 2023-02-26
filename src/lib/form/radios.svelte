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
     * The name of the radio group.
	 * @type {string}
	 */
    export let name;

    /**
     * Whether a value is required. It outputs a * on label and executes validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Whether to display inline radios.
     * @type {boolean}
     */
    export let inline = false;

    /**
     * Whether to present as selectgroup.
	 * @type {null|boolean|'pills'|'boxes'}
	 */
    export let selectGroup = null;

    /**
     * The bound value.
	 * @type {number|string}
	 */
    export let value;

    /**
     * Define the radios.
	 * @type {Array.<{v: any, t: any, disabled?: boolean, html?: string, description?: string}>}
	 */
    export let radios;

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
</script>

<!-- 
@component
Radios form component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class:form-selectgroup={!!selectGroup} 
        class:form-selectgroup-pills={selectGroup === 'pills'}
        class:form-selectgroup-boxes={selectGroup === 'boxes'}
        class:d-flex={selectGroup === 'boxes'}
        class:flex-column={selectGroup === 'boxes'}>
        {#each radios as radio}
            <label 
                class:form-check={!selectGroup}
                class:form-check-inline={inline}
                class:form-selectgroup-item={!!selectGroup}
                class:flex-fill={selectGroup === 'boxes'}>
                <input type="radio" 
                    class:form-check-input={!selectGroup}
                    class:form-selectgroup-input={!!selectGroup}
                    {name}
                    on:input|once={() => {isTouched = true}}
                    bind:group={value}
                    value={Object.values(radio)[0]}
                    checked={value == Object.values(radio)[0]}
                    disabled={radio.disabled}>
                <span
                    class:form-check-label={!selectGroup}
                    class:form-selectgroup-label={!!selectGroup}
                    class:d-flex={selectGroup === 'boxes'}
                    class:align-items-center={selectGroup === 'boxes'}
                    class:p-3={selectGroup === 'boxes'}>
                    {#if radio.html}
                        {@html radio.html}
                    {/if}
                    {Object.values(radio)[1]}
                </span>
            </label>
        {/each}
    </div>
    {#if $$slots.feedback && isValid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
