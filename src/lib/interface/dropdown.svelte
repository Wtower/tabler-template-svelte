<script>
    import { link } from 'svelte-routing';
    import Badge from "./badge.svelte";

    export let path = '';
    export let menu_item;
    export let arrow = ''; // Draws an arrow pointing up at `start` or `end` corner.
    export let invert = false; // Inverted colors.
</script>

<div class="dropdown-menu"
    class:dropdown-menu-arrow={arrow}
    class:dropdown-menu-end={arrow === 'end'}
    class:bg-dark={invert}
    class:text-white={invert}>
    <div class="dropdown-menu-columns">
        {#each menu_item.menu as column}
            <div class="dropdown-menu-column">
                {#each column as column_item}
                    {#if column_item.header}
                        <h6 class="dropdown-header">{column_item.title}</h6>
                    {:else if column_item.divider}
                       <div class="dropdown-divider"></div>
                    {:else if column_item.menu}
                        <div class="dropend">
                            <a class="dropdown-item dropdown-toggle" 
                                class:active={path === column_item.href}
                                class:disabled={column_item.disabled}
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                role="button"
                                aria-expanded="false"
                                href={column_item.href ?? '#navbar-base'}
                                use:link>
                                {#if column_item.icon}
                                    {@html column_item.icon}
                                {/if}
                                {#if column_item.title}
                                    {column_item.title}
                                {/if}
                                {#if column_item.badge}
                                    <Badge 
                                        bg_color={column_item.badge.color}
                                        margin_left_class="2"
                                        text_uppercase
                                        small>
                                        {column_item.badge.text}
                                    </Badge>
                                {/if}
                            </a>
                            <svelte:self menu_item={column_item} {path} />
                        </div>
                    {:else}
                        <a class="dropdown-item" 
                            class:active={path === column_item.href}
                            class:disabled={column_item.disabled}
                            href={column_item.href ?? '#navbar-base'}
                            use:link>
                            {#if column_item.icon}
                                {@html column_item.icon}&nbsp;
                            {/if}
                            {#if column_item.title}
                                {column_item.title}
                            {/if}
                            {#if column_item.badge}
                                <Badge 
                                    bg_color={column_item.badge.color}
                                    margin_left_class="2"
                                    text_uppercase
                                    small>
                                    {column_item.badge.text}
                                </Badge>
                            {/if}
                        </a>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>
