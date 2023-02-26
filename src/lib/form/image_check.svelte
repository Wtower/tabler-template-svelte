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
    export let colorCheck = null;

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
<Wrapper element={wrapper} class={extraClass ?? 'mb-3'}>
    <Label {required}>
        <slot /><slot name="description" />
    </Label>
    <div class="row g-2">
        {#each images as image}
            <div class:col-6={!colorCheck}
                class:col-sm-4={!colorCheck}
                class:col-auto={!!colorCheck}>
                <label class:form-imagecheck={!colorCheck} 
                    class:mb-2={!colorCheck} 
                    class:form-colorinput={!!colorCheck}
                    class:form-colorinput-light={!!colorCheck && 
                        Object.values(image)[1] === 'white'}>
                    {#if type === 'checkbox' && !colorCheck}
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
                            class:form-imagecheck-input={!colorCheck}
                            class:form-colorinput-input={!!colorCheck}
                            {name}
                            bind:group={value}
                            value={Object.values(image)[0]}
                            checked={value == Object.values(image)[0]}
                            disabled={image.disabled}>
                    {/if}
                    <span class={!!colorCheck? `bg-${Object.values(image)[1]}`: ''}
                        class:form-imagecheck-figure={!colorCheck}
                        class:form-colorinput-color={!!colorCheck}
                        class:rounded-circle={colorCheck === 'rounded'}>
                        {#if !colorCheck}
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
