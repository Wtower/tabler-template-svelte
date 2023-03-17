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
     * Control which edit row is visible.
     * If '' then add record is shown.
     * @type {string?}
     */
    export let visible = null;

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
     * Bulk Actions definition.
     * @type {Object<string, any>?}
     */
    export let bulk = null;

    /**
     * Bulk action label.
     * @type {string}
     */
    export let bulkLabel = 'With {selected} of {total} records:';

    /**
     * Bind the limit of items per page.
     * @type {number}
     */
    export let limit = 0;

    /**
     * Provide preset limits.
     * Set to any string for 0 (all).
     * Set to null to show textbox.
     * @type {Array<number|string?>}
     */
    export let limits = [8, 25, 'All', null];
    /**
     * Bind the items to skip for next pages.
     * @type {number}
     */
    export let skip = 0;

    /**
     * The total items. If provided, it enables pagination.
     * @type {number}
     */
    export let total = 0;

    $: page = (skip ?? 0) / (limit || 1);
    $: pages = Math.ceil(total / (limit || total));
</script>

<!-- 
@component
Table component.

Slots:
- search: The search label.
- addNewRecord: The add new record label.
- default: Provide an edit form for each row.
- row: Custom slot with props to control field output.
- total: The text for total items.
- perPage: The texst for items per page.
-->

{#if search !== null || addNewRecord} 
    <div class="card-header row text-muted">
        {#if search !== null}
            <div class="py-1" 
                class:col-sm-10={addNewRecord} 
                class:col-sm-12={!addNewRecord}>
                <slot name="search">Search:</slot>
                <Text class="ms-2 mb-2 d-inline-block" size="small" bind:value={search} />
                <!-- TODO: Here add filters two slots (buttons + pop-up) Stack Overflow-style -->
    </div>
        {/if}
        {#if addNewRecord}
            <div class="text-end col-sm-2"
                class:offset-sm-10={search === null}>
                <button class="btn" on:click={() => visible = visible === ''? null: ''}>
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
    {#if visible === ''}
        <div class="p-3 ms-2 border-bottom" transition:slide>
            <slot row="" />
        </div>
    {/if}
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
                                        selected = selected.includes(row.id)? 
                                            selected.filter(i => i !== row.id): 
                                            // https://svelte.dev/tutorial/updating-arrays-and-objects
                                            [...selected, row.id];
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

{#if bulk && selected.length}
    <div class="card-footer text-muted" transition:slide>
        {bulkLabel.replace(/\{\w+\}/g, (match) => ({
                '{selected}': `${selected.length}`, 
                '{total}': `${data.length}`,
            }[match] || match))}
        {#each Object.keys(bulk) as action}
            <button class="btn btn-primary ms-1" on:click={bulk[action]}>{action}</button>
        {/each}
    </div>
{/if}

{#if total}
    <div class="card-footer d-flex">
        <ul class="pagination m-0">
            {#if page > 0}
                <li class="page-item">
                    <button class="page-link" on:click={() => skip -= limit}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                    </button>
                </li>
            {/if}
            {#each [...Array(pages).keys()] as i}
                <!-- Display if first, last or +/- 2 -->
                {#if i === 0 || i + 1 >= pages || (i < page + 3 && i > page - 3)}
                    <li class="page-item" class:active={page === i}>
                        <button class="page-link" on:click={() => skip = i * limit}>{i + 1}</button>
                    </li>
                <!-- Display ... only if previous or next are in range -->
                {:else if i - 1 < page + 3 && i + 1 > page - 3}
                    <li class="page-item"><button class="page-link disabled">...</button></li>
                {/if}
            {/each}
            {#if page + 1 < pages}
                <li class="page-item">
                    <button class="page-link" on:click={() => skip += limit}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                    </button>
                </li>
            {/if}
        </ul>
        <ul class="ms-auto mb-0 list-inline list-inline-dots">
            <li class="list-inline-item">{total} <slot name="total">items</slot></li>
            <li class="list-inline-item">
                {#each limits as i}
                    {#if i !== null}
                        <button 
                            class="per-page btn btn-sm py-1 px-2 rounded-2 me-1"
                            class:btn-primary={
                                limit === i || (limit === 0 && typeof i === 'string')
                            }
                            on:click={() => limit = typeof i === 'string'? 0: i ?? 0}>
                            {i}
                        </button>
                    {:else}
                        <Text 
                            class="w-4 d-inline-block border-primary rounded-2 {
                                limit === 0 || limits.includes(limit)? '': 'border'
                            }"
                            size="small" 
                            value={limit} 
                            on:change={(e) => limit = e.detail.target.value} />
                    {/if}
                {/each}
                <slot name="perPage">per page</slot>
            </li>
        </ul>
    </div>
{/if}

<style>
    .select-field :global(label) {
        margin: 0;
    }
    .per-page {
        margin-bottom: 1px;
    }
</style>
