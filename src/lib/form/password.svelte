<script>
    import InputGroup from "./input_group.svelte";

    // Toggle the input box type to text/password
    // Warning: a change in HTML markup order will break this:
    // https://github.com/sveltejs/svelte/issues/3921
    const show_password = (event) => {
        let input_element = event.currentTarget.parentNode.previousElementSibling;
        input_element.type = input_element.type == 'password'? 'text': 'password';
    };
    
    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let id;
    export let placeholder = '';
    export let required = false;
    export let border = null; // 'rounded'|'none'
    export let floating_label = false;
    export let value;
</script>

{#if !floating_label}
    <InputGroup for={id} {wrapper} {required} class={extra_class} flat>
        <slot />
        <!-- Pass the slot: https://github.com/sveltejs/svelte/issues/2079 -->
        <slot name="description" slot="description" />
        <svelte:fragment slot="controls">
            <input {id} 
                type="password" 
                class="form-control"
                class:form-control-rounded={border === 'rounded'}
                class:form-control-flush={border === 'none'}
                name={id}
                {placeholder}
                bind:value>
            <!-- Show an icon to toggle input box type: -->
            <span class="input-group-text">
                <a href="#show-password"
                    class:link-secondary={!$$slots.appended}
                    class:input-group-link={$$slots.appended}
                    title="Show password"
                    data-bs-toggle="tooltip"
                    on:click={show_password}>
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
            on:click={show_password}>
            <slot name="appended" />
        </a>
    </div>
    <div class="form-floating {extra_class ?? 'mb-3'}">
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
