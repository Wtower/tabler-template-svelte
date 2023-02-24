<script>
    import Wrapper from "../interface/wrapper.svelte";
    import Label from "./label.svelte";

    // For parameter definition see `input_group.svelte`
    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let color = null;
    export let value = null;
</script>

<Wrapper element={wrapper} class={extra_class ?? 'mb-3'}>
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
