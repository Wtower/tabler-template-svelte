<script>
	import Card from "./card.svelte";

    /**
     * Tab definition.
     * @type {Array.<{id: string, title: string, marginAuto?: 'left'|'right'}>}
     */
    export let tabs;

    /**
     * Active tab id.
     * @type {string?}
     */
    export let active = null;
</script>

<Card>
    <svelte:fragment slot="header">
        <ul class="nav nav-tabs card-header-tabs">
            {#each tabs as tab, i}
                <li class="nav-item" 
                    class:ms-auto={tab.marginAuto === 'left'}
                    class:me-auto={tab.marginAuto === 'right'}>
                    <a href={`#${tab.id}`} 
                        class="nav-link" 
                        class:active={active? tab.id === active: i === 0}>
                        {@html tab.title}
                    </a>
                </li>
            {/each}
        </ul>
    </svelte:fragment>
    <div class="tab-content">
        {#each tabs as tab}
            <slot id={tab.id} />
        {/each}
    </div>
</Card>
