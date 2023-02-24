<script>
    import noUiSlider from "noUiSlider";
    import { onMount } from "svelte";
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let id;
    export let wrapper = 'div';

    export let disabled = false;
    export let required = false;
    export let describe = false;

    // https://refreshless.com/nouislider/
    // https://github.com/leongersen/noUiSlider/issues/1180
    export let slider = null; // null|false|true|config object
    export let color = null;

    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let value;

    let slider_element;

    // If slider then use noUiSlider module:
    if (slider) {
        onMount(() => {
            noUiSlider.create(slider_element, slider === true? {
                start: value,
                connect: true,
                step: step,
                range: {min: min, max: max}
            }: slider);
            // https://refreshless.com/nouislider/events-callbacks/
            slider_element.noUiSlider.on('change', (values) => {
                value = values;
            });
        });
    }
</script>

<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <Label {id} {required} show={describe}>
        <slot />
        {#if $$slots.description || describe}
            &nbsp;
            <span class="form-label-description">
                <slot name="description" />
                {#if describe}
                    {value}
                {/if}
            </span>
        {/if}
    </Label>
    {#if !slider}
        <input type="range" class="form-range" {min} {max} {step} bind:value {disabled}>
    {:else}
        <div class="form-range {color? `text-${color}`: ''}" bind:this={slider_element}></div>
    {/if}
</Wrapper>
