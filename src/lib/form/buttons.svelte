<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let name;
    export let required = false;
    export let vertical = false;
    export let value;
    export let buttons;

    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value;

    function handleClick(button) {
        if (typeof button.on === 'function') button.on();
        else value = Object.values(button)[0];
    }
</script>

<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
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
                on:input|once={() => {is_touched = true}}
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
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
