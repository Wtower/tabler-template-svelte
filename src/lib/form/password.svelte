<script>
    import InputGroup from "./input_group.svelte";

    /** 
     * Toggle the input box type to text/password.
     * Warning: a change in HTML markup order will break this:
     * https://github.com/sveltejs/svelte/issues/3921
     * @param {{ currentTarget: { parentNode: any; }; }} event
     */
    const showPassword = (event) => {
        const inputElement = event.currentTarget.parentNode.previousElementSibling;
        inputElement.type = inputElement.type == 'password'? 'text': 'password';
    };

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
     * @type {string} 
     */
    export let id;

    /**
     * The input placeholder.
     * @type {string}
     */
    export let placeholder = '';

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
     * The bound value.
	 * @type {string}
	 */
     export let value;

    /**
     * Whether to display a red/green border if valid/invalid.
     * Set to true by default because it messes with the icon.
     * @type {boolean}
     */
    export let validationLite = true;

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
    $: isValid = !isTouched? null: [
        required && typeof value === 'string'? !!value.length: null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<!-- 
@component
Password form component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- appended: The icon or text to get appended to the right side for showing the password.
- hint: An extra description below the field.
 -->
{#if !floatingLabel}
    <InputGroup for={id} {wrapper} {required} class={extraClass} flat>
        <slot />
        <!-- Pass the slot: https://github.com/sveltejs/svelte/issues/2079 -->
        <slot name="description" slot="description" />
        <svelte:fragment slot="controls">
            <input {id} 
                type="password" 
                class="form-control"
                class:form-control-rounded={border === 'rounded'}
                class:form-control-flush={border === 'none'}
                class:is-valid={isValid}
                class:is-valid-lite={isValid && validationLite}
                class:is-invalid={isValid === false}
                class:is-invalid-lite={isValid === false && validationLite}
                name={id}
                {placeholder}
                on:blur|once={() => isTouched = true}
                bind:value>
            <!-- Show an icon to toggle input box type: -->
            <span class="input-group-text">
                <a href="#show-password"
                    class:link-secondary={!$$slots.appended}
                    class:input-group-link={$$slots.appended}
                    title="Show password"
                    data-bs-toggle="tooltip"
                    on:click={showPassword}>
                    <slot name="appended">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                    </slot>
                </a>
            </span>
            {#if $$slots.hint}
                <small class="form-hint"><slot name="hint" /></small>
            {/if}
        </svelte:fragment>
    </InputGroup>
{:else}
    <!-- Show an icon to toggle input box type: -->
    <div class="text-end">
        <a href="#show-password"
            class="input-group-link"
            title="Show password"
            data-bs-toggle="tooltip"
            on:click={showPassword}>
            <slot name="appended" />
        </a>
    </div>
    <div class="form-floating {extraClass ?? 'mb-3'}">
        <input {id} 
            type="password" 
            class="form-control" 
            class:form-control-rounded={border === 'rounded'}
            class:form-control-flush={border === 'none'}
            name={id}
            bind:value>
        <label for={id}><slot /></label>
    </div>
{/if}

<style>
    /* Fix missing margin for hint, because of icon */
    .input-group-text + .form-hint {
        margin-top: .5rem;
    }
</style>
