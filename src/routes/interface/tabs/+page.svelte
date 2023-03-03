<script>
    import { base } from '$app/paths';
	import Empty from "$lib/interface/empty.svelte";
	import Tabs from '$lib/interface/tabs.svelte';
    import { config } from "$stores/config";
</script>

<Empty path="{base}/interface/tabs" {...$config}>
    <span slot="h2">Tabs</span>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-7', 
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-7', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'settings-7', 
                        marginAuto: 'left', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    let:tab>
                    <!-- {#if id === 'home-7'}{/if} -->
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-8', 
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-8', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'settings-8', 
                        marginAuto: 'right', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    reverse
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-9',
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg> Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-9', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg> Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed',
                    }]}
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-10',
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-10', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed',
                    }, {
                        id: 'dropdown-10',
                        title: 'Dropdown',
                        dropDown: {menu: [[
                            {title: 'Action'}, 
                            {title: 'Another action'},
                        ]]},
                    }]}
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-11', 
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-11', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'activity-11', 
                        title: 'Activity',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    fill
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-12', 
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-12', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'activity-12', 
                        title: 'Disabled',
                        disabled: true,
                    }]}
                    fill
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-13', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg> Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-13', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg> Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'activity-13', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h4l3 8l4 -16l3 8h4" /></svg> Activity',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    fill
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>
            <div class="col-md-4">
                <Tabs tabs={[{
                        id: 'home-14', 
                        title: 'Home', 
                        content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'
                    }, {
                        id: 'profile-14', 
                        title: 'Profile', 
                        content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'
                    }, {
                        id: 'activity-14', 
                        title: 'Activity',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    let:tab>
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>

        </div>
    </div>
</Empty>
