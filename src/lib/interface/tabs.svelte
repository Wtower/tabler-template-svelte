<script>
	import { onMount } from "svelte";
	import Card from "./card.svelte";
	import Dropdown from "./dropdown.svelte";

    /**
     * Tab definition.
     * @type {Array.<{
     *  id: string, 
     *  title: string, 
     *  marginAuto?: 'left'|'right', 
     *  content?: string,
     *  dropDown?: any,
     *  disabled?: boolean,
     * }>}
     */
    export let tabs;

    /**
     * Reverse the output order of tabs.
     * @type {boolean}
     */
    export let reverse = false;

    /**
     * Fill the tabs row.
     * @type {boolean}
     */
    export let fill = false;

    /**
     * Tabs pill style.
     * @type {boolean}
     */
    export let pills = false;

    /**
     * Active tab id.
     * @type {string?}
     */
    export let active = null;

    onMount(() => active = tabs[0].id);

    /**
     * Handle tab click/keypress.
     * @param {{
     *  id: string, 
     *  dropDown?: any,
     *  disabled?: boolean,
     * }} tab
     * @returns {void}
     */
     function handleClick(tab) {
        if (!tab.dropDown && !tab.disabled) active = tab.id;
    }
</script>

<!-- 
@component
Tabs component.

Using slot keys to present tabs.
https://svelte.dev/docs#template-syntax-slot-slot-key-value
-->
<Card>
    <svelte:fragment slot="header">
        <ul class="nav" 
            class:nav-tabs={!pills}
            class:card-header-tabs={!pills}
            class:nav-pills={pills}
            class:card-header-pills={pills}
            class:flex-row-reverse={reverse}
            class:nav-fill={fill}>
            {#each tabs as tab, i}
                <li class="nav-item" 
                    class:ms-auto={tab.marginAuto === 'left'}
                    class:me-auto={tab.marginAuto === 'right'}
                    class:dropdown={tab.dropDown}>
                    <a href={`#${tab.id}`} 
                        class="nav-link" 
                        class:active={active === tab.id}
                        class:disabled={tab.disabled}
                        class:dropdown-toggle={tab.dropDown}
                        data-bs-toggle={tab.dropDown? 'dropdown': null}
                        role={tab.dropDown? 'button': null}
                        aria-haspopup={!!tab.dropDown}
                        aria-expanded={tab.dropDown? 'false': null}
                        on:click|preventDefault={() => {handleClick(tab)}}
                        on:keypress={() => {handleClick(tab)}}>
                        {@html tab.title}
                    </a>
                    {#if tab.dropDown}
                        <Dropdown menuItem={tab.dropDown} />
                    {/if}
                </li>
            {/each}
        </ul>
    </svelte:fragment>
    <div class="tab-content">
        {#each tabs as tab}
            <div class="tab-pane"
                class:active={active === tab.id}
                class:show={active === tab.id}
                id={tab.id}>
                <slot {tab} />
           </div>
        {/each}
    </div>
</Card>
