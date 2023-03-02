<script>
	import { element } from "svelte/internal";
import Progress from "../form/progress.svelte";
	import Wrapper from "./wrapper.svelte";

    /**
     * Renders a header optionally with light background.
     * @type {'normal'|'light'|'none'}
     */
    export let header = 'normal';

    /**
     * Makes the card borderless.
     * @type {boolean}
     */
    export let borderless = false;

    /**
     * Renders a card as link.
     * @type {string?}
     */
    export let href = null;

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
     * Display card body without padding.
     * @type {boolean}
     */
    export let noPadding = false;

    /**
     * Card status position
     * @type {''|'top'|'bottom'|'start'}
     */
    export let statusPosition = '';

    /**
     * Card status color
     * @type {'success'|'warning'|'danger'|'primary'|'primary-lt'|'red'|'green'|'blue'}
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

    /**
     * Card columns.
     * @type {''|'left'|'right'}
     */
    export let columns = '';

    /** 
     * Display an image on card.
     * Placement is only used if no columns are defined.
     * @type {{src: string, alt?: string, placement?: 'top'|'bottom'}?}
     */
    export let img = null;

    /**
     * Renders footer with light color.
     * @type {boolean}
     */
    export let footerLight = false;
</script>

<!-- 
@component
Card interface component.
TODO: card with columns; demo

Slots:
- title
- subtitle
- icon: specify an icon as bg. Recommended with header = none. Can also include text.
- column: if columns is specified.
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
    class:card-borderless={borderless}>
    {#if (header === 'normal' || header === 'light') && ($$slots.title || $$slots.subtitle)}
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
    {#if !columns && img && img.placement === 'top'}
        <div class="img-responsive img-responsive-21x9 card-img-top" 
            style:background-image="url({img.src})">
        </div>
    {/if}
    <Wrapper element={columns? 'div': ''} class="row row-0">
        {#if columns}
            <div class="col-3" class:order-md-last={columns === 'right'}>
                {#if img}
                    <img src={img.src} 
                        alt={img.alt} 
                        class="w-100 h-100 object-cover"
                        class:card-img-start={columns === 'left'}
                        class:card-img-end={columns === 'right'} />
                {/if}
                <slot name="column" />
            </div>
        {/if}
        <Wrapper element={columns? 'div': ''} class="col">
            <div class="card-body" class:p-0={noPadding}>
                {#if header === 'none' && ($$slots.title || $$slots.subtitle)}
                    <h3 class="card-title">
                        <slot name="title" /><span class="card-subtitle"><slot name="subtitle" /></span>
                    </h3>
                {/if}
                <slot />
            </div>
        </Wrapper>
    </Wrapper>
    {#if $$slots.footer}
        <div class="card-footer" class:card-footer-transparent={footerLight}>
            <slot name="footer" />
        </div>
    {/if}
    {#if !columns && img && img.placement === 'bottom'}
        <div class="img-responsive img-responsive-21x9 card-img-bottom" 
            style:background-image="url({img.src})">
        </div>
    {/if}
    {#if progressValue !== null}
        <Progress wrapper="" 
            progressClass="progress-sm card-progress" 
            color={progressColor}
            value={progressValue} />
    {/if}
</svelte:element>
