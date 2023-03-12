<script>
    import Badge from "./badge.svelte";

    /**
     * The current path.
     * @type {string}
     */
    export let path = '';

    /**
     * The menu item.
	 * @type {{ 
     *  menu: Array.<Array.<{
     *      header?: boolean,
     *      disabled?: boolean,
     *      slot?: string,
     *      href?: string, 
     *      title?: string, 
     *      icon?: string, 
     *      badge?: {color?: 'primary'|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|'orange'|'yellow'|'lime'|'green'|'teal'|'cyan', text?: string, marginLeftClass?: '1'|'2'|'3'|'4'|'5'|'auto'},
     *      divider?: boolean,
     *      menu?: Array.<{
     *          href?: string, 
     *          title?: string, 
     *          icon?: string, 
     *          badge?: {color?: 'primary'|'blue'|'azure'|'indigo'|'purple'|'pink'|'red'|'orange'|'yellow'|'lime'|'green'|'teal'|'cyan', text?: string, marginLeftClass?: '1'|'2'|'3'|'4'|'5'|'auto'},
     *          divider?: boolean,
     *      }>
     * }>>}}
	 */
    export let menuItem;

    /**
     * Draws an arrow pointing up at `start` or `end` corner.
     * @type {''|'start'|'end'}
     */
    export let arrow = '';

    /**
     * Inverted colors.
     * @type {boolean}
     */
    export let invert = false;
</script>

<!-- 
@component
Dropdown menu component.
-->
<div class="dropdown-menu"
    class:dropdown-menu-arrow={!!arrow}
    class:dropdown-menu-end={arrow === 'end'}
    class:bg-dark={invert}
    class:text-white={invert}>
    <div class="dropdown-menu-columns">
        {#each menuItem.menu as column}
            <div class="dropdown-menu-column">
                {#each column as columnItem}
                    {#if columnItem.header}
                        <h6 class="dropdown-header">{columnItem.title}</h6>
                    {:else if columnItem.divider}
                       <div class="dropdown-divider"></div>
                    {:else if columnItem.menu}
                        <div class="dropend">
                            <a class="dropdown-item dropdown-toggle" 
                                class:active={path === columnItem.href}
                                class:disabled={columnItem.disabled}
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                role="button"
                                aria-expanded="false"
                                href={columnItem.href ?? '#navbar-base'}>
                                {#if columnItem.icon}
                                    {@html columnItem.icon}
                                {/if}
                                {#if columnItem.title}
                                    {columnItem.title}
                                {/if}
                                {#if columnItem.badge}
                                    <Badge 
                                        bgColor={columnItem.badge.color}
                                        marginLeftClass="{columnItem.badge.marginLeftClass ?? '2'}"
                                        textUppercase
                                        small>
                                        {columnItem.badge.text ?? ''}
                                    </Badge>
                                {/if}
                            </a>
                            <svelte:self menuItem={columnItem} {path} />
                        </div>
                    {:else}
                        {#if columnItem.slot}
                            <div class="dropdown-item"><slot item={columnItem.slot}/></div>
                        {:else}
                            <a class="dropdown-item" 
                                class:active={path === columnItem.href}
                                class:disabled={columnItem.disabled}
                                href={columnItem.href ?? '#navbar-base'}>
                                {#if columnItem.icon}
                                    {@html columnItem.icon}&nbsp;
                                {/if}
                                {#if columnItem.title}
                                    {columnItem.title}
                                {/if}
                                {#if columnItem.badge}
                                    <Badge 
                                        bgColor={columnItem.badge.color}
                                        marginLeftClass="{columnItem.badge.marginLeftClass ?? '2'}"
                                        textUppercase
                                        small>
                                        {columnItem.badge.text ?? ''}
                                    </Badge>
                                {/if}
                            </a>
                        {/if}
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>
