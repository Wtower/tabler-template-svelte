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
     * The color of the progress bar.
	 * @type {string?}
	 */
    export let color = null;

    /**
     * The bound value.
	 * @type {number}
	 */
    export let value;
</script>

<!-- 
@component
Progress bar component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
-->
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <Label>
        <slot /><slot name="description" />
    </Label>
    <div class="progress">
        <div class="progress-bar {color? `bg-${color}`: ''}"
            class:progress-bar-indeterminate={value === null}
            role={value === null? null: 'progressbar'}
            style:width={`${value * 100}%`}
            aria-valuenow={value * 100}
            aria-valuemin={value === null? null: 0}
            aria-valuemax={value === null? null: 100} 
            aria-label={`${value * 100}% Complete`}>
            {#if value !== null}
                <span class="visually-hidden">{value * 100}% Complete</span>
            {/if}
        </div>
    </div>
</Wrapper>
