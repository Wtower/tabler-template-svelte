<script>
    import InputGroup from "./input_group.svelte";
    import Select from "./select.svelte";

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
     * The input id and the associated label.
     * @type {string} 
     */
    export let id;

    /**
     * Extra flat class for the input group.
     * @type {boolean}
     */
    export let flat = false;

    /**
     * Whether a value is required. It outputs a * on label and executes validation.
     * @type {boolean}
     */
    export let required = false;

    /**
     * Whether the select boxes are disabled.
     * @type {boolean}
     */
    export let disabled = false;

    /** 
     * The select box border. If non provided then it uses default.
     * @type {'rounded'|'none'|null} 
     */
    export let border = null;

    /**
     * Whether to display a red/green border if valid/invalid.
     * @type {boolean}
     */
    export let validationLite = false;

    /**
     * The date format.
     * @type {'dmy'|'mdy'|'ymd'}
     */
    export let format = 'dmy';

    /**
     * The number of columns for each selectbox to a total sum of 12.
     * @type {[number, number, number]}
     */
    export let columns = [3, 5, 4];

    /**
     * The placeholder options.
     * @type {[string, string, string]}
     */
    export let placeholders = ['Day', 'Month', 'Year'];

    /**
     * The month names.
     * @type {Array<string>}
     */
    export let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];

    /**
     * The maxiumum year to present as an option.
     * @type {number}
     */
    export let maxYear = new Date().getFullYear();

    /**
     * The minimum year to present as an option.
     * @type {number}
     */
    export let minYear = maxYear - 100;

    /**
     * Bound value.
     * @type {Date}
     */
    export let value = new Date();

    /**
     * The values object.
     * @type {{d: number, m: number, y: number}}
     */
    let values = {d: value.getDate(), m: value.getMonth() + 1, y: value.getFullYear()};

    /**
     * Bind the maximum number of days in month.
     * @type {number}
     */
    $: month_length = 
        [1, 3, 5, 7, 8, 10, 12].includes(values.m)? 31:
        [4, 6, 9, 11].includes(values.m)? 30:
        values.y % 4 == 0? 29: 28;

    /**
     * Construct an array [0...length] and map into object with days/months/years
     * https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
     * https://stackoverflow.com/questions/58120940/javascript-create-array-of-objects-of-length-n
     * type {{
     *  d: Array<{v: number, d: number}>, 
     *  m: Array<{v: number, m: string}>, 
     *  y: Array<{v: number, y: number}>
     * }}
     */
    $: options = {
        d: [...Array(month_length).keys()].map(i => ({v: i + 1, d: i + 1})),
        m: [...Array(12).keys()].map(i => ({v: i + 1, m: months[i]})),
        y: [...Array(maxYear - minYear).keys()].map(i => ({v: maxYear - i, y: maxYear - i})),
    };
    $: value = new Date(values.y, values.m - 1, values.d);

    /**
     * Whether the user has changed the field.
     * Exported in case the parent wants to check upon.
     * @type {boolean}
     */
    export let isTouched = false;

    /**
     * Check that the field is valid, only if touched and required.
     * Validation classes not added to control because it changes all text to green/red.
	 * @type {boolean?}
	 */
    export let isValid = null;
    $: isValid = !isTouched || !required? null: !!value;
</script>

<!-- 
@component
Display a set of select boxes to specify a date.

Slots:
- default: The field label.
- description: Extra right-aligned label description.
- feedback: Text to display if validation error.
-->
<InputGroup {wrapper} class={extraClass} {required} {flat}>
    {#if $$slots.default}
        <slot />
    {/if}
    {#if $$slots.description}
        <slot name="description" />
    {/if}
    <div slot="static">
        <div class="row g-2">
            {#each format.split('') as item, i}
                <Select id={`${id}-${item}`}
                    class={`col-${columns[i]}`}
                    placeholder={placeholders[i]}
                    {disabled}
                    {border}
                    validationLite={validationLite}
                    options={options[item]}
                    on:blur|once={() => isTouched = true}
                    bind:value={values[item]} />
            {/each}
        </div>
        {#if $$slots.feedback && isValid === false}
            <div class="invalid-feedback"><slot name="feedback" /></div>
        {/if}
    </div>
</InputGroup>
