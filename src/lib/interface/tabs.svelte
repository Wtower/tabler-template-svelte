<script>
	import { onMount } from "svelte";
	import Card from "./card.svelte";

    /**
     * Tab definition.
     * @type {Array.<{id: string, title: string, marginAuto?: 'left'|'right', content?: string}>}
     */
    export let tabs;

    /**
     * Active tab id.
     * @type {string?}
     */
    export let active = null;

    onMount(() => active = tabs[0].id);
</script>

<!-- 
@component
Tabs component.

Using slot keys to present tabs.
https://svelte.dev/docs#template-syntax-slot-slot-key-value
-->
<Card>
    <svelte:fragment slot="header">
        <ul class="nav nav-tabs card-header-tabs">
            {#each tabs as tab, i}
                <li class="nav-item" 
                    class:ms-auto={tab.marginAuto === 'left'}
                    class:me-auto={tab.marginAuto === 'right'}
                    on:click={() => active = tab.id}
                    on:keypress={() => active = tab.id}>
                    <a href={`#${tab.id}`} 
                        class="nav-link" 
                        class:active={active === tab.id}>
                        {@html tab.title}
                    </a>
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
