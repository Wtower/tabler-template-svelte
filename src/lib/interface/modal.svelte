<script>
    /**
     * The modal id.
     * @type {string}
     */
    export let id;

    /**
     * Modal size.
     * @type {'large'|'small'|'full-width'|''}
     */
    export let size = '';

    /**
     * Scrollable modal.
     * @type {boolean}
     */
    export let scrollable = false;

    /**
     * Displays a status top border.
     * @type {''|'success'|'warning'|'danger'}
     */
    export let status = '';

    /**
     * Displays the corresponding status icon.
     * @type {boolean}
     */
    export let icon = false;
</script>

<!-- 
@component
Modal component.

Slots:
- default: modal body
- title: modal title
- buttons
-->
<div class="modal modal-blur fade" {id} tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered"
        class:modal-lg={size === 'large'} 
        class:modal-sm={size === 'small'} 
        class:modal-full-width={size === 'full-width'} 
        class:modal-dialog-scrollable={scrollable}
        role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><slot name="title" /></h5>
                <button type="button" 
                    class="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close">
                </button>
            </div>
            {#if status}
                <div class="modal-status bg-{status}"></div>
            {/if}
            <div class="modal-body">
                {#if icon && status === 'success'}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
                {:else if icon && status === 'warning'}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-warning icon-lg icon-tabler icon-tabler-alert-octagon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z"></path><path d="M12 8l0 4"></path><path d="M12 16l.01 0"></path></svg>
                {:else if icon && status === 'danger'}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-danger icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v2m0 4v.01" /><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>
                {/if}
                <slot /></div>
            <div class="modal-footer">
                <slot name="buttons">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button> -->
                </slot>
            </div>
        </div>
    </div>
</div>
