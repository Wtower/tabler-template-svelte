<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let name;
    export let required = false;
    export let inline = false;
    export let selectgroup = null; // true|'pills'|'boxes'
    export let value;
    export let radios;

    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value;
    // Validation classes not added to control because it changes all text to green/red.
</script>

<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class:form-selectgroup={!!selectgroup} 
        class:form-selectgroup-pills={selectgroup === 'pills'}
        class:form-selectgroup-boxes={selectgroup === 'boxes'}
        class:d-flex={selectgroup === 'boxes'}
        class:flex-column={selectgroup === 'boxes'}>
        {#each radios as radio}
            <label 
                class:form-check={!selectgroup}
                class:form-check-inline={inline}
                class:form-selectgroup-item={!!selectgroup}
                class:flex-fill={selectgroup === 'boxes'}>
                <input type="radio" 
                    class:form-check-input={!selectgroup}
                    class:form-selectgroup-input={!!selectgroup}
                    {name}
                    on:input|once={() => {is_touched = true}}
                    bind:group={value}
                    value={Object.values(radio)[0]}
                    checked={value == Object.values(radio)[0]}
                    disabled={radio.disabled}>
                <span
                    class:form-check-label={!selectgroup}
                    class:form-selectgroup-label={!!selectgroup}
                    class:d-flex={selectgroup === 'boxes'}
                    class:align-items-center={selectgroup === 'boxes'}
                    class:p-3={selectgroup === 'boxes'}>
                    {#if radio.html}
                        {@html radio.html}
                    {/if}
                    {Object.values(radio)[1]}
                </span>
            </label>
        {/each}
    </div>
    {#if $$slots.feedback && is_valid === false}
        <div class="invalid-feedback"><slot name="feedback" /></div>
    {/if}
</Wrapper>
