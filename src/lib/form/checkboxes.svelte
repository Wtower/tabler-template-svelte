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
    export let toggle_switch = false;

    /**
     * Whether to right align the boxes.
     * @type {boolean}
     */
    export let right_align = false;

    /**
     * Whether to present as selectgroup.
	 * @type {null|boolean|'pills'|'boxes'}
	 */
    export let selectgroup = null; // true|'pills'|'boxes'

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
    export let is_touched = false;

    /**
     * Check that the field is valid, only if touched and required.
     * Validation classes not added to control because it changes all text to green/red.
	 * @type {boolean?}
	 */
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value.length;
</script>

<!-- 
@component
Checkboxes form component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class:divide-y={right_align}
        class:form-selectgroup={!!selectgroup}
        class:form-selectgroup-pills={selectgroup === 'pills'}
        class:form-selectgroup-boxes={selectgroup === 'boxes'}
        class:d-flex={selectgroup === 'boxes'}
        class:flex-column={selectgroup === 'boxes'}>
        {#each checkboxes as checkbox}
            <Wrapper element={right_align? 'div': ''}>
                <Wrapper element={right_align? 'label': ''} class="row">
                    {#if right_align}
                        <span class="col">{Object.values(checkbox)[1]}</span>
                    {/if}
                    <Wrapper element={right_align? 'span': ''} class="col-auto">
                        <label 
                            class:form-check={!selectgroup}
                            class:form-check-inline={inline}
                            class:form-check-single={right_align}
                            class:form-switch={toggle_switch}
                            class:form-selectgroup-item={!!selectgroup}
                            class:flex-fill={selectgroup === 'boxes'}>
                            <input type="checkbox" 
                                class:form-check-input={!selectgroup}
                                class:form-selectgroup-input={!!selectgroup}
                                {name}
                                on:input|once={() => {is_touched = true}}
                                bind:group={value}
                                value={Object.values(checkbox)[0]}
                                checked={value.includes(Object.values(checkbox)[0])}
                                disabled={checkbox.disabled}>
                            {#if !right_align}
                                <span 
                                    class:form-check-label={!selectgroup}
                                    class:form-selectgroup-label={!!selectgroup}
                                    class:d-flex={selectgroup === 'boxes'}
                                    class:align-items-center={selectgroup === 'boxes'}
                                    class:p-3={selectgroup === 'boxes'}
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
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
