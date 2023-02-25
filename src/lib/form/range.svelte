<script>
    import noUiSlider from "noUiSlider";
    import { onMount } from "svelte";
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
     * The input id and the associated label.
     * @type {string} 
     */
    export let id;

    /**
     * Whether the field is disabled.
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * Whether a value is required. It outputs a * on label.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Whether to output the field value in label description (right-aligned).
     * @type {boolean}
     */
    export let describe = false;

    /**
     * Construct a noui slider.
	 * https://refreshless.com/nouislider/
	 * https://github.com/leongersen/noUiSlider/issues/1180
	 * @type {boolean}
	 */
    export let slider = false;

    /**
     * Noui slider settings.
     * If none provided then they will be constructed from the exported options.
	 * @type {null | import("noUiSlider").Options}
	 */
    export let settings = null;

    /**
     * The color of the range.
	 * @type {string?}
	 */
    export let color = null;

    /**
     * The minimum range value.
     * @type {number}
     */
    export let min = 0;

    /**
     * The maximum range value.
     * @type {number}
     */
    export let max = 100;

    /**
     * The step value.
     * @type {number}
     */
    export let step = 1;

    /**
     * The bound value.
	 * @type {number}
	 */
    export let value;

    /**
	 * @type {any}
	 */
    let slider_element;

    // If slider then use noUiSlider module:
    if (slider) {
        onMount(() => {
            noUiSlider.create(slider_element, settings === null? {
                start: value,
                connect: true,
                step: step,
                range: {min: min, max: max}
            }: settings);
            // https://refreshless.com/nouislider/events-callbacks/
            slider_element.noUiSlider.on('change', (/** @type {number} */ values) => {
                value = values;
            });
        });
    }
</script>

<!-- 
@component
Range input component with optional noui slider implementation.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
-->
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
