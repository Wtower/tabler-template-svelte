<script>
    import { base } from '$app/paths';
	import Checkboxes from '$lib/form/checkboxes.svelte';
	import Label from '$lib/form/label.svelte';
	import Select from '$lib/form/select.svelte';
	import Text from '$lib/form/text.svelte';
	import Card from '$lib/interface/card.svelte';
	import Empty from "$lib/interface/empty.svelte";
	import Tabs from '$lib/interface/tabs.svelte';
    import { config } from "$stores/config";

    /** @type {Array.<{title: string, color: 'red'|'green'|'blue'}>} */
    const cards = [ 
        {title: 'First', color: 'red'},
        {title: 'Second', color: 'green'},
        {title: 'Third', color: 'blue'},
    ];
</script>

<Empty path="{base}/interface/cards" {...$config}>
    <span slot="h2">Cards</span>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-md-6 col-lg-3">
                <Card>
                    <span slot="title">Card title</span>
                    Simple card
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="light">
                    <span slot="title">Card title</span>
                    Card with header background
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none" borderless>
                    <span slot="title">Card title</span>
                    <div>Card without border</div>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card>
                    <span slot="title">Card title</span>
                    <span slot="subtitle">Subtitle</span>
                    Card with title and subtitle
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card">Default hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card" linkEffect="rotate">Rotate hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card href="#card" linkEffect="pop">Pop hover effect</Card>
            </div>
            <div class="col-md-6 col-lg-3"></div>
            <div class="col-md-6 col-lg-3">
                <Card effect="rotate-right">Card rotate right</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card effect="rotate-left">Card rotate left</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card effect="active">This is a card with active state.</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card effect="inactive">This is some text inactive state.</Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card iconType="stamp" header="none">
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                    </svelte:fragment>
                    <span slot="title">Card with icon bg</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, 
                        modi nostrum recusandae reiciendis saepe.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card bg="primary-lt" header="none">
                    <span slot="title">Card with primary light background</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, 
                        modi nostrum recusandae reiciendis saepe.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card bg="primary" iconType="stamp" iconBgColor="white" header="none">
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </svelte:fragment>
                    <span slot="title">Card with background and icon</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, 
                        modi nostrum recusandae reiciendis saepe.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card statusPosition="top" statusColor="danger" header="none">
                    <span slot="title">Card with top status</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card statusPosition="bottom" statusColor="success" header="none">
                    <span slot="title">Card with bottom status</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card statusPosition="start" header="none">
                    <span slot="title">Card with side status</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card iconType="ribbon-top" iconBgColor="yellow" header="none">
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </svelte:fragment>
                    <span slot="title">Card with top ribbon</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, 
                        modi nostrum recusandae reiciendis saepe.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card iconType="ribbon" iconBgColor="red" header="none">
                    <svelte:fragment slot="icon">NEW</svelte:fragment>
                    <span slot="title">Card with text ribbon</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, 
                        modi nostrum recusandae reiciendis saepe.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card progressValue={0.38} header="none">
                    <span slot="title">Card with progress bar</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card stacked header="none">
                    <span slot="title">Stacked card</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-lg-6">
                <Card columns="left" header="none" img={{
                    src: 'https://via.placeholder.com/137x152', 
                    alt: 'column'
                }}>
                    <span slot="title">Card with left side image</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-lg-6">
                <Card columns="right" header="none" img={{
                    src: 'https://via.placeholder.com/137x152', 
                    alt: 'column'
                }}>
                    <span slot="title">Card with right side image</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none" img={{
                    src: 'https://via.placeholder.com/266x114', 
                    placement: 'top'
                }}>
                    <span slot="title">Card with top image</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none" img={{
                    src: 'https://via.placeholder.com/266x114', 
                    placement: 'bottom'
                }}>
                    <span slot="title">Card with bottom image</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <span slot="title">Card with footer</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <span slot="footer">This is a standard card footer.</span>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none" footerLight>
                    <span slot="title">Card with transparent footer</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <span slot="footer">This is a transparent card footer.</span>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <span slot="title">Card with footer button</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <span slot="footer">
                        <a href="#go" class="btn btn-primary">Go somewhere</a>
                    </span>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <span slot="title">Card with footer buttons</span>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <div slot="footer">
                        <div class="d-flex">
                            <a href="#cancel" class="btn btn-link">Cancel</a>
                            <a href="#go" class="btn btn-primary ms-auto">Go somewhere</a>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <div slot="footer">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <a href="#more">More information</a>
                            </div>
                            <div class="col-auto ms-auto">
                                <Checkboxes 
                                    name="more-info"
                                    class="mb-0"
                                    toggleSwitch 
                                    checkboxes={[{v: true, t: ''}]} 
                                    value={[true]} />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col-md-6 col-lg-3">
                <Card header="none">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aperiam deleniti fugit incidunt, iste, itaque minima
                        neque pariatur perferendis sed suscipit velit vitae voluptatem.
                    </p>
                    <div slot="footer">
                        <div class="row align-items-center">
                            <div class="col-auto ms-auto">
                                <div class="avatar-list avatar-list-stacked">
                                    {#each [...Array(5).keys()] as _}
                                        <span class="avatar avatar-sm rounded" 
                                            style:background-image="url(https://via.placeholder.com/32x32)">
                                        </span>
                                    {/each}
                                    <span class="avatar avatar-sm rounded">+3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col-md-6 col-lg-4">
                <Tabs tabs={[{
                        id: 'tab-1-1',
                        title: 'Active',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.',
                    }, {
                        id: 'tab-1-2',
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon nav-link-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg> Link',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.',
                    }, {
                        id: 'tab-1-3',
                        title: 'Disabled',
                        disabled: true,
                    }, {
                        id: 'tab-1-4',
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>',
                        marginAuto: 'left',
                        content: '',
                    }]} 
                    let:tab>
                    <p class="text-muted">{tab.content}</p>
                </Tabs>
            </div>
            <div class="col-md-6 col-lg-4">
                <Tabs tabs={[{
                        id: 'tab-2-1',
                        title: 'Active',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.',
                    }, {
                        id: 'tab-2-2',
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon nav-link-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg> Link',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.',
                    }, {
                        id: 'tab-2-3',
                        title: 'Disabled',
                        disabled: true,
                    }, {
                        id: 'tab-2-4',
                        title: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>',
                        marginAuto: 'left',
                        content: '',
                    }]} 
                    pills
                    let:tab>
                    <p class="text-muted">{tab.content}</p>
                </Tabs>
            </div>
            <!-- TODO: Missing a card with cards as tabs. -->
            <!-- This could be implemented with adding a boolean variable in Cards to output 
                card-tabs instead of card, and add a tabs slot inside cards (these tabs don't 
                want to be in header). -->
            <div class="col-12">
                <Card>
                    <span slot="title">Cards inside card</span>
                    <div class="row row-cards">
                        {#each cards as card}
                            <div class="col-md">
                                <Card statusPosition="top" statusColor={card.color} noPadding>
                                    <span slot="title">{card.title}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                                        <line x1="0" y1="0" x2="400" y2="200"></line>
                                        <line x1="0" y1="200" x2="400" y2="0"></line>
                                    </svg>
                                </Card>
                            </div>
                        {/each}
                    </div>
                </Card>
            </div>
            <div class="col-12">
                <div class="card-group">
                    {#each cards as card}
                        <Card noPadding>
                            <span slot="title">{card.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
                                <line x1="0" y1="0" x2="400" y2="200"></line>
                                <line x1="0" y1="200" x2="400" y2="0"></line>
                            </svg>
                        </Card>
                    {/each}
                </div>
            </div>
            <div class="col-12">
                <div class="row row-cards row-deck">
                    <div class="col">
                        <Card>
                            <span slot="title">Card title</span>
                            This is a wider card with supporting text below as a natural lead-in 
                            to additional content. This content is a little bit longer.
                            <span slot="footer">Last updated 3 mins ago</span>
                        </Card>
                    </div>
                    <div class="col">
                        <Card>
                            <span slot="title">Card title</span>
                            This card has supporting text below as a natural lead-in to additional 
                            content.
                            <span slot="footer">Last updated 3 mins ago</span>
                        </Card>
                    </div>
                    <div class="col">
                        <Card>
                            <span slot="title">Card title</span>
                            This is a wider card with supporting text below as a natural lead-in to 
                            additional content. This card has even longer content than the first to 
                            show that equal height action.
                            <span slot="footer">Last updated 3 mins ago</span>
                        </Card>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <Card>
                    <div class="empty">
                        <div class="empty-img">
                            <img src="https://via.placeholder.com/187x128" height="128" alt="">
                        </div>
                        <p class="empty-title">No results found</p>
                        <p class="empty-subtitle text-muted">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <div class="empty-action">
                            <a href="./." class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                                Search again
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col-lg-4">
                <Card>
                    <Text id="credit_card"
                        placeholder="0000 0000 0000 0000"
                        maxlength={19}
                        validationRegex={/^(\d{4}\s){3}\d{4}$/}
                        autocomplete="off"
                        value="">
                        Card number
                    </Text>
                    <Text id="credit_card_name" autocomplete="off" value="">Card name</Text>
                    <div class="row">
                        <div class="col-8">
                            <div class="mb-3">
                                <Label>Expiration date</Label>
                                <div class="row g-2">
                                    <Select id="credit_card_month"
                                        class="col"
                                        options={[...Array(12).keys()].map(i => ({
                                            v: i + 1, t: i + 1
                                        }))}
                                        value={1} />
                                    <Select id="credit_card_year"
                                        class="col"
                                        options={[...Array(10).keys()].map(i => ({
                                            v: i + new Date().getFullYear(), 
                                            t: i + new Date().getFullYear()
                                        }))}
                                        value={new Date().getFullYear()} />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <Text id="credit_card_cvv"
                                maxlength={3}
                                validationRegex={/^\d{3}$/}
                                autocomplete="off"
                                value="">
                                CVV
                            </Text>
                        </div>
                    </div>
                    <div class="mt-2">
                        <a href="#pay" class="btn btn-primary w-100">Pay now</a>
                    </div>
                  </Card>
            </div>

        </div>
    </div>
</Empty>
