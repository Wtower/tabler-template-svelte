<script>
	import Progress from "../form/progress.svelte";

    /**
     * Renders the header with light background.
     * @type {'normal'|'light'|'none'}
     */
    export let header = 'normal';

    /**
     * Renders a card as link.
     * @type {string}
     */
    export let href = '';

    /**
     * Card link effect.
     * @type {''|'rotate'|'pop'}
    */
    export let linkEffect = '';

    /**
     * Card effect.
     * @type {''|'rotate-right'|'rotate-left'|'active'|'inactive'}
     */
    export let effect = '';

    /**
     * Icon type, if content for slot icon is provided.
     * @type {'stamp'|'ribbon'|'ribbon-top'}
     */
    export let iconType = 'stamp';

    /**
     * Icon background color, if content for slot icon is provided.
     * @type {string}
     */
    export let iconBgColor = 'yellow';

    /**
     * Card background.
     * Primary is blue, primary-lt is light blue.
     * @type {''|'primary'|'primary-lt'}
     */
    export let bg = '';

    /**
     * Card status position
     * @type {''|'top'|'bottom'|'start'}
     */
    export let statusPosition = '';

    /**
     * Card status color
     * @type {'success'|'warning'|'danger'|'primary'|'primary-lt'}
     */
    export let statusColor = 'primary';

    /**
     * Progress bar value
     * @type {number?}
     */
    export let progressValue = null;

    /**
     * Progress bar color
     * @type {string?}
     */
    export let progressColor = null;

    /**
     * Card stacked effect.
     * @type {boolean}
     */
    export let stacked = false;
</script>

<!-- 
@component
Card interface component.
TODO: card with status

Slots:
- title
- subtitle
- icon: specify an icon as bg. Recommended with header = none. Can also include text.
- default: body
-->
<svelte:element 
    this={href? 'a': 'div'} 
    {href} 
    class="card" 
    class:card-link={href}
    class:card-link-rotate={href && linkEffect === 'rotate'}
    class:card-link-pop={href && linkEffect === 'pop'}
    class:card-rotate-right={!href && effect === 'rotate-right'}
    class:card-rotate-left={!href && effect === 'rotate-left'}
    class:card-active={!href && effect === 'active'}
    class:card-inactive={!href && effect === 'inactive'}
    class:card-stacked={stacked}
    class:bg-primary-lt={bg === 'primary-lt'}
    class:bg-primary={bg === 'primary'}
    class:text-primary-fg={bg === 'primary'}
    class:card-borderless={header === 'none'}>
    {#if header === 'normal' || header === 'light'}
        <div class="card-header" class:card-header-light={header === 'light'}>
            <h3 class="card-title">
                <slot name="title" /><span class="card-subtitle"><slot name="subtitle" /></span>
            </h3>
        </div>
    {/if}
    {#if $$slots.icon}
        {#if iconType === 'stamp'}
            <div class="card-stamp">
                <div class="card-stamp-icon bg-{iconBgColor}" class:text-primary={bg === 'primary'}>
                    <slot name="icon" />
                </div>
            </div>
        {:else}
            <div class="ribbon bg-{iconBgColor}" class:ribbon-top={iconType === 'ribbon-top'}>
                <slot name="icon" />
            </div>
        {/if}
    {/if}
    {#if statusPosition}
        <div class="card-status-{statusPosition} bg-{statusColor}"></div>        
    {/if}
    <div class="card-body">
        {#if header === 'none'}
            <h3 class="card-title">
                <slot name="title" /><span class="card-subtitle"><slot name="subtitle" /></span>
            </h3>
        {/if}
        <slot />
    </div>
    {#if progressValue !== null}
        <Progress wrapper="" 
            progressClass="progress-sm card-progress" 
            color={progressColor}
            value={progressValue} />
    {/if}
</svelte:element>
