<script>
    import Checkboxes from "$lib/form/checkboxes.svelte";
    import Progress from "$lib/form/progress.svelte";
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
</script>

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
                                        // Handle  click manually; bind not working.
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
