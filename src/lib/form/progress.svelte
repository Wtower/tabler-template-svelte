<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

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
     * Progress bar layer extra classes.
     * Mainly used for Card component.
     * @type {string}
     */
    export let progressClass = '';

    /**
     * The color of the progress bar.
	 * @type {string?}
	 */
    export let color = null;

    /**
     * The bound value.
	 * @type {number?}
	 */
    export let value = null;
</script>

<!-- 
@component
Progress bar component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    {#if $$slots.default || $$slots.description}
        <Label><slot /><slot name="description" /></Label>
    {/if}
    <div class="progress {progressClass}">
        <div class="progress-bar {color? `bg-${color}`: ''}"
            class:progress-bar-indeterminate={value === null}
            role={value === null? null: 'progressbar'}
            style:width={`${Number(value) * 100}%`}
            aria-valuenow={Number(value) * 100}
            aria-valuemin={value === null? null: 0}
            aria-valuemax={value === null? null: 100} 
            aria-label={`${Number(value) * 100}% Complete`}>
            {#if value !== null}
                <span class="visually-hidden">{value * 100}% Complete</span>
            {/if}
        </div>
    </div>
</Wrapper>
