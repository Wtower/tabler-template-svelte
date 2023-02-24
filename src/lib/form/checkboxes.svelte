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
    export let toggle_switch = false;
    export let right_align = false;
    export let selectgroup = null; // true|'pills'|'boxes'
    export let value;
    export let checkboxes;

    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value.length;
    // Validation classes not added to control because it changes all text to green/red.
</script>

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
