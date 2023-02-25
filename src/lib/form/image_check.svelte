<script>
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
     * The name of the group.
	 * @type {string}
	 */
    export let name;

    /**
     * Whether a value is required. It outputs a * on label.
     * @type {boolean}
     */
    export let required = false;

    /**
     * The type of the image check.
     * @type {'checkbox'|'radio'}
     */
    export let type = 'checkbox';

    /**
     * Whether the image is a solid color.
     * @type {boolean|null|'rounded'}
     */
    export let color_check = null;

    /**
     * The bound value.
	 * @type {string|number|Array.<string|number>}
	 */
    export let value;

    /**
     * Define the images.
	 * @type {Array.<{v: any, img: any, disabled?: boolean, alt?: string}>}
	 */
    export let images;
</script>

<!-- 
@component
Image checkbox/radios form component.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
-->
<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class="row g-2">
        {#each images as image}
            <div class:col-6={!color_check}
                class:col-sm-4={!color_check}
                class:col-auto={!!color_check}>
                <label class:form-imagecheck={!color_check} 
                    class:mb-2={!color_check} 
                    class:form-colorinput={!!color_check}
                    class:form-colorinput-light={!!color_check && 
                        Object.values(image)[1] === 'white'}>
                    {#if type === 'checkbox' && !color_check}
                        <input type="checkbox" 
                            class="form-imagecheck-input" 
                            {name}
                            bind:group={value}
                            value={Object.values(image)[0]}
                            checked={
                                Array.isArray(value) && value.includes(Object.values(image)[0])
                            }
                            disabled={image.disabled}>
                    {:else}
                        <input type="radio" 
                            class:form-imagecheck-input={!color_check}
                            class:form-colorinput-input={!!color_check}
                            {name}
                            bind:group={value}
                            value={Object.values(image)[0]}
                            checked={value == Object.values(image)[0]}
                            disabled={image.disabled}>
                    {/if}
                    <span class={!!color_check? `bg-${Object.values(image)[1]}`: ''}
                        class:form-imagecheck-figure={!color_check}
                        class:form-colorinput-color={!!color_check}
                        class:rounded-circle={color_check === 'rounded'}>
                        {#if !color_check}
                            <img src={Object.values(image)[1]} 
                                alt={image.alt} 
                                class="form-imagecheck-image" />
                        {/if}
                    </span>
                </label>
            </div>
        {/each}
    </div>
</Wrapper>
