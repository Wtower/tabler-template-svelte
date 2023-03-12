<script>
    import { base } from "$app/paths";
	import Checkboxes from "$lib/form/checkboxes.svelte";
	import Radios from "$lib/form/radios.svelte";
	import Badge from "$lib/interface/badge.svelte";
	import Dropdown from "$lib/interface/dropdown.svelte";
    import Empty from "$lib/interface/empty.svelte";
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/dropdowns" {...$config}>
    <span slot="h2">Dropdowns</span>
    <div class="container-xl">
        <div class="row">
            <div class="col-sm-6 col-lg-3 demo">
                <Dropdown 
                    menuItem={{menu: [[{
                        header: true,
                        title: 'Dropdown header',
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h4l3 8l4 -16l3 8h4" /></svg>`,
                        title: 'Item 1'
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>`,
                        title: 'Item 2'
                    }, {
                        slot: 'profile',
                    }, {
                        slot: 'radio',
                    }, {
                        slot: 'checkbox',
                    }, {
                        slot: 'checkbox-toggle',
                    }, {
                        divider: true,
                    }, {
                        title: 'Dropdown item 1',
                    }, {
                        title: 'Dropdown item 2',
                    }, {
                        title: 'Dropdown disabled',
                        disabled: true,
                    }, {
                        title: 'Dropdown active',
                        href: '#active',
                    }, {
                        divider: true,
                    }, {
                        icon: `<span class="avatar avatar-xs rounded me-2" style="background-image: url(https://via.placeholder.com/107x71)"></span>`,
                        title: 'Paweł Kuna',
                    }, {
                        icon: `<span class="avatar avatar-xs rounded me-2">JL</span>`,
                        title: 'Jefie Lewsey',
                    }, {
                        icon: `<span class="avatar avatar-xs rounded me-2" style="background-image: url(https://via.placeholder.com/107x71)"></span>`,
                        title: 'Mallory Hulme',
                    }, {
                        divider: true,
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>`,
                        title: 'Logout',
                    }]]}}
                    path="#active"
                    let:item>
                    <!-- https://blog.logrocket.com/comprehensive-guide-svelte-components-slots/ -->
                    {#if item === 'profile'}
                        <a href="#profile" class="text-reset">My profile</a>
                        <Checkboxes
                            name="profile-public"
                            class="m-0 ms-auto"
                            checkboxes={[{v: true, t: 'Public'}]}
                            value={[]} />
                    {:else if item === 'radio'}
                        <Radios
                            name="radio"
                            class="m-0 me-2"
                            radios={[{v: 1, t: 'Radio input'}]}
                            value={0} />
                    {:else if item === 'checkbox'}
                        <Checkboxes
                            name="checkbox"
                            class="m-0 me-2"
                            checkboxes={[{v: true, t: 'Checkbox input'}]}
                            value={[]} />
                    {:else if item === 'checkbox-toggle'}
                        <Checkboxes
                            name="checkbox-toggle"
                            class="m-0 me-2"
                            toggleSwitch
                            checkboxes={[{v: true, t: 'Checkbox input'}]}
                            value={[]} />
                    {/if}
                </Dropdown>
            </div>
            <div class="col-sm-6 col-lg-3 demo">
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {divider: true},
                    {title: 'Separated link'},
                ]]}} />
                <Dropdown path="#active" menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {title: 'Active action', href: '#active'},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {title: 'Disabled action', disabled: true},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Dropdown header', header: true},
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Dropdown header', header: true},
                    {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>`,
                        title: 'Action'
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>`,
                        title: 'Another action'
                    },
                ]]}} />
                <Dropdown arrow="start" menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
            </div>
            <div class="col-sm-6 col-lg-3 demo">
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {divider: true},
                    {title: 'Separated link'},
                ]]}} />
                <Dropdown path="#active" menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {title: 'Active action', href: '#active'},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {title: 'Disabled action', disabled: true},
                ]]}} />
                <Dropdown menuItem={{menu: [[
                    {title: 'Dropdown header', header: true},
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown menuItem={{menu: [[{
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>`,
                        title: 'Action'
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>`,
                        title: 'Another action'
                }]]}} />
                <Dropdown menuItem={{menu: [[{
                    title: 'Action',
                    badge: {color: 'primary', text: '12', marginLeftClass: 'auto'},
                }, {
                    title: 'Another action',
                    badge: {color: 'green', marginLeftClass: 'auto'},
                }]]}} />
            </div>
            <div class="col-sm-6 col-lg-3 demo">
                <Dropdown invert menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown invert menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                    {divider: true},
                    {title: 'Separated link'},
                ]]}} />
                <Dropdown invert arrow="end" menuItem={{menu: [[
                    {title: 'Action'}, 
                    {title: 'Another action'},
                ]]}} />
                <Dropdown invert arrow="end" menuItem={{menu: [[{
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>`,
                        title: 'Action'
                    }, {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>`,
                        title: 'Another action'
                }]]}} />
                <Dropdown
                    let:item
                    menuItem={{menu: [
                        [...Array(3).keys()].map(i => ({slot: `${i + 1}`}))
                    ]}}>
                    <Checkboxes 
                        name="checkbox-dropdown"
                        class="m-0 me-2"
                        checkboxes={[{v: item, t: `Option ${item}`}]}
                        value={[]} />
                </Dropdown>
                <Dropdown
                    let:item
                    menuItem={{menu: [
                        [...Array(3).keys()].map(i => ({slot: `${i + 1}`}))
                    ]}}>
                    <Radios 
                        name="radio-dropdown"
                        class="m-0 me-2"
                        radios={[{v: item, t: `Option ${item}`}]}
                        value={0} />
                </Dropdown>
                <Dropdown menuItem={{menu: [
                    [
                        'Paweł Kuna', 'Jeffie Lewzey', 'Mallory Hulme', 'Dunn Slane', 'Emmy Levet', 
                        'George Karakostas'
                    ].map(t => ({
                        icon: `<span class="avatar avatar-xs rounded me-2" style="background-image: url(https://via.placeholder.com/107x71)"></span>`,
                        title: t
                    }))
                ]}} />
            </div>
        </div>
    </div>
</Empty>

<style>
    .demo {
        position: relative;
    }
    .demo :global(.dropdown-menu) {
        display: block;
        width: 95%;
        position: relative;
        margin-bottom: 1rem !important;
    }
    :global(.dropdown-menu-column) {
        width: 100%;
    }
    :global(.dropdown-item label) {
        margin: 0;
    }
</style>