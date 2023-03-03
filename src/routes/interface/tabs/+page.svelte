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
                <Tabs tabs={[
                    {id: 'home-7', title: 'Home', content: 'Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed facilisis lacus pellentesque purus nibh'},
                    {id: 'profile-7', title: 'Profile', content: 'Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet, pellentesque id egestas velit sed'},
                    {id: 'settings-7', marginAuto: 'left', 
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>',
                        content: 'Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris accumsan nibh habitant senectus',
                    }]}
                    let:tab>
                    <!-- {#if id === 'home-7'}{/if} -->
                    <h4>{@html tab.title} tab</h4>
                    <div>{tab.content}</div>
                </Tabs>
            </div>

        </div>
    </div>
</Empty>
