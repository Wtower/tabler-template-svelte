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
     * The name of the checkbox group.
	 * @type {string}
	 */
    export let name;

    /**
     * Whether a value is required. It outputs a * on label and executes validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Whether to display inline checkboxes.
     * @type {boolean}
     */
    export let inline = false;

    /**
     * Whether to display as toggle switches.
     * @type {boolean}
     */
    export let toggleSwitch = false;

    /**
     * Whether to right align the boxes.
     * @type {boolean}
     */
    export let rightAlign = false;

    /**
     * Whether to present as selectgroup.
	 * @type {null|boolean|'pills'|'boxes'}
	 */
    export let selectGroup = null; // true|'pills'|'boxes'

    /**
     * The bound value.
	 * @type {Array.<Object>}
	 */
    export let value;

    /**
     * Define the checkboxes.
	 * @type {Array.<{v: any, t: any, disabled?: boolean, html?: string, description?: string}>}
	 */
    export let checkboxes;

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
    $: isValid = !isTouched || !required? null: !!value.length;
</script>

<!-- 
@component
Checkboxes form component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class:divide-y={rightAlign}
        class:form-selectgroup={!!selectGroup}
        class:form-selectgroup-pills={selectGroup === 'pills'}
        class:form-selectgroup-boxes={selectGroup === 'boxes'}
        class:d-flex={selectGroup === 'boxes'}
        class:flex-column={selectGroup === 'boxes'}>
        {#each checkboxes as checkbox}
            <Wrapper element={rightAlign? 'div': ''}>
                <Wrapper element={rightAlign? 'label': ''} class="row">
                    {#if rightAlign}
                        <span class="col">{Object.values(checkbox)[1]}</span>
                    {/if}
                    <Wrapper element={rightAlign? 'span': ''} class="col-auto">
                        <label 
                            class:form-check={!selectGroup}
                            class:form-check-inline={inline}
                            class:form-check-single={rightAlign}
                            class:form-switch={toggleSwitch}
                            class:form-selectgroup-item={!!selectGroup}
                            class:flex-fill={selectGroup === 'boxes'}>
                            <input type="checkbox" 
                                class:form-check-input={!selectGroup}
                                class:form-selectgroup-input={!!selectGroup}
                                {name}
                                on:blur|once={() => isTouched = true}
                                bind:group={value}
                                value={Object.values(checkbox)[0]}
                                checked={value.includes(Object.values(checkbox)[0])}
                                disabled={checkbox.disabled}>
                            {#if !rightAlign}
                                <span 
                                    class:form-check-label={!selectGroup}
                                    class:form-selectgroup-label={!!selectGroup}
                                    class:d-flex={selectGroup === 'boxes'}
                                    class:align-items-center={selectGroup === 'boxes'}
                                    class:p-3={selectGroup === 'boxes'}
                                    class:required>
                                    {#if checkbox.html}
                                        {@html checkbox.html}
                                    {/if}
                                    {Object.values(checkbox)[1]}
                                </span>
                                {#if checkbox.description}
                                    <span class="form-check-description">
                                        {checkbox.description}
                                    </span>
                                {/if}
                            {/if}
                        </label>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        {/each}
    </div>
    {#if $$slots.feedback && isValid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
