<script>
    // https://date-picker-svelte.kasper.space/docs
    import { DateInput, DatePicker } from "date-picker-svelte";
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let inline = false;
    export let required = false;
    export let placeholder = '';
    export let format = 'dd/MM/yyyy';
    export let disabled = false;
    export let closeOnSelection = false;
    export let browseWithoutSelecting = false;
    export let icon = null;
    export let min = null;
    export let max = null;
    export let value;

    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched? null: [
        required? !!value: null,
        min && max? min < value && value < max: null,
        min? min < value: null,
        max? value < max: null,
    ].reduce((previous, current) => 
        current === null? previous: previous === null? current: previous && current);
</script>

<Wrapper element={wrapper} class="{extra_class ?? 'mb-3'}">
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
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
            on:input|once={() => {is_touched = true}}
            bind:value />
        {#if icon && icon !== 'left'}
            <span class="input-icon-addon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M11 15l1 0" /><path d="M12 15l0 3" /></svg>
            </span>
        {/if}
    </div>
    {#if $$slots.feedback && is_valid === false}
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
