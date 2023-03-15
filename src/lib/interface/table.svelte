<script>
    import Checkboxes from "$lib/form/checkboxes.svelte";
    import Progress from "$lib/form/progress.svelte";
    import Text from "$lib/form/text.svelte";
    import { slide } from "svelte/transition";

    /**
     * Field definition.
     * https://stackoverflow.com/questions/4215737/convert-array-to-object
     * @type {{ 
     *  [fieldId: string]: {
     *      label?: string,
     *      align?: 'left'|'center'|'right',
     *      strong?: boolean,
     *      nowrap?: boolean,
     *      type?: 'text'|'email'|'calculate'|'slot'|'progress'|'select',
     *      calculate?: {fields: Array.<string>, function: function},
     *      slot?: boolean,
     *      progress?: {fieldLabel: string, fieldValue: string, maxValue?: number},
     * }}}
     */
    export let fields;

    /** @type {any} */
    export let data;

    /**
     * Control which edit row is visible
     * @type {string}
     */
    export let visible = '';

    /**
     * Vertically align content to rows.
     * @type {boolean}
     */
    export let vcenter = true;

    /**
     * Margin around table.
     * @type {boolean}
     */
    export let noMargin = true;

    /**
     * Table size small.
     * @type {boolean}
     */
    export let small = false;

    /**
     * Borderless table.
     * @type {boolean}
     */
    export let borderless = false;

    /**
     * Striped rows.
     * @type {boolean}
     */
    export let striped = false;

    /**
     * The selected records.
     * @type {Array.<string>}
     */
    export let selected = [];

    /**
     * The select all value
     * @type {Array.<boolean>}
     */
    let selectAll = [];

    /**
     * If provided, show a search box and bind its input.
     * @type {string?}
     */
    export let search = null;

    /**
     * Display an Add new record button.
     * @type {boolean}
     */
    export let addNewRecord = false;

    /**
     * Controls the visibility of add new record form.
     * @type {boolean}
     */
    let visibleAdd = false;
</script>

<!-- 
@component
Table component.

Slots:
- search: The search label.
- addNewRecord: The add new record label.
- default: Provide an edit form for each row.
- row: Custom slot with props to control field output.
-->

{#if search !== null || addNewRecord} 
    <div class="d-flex p-3 border-bottom">
        <!-- TODO: Here add filters Django-style; define object of filters -->
        {#if search !== null}
            <div class="ms-2 py-1 text-muted">
                <slot name="search">Search:</slot>
                <Text id="" 
                    class="ms-2 d-inline-block"
                    size="small"
                    bind:value={search} />
            </div>
        {/if}
        {#if addNewRecord}
            <div class="ms-auto text-muted">
                <button class="btn" on:click={() => visibleAdd = !visibleAdd}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                    <slot name="addNewRecord">Add record</slot>
                </button>
            </div>
        {/if}
    </div>
    <!-- TODO: slot add record -->
{/if}

<div class="table-responsive">
    <table class="table" 
        class:table-vcenter={vcenter} 
        class:card-table={noMargin}
        class:table-sm={small}
        class:table-borderless={borderless}
        class:table-striped={striped}>
        <thead>
            <tr>
                {#each Object.entries(fields) as [id, f]}
                    <th {id} 
                        class:text-center={f.align === 'center'} 
                        class:text-end={f.align === 'right'}
                        class:w-1={f.label === ''}
                        class:text-nowrap={f.nowrap}
                        class:select-field={f.type === 'select'}>
                        {#if f.type === 'select'}
                            <Checkboxes 
                                name={id}
                                wrapper="" 
                                checkboxes={[{v: true, t: ''}]} 
                                on:click={() => selected = 
                                    selected.length === data.length? []: data.map(
                                    /** @param {{ id: any; }} row */ row => row.id
                                )}
                                bind:value={selectAll} />
                        {:else if f.label}
                            {f.label}
                        {:else if f.label !== ''}
                            {id}
                        {/if}
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each data as row}
                <tr id={row.id}>
                    {#each Object.entries(fields) as [id, f]}
                        <td id="{row.id}.{id}" 
                            class:text-muted={!f.strong && !f.slot}
                            class:text-center={f.align === 'center'} 
                            class:text-end={f.align === 'right'}
                            class:w-1={f.align === 'right'}
                            class:text-nowrap={f.nowrap}
                            class:select-field={f.type === 'select'}>
                            {#if f.type === 'select'}
                                <Checkboxes 
                                    name={id}
                                    wrapper=""
                                    checkboxes={[{v: row.id, t: ''}]}
                                    on:click={() => {
                                        // Handle click manually; bind not working.
                                        selected.includes(row.id)? 
                                            selected = selected.filter(i => i !== row.id): 
                                            selected.push(row.id);
                                        selectAll = [];
                                    }}
                                    value={selected} />
                            {:else if f.calculate}
                                {f.calculate.function(f.calculate.fields.reduce((a, v) => 
                                    ({...a, [v]: row[v]}), {}))}
                            {:else if f.slot}
                                <slot name="row" {row} fieldId={id} field={f} />
                            {:else if f.progress}
                                <Progress 
                                    class="progressbg" 
                                    progressClass="progressbg-progress" 
                                    color="primary-lt" 
                                    value={row[f.progress.fieldValue] / (f.progress.maxValue ?? 1)}>
                                    <span slot="progressbg">{row[f.progress.fieldLabel]}</span>
                                </Progress>
                            {:else if f.type === 'email'}
                                <a href="mailto:{row[id]}" class="text-reset">{row[id]}</a>
                            {:else}
                                {row[id]}
                            {/if}
                        </td>
                    {/each}
                </tr>
                {#if visible === row.id}
                    <tr in:slide={{delay: 300, duration: 300}} out:slide={{duration: 600}}>
                        <td colspan={Object.keys(fields).length}><slot {row} /></td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>

<style>
    .select-field :global(label) {
        margin: 0;
    }
</style>
