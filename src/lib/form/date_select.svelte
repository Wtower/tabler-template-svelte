<script>
    import InputGroup from "./input_group.svelte";
    import Select from "./select.svelte";

    let extra_class = null;
    export { extra_class as class };
    export let wrapper = 'div';
    export let id;
    export let flat = false;
    export let required = false;
    export let disabled = false;
    export let border = null; // 'rounded'|'none'
    export let validation_lite = false;

    export let format = 'dmy';
    export let columns = [3, 5, 4];
    export let placeholders = ['Day', 'Month', 'Year'];
    export let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];
    export let max_year = new Date().getFullYear();
    export let min_year = max_year - 100;

    export let value = new Date();
    let values = {d: value.getDate(), m: value.getMonth() + 1, y: value.getFullYear()};
    $: month_length = 
        [1, 3, 5, 7, 8, 10, 12].includes(values.m)? 31:
        [4, 6, 9, 11].includes(values.m)? 30:
        values.y % 4 == 0? 29: 28;
    // Construct an array [0...length] and map into object with days/months/years
    // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
    // https://stackoverflow.com/questions/58120940/javascript-create-array-of-objects-of-length-n
    $: options = {
        d: [...Array(month_length).keys()].map(i => ({v: i + 1, d: i + 1})),
        m: [...Array(12).keys()].map(i => ({v: i + 1, m: months[i]})),
        y: [...Array(max_year - min_year).keys()].map(i => ({v: max_year - i, y: max_year - i})),
    };
    $: value = new Date(values.y, values.m - 1, values.d);

    export let is_touched = false;
    export let is_valid = null;
    $: is_valid = !is_touched || !required? null: !!value;
</script>

<InputGroup {wrapper} class={extra_class} {required} {flat}>
    <slot />
    <slot name="description" />
    <div slot="static">
        <div class="row g-2">
            {#each format.split('') as item, i}
                <Select id={`${id}-${item}`}
                    class={`col-${columns[i]}`}
                    placeholder={placeholders[i]}
                    {disabled}
                    {border}
                    {validation_lite}
                    options={options[item]}
                    on:input|once={() => {is_touched = true}}
                    bind:value={values[item]} />
            {/each}
        </div>
        {#if $$slots.feedback && is_valid === false}
            <div class="invalid-feedback"><slot name="feedback" /></div>
        {/if}
    </div>
</InputGroup>
