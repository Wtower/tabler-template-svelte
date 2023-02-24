<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let id;
    export let wrapper = 'div';
    
    export let rows = 2;
    export let placeholder = '';
    export let autocomplete = null;
    export let disabled = false;
    export let readonly = false;
    export let required = false;
    export let border = null; // 'rounded'|'none'

    export let maxlength = null;
    export let maxlength_counter = null; // If provided it shows a counter
    
    export let max_rows = 20;
    export let line_height = 20; // px
    export let auto_resize = false;
    
    export let value;

    export let validation_regex = null;
    export let validation_lite = false;
    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched? null: [
        required? !!value.length: null,
        validation_regex instanceof RegExp? validation_regex.test(value): null,
        // maxlength_counter? value.length <= maxlength_counter: null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

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
